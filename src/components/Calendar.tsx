import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [noteText, setNoteText] = useState("");

  const handleDateClick = (arg: any) => {
    const date = arg.date;

    setSelectedDate(date);
    const note = prompt("Введите заметку");

    if (note) {
      setNoteText(note);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height="90vh"
        dateClick={handleDateClick}
      />

      {selectedDate !== null && (
        <div>
          <h2>Выбранная дата:</h2>
          <p>{selectedDate.toDateString()}</p>
          <h2>Заметка:</h2>
          <p>{noteText}</p>
        </div>
      )}
    </div>
  );
}

export default Calendar;
