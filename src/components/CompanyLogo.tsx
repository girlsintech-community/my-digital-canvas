import React from "react";
import { getLogoForName } from "@/lib/logos";

interface CompanyLogoProps {
  name: string;
  className?: string;
  size?: number;
  showFallback?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  name,
  className = "",
  size = 20,
}) => {
  const logoUrl = getLogoForName(name);

  if (!logoUrl) return null;

  return (
    <img
      src={logoUrl}
      alt={`${name} logo`}
      className={`inline-block object-contain rounded-md bg-white p-0.5 border border-border/40 shrink-0 shadow-2xs ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      loading="lazy"
    />
  );
};

export default CompanyLogo;
