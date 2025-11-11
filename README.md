# ACID Landing Page

A Next.js 16 landing page for ACID non-alcoholic aperitif, matching the promotional flyer design.

## Features

- Responsive landing page matching the ACID flyer design
- Contact form for venue registration
- Email integration via Resend
- Built with Next.js 16, Tailwind CSS v4, and Shadcn UI

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```
RESEND_API_KEY=your_resend_api_key_here
```

Get your Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)

3. Update the email sender in `app/api/contact/route.ts`:
   - Replace `"onboarding@resend.dev"` with your verified domain email address
   - Or use Resend's test domain for development

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/page.tsx` - Main landing page
- `app/api/contact/route.ts` - API endpoint for form submissions
- `components/acid-logo.tsx` - ACID logo component with colorful splashes
- `components/contact-form.tsx` - Contact form component
- `lib/resend.ts` - Resend client configuration

## Form Fields

The contact form collects:
- Naam van de zaak (Venue name)
- Adres (Address)
- Telefoonnummer (Phone number)
- Email

Submissions are sent to `drop@aciddrinks.com` via Resend.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Shadcn UI
- Resend (Email service)
- React Hook Form
- Zod (Form validation)

