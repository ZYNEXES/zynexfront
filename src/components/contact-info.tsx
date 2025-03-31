import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

const offices = [
  {
    city: "New York",
    address: "123 Shipping Lane, New York, NY 10001",
    phone: "+1 (212) 555-7890",
    email: "newyork@globalship.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM",
  },
  {
    city: "London",
    address: "456 Logistics Road, London, EC1A 1BB",
    phone: "+44 20 7946 0958",
    email: "london@globalship.com",
    hours: "Mon-Fri: 9:00 AM - 5:30 PM",
  },
  {
    city: "Singapore",
    address: "789 Cargo Street, Singapore, 018956",
    phone: "+65 6123 4567",
    email: "singapore@globalship.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Customer Service</p>
              <p className="text-gray-600 dark:text-gray-400">+1 (800) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Email Us</p>
              <p className="text-gray-600 dark:text-gray-400">info@globalship.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Customer Support Hours</p>
              <p className="text-gray-600 dark:text-gray-400">24/7 for urgent inquiries</p>
              <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 8:00 AM - 8:00 PM (General inquiries)</p>
            </div>
          </div>

          <div className="flex items-start">
            <Globe className="h-5 w-5 mr-3 text-primary mt-0.5" />
            <div>
              <p className="font-medium">International Support</p>
              <p className="text-gray-600 dark:text-gray-400">Available in multiple languages</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Offices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div key={index} className={index > 0 ? "pt-6 border-t" : ""}>
                <h3 className="font-bold text-lg mb-2">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

