'use client';

import React, { useState, FormEvent, JSX } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {Input} from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ShipmentInfo {
  tracking_number: string;
  sender_name: string;
  current_location: string;
  status: string;
  [key: string]: string;
}

export  function InputComponent(): JSX.Element {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [shipmentInfo, setShipmentInfo] = useState<ShipmentInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrackShipment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!trackingNumber) return;
    try {
      const response = await axios.get<ShipmentInfo>(`https://backend-157g.onrender.com/api/shipments/track/${trackingNumber}`);
      setShipmentInfo(response.data);
      setError(null);
    } catch {
      setError("Shipment not found");
      setShipmentInfo(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <form
      className="flex w-full max-w-sm items-center space-x-2"
        onSubmit={handleTrackShipment}
      >
        <Input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <Button
          type="submit"
        >
          Track
        </Button>
      </form>

      {shipmentInfo && (
        <motion.div
          className="bg-black bg-opacity-50 justify-items-center text-white rounded-lg mt-4 p-4 shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-2">Shipment Info</h3>
          <p className="mb-1">
            <span className="font-semibold">Tracking Number:</span> {shipmentInfo.tracking_number}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Sender:</span> {shipmentInfo.sender_name}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Location:</span> {shipmentInfo.current_location}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {shipmentInfo.status}
          </p>
          <button
            className="mt-4 bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
          >
            See More
          </button>
        </motion.div>
      )}

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
