import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

export function ServiceComparison() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Service Comparison</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
            Compare our shipping services to find the best option for your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Service Features</TableHead>
                <TableHead className="text-center">Standard</TableHead>
                <TableHead className="text-center">Express</TableHead>
                <TableHead className="text-center">Premium</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Delivery Time</TableCell>
                <TableCell className="text-center">3-5 Business Days</TableCell>
                <TableCell className="text-center">1-2 Business Days</TableCell>
                <TableCell className="text-center">Same Day / Next Day</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Real-time Tracking</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 mx-auto text-primary" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 mx-auto text-primary" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 mx-auto text-primary" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Insurance Included</TableCell>
                <TableCell className="text-center">Up to $100</TableCell>
                <TableCell className="text-center">Up to $500</TableCell>
                <TableCell className="text-center">Up to $1,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Signature Required</TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 mx-auto text-gray-400" />
                </TableCell>
                <TableCell className="text-center">Optional</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 mx-auto text-primary" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weekend Delivery</TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 mx-auto text-gray-400" />
                </TableCell>
                <TableCell className="text-center">Optional</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 mx-auto text-primary" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Priority Handling</TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 mx-auto text-gray-400" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 mx-auto text-primary" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 mx-auto text-primary" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Packaging Provided</TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 mx-auto text-gray-400" />
                </TableCell>
                <TableCell className="text-center">Basic</TableCell>
                <TableCell className="text-center">Premium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">International Shipping</TableCell>
                <TableCell className="text-center">Select Countries</TableCell>
                <TableCell className="text-center">Most Countries</TableCell>
                <TableCell className="text-center">Global Coverage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Starting Price</TableCell>
                <TableCell className="text-center">$5.99</TableCell>
                <TableCell className="text-center">$15.99</TableCell>
                <TableCell className="text-center">$25.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

