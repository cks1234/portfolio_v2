import React from 'react';
import HomeCard from '../components/cards/HomeCard';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Home</h1>
      <HomeCard />
    </div>
  );
}