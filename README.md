# PDCSneakers 🏃‍♂️

PDCSneakers is a modern e-commerce platform specialized in sports sneakers, built with cutting-edge technologies.

## 🚀 Main Technologies

- **Next.js 15** - React framework for production
- **Sanity CMS** - Headless content management system
- **Clerk** - Authentication and user management
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Typed JavaScript superset
- **Zustand** - State management
- **Framer Motion** - Animations
- **Radix UI** - Accessible UI components

## 🛠️ Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Sanity account
- Clerk account

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/maritocuate/pdcsneakers.git
cd pdcsneakers
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the project root with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run typegen` - Generate TypeScript types for Sanity schema

## 📚 Project Structure

```
pdcsneakers/
├── app/                 # Next.js routes and pages
├── components/          # Reusable components
├── lib/                 # Utilities and configurations
├── public/             # Static files
├── sanity/             # Sanity configuration and schemas
└── types/              # TypeScript type definitions
```
