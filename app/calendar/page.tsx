"use client"
import { memo, useState, useEffect } from 'react'

const CALENDAR_URL = "https://calendar.google.com/calendar/embed?src=1e3d46c0cad5c2708a85c400112bf228ba8fadf04446feef62b14f31f30c4dc5%40group.calendar.google.com&ctz=America%2FLos_Angeles"
const CalendarFrame = memo(function CalendarFrame() {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    setTimestamp(`&t=${Date.now()}`)
  }, [])

  return (
    <div style={{
      position: 'relative',
      width: '80%',
      margin: '0 auto',
      paddingTop: '75%'
    }}>
      <iframe
        title="SacArea History Consortium Events"
        src={`${CALENDAR_URL}${timestamp}`}
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
  )
})

export default function CalendarPage() {
  return (
    <div className="bg-primary-400 text-primary-100">
      <h1 className="text-2xl font-bold mb-4 text-center mt-4">Calendar</h1>
      <p className="mx-auto mb-6 w-full lg:w-1/2">
        <span className='block'>This calendar shows events related to the Sacramento Area History Consortium.</span>
        <span className='block'>Contact us at sacarea@winfirst.com for more information about having your events included.</span>
      </p>
      <CalendarFrame />
    </div>
  )
}

