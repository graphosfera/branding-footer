# Branding Footer

Un componente de footer con branding de Graphosfera para proyectos Next.js.

## Instalación

```bash
npm install branding-footer
```

## Uso

```tsx
import BrandingFooter from 'branding-footer'

export default function MyPage() {
  return (
    <div>
      {/* Tu contenido */}

      {/* Footer amarillo (por defecto) */}
      <BrandingFooter />

      {/* O footer gris */}
      <BrandingFooter variant="gray" />
    </div>
  )
}
```

## Props

- `variant`: `"yellow"` | `"gray"` (opcional, por defecto: `"yellow"`)

## Requisitos

Este componente requiere:
- Next.js 14+
- React 18+
- Tailwind CSS configurado en tu proyecto

## Desarrollo

```bash
# Instalar dependencias
npm install

# Compilar el paquete
npm run build
```

## Licencia

ISC - Graphosfera, LLC
