"use client";
import { ArrowUpRight, Command, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t-4 border-foreground pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Grid for Footer */}
      <div className="absolute inset-0 z-0 opacity-[0.02] [background-image:linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] [background-size:2rem_2rem]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-6xl font-black italic tracking-tighter mb-6">
              XV<span className="text-primary">ENT</span>
            </h2>
            <p className="text-muted-foreground font-medium max-w-xs mb-8 text-sm leading-relaxed uppercase">
              The high-throughput event protocol for the XRP Ledger. Issuing
              immutable access and liquid memories via XMerch templates.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, link: "#" },
                { icon: Github, link: "#" },
                { icon: Command, link: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "var(--primary)",
                    color: "white",
                  }}
                  href={social.link}
                  className="p-3 border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_var(--foreground)] transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Directory 01 */}
          <div>
            <h4 className="font-black uppercase italic text-xs mb-6 tracking-widest text-primary">
              Protocol_Docs
            </h4>
            <ul className="space-y-4">
              {[
                "Ticketing_Standard",
                "XMerch_Logic",
                "POAP_Issuance",
                "DEX_Liquidity",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-bold uppercase hover:text-primary flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      //
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory 02 */}
          <div>
            <h4 className="font-black uppercase italic text-xs mb-6 tracking-widest text-primary">
              System_Links
            </h4>
            <ul className="space-y-4">
              {[
                "XRPL_Explorer",
                "Network_Status",
                "Governance",
                "Security_Audit",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-bold uppercase hover:text-primary flex items-center justify-between group"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="pt-8 border-t-2 border-foreground flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 font-mono text-[10px] font-black uppercase tracking-tighter overflow-hidden">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-2" /> LEDGER_STATUS: SYNCHRONIZED
            </span>
            <span className="hidden md:inline text-muted-foreground">|</span>
            <span className="hidden md:inline">
              SYSTEM_TIME: {new Date().getFullYear()}.04.23_03:54_UTC
            </span>
          </div>

          <p className="font-mono text-[10px] font-black uppercase text-muted-foreground">
            © 2026 XVENT_LABS // ALL_RIGHTS_RESERVED
          </p>
        </div>
      </div>

      {/* Massive subtle watermark */}
      <div className="absolute -bottom-10 -right-10 text-[12rem] font-black opacity-[0.03] select-none italic tracking-tighter">
        XRP
      </div>
    </footer>
  );
}
