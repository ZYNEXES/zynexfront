import { TrendingUp, Users, Globe, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "98.7%",
    label: "On-time Delivery",
    description: "Consistently meeting delivery deadlines",
  },
  {
    icon: Users,
    value: "10M+",
    label: "Happy Customers",
    description: "Trusted by millions worldwide",
  },
  {
    icon: Globe,
    value: "200+",
    label: "Countries Served",
    description: "Global shipping network",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Customer Support",
    description: "Always available to assist you",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Performance by Numbers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We take pride in our track record of excellence and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">{stat.label}</p>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

