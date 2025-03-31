import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "How can I get a shipping quote?",
    answer:
      "You can get a shipping quote by filling out our online quote form, calling our customer service line at 1-800-123-4567, or by visiting one of our offices in person.",
  },
  {
    question: "What information do I need to provide for a quote?",
    answer:
      "To get an accurate quote, please provide the origin and destination addresses, package dimensions and weight, desired shipping speed, and any special handling requirements.",
  },
  {
    question: "How long does it take to get a response to my inquiry?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our customer service line for immediate assistance.",
  },
  {
    question: "Do you offer international shipping services?",
    answer:
      "Yes, we offer comprehensive international shipping services to over 200 countries worldwide, including express air freight, ocean freight, and specialized shipping solutions.",
  },
  {
    question: "How can I become a business partner or vendor?",
    answer:
      "For business partnership opportunities, please contact our business development team at partners@globalship.com with details about your company and proposed collaboration.",
  },
]

export function ContactFAQ() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find quick answers to common questions about our services and support
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full mb-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Can't find the answer you're looking for?</p>
            <Button asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

