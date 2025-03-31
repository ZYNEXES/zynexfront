import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Business Owner",
    content:
      "Switching to this shipping service was the best decision for my online store. Their reliable delivery times and easy tracking have significantly reduced customer complaints about shipping.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Import/Export Manager",
    content:
      "Their international shipping expertise has been invaluable for our business. The customs clearance assistance alone has saved us countless hours and prevented expensive delays.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Logistics Coordinator",
    content:
      "We've been using their specialized shipping services for our temperature-sensitive products, and the quality has been consistently excellent. Their attention to detail is unmatched.",
    avatar: "ER",
  },
]

export function ServiceTestimonials() {
  return (
    <section className="w-full py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
            Don&#39;t just take our word for it. Here&#39;s what our clients have to say about our shipping services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border shadow-sm bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

