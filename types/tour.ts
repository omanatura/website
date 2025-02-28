export type Tour = {
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    days: number;
    images: string[];
    price: number;
    level: string;
    maxPerGroup: number;
    location: string;
    places: string[];
    languages: string[];
    startTime?: string; // Optional field
    duration?: string; // Optional field
    accessibility?: {
      wheelchair?: boolean; // Optional field
      fourWheel?: boolean; // Optional field
    };
  };