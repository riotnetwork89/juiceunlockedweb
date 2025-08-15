# JUICE UNLOCKED - Music Blog & Promo Platform

A production-ready music blog and promotional platform built with Next.js, featuring artist submissions, promotional services, merchandise, and admin management.

## 🎵 Features

### Core Pages
- **Home**: Hero section, trending posts, latest releases, "Just Unlocked" ticker
- **Promo**: Promotional service packages ($50-$2500) with PayPal integration
- **Music**: Featured tracks carousel, browse grid with filters, streaming functionality
- **Submit**: Comprehensive music submission form with file uploads
- **Merch**: Product catalog with size selection and cart functionality
- **Admin**: Dashboard for managing submissions, orders, and analytics

### Technical Features
- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom brand tokens and utilities
- **Supabase** integration for auth, database, and file storage
- **PayPal Checkout** for payment processing
- **EmailJS** for confirmation emails
- **Mobile-first** responsive design
- **Consistent branding** with orange/yellow color scheme

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account and project
- PayPal developer account
- EmailJS account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/riotnetwork89/juiceunlockedweb.git
cd juiceunlockedweb
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# PayPal Configuration
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
```

4. Set up Supabase database:
Run the SQL schema in your Supabase SQL editor:
```bash
cat src/lib/database-schema.sql
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🎨 Brand System

### Colors
- **Orange**: #FF6A00 (Primary brand color)
- **Pulp Yellow**: #FFE566 (Secondary highlight)
- **Leaf Green**: #188A2D (Accent color)
- **Black**: #0B0B0B (Background)

### Typography
- **Headlines**: Bold display fonts (Impact/Anton/League Spartan)
- **Body**: Inter system font

### UI Components
- `.btn-juice`: Gradient button (pulp → orange)
- `.chip`: Small status/category tags
- `.card`: Content containers with consistent styling
- `.ju-hero`: Hero gradient utility

## 📊 Database Schema

The application uses Supabase with the following main tables:
- `profiles`: User profiles and roles
- `posts`: Blog posts and content
- `projects`: Music projects/albums
- `tracks`: Individual songs
- `orders`: Payment transactions
- `promo_orders`: Promotional service details
- `products`: Merchandise items
- `comments` & `ratings`: User engagement

See `src/lib/database-schema.sql` for complete schema with RLS policies.

## 🛒 Payment Integration

### Promo Services
- Instagram Post: $50
- Instagram Story: $50
- Podcast Appearance: $200
- Full Album Rollout: $2,500
- Priority Review: $29

### PayPal Integration
- Client-side PayPal Checkout components
- Server-side payment verification
- Order tracking and fulfillment

## 📱 API Routes

- `POST /api/submit-music`: Handle music submissions with file uploads
- `POST /api/create-payment`: Initialize PayPal payments
- `POST /api/complete-payment`: Verify and complete payments

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── admin/          # Admin dashboard
│   ├── api/            # API routes
│   ├── music/          # Music browsing
│   ├── promo/          # Promotional services
│   ├── submit/         # Music submission
│   └── merch/          # Merchandise
├── components/         # Reusable components
└── lib/               # Utilities and configurations
```

### Key Components
- `Navigation`: Main site navigation
- `ButtonJuice`: Branded gradient buttons
- `Card`: Consistent content containers
- `Chip`: Status and category tags

## 🚀 Deployment

### Vercel Deployment
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Setup
Ensure all environment variables are configured in your deployment platform:
- Supabase credentials
- PayPal API keys
- EmailJS configuration

## 📈 Performance

- Mobile-first responsive design
- Optimized for Lighthouse 90+ performance score
- Sub-2s TTFB target
- Efficient image loading and caching

## 🎯 User Flows

### Music Submission
1. Artist fills out submission form
2. Uploads cover art and audio files
3. Optional priority review ($29)
4. Submission appears in admin queue
5. Admin approves/declines
6. Approved tracks go live on Music page

### Promo Purchase
1. User selects promotional package
2. Fills out artist information
3. PayPal checkout process
4. Order confirmation email
5. Deliverables tracked in admin dashboard

## 🔐 Security

- Row Level Security (RLS) policies in Supabase
- Environment variables for sensitive data
- PayPal webhook verification
- File upload validation and sanitization

## 📞 Support

For technical support or questions about the JUICE UNLOCKED platform, please refer to the documentation or contact the development team.

---

Built with ❤️ for the music community
