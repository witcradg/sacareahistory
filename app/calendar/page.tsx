"use client"

export default function CalendarPage() {
  return (
    <div className="bg-primary-400 text-primary-100">
      <div style={{
        position: 'relative',
        width: '80%',
        margin: '0 auto',
        paddingTop: '75%' // 4:3 aspect ratio; use 56.25% for 16:9
      }}>
        <iframe
          title="Sacareaconsortium Events"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showNav=0&showCalendars=0&showTz=0&title=SacArea%20History%20Consortium%20Event%20Calendar"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          allowFullScreen
        />
      </div>
    </div>
  );
}

