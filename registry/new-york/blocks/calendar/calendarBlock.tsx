import React from "react";
import { Calendar } from "@/registry/new-york/ui/calendar";

function CalendarBlock() {
  return (
    <div>
      <Calendar mode="single" className="rounded-lg border" />
    </div>
  );
}

export default CalendarBlock;
