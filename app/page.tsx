import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";
import { Features } from "@/components/sections/Features";
import { FeatureUseCase } from "@/components/sections/FeatureUseCase";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
   <div>
      <Hero />
      <TrustedBy />
      <Features />
      <FeatureUseCase />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Pricing />
      <Contact />
   </div>
  );
}
