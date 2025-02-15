import React from 'react';
import Navbar from './components/Navbar';
import MumCakesCard from './components/Chat/components/cards/MumCakes';
import HydTeaCard from './components/Chat/components/cards/HydTea';
import MumCoffeeCard from './components/Chat/components/cards/MumCoffee';
import DelBiscuitCard from './components/Chat/components/cards/DelBiscuit';

export default function TrendingCompanies() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-2 w-full max-w-6xl">
          <MumCakesCard />
          <HydTeaCard />
          <MumCoffeeCard />
          <DelBiscuitCard />
        </div>
      </div>
    </div>
  );
}