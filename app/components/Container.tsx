// src/app/components/Container.tsx
import React from 'react';
import Image from 'next/image';        // ← only if you want to accept a src
import { ReactNode } from 'react';

interface ContainerProps {
  title: string;
  /**
   * You can either pass a ReactNode (e.g. an <svg> or a <Icon />),
   * or pass `iconSrc` + `iconAlt` to render a Next.js Image.
   */
  icon?: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  children: ReactNode;
  /** If you need to tweak wrapper styling */
  className?: string;
  /** If you want to override the text/prose styling */
  contentClassName?: string;
}

export default function Container({
  title,
  icon,
  iconSrc,
  iconAlt = "",
  children,
  className = "",
  contentClassName = "prose dark:prose-invert",
}: ContainerProps) {
  return (
    <div
      className={
        `dark:bg-zinc-800 p-8 rounded-2xl shadow-lg ${className}`
      }
    >
      <div className="flex items-center space-x-2 mb-4">
        {icon && <div className="w-6 h-6">{icon}</div>}
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={24}
            height={24}
            className="mr-2"
          />
        )}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className={contentClassName}>{children}</div>
    </div>
  );
}
