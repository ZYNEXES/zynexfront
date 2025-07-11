// Mock shipment data store
export interface ShipmentEvent {
    date: string
    time: string
    location: string
    status: string
    description: string
  }
  
  export interface ShipmentDetails {
    tracking_number: string
    status: string
    estimated_delivery: string
    service: string
    weight: string
    dimensions: string
    origin: string
    destination: string
    sender_name: string
    receiver_name: string
    current_location_one?: string
    current_status_one?: string
    events: ShipmentEvent[]
  }
  
  // Dictionary of shipments by tracking number
  export const SHIPMENTS: Record<string, ShipmentDetails> = {
    ABC123456789: {
      tracking_number: "ABC123456789",
      status: "In Transit",
      estimated_delivery: "June 15, 2023",
      service: "Express Shipping",
      weight: "5.2 kg",
      dimensions: "30 × 20 × 15 cm",
      origin: "New York, USA",
      destination: "London, UK",
      sender_name: "John Smith",
      receiver_name: "Emma Johnson",
      current_location_one: "Frankfurt Airport, Germany",
      current_status_one: "In Transit",
      events: [
        {
          date: "June 10, 2023",
          time: "08:30 AM",
          location: "London Heathrow Airport, UK",
          status: "Arrived at Destination",
          description: "Package has arrived at destination airport and is awaiting customs clearance.",
        },
        {
          date: "June 9, 2023",
          time: "10:15 PM",
          location: "Frankfurt Airport, Germany",
          status: "In Transit",
          description: "Package is in transit to the next facility.",
        },
        {
          date: "June 8, 2023",
          time: "02:45 PM",
          location: "JFK International Airport, USA",
          status: "Departed",
          description: "Package has departed from origin airport.",
        },
        {
          date: "June 7, 2023",
          time: "11:20 AM",
          location: "New York Sorting Facility, USA",
          status: "Processed",
          description: "Package has been processed and is ready for departure.",
        },
        {
          date: "June 6, 2023",
          time: "09:45 AM",
          location: "New York, USA",
          status: "Picked Up",
          description: "Package has been picked up by carrier.",
        },
      ],
    },
    XYZ987654321: {
      tracking_number: "XYZ987654321",
      status: "Delivered",
      estimated_delivery: "June 5, 2023",
      service: "Standard Shipping",
      weight: "2.8 kg",
      dimensions: "25 × 15 × 10 cm",
      origin: "Los Angeles, USA",
      destination: "Toronto, Canada",
      sender_name: "Sarah Williams",
      receiver_name: "Michael Brown",
      current_location_one: "Toronto, Canada",
      current_status_one: "Delivered",
      events: [
        {
          date: "June 5, 2023",
          time: "14:20 PM",
          location: "Toronto, Canada",
          status: "Delivered",
          description: "Package has been delivered to the recipient.",
        },
        {
          date: "June 4, 2023",
          time: "09:30 AM",
          location: "Toronto Distribution Center, Canada",
          status: "Out for Delivery",
          description: "Package is out for delivery.",
        },
        {
          date: "June 3, 2023",
          time: "18:45 PM",
          location: "Toronto Customs, Canada",
          status: "Cleared Customs",
          description: "Package has cleared customs.",
        },
        {
          date: "June 2, 2023",
          time: "08:15 AM",
          location: "Vancouver Airport, Canada",
          status: "Arrived",
          description: "Package has arrived in destination country.",
        },
        {
          date: "June 1, 2023",
          time: "22:30 PM",
          location: "Los Angeles Airport, USA",
          status: "Departed",
          description: "Package has departed from origin country.",
        },
      ],
    },
 DEF567891234: {
  tracking_number: "DEF567891234",
  status: "In Transit",
  estimated_delivery: "July 15, 2025", // Monday next week
  service: "Highly Secure Shipping",
  weight: "1.56 cts",
  dimensions: "6.04 mm x 4.11 mm x 2.75 mm; 6.02 mm x 4.18 mm x 2.78 mm",
  origin: "Erbil, Iraq",
  destination: "Berlin, Germany",
  sender_name: "Axon Logistics via Emma Schmidt",
  receiver_name: "Emma Schmidt",
  current_location_one: "Istanbul Transit Hub, Turkey",
  current_status_one: "Arrived",
  events: [
    {
      date: "July 10, 2025",
      time: "12:00 PM",
      location: "Erbil, Iraq",
      status: "Departed",
      description: "Shipment left Erbil en route to Istanbul transit hub.",
    },
    {
      date: "July 10, 2025",
      time: "01:38 PM",
      location: "Istanbul Transit Hub, Turkey",
      status: "Arrived",
      description: "Package arrived at Istanbul and will be on the way to Berlin soon.",
    },
  ],
}


  }
  
  // Function to get shipment by tracking number
  export function getShipment(trackingNumber: string): ShipmentDetails | null {
    return SHIPMENTS[trackingNumber] || null
  }
  
  // Function to simulate API delay
  export function fetchShipmentWithDelay(trackingNumber: string): Promise<ShipmentDetails | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getShipment(trackingNumber))
      }, 2000) // 2 second delay
    })
  }
  