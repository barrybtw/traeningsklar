export const ICSTest = () => (
  <button
    onClick={() => {
      /* Send the user a ics file, this is a test */
      const dtStart = "20250820T170000"; // 20 Aug 2025 17:00 local time (floating)
      const dtEnd = "20250820T180000"; // End time 18:00

      const dtStampIso = new Date().toISOString();
      const dtStamp = dtStampIso.replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z"); // YYYYMMDDTHHMMSSZ

      const uid = `uid-${Date.now()}@traeningsklar`;

      const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "CALSCALE:GREGORIAN",
        "PRODID:-//traeningsklar//EN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        `UID:${uid}`,
        `DTSTAMP:${dtStamp}`,
        "SUMMARY:Dinner",
        `DTSTART:${dtStart}`,
        `DTEND:${dtEnd}`,
        "DESCRIPTION:Dinner at 5pm",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\r\n");

      const url = "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
      window.open(url);
    }}
  >
    Test ics fil
  </button>
);
