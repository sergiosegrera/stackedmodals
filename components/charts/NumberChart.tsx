"use client";

import { useReducer } from "react";

import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

import ViewNumbers from "@/components/modals/ViewNumbers";
import { Card } from "../ui/card";

const CHART_CONFIG = {
  number: {
    label: "number",
  },
} satisfies ChartConfig;

const INITIAL_NUMBERS = [{ number: 4 }, { number: 7 }, { number: 9 }];

// Types for the reducer
export type numberArrayReducerAction = { type: "add_number"; payload: number };
export type numbers = { number: number }[];

// I try to use the useReducer hook as much as possible as they provide a superior way of handling validation & edge cases
// A bit overkill for this scenario though.
const numberArrayReducer = (
  state: numbers,
  action: numberArrayReducerAction
) => {
  switch (action.type) {
    case "add_number":
      // Add the new number to the array
      return [...state, { number: action.payload }];
    default:
      return state;
  }
};

export default function NumberChart() {
  const [numbers, dispatch] = useReducer(numberArrayReducer, INITIAL_NUMBERS);

  return (
    <Card className="p-4">
      <h1 className="font-bold text-2xl">Number Chart</h1>
      <ChartContainer
        config={CHART_CONFIG}
        className="min-h-[200px] w-full my-3"
      >
        <BarChart accessibilityLayer data={numbers}>
          <Bar dataKey="number" radius={4} />
        </BarChart>
      </ChartContainer>
      <ViewNumbers dispatch={dispatch} numbers={numbers} />
    </Card>
  );
}
