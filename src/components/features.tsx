import { Truck, Globe, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Faster & Reliable Delivery",
    description: "Get your packages delivered quickly and securely to any destination."
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Ship anywhere in the world with our extensive logistics network."
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Track your shipments live with our advanced tracking system."
  },
  {
    icon: Shield,
    title: "Secure & Insured",
    description: "Your shipments are protected with top-notch security and insurance options."
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Our shipping services are designed to provide speed, reliability, and security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}