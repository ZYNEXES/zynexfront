"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, X, Package } from "lucide-react"
import { getTrackingHistory, removeFromTrackingHistory, type TrackingHistoryItem } from "@/lib/tracking-history"
import { formatDistanceToNow } from "date-fns"

interface TrackingHistoryProps {
  onSelectTracking?: (trackingNumber: string) => void
  insertMode?: boolean // When true, clicking will insert the number instead of navigating
  dropdownMode?: boolean // When true, style as a dropdown
}

export function TrackingHistory({ onSelectTracking, insertMode = false, dropdownMode = false }: TrackingHistoryProps) {
  const [history, setHistory] = useState<TrackingHistoryItem[]>([])

  useEffect(() => {
    // Load tracking history from localStorage
    setHistory(getTrackingHistory())

    // Set up event listener for storage changes (in case multiple tabs are open)
    const handleStorageChange = () => {
      setHistory(getTrackingHistory())
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const handleRemove = (trackingNumber: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    removeFromTrackingHistory(trackingNumber)
    setHistory(getTrackingHistory())
  }

  const handleSelect = (trackingNumber: string) => {
    if (onSelectTracking) {
      onSelectTracking(trackingNumber)
    }
  }

  if (history.length === 0) {
    return null
  }

  // For dropdown mode, use a different style
  if (dropdownMode) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden">
        <div className="p-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center">
          <Clock className="h-3 w-3 mr-2 text-gray-500" />
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Recent Tracking Numbers</span>
        </div>
        <div className="max-h-60 overflow-y-auto">
          {history.map((item) => (
            <div
              key={item.trackingNumber}
              className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0"
              onClick={() => handleSelect(item.trackingNumber)}
            >
              <div className="flex items-center">
                <Package className="h-4 w-4 mr-2 text-primary" />
                <div>
                  <div className="font-medium text-sm">{item.trackingNumber}</div>
                  <div className="text-xs text-gray-500">
                    {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 opacity-50 hover:opacity-100"
                onClick={(e) => handleRemove(item.trackingNumber, e)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Original card style for non-dropdown mode
  return (
    <Card className={insertMode ? "mb-2" : "mb-6"}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          Recent Tracking Numbers
        </CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <div className="space-y-2">
          {history.map((item) => (
            <div
              key={item.trackingNumber}
              className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              onClick={() => handleSelect(item.trackingNumber)}
            >
              <div className="flex items-center">
                <Package className="h-4 w-4 mr-2 text-primary" />
                <div>
                  <div className="font-medium text-sm">{item.trackingNumber}</div>
                  <div className="text-xs text-gray-500">
                    {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={(e) => handleRemove(item.trackingNumber, e)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
