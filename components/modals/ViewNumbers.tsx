import { useEffect, useState } from "react";

import { numberArrayReducerAction, numbers } from "../charts/NumberChart";

import { useAnimate } from "framer-motion";

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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AddNumber from "./AddNumber";

export default function ViewNumbers({
  numbers,
  dispatch,
}: {
  numbers: numbers;
  dispatch: React.Dispatch<numberArrayReducerAction>;
}) {
  const [scope, animate] = useAnimate();

  const [isAddNumberOpen, setIsAddNumberOpen] = useState(false);

  // If the AddNumber modal is open, animate the current element.
  // Move it up by 5% and scale it down to 90%.
  // Also make it darker by changing the filter
  // These numbers are arbitrary and can be adjusted.
  //
  // If it is closed, reset it.
  useEffect(() => {
    if (!scope.current) return;

    if (isAddNumberOpen) {
      animate(scope.current, {
        transform: "translateX(-50%) translateY(-60%) scale(0.90)",
        left: "50%",
        top: "50%",
        filter: "brightness(0.95)",
      });
    } else {
      animate(scope.current, {
        transform: "translateX(-50%) translateY(-50%) scale(1)",
        left: "50%",
        top: "50%",
        filter: "brightness(1)",
      });
    }
  }, [isAddNumberOpen, animate, scope]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Numbers</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" ref={scope}>
        <DialogHeader>
          <DialogTitle>View Numbers</DialogTitle>
          <DialogDescription>
            View all the numbers in the chart.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Table>
            <TableCaption>All the numbers in the chart.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Numbers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {numbers.map((number) => (
                <TableRow key={number.number}>
                  <TableCell className="font-medium">{number.number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Back
            </Button>
          </DialogClose>
          <AddNumber
            dispatch={dispatch}
            open={isAddNumberOpen}
            onOpenChange={setIsAddNumberOpen}
            setOpen={setIsAddNumberOpen}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
