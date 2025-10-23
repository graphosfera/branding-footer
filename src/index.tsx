import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

interface BrandingFooterProps {
  variant?: "yellow" | "gray"
}

export default function BrandingFooter({ variant = "yellow" }: BrandingFooterProps) {
  const isYellow = variant === "yellow"

  const colors = {
    yellow: {
      bg: '#cbf120',
      border: '#b5d91a',
      text: '#000000',
      textHover: '#262626',
    },
    gray: {
      bg: '#171717',
      border: 'rgba(255, 255, 255, 0.1)',
      accent: '#cbf120',
      accentHover: '#b5d91a',
    }
  }

  return (
    <div
      className="w-full border-t transition-colors m-0 p-0"
      style={{
        backgroundColor: isYellow ? colors.yellow.bg : colors.gray.bg,
        borderColor: isYellow ? colors.yellow.border : colors.gray.border,
      }}
    >
      <div className="container max-w-screen-2xl py-6 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          {/* Social Networks - Left Aligned */}
          <div className="flex items-center gap-4 order-2 lg:order-1">
            <Link
              href="https://www.linkedin.com/company/graphosfera/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
              style={{ color: isYellow ? colors.yellow.text : colors.gray.accent }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/graphosfera"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
              style={{ color: isYellow ? colors.yellow.text : colors.gray.accent }}
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://wa.me/584242999751"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
              style={{ color: isYellow ? colors.yellow.text : colors.gray.accent }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" />
            </Link>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 order-1 lg:order-2">
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ color: isYellow ? colors.yellow.text : '#e5e5e5' }}
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
              className="text-sm font-medium"
              style={{ color: isYellow ? colors.yellow.text : '#a3a3a3' }}
            >
              Hecho con{" "}
              <span style={{ color: isYellow ? colors.yellow.text : colors.gray.accent }}>
                ♥
              </span>{" "}
              por{" "}
              <Link
                href="https://graphosfera.com"
                className="inline-flex items-center gap-1 font-semibold underline-offset-4 transition-all hover:underline"
                style={{ color: isYellow ? colors.yellow.text : colors.gray.accent }}
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
