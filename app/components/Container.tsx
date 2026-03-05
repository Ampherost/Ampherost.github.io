import React from "react";
import { ReactNode } from "react";

interface ContainerProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function Container({
  title,
  icon,
  children,
  className = "",
  contentClassName = "",
}: ContainerProps) {
  return (
    <div
      className={`p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 ${
        className || "bg-zinc-50 dark:bg-zinc-800/60"
      }`}
    >
      <div className="flex items-center space-x-3 mb-5">
        {icon && <div className="w-6 h-6 text-zinc-500 dark:text-zinc-400">{icon}</div>}
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className={contentClassName}>{children}</div>
    </div>
  );
}
