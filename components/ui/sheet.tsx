"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Sheet({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <div>
      {open && <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => onOpenChange(false)} />}
      <div className={cn("fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl border-l transition-transform duration-300 ease-in-out", open ? "translate-x-0" : "translate-x-full")}>{children}</div>
    </div>
  );
}

export function SheetHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b px-4 py-3 font-semibold">{children}</div>;
}

export function SheetContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4 space-y-2 bg-white">{children}</div>;
}

