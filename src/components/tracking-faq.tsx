import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I track my shipment?",
    answer:
      "You can track your shipment by entering your tracking number in the tracking form above. Your tracking number can be found in your shipping confirmation email or receipt.",
  },
  {
    question: "What do the different shipment statuses mean?",
    answer:
      "Our tracking system uses several status indicators: 'Pending' means the shipment has been registered but not yet picked up, 'In Transit' means the package is on its way, 'Out for Delivery' means it will be delivered today, and 'Delivered' means the package has been delivered.",
  },
  {
    question: "My tracking information hasn't updated. What should I do?",
    answer:
      "Tracking information may take 24-48 hours to update in our system. If your tracking hasn't updated after 48 hours, please contact our customer service team for assistance.",
  },
  {
    question: "Can I track multiple shipments at once?",
    answer:
      "Yes, you can track multiple shipments by entering multiple tracking numbers separated by commas in the tracking form.",
  },
  {
    question: "How long will my shipment take to arrive?",
    answer:
      "Delivery times vary based on the shipping service selected, origin, destination, and customs clearance (for international shipments). You can find the estimated delivery date in your tracking information.",
  },
  {
    question: "What should I do if my package shows as delivered but I haven't received it?",
    answer:
      "If your package shows as delivered but you haven't received it, first check around your delivery location including any safe spaces. If you still can't find it, please contact our customer service team with your tracking number for immediate assistance.",
  },
]

export function TrackingFAQ() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about tracking your shipments
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

