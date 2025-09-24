import React from "react";

const allFestivals = [
    { name: "Electric Sky", date: "OCT 28-29", location: "Las Vegas, NV", genre: "House", imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Electric+Sky" },
    { name: "Cosmic Flow", date: "NOV 15-17", location: "Miami, FL", genre: "Trance", imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Cosmic+Flow" },
    { name: "Zenith Sound", date: "DEC 2-3", location: "Denver, CO", genre: "Dubstep", imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Zenith+Sound" },
    { name: "Neon Nexus", date: "JAN 12-14", location: "Orlando, FL", genre: "Techno", imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Neon+Nexus" },
    { name: "Bass Oasis", date: "FEB 20-22", location: "Austin, TX", genre: "Dubstep", imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Bass+Oasis" },
    { name: "Rhythmic Bloom", date: "MAR 5-7", location: "Palm Springs, CA", genre: "House", imageUrl: "https://placehold.co/400x250/000000/00ff00?text=Rhythmic+Bloom" },
];

const uniqueGenres = [...new Set(allFestivals.map(festival => festival.genre))];
const uniqueLocations = [...new Set(allFestivals.map(festival => festival.location))]

export default function Festivals() {
  return (
    <>
          <div className="text-white">{/* This will contain the search bar */}</div>
          <section className="bg-white">{/* And this div will hold all the upcoming festivals, not just the featured ones */}
              <input type="text" placeholder="Search festivals..." className="" />
              <select name="genre" id="genre-select">
                  <option>All Genres</option>
                  {uniqueGenres.map((genre) => (
                      <option key={genre} value={genre}>{genre}</option>
                  ))}
              </select>
              <select name="" id="">
                  <option value="">All Locations</option>
                  {uniqueLocations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                  ))}
              </select>
          </section>
    </>
  );
}
