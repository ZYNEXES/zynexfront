import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This shipping service is top-notch! My package arrived on time and in perfect condition.",
    role: "Business Owner",
  },
  {
    name: "Jane Smith",
    feedback: "Fantastic customer service! They kept me updated throughout the entire process.",
    role: "Frequent Shopper",
  },
  {
    name: "Robert Brown",
    feedback: "Super reliable and efficient. I’ll definitely be using this service again!",
    role: "E-commerce Seller",
  },
  {
    name: "Emily White",
    feedback: "Easy to use and very transparent with tracking. Highly recommended!",
    role: "Online Retailer",
  },
  {
    name: "Michael Green",
    feedback: "Affordable and fast shipping! Exceeded my expectations.",
    role: "Small Business Owner",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{testimonial.feedback}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
