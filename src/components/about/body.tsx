'use client';
import * as React from "react";
import { Truck, Globe, Clock, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const about = [
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description: "Get your packages delivered quickly and securely to any destination.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Ship anywhere in the world with our extensive logistics network.",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Track your shipments live with our advanced tracking system.",
  },
  {
    icon: Shield,
    title: "Secure & Insured",
    description: "Your shipments are protected with top-notch security and insurance options.",
  },
];

export default function AboutUs(): JSX.Element {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 px-4">
      {about.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <CardHeader>
              <CardTitle className="text-center text-lg font-bold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-gray-700">
              {item.description}
            </CardContent>
            <CardFooter className="flex justify-center mt-4">
              <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
