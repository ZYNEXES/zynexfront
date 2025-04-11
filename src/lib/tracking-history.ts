// Maximum number of tracking numbers to store in history
const MAX_HISTORY_ITEMS = 5

// Interface for tracking history items
export interface TrackingHistoryItem {
  trackingNumber: string
  timestamp: number // When it was last accessed
  label?: string // Optional user-provided label
}

/**
 * Get tracking history from localStorage
 */
export function getTrackingHistory(): TrackingHistoryItem[] {
  if (typeof window === "undefined") return []

  try {
    const history = localStorage.getItem("tracking-history")
    return history ? JSON.parse(history) : []
  } catch (error) {
    console.error("Failed to parse tracking history:", error)
    return []
  }
}

/**
 * Add a tracking number to history
 */
export function addToTrackingHistory(trackingNumber: string, label?: string): void {
  if (typeof window === "undefined" || !trackingNumber) return

  try {
    const history = getTrackingHistory()

    // Remove existing entry with the same tracking number if it exists
    const filteredHistory = history.filter((item) => item.trackingNumber !== trackingNumber)

    // Add the new/updated entry at the beginning
    const newHistory = [
      {
        trackingNumber,
        timestamp: Date.now(),
        label: label || undefined,
      },
      ...filteredHistory,
    ].slice(0, MAX_HISTORY_ITEMS) // Keep only the most recent items

    localStorage.setItem("tracking-history", JSON.stringify(newHistory))
  } catch (error) {
    console.error("Failed to save tracking history:", error)
  }
}

/**
 * Remove a tracking number from history
 */
export function removeFromTrackingHistory(trackingNumber: string): void {
  if (typeof window === "undefined") return

  try {
    const history = getTrackingHistory()
    const newHistory = history.filter((item) => item.trackingNumber !== trackingNumber)
    localStorage.setItem("tracking-history", JSON.stringify(newHistory))
  } catch (error) {
    console.error("Failed to remove from tracking history:", error)
  }
}

/**
 * Clear all tracking history
 */
export function clearTrackingHistory(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("tracking-history")
}
