import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { ContactFAQ } from "@/components/contact-faq"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <ContactHero />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
      <ContactFAQ />
    </main>
  )
}

