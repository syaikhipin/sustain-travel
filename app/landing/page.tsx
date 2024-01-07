import TripPlaner from "@/components/itinerary-form/trip-planner";
import Hero from "@/components/hero";
import PageWrapper from "@/components/page-wrapper";

const Page = () => {
  return (
    <PageWrapper>
      <Hero
  title={
    <>
      Embrace Sustainable <span className="color-effect">Travel</span>
      <br />
      with Expert Planning.
    </>
  }
  description="Discover how our AI-powered travel assistant can assist you in crafting an eco-friendly itinerary for your next trip and enhance your sustainable travel experience."
/>

      <div className="h-12" />
      <TripPlaner />
    </PageWrapper>
  );
};

export default Page;
