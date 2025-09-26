import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLinkProps } from "@/types/navigation";
import { cn } from "@/lib/utils";

const NavLink = ({
  href,
  children,
  className = "",
  target = "",
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "relative inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-[14px] leading-[20px] font-medium whitespace-nowrap transition-colors",
        // default (inactive)
        "text-white/70 hover:text-white",
        // active state: subtle inner pill
        isActive && "text-white bg-white/10",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
