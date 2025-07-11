"use client"

import { useState } from "react"
import { SHIPMENTS, ShipmentDetails, ShipmentEvent } from "@/lib/shipment-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { PlusCircle, Edit2, Trash2, Save } from "lucide-react"

// Define type for form data
type ShipmentFormData = Omit<ShipmentDetails, 'events'> & {
  events_json: string
}

// Initial state for form
const initialShipmentFormState: ShipmentFormData = {
  tracking_number: "",
  status: "",
  estimated_delivery: "",
  service: "",
  weight: "",
  dimensions: "",
  origin: "",
  destination: "",
  sender_name: "",
  receiver_name: "",
  current_location_one: "",
  current_status_one: "",
  events_json: "[]",
}

export default function AdminShipmentsPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [shipments, setShipments] = useState<Record<string, ShipmentDetails>>(SHIPMENTS)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingShipment, setEditingShipment] = useState<ShipmentDetails | null>(null)
  const [shipmentForm, setShipmentForm] = useState<ShipmentFormData>(initialShipmentFormState)

  const handleLogin = () => {
    if (password === "adminpassword") {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setShipmentForm(prev => ({ ...prev, [name]: value }))
  }

  const handleAddShipment = () => {
    try {
      const events: ShipmentEvent[] = JSON.parse(shipmentForm.events_json)
      const newShipment: ShipmentDetails = {
        ...shipmentForm,
        events,
      }

      if (!newShipment.tracking_number || !newShipment.status || !newShipment.origin || !newShipment.destination) {
        alert("Tracking Number, Status, Origin, and Destination are required.")
        return
      }

      const updatedShipments = { ...shipments, [newShipment.tracking_number]: newShipment }
      setShipments(updatedShipments)
      Object.assign(SHIPMENTS, updatedShipments)

      setShowAddForm(false)
      setShipmentForm(initialShipmentFormState)
    } catch (error) {
      alert("Error parsing events JSON: " + error)
    }
  }

  const handleEditShipment = (trackingNumber: string) => {
    const shipmentToEdit = shipments[trackingNumber]
    if (shipmentToEdit) {
      setEditingShipment(shipmentToEdit)
      setShipmentForm({
        ...shipmentToEdit,
        events_json: JSON.stringify(shipmentToEdit.events, null, 2),
      })
      setShowAddForm(true)
    }
  }

  const handleUpdateShipment = () => {
    if (!editingShipment) return
    try {
      const events: ShipmentEvent[] = JSON.parse(shipmentForm.events_json)
      const updatedShipmentDetails: ShipmentDetails = {
        ...shipmentForm,
        tracking_number: editingShipment.tracking_number,
        events,
      }

      const updatedShipments = {
        ...shipments,
        [updatedShipmentDetails.tracking_number]: updatedShipmentDetails,
      }
      setShipments(updatedShipments)
      Object.assign(SHIPMENTS, updatedShipments)

      setShowAddForm(false)
      setEditingShipment(null)
      setShipmentForm(initialShipmentFormState)
    } catch (error) {
      alert("Error parsing events JSON for update: " + error)
    }
  }

  const handleDeleteShipment = (trackingNumber: string) => {
    if (window.confirm(`Are you sure you want to delete shipment ${trackingNumber}?`)) {
      const { [trackingNumber]: _, ...remainingShipments } = shipments
      setShipments(remainingShipments)
      delete SHIPMENTS[trackingNumber]

      if (editingShipment?.tracking_number === trackingNumber) {
        setShowAddForm(false)
        setEditingShipment(null)
        setShipmentForm(initialShipmentFormState)
      }
    }
  }

  const renderShipmentForm = () => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{editingShipment ? "Edit Shipment" : "Add New Shipment"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.keys(initialShipmentFormState).map((key) => {
          const fieldKey = key as keyof ShipmentFormData
          if (fieldKey === "tracking_number" && editingShipment) {
            return (
              <div key={fieldKey}>
                <Label htmlFor={fieldKey}>{fieldKey}</Label>
                <Input id={fieldKey} name={fieldKey} value={shipmentForm[fieldKey]} disabled />
              </div>
            )
          }
          if (fieldKey === "events_json") {
            return (
              <div key={fieldKey}>
                <Label htmlFor={fieldKey}>Events (JSON format)</Label>
                <Textarea
                  id={fieldKey}
                  name={fieldKey}
                  value={shipmentForm[fieldKey]}
                  onChange={handleInputChange}
                  rows={8}
                  placeholder='[{"date": "YYYY-MM-DD", "time": "HH:MM AM/PM", "location": "City, Country", "status": "Status", "description": "Details..."}]'
                />
              </div>
            )
          }
          return (
            <div key={fieldKey}>
              <Label htmlFor={fieldKey}>{fieldKey}</Label>
              <Input id={fieldKey} name={fieldKey} value={shipmentForm[fieldKey]} onChange={handleInputChange} />
            </div>
          )
        })}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline" onClick={() => { setShowAddForm(false); setEditingShipment(null); setShipmentForm(initialShipmentFormState); }}>Cancel</Button>
        <Button onClick={editingShipment ? handleUpdateShipment : handleAddShipment} className="bg-green-500 hover:bg-green-600">
          <Save className="mr-2 h-4 w-4" /> {editingShipment ? "Update" : "Save"}
        </Button>
      </CardFooter>
    </Card>
  )

  const renderShipmentList = () => (
    <div className="space-y-4">
      {Object.values(shipments).map((shipment) => (
        <Card key={shipment.tracking_number}>
          <CardHeader>
            <CardTitle className="flex justify-between">
              {shipment.tracking_number}
              <span className={`text-xs rounded-full px-2 py-1 ${
                shipment.status === "Delivered" ? "bg-green-200 text-green-900" :
                shipment.status === "In Transit" ? "bg-blue-200 text-blue-900" :
                "bg-yellow-200 text-yellow-900"
              }`}>
                {shipment.status}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p><strong>Origin:</strong> {shipment.origin}</p>
            <p><strong>Destination:</strong> {shipment.destination}</p>
            <p><strong>Estimated Delivery:</strong> {shipment.estimated_delivery}</p>
            <p><strong>Service:</strong> {shipment.service}</p>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline" size="sm" onClick={() => handleEditShipment(shipment.tracking_number)}>
              <Edit2 className="mr-1 h-4 w-4" /> Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={() => handleDeleteShipment(shipment.tracking_number)}>
              <Trash2 className="mr-1 h-4 w-4" /> Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Admin Login</h1>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full mb-4"
          />
          <Button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md"
          >
            Login
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 sm:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Shipment Management</h1>
          <Button
            onClick={() => { setShowAddForm(true); setEditingShipment(null); setShipmentForm(initialShipmentFormState); }}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <PlusCircle className="mr-2 h-5 w-5" /> Add New Shipment
          </Button>
        </div>

        {showAddForm ? renderShipmentForm() : renderShipmentList()}
      </div>
    </div>
  )
}
