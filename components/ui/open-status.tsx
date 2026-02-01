"use client";

import { useEffect, useState } from "react";

interface OpenStatusProps {
    openHour?: number;   // Default 8 (8 AM)
    closeHour?: number;  // Default 24 (12 AM/Midnight)
    className?: string;
}

export function OpenStatus({ openHour = 8, closeHour = 24, className = "" }: OpenStatusProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const hour = now.getHours();
            setIsOpen(hour >= openHour && hour < closeHour);
            setCurrentTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            }));
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Update every minute

        return () => clearInterval(interval);
    }, [openHour, closeHour]);

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
                <div className={`absolute w-3 h-3 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"} animate-ping opacity-75`} />
            </div>
            <div className="flex flex-col leading-tight">
                <span className={`text-xs font-black uppercase tracking-widest ${isOpen ? "text-green-500" : "text-red-500"}`}>
                    {isOpen ? "Open Now" : "Closed"}
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">
                    {currentTime} • {openHour > 12 ? openHour - 12 : openHour}AM - {closeHour > 12 ? closeHour - 12 : closeHour}PM
                </span>
            </div>
        </div>
    );
}
