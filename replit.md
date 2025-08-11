# Overview

This is a full-stack web application for Keystone Infra Pvt. Ltd., a professional infrastructure development company. The application features a comprehensive marketing website with company information, services, projects portfolio, certifications, and contact functionality. Built using React on the frontend and Express.js on the backend, the project showcases a civil engineering and infrastructure development company with 20+ years of experience across 14 states in India.

# User Preferences

Preferred communication style: Simple, everyday language.

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
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful endpoints with JSON request/response format
- **Storage Strategy**: In-memory storage implementation with interface abstraction for future database migration
- **Middleware**: Custom request logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration for seamless full-stack development

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