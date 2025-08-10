import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

const obituariesData = [
  { id: 1, name: 'Juan Carlos Pérez', birthDate: '1945-03-15', deathDate: '2025-08-05', location: 'Concepción', type: 'Velatorio', ceremony: { date: '2025-08-06', time: '10:00', location: 'Sala Velatoria "La Piedad"' }, photo: true, summary: 'Un amado padre, abuelo y amigo. Su pasión por la jardinería y su alegría serán recordadas siempre.', status: 'ongoing' },
  { id: 2, name: 'Maria Elena Gómez', birthDate: '1952-07-21', deathDate: '2025-08-04', location: 'Aguilares', type: 'Sepelio', ceremony: { date: '2025-08-05', time: '14:30', location: 'Cementerio Municipal de Aguilares' }, photo: false, summary: 'Dedicó su vida a la enseñanza, dejando una huella imborrable en generaciones de estudiantes.', status: 'ongoing' },
  { id: 3, name: 'Roberto Sosa', birthDate: '1960-01-10', deathDate: '2025-07-20', location: 'San Miguel de Tucumán', type: 'Cremación', ceremony: { date: '2025-07-21', time: '11:00', location: 'Crematorio del Jardín' }, photo: true, summary: 'Arquitecto de profesión, su visión transformó el paisaje de nuestra ciudad. Un hombre de gran intelecto y corazón.', status: 'finished' },
  { id: 4, name: 'Ana María Rodríguez', birthDate: '1938-11-02', deathDate: '2025-06-15', location: 'Concepción', type: 'Sepelio', ceremony: { date: '2025-06-16', time: '09:00', location: 'Cementerio Parque de la Paz' }, photo: true, summary: 'Conocida por su inmensa generosidad y su amor por los animales. Su sonrisa iluminaba cada rincón.', status: 'finished' },
];

const SendCondolencesForm = ({ deceasedName }) => {
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Condolencias Enviadas",
            description: "Su mensaje ha sido enviado para moderación. Gracias por su apoyo.",
            variant: "success",
        });
        document.getElementById(`closeDialog-${deceasedName.replace(/\s/g, '-')}`)?.click();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">Enviar Condolencias</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Enviar Condolencias a la familia de {deceasedName}</DialogTitle>
                    <DialogDescription>
                        Su mensaje será revisado por nuestro equipo antes de ser publicado. Agradecemos su respeto y comprensión.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Nombre</Label>
                            <Input id="name" required className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="message" className="text-right">Mensaje</Label>
                            <Textarea id="message" required className="col-span-3" />
                        </div>
                    </div>
                     <DialogClose asChild>
                         <Button type="submit" className="w-full">Enviar Mensaje</Button>
                    </DialogClose>
                </form>
                 <DialogClose asChild id={`closeDialog-${deceasedName.replace(/\s/g, '-')}`}><button className="hidden">Close</button></DialogClose>
            </DialogContent>
        </Dialog>
    );
};

const ObituaryCard = ({ obituary }) => {
    const { name, birthDate, deathDate, location, type, ceremony, photo, summary } = obituary;
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-start gap-4">
                    {photo && <img  className="h-24 w-24 rounded-full object-cover border-2 border-slate-200" alt={`Foto de ${name}`} src="https://images.unsplash.com/photo-1693873755080-bf44070b7474" />}
                    <div className="flex-1">
                        <CardTitle className="text-2xl text-slate-800">{name}</CardTitle>
                        <CardDescription className="text-base text-slate-500">{new Date(birthDate).getFullYear()} - {new Date(deathDate).getFullYear()}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <p className="text-slate-600 italic">"{summary}"</p>
                <div>
                    <p><strong>Servicio:</strong> {type} en {location}</p>
                    <p><strong>Ceremonia:</strong> {format(new Date(ceremony.date), "dd/MM/yyyy")} a las {ceremony.time} hs.</p>
                    <p><strong>Lugar:</strong> {ceremony.location}</p>
                </div>
            </CardContent>
            <CardFooter>
                <SendCondolencesForm deceasedName={name} />
            </CardFooter>
        </Card>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button variant="outline" size="icon" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-sm font-medium">Página {currentPage} de {totalPages}</span>
      <Button variant="outline" size="icon" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};


const ObituariesPortal = () => {
    const { toast } = useToast();
    const [activeTab, setActiveTab] = useState("current");
    const [currentFilter, setCurrentFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState(null);
    const [archiveFilter, setArchiveFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const locations = ["all", ...new Set(obituariesData.map(o => o.location))];

    const ongoingServices = useMemo(() => {
        return obituariesData
            .filter(o => o.status === 'ongoing')
            .filter(o => currentFilter === 'all' || o.location === currentFilter);
    }, [currentFilter]);

    const finishedServices = useMemo(() => {
        return obituariesData
            .filter(o => o.status === 'finished')
            .filter(o => o.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .filter(o => archiveFilter === 'all' || o.location === archiveFilter)
            .filter(o => {
                if (!dateRange) return true;
                const deathDateObj = new Date(o.deathDate);
                const from = dateRange.from ? new Date(dateRange.from) : null;
                const to = dateRange.to ? new Date(dateRange.to) : null;
                if (from && !to) return deathDateObj >= from;
                if (!from && to) return deathDateObj <= to;
                if(from && to) return deathDateObj >= from && deathDateObj <= to;
                return true;
            });
    }, [searchTerm, dateRange, archiveFilter]);
    
    const paginatedFinishedServices = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return finishedServices.slice(startIndex, startIndex + itemsPerPage);
    }, [finishedServices, currentPage]);

    const totalPages = Math.ceil(finishedServices.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    
    return (
        <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold">Portal de Homenajes</h3>
                <p className="text-lg text-slate-600 mt-2">Un espacio para recordar y honrar a nuestros seres queridos.</p>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
                    <TabsTrigger value="current">Servicios en Curso</TabsTrigger>
                    <TabsTrigger value="finished">Archivo de Homenajes</TabsTrigger>
                </TabsList>
                <TabsContent value="current" className="mt-8">
                    <div className="flex justify-end mb-6">
                        <Select value={currentFilter} onValueChange={setCurrentFilter}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filtrar por localidad" />
                            </SelectTrigger>
                            <SelectContent>
                                {locations.map(loc => (
                                    <SelectItem key={loc} value={loc}>{loc === 'all' ? 'Todas las localidades' : loc}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    {ongoingServices.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ongoingServices.map(ob => <ObituaryCard key={ob.id} obituary={ob} />)}
                        </div>
                    ) : (
                        <p className="text-center text-slate-500 py-12">No hay servicios en curso que coincidan con el filtro seleccionado.</p>
                    )}
                </TabsContent>
                <TabsContent value="finished" className="mt-8">
                     <div className="bg-white p-4 rounded-lg shadow-sm mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                            <Input placeholder="Buscar por nombre..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10"/>
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-left font-normal">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dateRange?.from ? (
                                        dateRange.to ? (
                                            `${format(dateRange.from, "dd/MM/yy")} - ${format(dateRange.to, "dd/MM/yy")}`
                                        ) : (
                                            format(dateRange.from, "dd/MM/yyyy")
                                        )
                                    ) : (
                                        <span>Seleccionar rango de fechas</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="range"
                                    selected={dateRange}
                                    onSelect={setDateRange}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                         <Select value={archiveFilter} onValueChange={setArchiveFilter}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Filtrar por localidad" />
                            </SelectTrigger>
                            <SelectContent>
                                {locations.map(loc => (
                                    <SelectItem key={loc} value={loc}>{loc === 'all' ? 'Todas las localidades' : loc}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    {paginatedFinishedServices.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {paginatedFinishedServices.map(ob => <ObituaryCard key={ob.id} obituary={ob} />)}
                            </div>
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        </>
                    ) : (
                        <p className="text-center text-slate-500 py-12">No se encontraron homenajes que coincidan con su búsqueda.</p>
                    )}
                </TabsContent>
            </Tabs>
        </motion.div>
    );
};

export default ObituariesPortal;