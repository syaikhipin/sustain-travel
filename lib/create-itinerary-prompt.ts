import { ItineraryRequirements } from "@/lib/open-ai/generateItinerary";
import { formatArrayToText } from "./helpers";

export const createItineraryPrompt = (requirements: ItineraryRequirements) => {
  const destinations = requirements.destinations;
  const duration = requirements.duration;
  const activities = formatArrayToText(requirements.activities);
  const budget = requirements.budget;
  const months = formatArrayToText(requirements.months);
  const travellers = requirements.travellers;
  const dietaryRestrictions = formatArrayToText(
    requirements.dietaryRestrictions
  );
  const otherConsiderations = formatArrayToText(
    requirements.otherConsiderations
  );
  const inDepth = requirements.inDepth;

  return `Act as a travel expert for ${destinations} and provide a travel itinerary that fits to these requisites.
        - Trip duration: ${duration}
        - Activities to do: ${activities}
        ${budget ? `- Budget: ${budget}` : ''}
        ${months ? `- Best time to visit: ${months}` : ''}
        ${travellers ? `- Travellers: ${travellers}` : ''}
        ${dietaryRestrictions ? `- Dietary restrictions: ${dietaryRestrictions}` : ''}
        ${otherConsiderations ? `- Other considerations: ${otherConsiderations}` : ''}
        - Include sustainable travel options and practices
        ${inDepth ? `Please provide an in-depth itinerary, including:
        - Accommodation
        - Restaurants
        - Other relevant information` : ''}
    `;
}
