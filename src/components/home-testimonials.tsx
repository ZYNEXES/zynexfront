import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Business Owner",
    content:
      "Switching to this shipping service was the best decision for my online store. Their reliable delivery times and easy tracking have significantly reduced customer complaints about shipping.",
    avatar: "SJ",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Import/Export Manager",
    content:
      "Their international shipping expertise has been invaluable for our business. The customs clearance assistance alone has saved us countless hours and prevented expensive delays.",
    avatar: "MC",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Logistics Coordinator",
    content:
      "We've been using their specialized shipping services for our temperature-sensitive products, and the quality has been consistently excellent. Their attention to detail is unmatched.",
    avatar: "ER",
    rating: 4,
  },
]

export function HomeTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border shadow-sm bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
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

