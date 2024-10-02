import { numberArrayReducerAction, numbers } from "../charts/NumberChart";

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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Numbers</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
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
          <AddNumber dispatch={dispatch} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
