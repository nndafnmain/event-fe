import { EventCard } from "@/features/events/components/EventCard";
import React from "react";
interface Event {
  title: string;
  startDate: string;
  endDate?: string;
  price: number;
  organizer: string;
  imageSource: string;
}

const events: Event[] = [
  {
    title: "Tech Conference 2023",
    startDate: "2023-11-15",
    endDate: "2023-11-17",
    price: 299.99,
    organizer: "Tech Innovators Inc.",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Art Exhibition: Modern Masters",
    startDate: "2023-12-01",
    price: 50.0,
    organizer: "City Art Gallery",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Music Festival: Summer Beats",
    startDate: "2024-06-21",
    endDate: "2024-06-23",
    price: 150.0,
    organizer: "Global Sounds",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Startup Pitch Night",
    startDate: "2023-10-30",
    price: 25.0,
    organizer: "Venture Hub",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Food & Wine Tasting",
    startDate: "2023-11-10",
    endDate: "2023-11-12",
    price: 75.0,
    organizer: "Gourmet Delights",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Yoga Retreat Weekend",
    startDate: "2024-01-20",
    price: 120.0,
    organizer: "Zen Life",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Film Festival: Indie Showcase",
    startDate: "2024-03-05",
    endDate: "2024-03-10",
    price: 40.0,
    organizer: "Cinema Society",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Charity Run: City Marathon",
    startDate: "2024-04-14",
    price: 30.0,
    organizer: "Healthy Living Foundation",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Coding Bootcamp Workshop",
    startDate: "2023-12-15",
    endDate: "2023-12-17",
    price: 199.99,
    organizer: "Code Masters",
    imageSource: "/event/cd1.png",
  },
  {
    title: "Book Launch: New Authors",
    startDate: "2024-02-22",
    price: 10.0,
    organizer: "Literary Circle",
    imageSource: "/event/cd1.png",
  },
];

console.log(events);

export const RecommendedEvent = () => {
  return (
    <main className="container">
      <div>
        <h1>Recomendation</h1>
      </div>
      <section className="flex flex-grow gap-3">
        {events.map((event, idx) => {
          return (
            <div key={idx}>
              <EventCard
                imageSource={event.imageSource}
                organizer={event.organizer}
                price={event.price}
                startDate={event.startDate}
                title={event.title}
                endDate={event.endDate}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};
