import React from 'react';
import ContactCard from '../components/cards/ContactCard';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="max-w-2xl mx-auto">
        <ContactCard />
      </div>
    </div>
  );
}