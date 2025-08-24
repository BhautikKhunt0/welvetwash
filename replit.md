# CleanPods Pro - 5-in-1 Laundry Pod Company Website

## Overview

CleanPods Pro is a modern full-stack web application for a laundry pod company featuring a comprehensive marketing website with advanced quote request functionality. The application showcases the company's revolutionary 5-in-1 compartmentalized laundry pod technology through multiple creative sections, customer testimonials, environmental impact highlights, and detailed product information. Built with React, TypeScript, and Express.js, it provides a premium business presence with smooth animations, modern UI design, and professional user experience focused on product presentation and lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with React 18 and TypeScript for full-stack development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Next.js App Router for modern routing and server components
- **State Management**: Client-side state management with React hooks for form handling
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Component System**: Radix UI primitives with custom styling for accessibility and design consistency
- **Navigation**: Advanced sticky navbar with Next.js Link components, smooth transitions, and mobile-responsive design
- **Animations**: CSS animations, hover effects, floating elements, and smooth scroll behavior
- **Footer**: Comprehensive footer with contact information and quick navigation

### Backend Architecture  
- **Framework**: Next.js API routes for serverless backend functionality
- **Development**: Next.js development server with hot module replacement
- **Storage**: Contact form handling with client-side state management
- **Validation**: Zod schemas for form validation and type safety
- **API Design**: Next.js API routes for future backend functionality

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

### Recent Enhancements (Latest Update)

#### Advanced Navigation System
- **Sticky Navbar**: Modern scroll-based behavior that transforms from transparent to solid background
- **Smooth Animations**: Logo scaling, color transitions, and hover effects
- **Mobile Responsive**: Enhanced mobile menu with backdrop blur and improved UX
- **Dynamic Branding**: Animated logo with sparkles and pulse effects

#### Expanded Homepage Content
- **Customer Reviews Section**: Authentic testimonials with star ratings and customer photos
- **Statistics Showcase**: Key metrics including 10,000+ customers, 50,000+ orders, 4.9/5 rating
- **How It Works**: Step-by-step process explanation with animated visual elements
- **Environmental Impact**: Dedicated eco-friendly section highlighting 75% packaging reduction
- **Enhanced CTA Sections**: Multiple conversion points with improved button designs

#### Professional Footer
- **Comprehensive Links**: Product categories, company information, and support resources
- **Social Media Integration**: Animated social media icons with hover effects
- **Newsletter Signup**: Email subscription with modern input design
- **Contact Information**: Complete business details and alternative contact methods
- **Legal & Compliance**: Privacy policy, terms of service, and cookie policy links

#### Enhanced User Experience
- **Smooth Scrolling**: Page-wide smooth scroll behavior
- **Hover Animations**: Card hover effects, button scaling, and icon transformations
- **Loading States**: Improved loading indicators and transition states
- **Accessibility**: Comprehensive data-testid attributes for testing and screen readers