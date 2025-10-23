import Link from "next/link"
import Image from "next/image"
import { cn } from "./lib/utils"
import { ExternalLink } from "lucide-react"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

interface BrandingFooterProps {
  variant?: "yellow" | "gray"
}

export default function BrandingFooter({ variant = "yellow" }: BrandingFooterProps) {
  const isYellow = variant === "yellow"

  return (
    <div
      className={cn(
        "w-full border-t transition-colors m-0 p-0",
        isYellow
          ? "bg-[#cbf120] border-[#b5d91a]"
          : "bg-neutral-900 border-white/10"
      )}
    >
      <div className="container max-w-screen-2xl py-6 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          {/* Social Networks - Left Aligned */}
          <div className="flex items-center gap-4 order-2 lg:order-1">
            <Link
              href="https://www.linkedin.com/company/graphosfera/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-all hover:scale-110",
                isYellow
                  ? "text-black hover:text-neutral-800"
                  : "text-[#cbf120] hover:text-[#b5d91a]"
              )}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/graphosfera"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-all hover:scale-110",
                isYellow
                  ? "text-black hover:text-neutral-800"
                  : "text-[#cbf120] hover:text-[#b5d91a]"
              )}
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://wa.me/584242999751"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-all hover:scale-110",
                isYellow
                  ? "text-black hover:text-neutral-800"
                  : "text-[#cbf120] hover:text-[#b5d91a]"
              )}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" />
            </Link>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 order-1 lg:order-2">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-2 transition-opacity hover:opacity-80",
                isYellow ? "text-black" : "text-neutral-200"
              )}
            >
              <Image
                src="https://graphosfera.com/logo.webp"
                alt="Graphosfera"
                width={120}
                height={27}
                className="h-7 w-auto"
              />
            </Link>
            <p
              className={cn(
                "text-sm font-medium",
                isYellow ? "text-black" : "text-neutral-400"
              )}
            >
              Hecho con{" "}
              <span className={isYellow ? "text-black" : "text-[#cbf120]"}>
                ♥
              </span>{" "}
              por{" "}
              <Link
                href="https://graphosfera.com"
                className={cn(
                  "inline-flex items-center gap-1 font-semibold underline-offset-4 transition-all hover:underline",
                  isYellow ? "text-black hover:text-neutral-800" : "text-[#cbf120] hover:text-[#b5d91a]"
                )}
              >
                Graphosfera
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>

          {/* Empty div for spacing on desktop */}
          <div className="hidden lg:block lg:w-[140px] order-3"></div>
        </div>
      </div>
    </div>
  )
}
