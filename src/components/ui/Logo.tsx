import Link from "next/link";
import { ShieldAlert } from "lucide-react";

interface LogoProps {
  darkText?: boolean;
}

export function Logo({ darkText = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
        <ShieldAlert className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex flex-col">
        <span className={`font-heading font-bold text-lg leading-tight tracking-wide transition-colors ${darkText ? 'text-background' : 'text-white'}`}>
          Family Anchor
        </span>
        <span className="text-[10px] text-primary font-bold tracking-wider uppercase">
          Facilities Pvt. Ltd.
        </span>
      </div>
    </Link>
  );
}
