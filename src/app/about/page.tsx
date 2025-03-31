import { AboutUs } from "@/components/about/body"
import { Chart } from "@/components/about/chart"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Our Company</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            We're a leading shipping company dedicated to providing exceptional service and innovative logistics
            solutions worldwide.
          </p>
        </div>
      </div>

      <AboutUs />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Performance</h2>
        <Chart />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2010, our company has grown from a small local delivery service to a global shipping leader.
              We've built our reputation on reliability, innovation, and customer satisfaction.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our mission is to connect businesses and people worldwide through efficient, sustainable, and
              technology-driven shipping solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With a team of dedicated professionals and a state-of-the-art logistics network, we're committed to
              exceeding expectations with every package we deliver.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-full">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To provide the most reliable and efficient shipping services globally while maintaining the highest
                  standards of customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the world's most trusted shipping partner, known for innovation, sustainability, and exceptional
                  service.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Reliability and punctuality</li>
                  <li>Customer-centric approach</li>
                  <li>Innovation and continuous improvement</li>
                  <li>Environmental responsibility</li>
                  <li>Integrity in all operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

