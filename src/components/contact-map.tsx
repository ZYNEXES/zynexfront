export function ContactMap() {
    return (
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Global Presence</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              With offices and logistics centers around the world, we're always close to your shipping needs
            </p>
          </div>
  
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
            {/* This would be replaced with an actual map component */}
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-500 dark:text-gray-400 mb-2">Interactive Map Placeholder</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  This would be replaced with an actual map showing office locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  