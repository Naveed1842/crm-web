This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# CRM Web App

A web-based Customer Relationship Management (CRM) application built with Next.js, TypeScript, Redux, and Material-UI.

## Project Structure

- `/src/components/`: Reusable UI components (e.g., `PersonCard`, `NavBar`).
- `/src/hooks/`: Custom React hooks (e.g., `useFetchPeople`).
- `/src/pages/`: Next.js pages for routing (e.g., `index.tsx`, `people/index.tsx`).
- `/src/services/`: API or data fetching logic (e.g., `api.ts`).
- `/src/store/`: Redux state management (e.g., `peopleSlice.ts`).
- `/src/types/`: TypeScript type definitions (e.g., `types.ts`).

## Getting Started

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Open `http://localhost:3000` in your browser.