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
        ${budget ? `- Budget: ${requirements.budget}` : null}
        ${
          months
            ? `- Months: ${months} – if relevant, provide with the best time to visit`
            : null
        }
        ${travellers ? `- Travellers: ${travellers}` : null}
        ${
          dietaryRestrictions
            ? `- Dietary restrictions: ${dietaryRestrictions}`
            : null
        }
        ${
          otherConsiderations
            ? `- Other considerations to take into account: ${otherConsiderations}`
            : null
        }

        ${
          inDepth
            ? `Please do provide an in-depth itinerary, including:
        - Accommodation
        - Restaurants
        - Other relevant information
        `
            : null
        }
    `;
};
