"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Ticket,
  Box,
  ArrowUpRight,
  ChevronDown,
  Globe,
} from "lucide-react";

const EVENTS = [
  {
    id: "XV-9901",
    title: "APEX XRPL SUMMIT",
    date: "MAY 14-16, 2026",
    location: "LAS VEGAS, NV",
    template: "XM-ULTRA-04",
    price: "450 XRP",
    status: "OPEN",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    color: "var(--primary)",
  },
  {
    id: "XV-8820",
    title: "NEON PROTOCOL NIGHT",
    date: "JUNE 02, 2026",
    location: "TOKYO, JP",
    template: "XM-GLITCH-V2",
    price: "120 XRP",
    status: "FEW_LEFT",
    image:
      "https://images.unsplash.com/photo-1514525253361-bee8718a7439?auto=format&fit=crop&q=80&w=800",
    color: "var(--chart-1)",
  },
  {
    id: "XV-7741",
    title: "LEDGER BUILDERS CONF",
    date: "JULY 19, 2026",
    location: "BERLIN, DE",
    template: "XM-CORE-ROOT",
    price: "FREE",
    status: "OPEN",
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800",
    color: "var(--chart-2)",
  },
];

const EventCard = ({ event }: { event: (typeof EVENTS)[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8 }}
    className="group relative bg-card border-2 border-foreground overflow-hidden shadow-[8px_8px_0px_0px_var(--foreground)] hover:shadow-[12px_12px_0px_0px_var(--primary)] transition-all"
  >
    {/* ID Badge */}
    <div className="absolute top-4 left-4 z-20 bg-foreground text-background px-3 py-1 font-mono text-[10px] font-black italic tracking-tighter">
      {event.id} // {event.status}
    </div>

    {/* Image Section */}
    <div className="h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-black italic tracking-tighter uppercase leading-none">
          {event.title}
        </h3>
        <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight">
          <Calendar size={14} className="text-primary" />
          {event.date}
        </div>
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight">
          <MapPin size={14} className="text-primary" />
          {event.location}
        </div>
      </div>

      {/* Technical Footer */}
      <div className="pt-4 border-t-2 border-foreground/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Box size={14} className="opacity-40" />
          <span className="font-mono text-[10px] font-bold opacity-40">
            {event.template}
          </span>
        </div>
        <div className="text-lg font-black italic">{event.price}</div>
      </div>
    </div>

    {/* Bottom Interaction Bar */}
    <button className="w-full py-4 bg-foreground text-background font-black uppercase text-sm tracking-[0.2em] group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
      GET_TICKET <Ticket size={16} />
    </button>
  </motion.div>
);

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-6">
              ACTIVE <br />
              <span className="text-muted-foreground">REGISTRY</span>
            </h1>
            <p className="text-xl font-bold uppercase tracking-tight text-primary"></p>
          </div>

          {/* View Toggle / Search */}
          <div className="w-full md:w-auto flex flex-col gap-4">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
                size={18}
              />
              <input
                type="text"
                placeholder="SEARCH_LEDGER..."
                className="w-full md:w-80 bg-muted border-2 border-foreground px-12 py-4 font-mono text-xs font-bold uppercase focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-12 py-4 border-y-2 border-foreground">
          <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-black text-xs uppercase italic tracking-widest">
            <Filter size={14} /> ALL_CATEGORIES
          </button>
          {["IRL_EVENTS", "DIGITAL_POAPS", "XMERCH_DROPS", "GOVERNANCE"].map(
            (f) => (
              <button
                key={f}
                className="px-4 py-2 hover:bg-muted font-mono text-[10px] font-black uppercase tracking-widest transition-colors"
              >
                {f}
              </button>
            )
          )}
          <div className="ml-auto flex items-center gap-4 font-mono text-[10px] font-black opacity-30 uppercase tracking-[0.3em]">
            <Globe size={14} /> Global Distribution
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

          {/* Empty Placeholder Slot */}
          <div className="border-2 border-dashed border-foreground/20 rounded-sm flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-primary transition-colors">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Box className="opacity-20" />
            </div>
            <p className="font-mono text-xs font-black opacity-20 uppercase tracking-[0.2em]">
              Initialize_New_Event
            </p>
          </div>
        </div>

        {/* Technical Pagination */}
        <div className="mt-24 flex items-center justify-center gap-4 font-mono text-[10px] font-black uppercase tracking-widest">
          <button className="px-4 py-2 border-2 border-foreground opacity-40 hover:opacity-100 transition-opacity">
            PREV
          </button>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center border-2 ${
                  i === 1 ? "border-primary text-primary" : "border-foreground"
                }`}
              >
                0{i}
              </div>
            ))}
          </div>
          <button className="px-4 py-2 border-2 border-foreground hover:border-primary transition-colors">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
