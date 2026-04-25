"use client";
import { Activity, Menu, Wallet } from "lucide-react";

import { motion } from "framer-motion";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b-2 border-foreground bg-background/95 backdrop-blur-none">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-10 h-10 bg-foreground flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
          <div className="w-5 h-5 bg-background -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
        </div>
        <div className="flex flex-col">
          <span className="font-black text-2xl tracking-[ -0.1em] italic leading-none">
            XV<span className="text-primary">ENT</span>
          </span>
          <span className="font-mono text-[8px] font-bold tracking-[0.3em] uppercase opacity-50">
            Protocol_v1.0
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center border-x-2 border-foreground h-full px-12 gap-10">
        {["Events", "POAPs", "Templates", "Network"].map((item) => (
          <a
            key={item}
            href={`/xvent/${item.toLowerCase()}`}
            className="relative text-xs font-black uppercase tracking-widest hover:text-primary transition-colors group"
          >
            <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
              {">"}
            </span>
            {item}
          </a>
        ))}
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-6">
        <div className="hidden xl:flex items-center gap-3 font-mono text-[10px] font-bold opacity-40">
          <Activity size={12} className="text-chart-2" />
        </div>

        <motion.button
          whileHover={{
            backgroundColor: "var(--primary)",
            color: "white",
            boxShadow: "6px 6px 0px 0px var(--foreground)",
          }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-3 px-6 py-3 bg-foreground text-background font-black uppercase text-xs tracking-tighter border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all"
        >
          <Wallet size={16} />
          Connect_Wallet
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 border-2 border-foreground">
          <Menu size={24} />
        </button>
      </div>
    </div>

    {/* Decorative Progress Bar */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
      className="absolute bottom-[-2px] left-0 h-[2px] bg-primary/30 z-10"
    />
  </nav>
);

export default Navbar;
