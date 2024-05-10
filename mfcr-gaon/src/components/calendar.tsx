// components/Calendar.js
import React from "react";

function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  let days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div key={`empty-${i}`} className="border p-4 opacity-0">
        00
      </div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div key={day} className="border p-4">
        {day}
      </div>
    );
  }

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const headers = dayNames.map((day) => (
    <div key={day} className="font-bold text-center">
      {day}
    </div>
  ));

  return (
    <div>
      <div className="grid grid-cols-7 gap-1">
        {headers}
        {days}
      </div>
    </div>
  );
}

export default Calendar;
