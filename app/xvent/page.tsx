"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Ticket,
  Award,
  Zap,
  ChevronRight,
  Activity,
  QrCode,
  Box,
  Terminal,
  ArrowUpRight,
  Database,
  Share2,
  MousePointerClick,
  Code,
  Twitter,
  Github,
  Command,
  Menu,
  Wallet,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-background">
      {/* Background X-Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <span className="text-[60rem] font-black leading-none select-none">
          X
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Brand & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-mono text-sm font-bold tracking-[0.3em] uppercase">
                XRPL Ecosystem
              </span>
            </div>

            <h1 className="text-8xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8 uppercase italic">
              XV<span className="text-muted-foreground">ENT</span>
            </h1>

            <p className="text-2xl font-medium text-foreground mb-12 max-w-xl leading-tight border-l-4 border-primary pl-6">
              POAP Ticketing powered by{" "}
              <span className="text-primary">XMerch Templates</span>. The
              definitive standard for event issuance on the XRP Ledger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-foreground text-background font-black text-xl hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-3 group">
                MINT TICKETS{" "}
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-foreground text-foreground font-black text-xl hover:bg-foreground/5 transition-all">
                VIEW TEMPLATES
              </button>
            </div>
          </motion.div>

          {/* The "X" Tech Stack Visual */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative grid grid-cols-2 gap-4 max-w-md mx-auto"
            >
              {/* Ticket Layer */}
              <div className="col-span-2 bg-card border-2 border-foreground p-6 rounded-sm shadow-[8px_8px_0px_0px_var(--foreground)] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--primary)] transition-all">
                <div className="flex justify-between items-start mb-10">
                  <Ticket size={32} />
                  <span className="font-mono text-xs font-bold bg-foreground text-background px-2 py-1">
                    XRPL XLS-20
                  </span>
                </div>
                <p className="text-xs font-mono mb-1 text-muted-foreground">
                  POAP IDENTIFIER
                </p>
                <p className="text-xl font-black italic">XVENT_PASS_2026</p>
              </div>

              {/* Template Component */}
              <div className="bg-secondary border-2 border-foreground p-6 rounded-sm flex flex-col justify-between aspect-square">
                <Box size={24} className="text-primary" />
                <div>
                  <p className="text-[10px] font-black uppercase mb-1">
                    Engine
                  </p>
                  <p className="text-sm font-bold">
                    XMERCH
                    <br />
                    TEMPLATE
                  </p>
                </div>
              </div>

              {/* Attendance Proof */}
              <div className="bg-card border-2 border-foreground p-6 rounded-sm flex flex-col justify-between aspect-square">
                <Award size={24} className="text-chart-1" />
                <div>
                  <p className="text-[10px] font-black uppercase mb-1">
                    Proof of
                  </p>
                  <p className="text-sm font-bold">
                    ATTENDANCE
                    <br />
                    PROTOCOL
                  </p>
                </div>
              </div>

              {/* Floating Floating Scan UI */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-8 top-1/2 -translate-y-1/2 bg-primary p-4 border-2 border-foreground shadow-lg"
              >
                <QrCode size={40} className="text-primary-foreground" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticker Tape */}
      <div className="absolute bottom-0 w-full bg-foreground py-4 overflow-hidden whitespace-nowrap border-t-2 border-foreground">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center text-background font-black italic text-sm tracking-tighter"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex gap-20 items-center">
              <span>XMERCH POWERED</span>
              <Zap size={14} fill="currentColor" />
              <span>XRPL NATIVE TICKETING</span>
              <Zap size={14} fill="currentColor" />
              <span>POAP REWARDS</span>
              <Zap size={14} fill="currentColor" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: Ticket,
      title: "XLS-20 Ticketing",
      desc: "Native XRPL NFT tickets with automated secondary market royalties and instant validation logic.",
      color: "var(--chart-1)",
      tag: "CORE",
    },
    {
      icon: Box,
      title: "XMerch Templates",
      desc: "Deploy logic-heavy event structures using pre-built templates. Standardized metadata for every asset.",
      color: "var(--primary)",
      tag: "ENGINE",
    },
    {
      icon: Award,
      title: "Tradable POAPs",
      desc: "Proof of Attendance tokens that stay in the economy. Reward your community with liquid memories.",
      color: "var(--chart-2)",
      tag: "REWARD",
    },
  ];

  return (
    <section className="py-32 bg-background relative border-t-2 border-foreground">
      {/* Background watermark */}
      <div className="absolute left-10 top-10 opacity-[0.02] pointer-events-none">
        <Database size={400} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4">
            Technical{" "}
            <span className="text-muted-foreground">Specifications</span>
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: "var(--muted)" }}
              className="p-10 bg-card border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 border-foreground group relative overflow-hidden transition-colors"
            >
              {/* Top Meta Info */}
              <div className="flex justify-between items-start mb-12">
                <div
                  className="p-4 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_var(--foreground)] group-hover:shadow-[4px_4px_0px_0px_var(--primary)] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all"
                  style={{ color: f.color }}
                >
                  <f.icon size={28} strokeWidth={2.5} />
                </div>
                <span className="font-mono text-[10px] font-black border border-foreground/20 px-2 py-1 tracking-widest opacity-50">
                  {f.tag} // 0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase italic mb-4 flex items-center gap-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8 min-h-[80px]">
                  {f.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold font-mono text-primary cursor-pointer group/link">
                  INITIALIZE_PROTOCOL{" "}
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </div>
              </div>

              {/* Decorative "Corner Bracket" */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Terminal size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TemplateEngineSection = () => {
  return (
    <section className="middle py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Box size={400} strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: The "Engine" Logic */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Architecture
            </div>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 leading-[0.9]">
              The Power of <br />
              <span className="text-primary">Templates.</span>
            </h2>
            <p className="text-foreground/70 text-xl mb-12 max-w-lg leading-snug">
              Don't start from zero. XMerch Templates are pre-configured
              smart-objects on the XRPL that handle ticket logic, POAP
              distribution, and physical utility in one deployment.
            </p>

            <div className="grid gap-6">
              {[
                {
                  title: "Select Logic Gate",
                  desc: "Choose from 20+ validated XMerch event templates.",
                  icon: MousePointerClick,
                },
                {
                  title: "Inject Metadata",
                  desc: "Define your POAP rarity and XRPL secondary royalties.",
                  icon: Code,
                },
                {
                  title: "Broadcast",
                  desc: "Deploy to the ledger and go live in seconds.",
                  icon: Share2,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 p-6 bg-background/50 border-l-2 border-primary"
                >
                  <div className="text-primary">
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase italic text-sm">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-xs font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: The "Exploded View" Visual */}
          <div className="flex-1 w-full relative">
            <div className="relative aspect-square max-w-lg mx-auto flex items-center justify-center">
              {/* Central Template "Core" */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-foreground/10 rounded-full"
              />

              <div className="relative z-20 bg-background border-4 border-foreground p-10 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
                <Box size={60} className="text-primary mb-4" />
                <div className="font-mono text-[10px] font-black opacity-40 mb-2">
                  ROOT_TEMPLATE_V.04
                </div>
                <div className="h-2 w-full bg-muted mb-1" />
                <div className="h-2 w-2/3 bg-muted mb-4" />
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-chart-1 text-[8px] font-bold text-white">
                    TICKET
                  </div>
                  <div className="px-2 py-1 bg-chart-2 text-[8px] font-bold text-white">
                    POAP
                  </div>
                  <div className="px-2 py-1 bg-primary text-[8px] font-bold text-white">
                    XLS-20
                  </div>
                </div>
              </div>

              {/* Orbital Nodes (Representing generated assets) */}
              {[
                { icon: Zap, label: "MINT_LOGIC", pos: "-top-4 left-1/2" },
                { icon: Award, label: "POAP_AUTH", pos: "-bottom-4 left-1/2" },
                {
                  icon: Share2,
                  label: "DEX_LIQUIDITY",
                  pos: "top-1/2 -left-10",
                },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  className={`absolute ${node.pos} -translate-x-1/2 bg-card border-2 border-foreground p-3 flex items-center gap-3 z-30 shadow-lg`}
                >
                  <node.icon size={16} className="text-primary" />
                  <span className="font-mono text-[8px] font-black">
                    {node.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function XventLanding() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground p-10">
        <Hero />
        <FeatureSection />
        {/* <TemplateEngineSection /> */}

        {/* Footer / CTA */}
        <Footer />
      </div>
    </div>
  );
}
