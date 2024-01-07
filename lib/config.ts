import { Metadata } from "next";

export const seoConfig: Metadata = {
  title: "Sustain Travel: Explore the World Sustainably",
  description:
    "Discover sustainable travel planning with Sustain Travel. Just enter your destination and get an instant personalized itinerary. Explore the world while minimizing your carbon footprint with Sustain Travel - your fast track to a perfect trip",
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🌍</text></svg>",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://sustain-travel.vercel.app",
    images: [
      {
        url: "/assets/cover.jpg",
        width: 900,
        height: 400,
        alt: "Sustain Travel: Explore the World Sustainably",
      },
    ],
  },
};
