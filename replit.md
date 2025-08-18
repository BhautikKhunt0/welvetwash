# CleanPods Pro - 5-in-1 Laundry Pod Company Website

## Overview

CleanPods Pro is a modern full-stack web application for a laundry pod company featuring a marketing website with quote request functionality. The application showcases the company's revolutionary 5-in-1 compartmentalized laundry pod technology and allows potential customers to request quotes for bulk orders. Built with React, TypeScript, and Express.js, the application provides a professional business presence with a focus on product presentation and lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Component System**: Radix UI primitives with custom styling for accessibility and design consistency

### Backend Architecture  
- **Server**: Express.js with TypeScript for API endpoints
- **Development**: Custom Vite integration for hot module replacement in development
- **Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **API Design**: RESTful endpoints for quote request submission and retrieval

### Data Storage Solutions
- **Current**: In-memory storage using Map data structures for development and demonstration
- **Future Ready**: Drizzle ORM configuration with PostgreSQL schema definitions prepared for production deployment
- **Database Schema**: User management and quote request tables with proper relationships and constraints
- **Migration Support**: Drizzle Kit configured for database schema migrations

### Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Prepared Infrastructure**: User table with username/password fields ready for authentication integration
- **Session Management**: Express session configuration prepared with PostgreSQL session store

### External Dependencies
- **Database**: Neon Database (PostgreSQL) configured via environment variables
- **Email Service**: Quote request notifications prepared for email integration (currently logs to console)
- **Fonts**: Google Fonts integration for typography (Inter, DM Sans, Architects Daughter, Fira Code, Geist Mono)
- **Images**: Unsplash integration for product and lifestyle imagery
- **Development Tools**: Replit-specific plugins for development environment integration