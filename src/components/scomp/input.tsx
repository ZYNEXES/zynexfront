'use client';

import React, { useState, FormEvent, JSX } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

interface ShipmentInfo {
  tracking_number: string;
  sender_name: string;
  current_location: string;
  status: string;
  [key: string]: string;
}

export function InputComponent(): JSX.Element {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [shipmentInfo, setShipmentInfo] = useState<ShipmentInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTrackShipment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!trackingNumber) return;

    setLoading(true);
    setShipmentInfo(null);
    setError(null);

    try {
      const response = await axios.get<ShipmentInfo>(
        `https://backend-157g.onrender.com/api/shipments/track/${trackingNumber}`
      );
      setShipmentInfo(response.data);
    } catch {
      setError("Shipment not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {/* Form */}
      <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={handleTrackShipment}>
        <Input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Track"}
        </Button>
      </form>

      {/* Loading Skeleton */}
      {loading && (
        <Card className="mt-4 p-4">
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-2/3 mb-1" />
          <Skeleton className="h-4 w-1/2 mb-1" />
        </Card>
      )}

      {/* Shipment Info */}
      {shipmentInfo && !loading && (
        <Card className="mt-4 p-4">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Shipment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p><span className="font-semibold">Tracking Number:</span> {shipmentInfo.tracking_number}</p>
            <p><span className="font-semibold">Sender:</span> {shipmentInfo.sender_name}</p>
            <p><span className="font-semibold">Location:</span> {shipmentInfo.current_location}</p>
            <p><span className="font-semibold">Status:</span> {shipmentInfo.status}</p>
          </CardContent>
        </Card>
      )}

      {/* Error Message */}
      {error && (
        <motion.p
          className="text-red-500 font-semibold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
