import AircraftCard from "@/components/aircraft-card";

const FLEET = [
  {
    name: "Gulfstream G650",
    image: "https://images.unsplash.com/photo-1625517568254-de4206a86a2e",
    description: "Ultra-long-range business jet with superior comfort and performance.",
    specs: [
      { label: "Range", value: "7,000 nautical miles" },
      { label: "Passenger Capacity", value: "Up to 19" },
      { label: "Cruising Speed", value: "Mach 0.85" },
      { label: "Cabin Height", value: "6.2 feet" }
    ]
  },
  {
    name: "Bombardier Global 7500",
    image: "https://images.unsplash.com/photo-1595279211419-88239fbff506",
    description: "The largest and longest-range business jet in the industry.",
    specs: [
      { label: "Range", value: "7,700 nautical miles" },
      { label: "Passenger Capacity", value: "Up to 19" },
      { label: "Cruising Speed", value: "Mach 0.85" },
      { label: "Cabin Height", value: "6.2 feet" }
    ]
  },
  {
    name: "Cessna Citation X",
    image: "https://images.unsplash.com/photo-1621522626370-ec009a90fbf1",
    description: "One of the fastest civilian aircraft with exceptional efficiency.",
    specs: [
      { label: "Range", value: "3,460 nautical miles" },
      { label: "Passenger Capacity", value: "Up to 12" },
      { label: "Cruising Speed", value: "Mach 0.92" },
      { label: "Cabin Height", value: "5.7 feet" }
    ]
  }
];

export default function Fleet() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Our Fleet</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Discover our diverse fleet of premium aircraft, each selected to provide the highest levels of comfort, performance, and reliability for your journey.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FLEET.map((aircraft) => (
          <AircraftCard key={aircraft.name} {...aircraft} />
        ))}
      </div>
    </div>
  );
}