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

## Submission Idea File

### Problem Statement
The Kindway BioReZens biotech portal required a transition from a legacy structure to a modern, mobile-first educational and commercial platform. During the refactoring process, several critical issues were identified that compromised the professional standard of the site:
1. Visual Inaccuracy: Product images were either broken or visually irrelevant. Examples included an apple icon appearing in place of a dental implant and non-medical stock photography used for surgical products. This was unacceptable for a medical biotech portal.
2. Functional Instability: The Training page featured a critical state management bug. When a user attempted to transition from the "View Details" dialog to the "Register Now" sheet, the application wiped the selected course state prematurely, leading to a broken registration flow.
3. Navigation Failures: The main navigation bar would become invisible or disappear on specific routes like the training page. This was caused by a combination of fragile Framer Motion animations and z-index layering conflicts.
4. Responsive Layout Issues: Core CTA sections and product grids were not optimized for mobile, causing horizontal scrolling and overlapping text on small screens.

### Proposed Solution
A systematic approach was taken to resolve these issues and deliver a production-ready portal:
1. Dental Asset Verification: A full image audit was performed. All product photography was replaced with verified clinical and industrial assets. Titanium implants are now represented by precision metal threads, and surgical motors are represented by dental handpieces rather than metaphorical placeholders.
2. State Decoupling: The logic for handling modal windows and side sheets was refactored. The course selection state is now maintained until a flow is explicitly completed or cancelled, allowing for a seamless transition between viewing course details and initiating registration.
3. Navigation Robustness: The primary header was converted to a standard sticky element, removing animation dependencies that caused visibility stalls. The z-index was standardized at a higher level (z-100) to ensure the navbar remains accessible above all page content and modal overlays.
4. Mobile Optimization: Responsive utility classes were applied to all major containers to ensure that layouts stack vertically on mobile devices. This includes the about page, product grids, and contact forms, ensuring 100% compliance with mobile-first design principles.
5. Technical Audit: A custom script was executed to verify that every image URL in the codebase returns a successful status code, ensuring zero broken links across the entire application.
