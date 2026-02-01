"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Clock, Users, Phone, CalendarCheck } from "lucide-react";

interface ReservationModalProps {
    variant?: "default" | "floating";
}

export function ReservationModal({ variant = "default" }: ReservationModalProps) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2"
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setOpen(false);
            setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
        }, 2000);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {variant === "floating" ? (
                    <button className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(255,92,0,0.4)] hover:scale-110 transition-all duration-300">
                        <CalendarCheck className="w-6 h-6 text-white" />
                    </button>
                ) : (
                    <Button className="font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full px-6 md:px-8 py-5 md:py-6 shadow-xl shadow-primary/30">
                        <CalendarCheck className="w-4 h-4 mr-2" />
                        Reserve Table
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-0 overflow-hidden border-none">
                {isSubmitted ? (
                    <div className="p-12 text-center flex flex-col items-center gap-4">
                        <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center animate-bounce">
                            <CalendarCheck className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black">Reservation Confirmed!</h3>
                        <p className="text-muted-foreground">We'll send you a confirmation SMS shortly.</p>
                    </div>
                ) : (
                    <>
                        <div className="bg-primary p-6 text-center">
                            <Badge className="bg-white/20 text-white border-none mb-3">Book Your Spot</Badge>
                            <DialogTitle className="text-white text-2xl md:text-3xl font-display font-black uppercase tracking-tight">
                                Table Reservation
                            </DialogTitle>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">Full Name</label>
                                <Input
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="h-14 rounded-2xl bg-secondary border-none px-6 font-bold"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="h-14 rounded-2xl bg-secondary border-none pl-14 pr-6 font-bold"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="h-14 rounded-2xl bg-secondary border-none pl-12 pr-4 font-bold"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            type="time"
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            className="h-14 rounded-2xl bg-secondary border-none pl-12 pr-4 font-bold"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-3">Number of Guests</label>
                                <div className="flex gap-2">
                                    {["1", "2", "3", "4", "5", "6+"].map((num) => (
                                        <button
                                            type="button"
                                            key={num}
                                            onClick={() => setFormData({ ...formData, guests: num })}
                                            className={`flex-1 h-12 rounded-xl font-black text-sm transition-all ${formData.guests === num
                                                ? "bg-primary text-primary-foreground shadow-lg"
                                                : "bg-secondary hover:bg-secondary/80"
                                                }`}
                                        >
                                            <Users className="w-4 h-4 inline mr-1" />{num}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <Button type="submit" size="lg" className="h-16 rounded-2xl font-black uppercase tracking-widest mt-2 shadow-2xl">
                                Confirm Reservation
                            </Button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
