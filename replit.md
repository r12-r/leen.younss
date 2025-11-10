# Overview

This is a personal profile card web application showcasing "Leen Youness" with a glassmorphic design aesthetic. The application is a single-page React application featuring a visually striking profile card with a pink/rose color palette, animated effects, and social media links. Built with modern web technologies, it serves as a digital business card or personal landing page.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- CSS processing through PostCSS with Tailwind CSS

**UI Component Library**
- Shadcn/ui component system (New York style variant) providing pre-built, accessible React components
- Radix UI primitives as the foundation for complex interactive components
- Custom ProfileCard component as the main feature, implementing glassmorphic design with inline styles for precise visual control
- Poppins font family loaded via Google Fonts CDN

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management
- Custom query client configuration with strict refetch policies (no automatic refetching on window focus or intervals)
- 401 error handling capability built into query functions

**Styling Approach**
- Tailwind CSS v3 with custom configuration extending default theme
- CSS custom properties (CSS variables) for theming via HSL color format
- Hybrid approach: Tailwind utilities for layout/spacing, inline styles for specific glassmorphic effects that require rgba values and backdrop filters
- Pink/rose color scheme implemented through Tailwind theme extensions and inline gradient backgrounds
- Responsive design with mobile-first approach (breakpoint at 400px for profile card)

**Design System**
- Glassmorphism as core visual principle (frosted glass with backdrop blur)
- Consistent spacing scale using Tailwind's 4px base unit
- Custom border radius values (9px, 6px, 3px) defined in Tailwind config
- Animation system including floating effect via CSS keyframes
- Elevation system using box shadows and layered backgrounds

## Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- ESM (ES Modules) throughout the codebase
- Custom middleware for request/response logging with JSON response capture
- Development mode with tsx for TypeScript execution

**API Structure**
- RESTful API convention with `/api` prefix for all application routes
- Centralized route registration through `registerRoutes` function
- Request logging limited to API routes (non-static assets)
- Error responses captured and logged for debugging

**Session Management**
- connect-pg-simple configured for PostgreSQL-backed session storage
- Raw body preservation on requests for webhook/signature verification scenarios

**Storage Layer**
- Abstract IStorage interface defining CRUD operations
- MemStorage implementation providing in-memory data persistence
- User entity with id, username, and password fields
- UUID generation for user IDs via crypto.randomUUID()
- Designed for easy swap to database-backed storage

**Build & Deployment**
- Separate build process: Vite bundles client, esbuild bundles server
- Production mode serves pre-built static files
- Development mode uses Vite middleware for live reload
- Environment-based configuration (NODE_ENV)

## External Dependencies

**Database Configuration**
- Drizzle ORM v0.39+ as the database toolkit
- Drizzle Kit for schema management and migrations
- PostgreSQL dialect configured (via @neondatabase/serverless driver)
- Database connection via DATABASE_URL environment variable
- Schema-first approach with migrations output to `./migrations` directory
- Drizzle-Zod integration for runtime validation from database schemas

**Third-Party Services**
- Font Awesome kit (a076d05399.js) for social media icons
- Google Fonts API for Poppins font family with full weight range (100-900, italic variants)
- Social media platform integrations: Snapchat, Instagram, TikTok (link-only, no API)

**Development Tools**
- Replit-specific plugins:
  - vite-plugin-runtime-error-modal for enhanced error display
  - vite-plugin-cartographer for code mapping
  - vite-plugin-dev-banner for development environment indicator
- React Hook Form with Zod resolvers for form validation
- Date-fns for date manipulation utilities

**Design Assets**
- Profile image stored in `attached_assets/icon_1762805175678.jpg`
- Static HTML/CSS reference designs in `attached_assets/` directory
- Favicon support configured

**Type Safety & Validation**
- Zod for runtime schema validation
- TypeScript with strict mode enabled
- Shared types between client and server via `@shared` path alias
- Path aliases configured: `@/` for client source, `@shared/` for shared code, `@assets/` for static assets