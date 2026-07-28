# Brishan King — Portfolio

Personal project showcase for Brishan King, a full-stack developer building polished web applications with React, Next.js, Node.js, and modern product tooling.

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Production build:**

   ```bash
   pnpm build
   pnpm start
   ```

## Project Structure

| Path | Purpose |
| --- | --- |
| `src/app/` | Next.js App Router pages and API routes |
| `src/components/` | UI, layout, and section components |
| `src/content/` | Portfolio projects, nav, services, and footer copy |
| `src/hooks/` | Shared React hooks |

Site content lives mainly in `src/content/`. Update `portfolio.ts` to add or edit featured projects.

## Sections

- **Hero** — introduction and primary CTA
- **Projects** — selected client and product work
- **About** — background and focus
- **Stack** — tools and technologies
- **Contact** — form backed by Resend (`src/app/api/contact/`)

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [pnpm](https://pnpm.io/)
- [Resend](https://resend.com/) (contact form)

## License

MIT
