import Image from "next/image"

export function Partners() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Trusted by Leading Companies</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We partner with businesses of all sizes to provide reliable shipping solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={`/partner${index + 1}.png?height=60&width=120&text=Partner${index + 1}`}
                alt={`Partner ${index + 1}`}
                width={120}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

