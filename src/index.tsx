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
      style={{
        width: '100%',
        borderTop: '1px solid',
        borderColor: isYellow ? colors.yellow.border : colors.gray.border,
        backgroundColor: isYellow ? colors.yellow.bg : colors.gray.bg,
        margin: 0,
        padding: 0,
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '1536px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
          className="lg:flex-row lg:justify-between"
        >
          {/* Social Networks - Left Aligned */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              order: 2,
            }}
            className="lg:order-1"
          >
            <Link
              href="https://www.linkedin.com/company/graphosfera/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isYellow ? colors.yellow.text : colors.gray.accent,
                transition: 'transform 0.2s',
                display: 'inline-block',
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedin style={{ height: '1.5rem', width: '1.5rem' }} />
            </Link>
            <Link
              href="https://www.instagram.com/graphosfera"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isYellow ? colors.yellow.text : colors.gray.accent,
                transition: 'transform 0.2s',
                display: 'inline-block',
              }}
              aria-label="Instagram"
            >
              <FaInstagram style={{ height: '1.5rem', width: '1.5rem' }} />
            </Link>
            <Link
              href="https://wa.me/584242999751"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isYellow ? colors.yellow.text : colors.gray.accent,
                transition: 'transform 0.2s',
                display: 'inline-block',
              }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp style={{ height: '1.5rem', width: '1.5rem' }} />
            </Link>
          </div>

          {/* Center Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              order: 1,
            }}
            className="sm:flex-row sm:gap-4 lg:order-2"
          >
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'opacity 0.2s',
                color: isYellow ? colors.yellow.text : '#e5e5e5',
              }}
            >
              <Image
                src="https://graphosfera.com/logo.webp"
                alt="Graphosfera"
                width={120}
                height={27}
                style={{ height: '1.75rem', width: 'auto' }}
              />
            </Link>
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isYellow ? colors.yellow.text : '#a3a3a3',
                margin: 0,
              }}
            >
              Hecho con{" "}
              <span style={{ color: isYellow ? colors.yellow.text : colors.gray.accent }}>
                ♥
              </span>{" "}
              por{" "}
              <Link
                href="https://graphosfera.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontWeight: 600,
                  textUnderlineOffset: '4px',
                  transition: 'text-decoration 0.2s',
                  color: isYellow ? colors.yellow.text : colors.gray.accent,
                  textDecoration: 'none',
                }}
              >
                Graphosfera
                <ExternalLink style={{ height: '0.875rem', width: '0.875rem' }} />
              </Link>
            </p>
          </div>

          {/* Empty div for spacing on desktop */}
          <div style={{ order: 3 }} className="hidden lg:block lg:w-[140px]"></div>
        </div>
      </div>
    </div>
  )
}
