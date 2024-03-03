import ReactMarkdown from "react-markdown";
import SignupForm from "@/app/_components/Events/SignupForm";
import FeaturedItems from "@/app/_components/FeatureItems/FeaturedItems";

export default async function Page({ params }) {
  const { eventId } = params;
  const event = await fetchIndividualEvent(eventId);
  const otherEvents = await fetchAllEvents(eventId);

  const descriptionMarkdown = (
    <ReactMarkdown className="copy">{event.description}</ReactMarkdown>
  );

  const pricing = {
    singlePrice: event.singlePrice,
    sharedPrice: event.sharedPrice,
  };

  return (
    <main>
      <main className="events-page">
        <SignupForm
          headline={event.name}
          infoText={descriptionMarkdown}
          buttonLabel="Sign Up"
          pricing={pricing}
          eventId={eventId}
        />
        <FeaturedItems
          items={otherEvents}
          itemType="event"
          headline="Explore our other events"
        />
      </main>
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const works = await fetchDataFromStrapi("works");
    const slugs = events.map((event) => ({
      eventId: String(event.id),
    }));
    return slugs;
  } catch (err) {
    console.log("error fetching slugs for works", err);
  }
}
