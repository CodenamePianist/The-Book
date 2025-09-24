import React from "react";

const allFestivals = [
  {
    name: "Electric Sky",
    date: "Oct 28-29",
    location: "Las Vegas, NV",
    genre: "House",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Electric+Sky",
  },
  {
    name: "Cosmic Flow",
    date: "Nov 15-17",
    location: "Miami, FL",
    genre: "Trance",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Cosmic+Flow",
  },
  {
    name: "Zenith Sound",
    date: "Dec 2-3",
    location: "Denver, CO",
    genre: "Dubstep",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Zenith+Sound",
  },
  {
    name: "Neon Nexus",
    date: "Jan 12-14",
    location: "Orlando, FL",
    genre: "Techno",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Neon+Nexus",
  },
  {
    name: "Bass Oasis",
    date: "Feb 20-22",
    location: "Austin, TX",
    genre: "Dubstep",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Bass+Oasis",
  },
  {
    name: "Rhythmic Bloom",
    date: "Mar 5-7",
    location: "Palm Springs, CA",
    genre: "House",
    imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Rhythmic+Bloom",
  },
];

const uniqueGenres = [
  ...new Set(allFestivals.map((festival) => festival.genre)),
];
const uniqueLocations = [
  ...new Set(allFestivals.map((festival) => festival.location)),
];

export default function Festivals() {
  return (
    <>
      <section className="bg-white">
        {/* This will contain the search bar */}
        <input type="text" placeholder="Search festivals..." className="" />
        <select name="genre" id="genre-select">
          <option>All Genres</option>
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select name="" id="">
          <option value="">All Locations</option>
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </section>
      <div>
        {/* And this div will hold all the upcoming festivals, not just the featured ones */}
        <h2 className="text-[#39FF14] text-[30px] text-center uppercase mb-2">All Festivals</h2>
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          {allFestivals.map((festival) => (
            <div className="border border-solid border-[#39FF14] rounded-xl overflow-hidden flex flex-col items-center">
              <img src={festival.imageUrl} alt={festival.imageUrl} />
              <h3 className="text-white font-bold text-2xl mb-1">{festival.name}</h3>
              <p className="text-[#39FF14] text-lg mb-2">{festival.date}</p>
              <button className="border border-white rounded-full px-4 mb-4 text-white text-lg transition hover:text-black hover:bg-white hover:cursor-pointer">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
