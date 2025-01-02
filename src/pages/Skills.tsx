import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="card">
            <h3 className="text-2xl font-semibold mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}