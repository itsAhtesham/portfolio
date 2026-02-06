# Ahtesham Mohammad Siddiqui - Portfolio

A modern, animated portfolio website built with Next.js 15, React 19, and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Theme**: next-themes

## Features

- Stunning 3D particle background
- Smooth scroll animations
- Dark/Light theme toggle
- Responsive design
- Contact form with email integration
- SEO optimized
- Performance optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

3. Configure your environment variables:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_TO=your@email.com
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── 3d/             # Three.js components
│   ├── animations/     # Animation wrappers
│   ├── common/         # Shared components
│   ├── sections/       # Page sections
│   └── ui/             # UI components
├── data/               # Static data (profile, projects, skills)
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
├── providers/          # Context providers
└── types/              # TypeScript types
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Customization

### Update Personal Information

Edit the files in `src/data/`:

- `profile.ts` - Name, bio, contact info
- `experience.ts` - Work experience
- `projects.ts` - Your projects
- `skills.ts` - Technical skills
- `social.ts` - Social media links

### Styling

- Colors and themes: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Animation variants: `src/lib/animations.ts`

## License

MIT License - feel free to use this for your own portfolio!

## Contact

**Ahtesham Mohammad Siddiqui**
- Email: ahteshamsiddiqui5900@gmail.com
- LinkedIn: [ahtesham-siddiqui](https://linkedin.com/in/ahtesham-siddiqui)
- GitHub: [ahtesham-siddiqui](https://github.com/ahtesham-siddiqui)
