import React from 'react';
import { skills } from '../../data/skills';

export default function SkillsCard() {
  return (
    <div className="card break-inside-avoid">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space-y-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h3 className="text-xl font-semibold mb-2">
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