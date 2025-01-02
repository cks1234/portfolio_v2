import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';

export default function ContactCard() {
  return (
    <div className="card w-full">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="space-y-6">
        <p className="font-mono break-words">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-[24px_1fr] items-center gap-2">
            <Mail className="text-pink-400" />
            <span className="break-all">cks123456987@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Phone className="text-pink-400 flex-shrink-0" />
            <span>0420 579 234</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <MapPin className="text-pink-400 flex-shrink-0" />
            <span>Brisbane, Australia</span>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/sam-choi-933509240/" className="button flex-shrink-0">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/cks1234" className="button flex-shrink-0">
            <Github size={24} />
          </a>
          <a 
            href="/Sam_choi_resume.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="button flex items-center gap-2 flex-shrink-0"
          >
            <FileText size={24} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}