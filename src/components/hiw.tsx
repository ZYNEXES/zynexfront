import { Package, DollarSign, Search } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Enter Shipment Details",
    description: "Provide package size, weight, and destination to get started."
  },
  {
    icon: DollarSign,
    title: "Get an Instant Quote",
    description: "Receive real-time pricing based on your shipping needs."
  },
  {
    icon: Search,
    title: "Track Your Package",
    description: "Monitor your shipment in real-time with our advanced tracking system."
  }
];

export default function Hiw() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Our simple process ensures a seamless shipping experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center">
              <step.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
