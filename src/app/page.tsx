import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"
import { HomeTestimonials } from "@/components/home-testimonials"
// import { Partners } from "@/components/partners"
import { LatestNews } from "@/components/latest-news"
import { HomeCTA } from "@/components/home-cta"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <HomeTestimonials />
      {/* <Partners /> */}
      <LatestNews />
      <HomeCTA />
    </main>
  )
}

