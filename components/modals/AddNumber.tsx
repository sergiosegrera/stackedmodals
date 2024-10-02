"use client";

import { Dispatch, useState } from "react";

import { numberArrayReducerAction } from "../charts/NumberChart";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddNumber({
  dispatch,
  open,
  onOpenChange,
  setOpen,
}: {
  dispatch: Dispatch<numberArrayReducerAction>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setOpen: (open: boolean) => void;
}) {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    dispatch({
      type: "add_number",
      payload: number,
    });

    // Close modal after adding the number
    setOpen(false);
    setNumber(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="default">Add Number</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Number</DialogTitle>
          <DialogDescription>Add a number to the chart.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="number" className="sr-only">
              Number
            </Label>
            <Input
              id="number"
              type="number"
              placeholder="Number"
              required
              onChange={(e) => setNumber(parseInt(e.target.value))}
              value={number}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Back
            </Button>
          </DialogClose>
          <Button type="submit" onClick={addNumber}>
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
