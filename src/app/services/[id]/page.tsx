import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  // In a real app, you would fetch the service details from Supabase here
  const { id } = await params;
  const titleStr = id.replace(/-/g, ' ');
  return {
    title: `${titleStr.charAt(0).toUpperCase() + titleStr.slice(1)} | Sevensky Services`,
  };
}

import ServiceContent from './ServiceContent';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const serviceName = id.replace(/-/g, ' ');

  return <ServiceContent serviceName={serviceName} />;
}
