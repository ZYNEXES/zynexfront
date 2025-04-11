import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function BlogPagination() {
  return (
    <div className="flex items-center justify-between mt-12">
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      <div className="flex items-center gap-1">
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          1
        </Button>
        <Button variant="default" size="sm" className="h-8 w-8 p-0">
          2
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          3
        </Button>
        <span className="mx-1">...</span>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          8
        </Button>
      </div>
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
