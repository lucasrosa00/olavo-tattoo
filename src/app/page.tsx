import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { Studio } from '@/components/Studio';
import { Recognition } from '@/components/Recognition';
import { TattooBreakdown } from '@/components/TattooBreakdown';
import { About } from '@/components/About';
import { Curso } from '@/components/Curso';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Studio />
      <TattooBreakdown />
      <Gallery />
      <About />
      <Recognition />
      <Curso />
      <CTA />
      <Footer />
    </main>
  );
}