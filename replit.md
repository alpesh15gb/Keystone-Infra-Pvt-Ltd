# Overview

This is a full-stack web application for Keystone Infra Pvt. Ltd., a professional infrastructure development company. The application features a comprehensive marketing website with company information, services, projects portfolio, certifications, and contact functionality. Built using React on the frontend and Express.js on the backend, the project showcases a civil engineering and infrastructure development company with 20+ years of experience across India.

## Recent Changes (August 21, 2025)

### Netlify Deployment Preparation
- Cleaned up all server-side files and Express.js backend components
- Removed deployment documentation files and Replit-specific configurations  
- Created Netlify serverless functions for contact form and job applications
- Converted full-stack application to frontend-only with Netlify Functions
- Updated contact and job application forms to use Netlify endpoints
- Prepared project for professional Netlify hosting with SendGrid integration

## Previous Changes (August 20, 2025)

### Vercel Deployment Setup
- Created complete Vercel deployment configuration with `vercel.json` and serverless API setup
- Built optimized production bundle (593KB main, 54KB CSS, all gzipped)
- Comprehensive cleanup removing 70+ unused files (batch scripts, unused components, extra assets)
- Verified all core functionality: contact forms, job applications, image galleries
- Created detailed deployment guides and documentation

## Previous Changes (August 11, 2025)
- Successfully integrated 12 authentic project images into Owl Carousel slider
- Implemented proper image serving from /images/ directory in client/public
- Created working Owl Carousel component with auto-play, navigation, and dots
- All project images loading correctly with proper titles and descriptions
- Enhanced website with comprehensive PDF-based content additions:
  - Added detailed Team section with leadership profiles (D.M. Ramesh, D. Karthik Amar, D. Lakshmi Chowdary)
  - Created Locations section showcasing 14-state coverage with project highlights
  - Implemented Mission, Vision & Values section with authentic company principles
  - Added comprehensive CSR section featuring community initiatives and programs
  - Updated project statistics to reflect 600+ completed projects
  - Replaced "Sign In" button with "Request Quote" for better lead generation
  - Added Team and Locations navigation links
  - Replaced logo with new Keystone branding and optimized navigation sizing
  - Created Esteemed Clients section with auto-scrolling client showcase featuring government agencies across India
- Enhanced Esteemed Clients section with 16+ authentic client logos including ADB, World Bank, ONGC, HUDCO, state governments
- Combined Awards and Recognition into single cohesive section with testimonials and formal awards
- Completely revamped Mission Vision Values section with engaging AI-generated images and modern layout:
  - Generated professional infrastructure construction scene for Mission
  - Created futuristic smart city vision for Vision section  
  - Added team collaboration image for Values section
  - Redesigned layout with alternating image-text sections and enhanced typography
  - Added call-to-action section with gradient styling
- Updated company tagline from "Be a global leader in infrastructure with optimisation and micro-level planning" to "Where Quality Meets Integrity Vision Builds Sustainablility"
- Updated main hero tagline to "Turning Vision into Infrastructure" with gradient styling
- Implemented SendGrid email integration for contact form submissions
- Created comprehensive deployment package for hosting on user's own server or Hostinger
- User confirmed slider functionality is working as expected
- Created comprehensive Windows deployment package with path fixes and compatibility solutions
- Implemented Windows-specific server configuration to resolve socket binding issues
- Fixed PowerShell execution policy conflicts with alternative Command Prompt scripts
- Successfully resolved Windows ENOTSUP socket errors with simplified server configuration
- User confirmed Windows deployment solutions are working properly
- Created comprehensive video showcase section with 9 YouTube videos featuring in-app modal playback
- Updated video titles with authentic YouTube project names: bridge projects (Tarud River, Paspul Vaghu, Mingachal, Giligicha, Chintavaghu, Chhindanar 1&2), NH63R highway project, and Bijapur School Building
- Implemented embedded video player with modal overlay for seamless in-app video viewing
- Transformed hero section into full-width cinematic design with video-style background
- Added animated construction imagery with zoom and parallax effects for premium look
- Updated navigation logo with new professional Keystone Infra branding
- Applied transparent background logo for cleaner header appearance
- Enhanced hero section with multiple professional construction images
- Implemented automatic slideshow with manual navigation controls
- Completely redesigned locations section with interactive dark theme and dynamic elements
- Added India infrastructure map visualization with clickable state details
- Applied consistent orange headers and brown paragraph color scheme across entire website
- Updated all section headings, titles, and text elements to use orange and amber/brown color palette
- Maintained visual hierarchy while ensuring brand-aligned color consistency throughout all components
- Completely transformed Awards & Recognition section with dynamic gradient headers, interactive category filtering, and premium award cards
- Enhanced awards showcase with 6 different prestigious awards, government recognition testimonials, and glass-morphism design
- Removed project gallery section entirely from the website per user request
- Added back single Iconic Project Section showcasing flagship 85km National Highway project with premium dark theme design
- Featured comprehensive project details including ₹450 crores value, 50K+ lives impacted, and award achievements

# User Preferences

Preferred communication style: Simple, everyday language.
Brand colors: Orange for headers, brown/amber tones for paragraphs and body text.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Serverless Functions**: Netlify Functions for contact forms and job applications
- **Email Service**: SendGrid integration for form submissions and job applications
- **API Design**: Serverless functions with JSON request/response format
- **Deployment**: Frontend-only deployment with serverless backend functions
- **Development**: Vite development server for frontend with local testing capabilities

## Data Storage Solutions
- **Current Implementation**: In-memory storage using Map data structures for rapid development
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema definitions
- **Schema Design**: Type-safe database schemas using Drizzle with Zod validation
- **Migration Strategy**: Database migration setup ready for production deployment

## Form and Data Validation
- **Validation Library**: Zod for runtime type validation and schema definition
- **Shared Schemas**: Common validation schemas between frontend and backend
- **Type Safety**: End-to-end type safety from database to UI components
- **Error Handling**: Comprehensive error handling with user-friendly messages

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Modern icon library with consistent design

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect support
- **Neon Database**: Serverless PostgreSQL database provider (configured but not actively used)
- **Database Migrations**: Drizzle Kit for schema migrations and database management

## Development Tools
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimizations for Replit platform

## Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries
- **Zod**: TypeScript-first schema validation library

## Utility Libraries
- **Date-fns**: Modern JavaScript date utility library
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally