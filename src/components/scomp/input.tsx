import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputSec() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Input trackibg code......." />
      <Button type="submit">Track</Button>
    </div>
  )
}
