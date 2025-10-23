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

## Configuración de Tailwind CSS (IMPORTANTE)

Para que los estilos del componente funcionen correctamente, **debes** agregar el paquete al `content` de tu `tailwind.config.js` o `tailwind.config.ts`:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Agrega esta línea para que Tailwind procese las clases del componente:
    './node_modules/branding-footer/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Si usas **pnpm**, también necesitas agregar esto:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Para pnpm, usa esta ruta alternativa:
    './node_modules/.pnpm/branding-footer@*/node_modules/branding-footer/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Sin esta configuración, el componente no mostrará los fondos de color correctamente.**

## Desarrollo

```bash
# Instalar dependencias
npm install

# Compilar el paquete
npm run build
```

## Licencia

ISC - Graphosfera, LLC
