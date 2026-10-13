import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import CostEstimator from '@/components/CostEstimator';
import Services from '@/components/Services';
import TransformationSlider from '@/components/TransformationSlider';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Team from '@/components/Team';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-14 lg:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <CostEstimator />
        <Services />
        <TransformationSlider />
        <WhyUs />
        <Process />
        <Team />
        <Portfolio />
        <Testimonials />
        <FaqAccordion />
        <BookingForm />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
