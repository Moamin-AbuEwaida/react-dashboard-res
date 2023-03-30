import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalendar from "../../store/Calendar";
import { createEventId } from "../../data";
import "./Calendar.css";
const Calendar = () => {
  const { currentEvents, setCurrentEvents } = useCalendar();
  const handelEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };
  const handelDateSelect = (selectInfo) => {
    let title = prompt("please enter a title for the event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handelEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this event?")) {
      clickInfo.event.remove();
    }
  };
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        allDaySlot={false}
        initialView="timeGridWeek"
        slotDuration={"01:00:00"}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        initialEvents={currentEvents}
        eventsSet={handelEvents}
        select={handelDateSelect}
        eventClick={handelEventClick}
      />
    </div>
  );
};

export default Calendar;