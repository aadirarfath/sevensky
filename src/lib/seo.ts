import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Sevensky',
    default: 'Sevensky | All-in-One Advertising & Event Activation',
  },
  description: 'A premium digital hub connecting brands, marketing services, and event execution globally. We turn your ambitious concepts into tangible, high-impact experiences.',
  keywords: ['Event Setup', 'Digital Marketing', 'Exhibition Booths', 'Mall Activations', 'Branding', 'Market Research'],
  openGraph: {
    title: 'Sevensky | Advertising & Events',
    description: 'A premium digital hub connecting brands, marketing services, and event execution globally.',
    url: 'https://sevensky.com', // Replace with production URL
    siteName: 'Sevensky',
    images: [
      {
        url: 'https://sevensky.com/og-image.jpg', // Recommend replacing this with a real generated asset
        width: 1200,
        height: 630,
        alt: 'Sevensky Platform Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sevensky | All-in-One Advertising & Event Activation',
    description: 'Connecting brands, marketing services, and event execution.',
    images: ['https://sevensky.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};
