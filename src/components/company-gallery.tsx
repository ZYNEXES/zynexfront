"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Gallery data structure - easy to add more images later
const galleryData = {
  company: [
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Company+Office",
      alt: "Company Headquarters",
      caption: "Our modern headquarters in New York",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Team+Meeting",
      alt: "Team Meeting",
      caption: "Our logistics team planning global operations",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Customer+Service",
      alt: "Customer Service Center",
      caption: "Our 24/7 customer service center",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Warehouse",
      alt: "Main Warehouse",
      caption: "Our state-of-the-art warehouse facility",
    },
  ],
  vehicles: [
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Delivery+Trucks",
      alt: "Delivery Trucks",
      caption: "Our fleet of modern delivery trucks",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Cargo+Ship",
      alt: "Cargo Ship",
      caption: "One of our partner cargo vessels",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Cargo+Plane",
      alt: "Cargo Plane",
      caption: "Air freight operations",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Last+Mile+Delivery",
      alt: "Last Mile Delivery",
      caption: "Our last mile delivery vehicles",
    },
  ],
  facilities: [
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Distribution+Center",
      alt: "Distribution Center",
      caption: "Our main distribution center",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Loading+Dock",
      alt: "Loading Dock",
      caption: "Efficient loading dock operations",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Sorting+Facility",
      alt: "Sorting Facility",
      caption: "Advanced package sorting technology",
    },
    {
      src: "/bg-hero-2.jpg?height=600&width=800&text=Control+Room",
      alt: "Logistics Control Room",
      caption: "Our logistics control and monitoring center",
    },
  ],
}

export function CompanyGallery() {
  const [activeTab, setActiveTab] = useState("company")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const currentGallery = galleryData[activeTab as keyof typeof galleryData]

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === null ? 0 : (prev - 1 + currentGallery.length) % currentGallery.length))
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev === null ? 0 : (prev + 1) % currentGallery.length))
  }

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Company in Pictures</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Take a visual tour of our facilities, fleet, and operations around the world
          </p>
        </div>

        <Tabs defaultValue="company" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="vehicles">Vehicles & Fleet</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(galleryData).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryData[category as keyof typeof galleryData].map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={image.src || "/bg-hero-2.jpg"}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Dialog
                          open={isDialogOpen && selectedImage === index}
                          onOpenChange={(open) => {
                            setIsDialogOpen(open)
                            if (!open) setSelectedImage(null)
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="rounded-full"
                              onClick={() => setSelectedImage(index)}
                            >
                              <ZoomIn className="h-5 w-5" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader className="py-2">
                              <DialogTitle>{image.alt}</DialogTitle>
                              <DialogDescription>{image.caption}</DialogDescription>
                            </DialogHeader>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                              <Image
                                src={image.src || "/bg-hero-2.jpg"}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 80vw"
                                className="object-contain"
                              />
                            </div>
                            <div className="flex justify-between mt-2">
                              <Button variant="outline" size="icon" onClick={handlePrevious}>
                                <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" onClick={handleNext}>
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

