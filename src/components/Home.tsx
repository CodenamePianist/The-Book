import React from "react";

const featuredFestivals = [
  {
    name: "Hallowed Sky",
    date: "OCT 28-29, 2024",
    location: "Las Vegas, NV",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Electric+Sky",
  },
  {
    name: "Cosmic Flow",
    date: "NOV 15-17, 2024",
    location: "Miami, FL",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Cosmic+Flow",
  },
  {
    name: "Zenith Sound",
    date: "DEC 2-3, 2024",
    location: "Denver, CO",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Zenith+Sound",
  },
];

export default function Home() {
  return (
    <>
      <section>
        {/* This section will hold the cards that will show the featured festivals */}
        <h2 className="mt-6 text-center text-[30px] uppercase text-[#39FF14] font-semibold">Upcoming Festivals</h2>

        <div className="flex justify-center gap-12 mt-6">
          {featuredFestivals.map((festival, index) => (
            <div key={index} className="border border-solid border-[#39FF14] rounded-xl shadow-2xl shadow-[#39FF14] overflow-hidden flex flex-col items-center transition hover:scale-110">
                  <img src={festival.imageUrl} alt={festival.name} className="rounded-xl pt-4" />
                  <h3 className="text-white font-bold text-2xl mb-1">{festival.name}</h3>
                  <p className="text-[#39FF14] text-lg mb-2">{festival.date}</p>
                  <p className="text-gray-400 text-lg mb-4">{festival.location}</p>
                  <button className="border border-white rounded-full px-4 mb-4 text-white text-lg transition hover:text-black hover:bg-white hover:cursor-pointer">Learn More</button>
            </div>
          ))}
        </div>
      </section>
      <div>{/* This div will hold cards describing other features */}</div>
    </>
  );
}
