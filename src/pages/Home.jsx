// import React from 'react';
import { defects } from '../data/defects';
import DefectCard from '../components/DefectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Common Software Defects</h1>
            <p className="text-lg text-gray-600">
              Explore interactive examples of common software defects to better understand their impact and prevention.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {defects.map((defect) => (
              <DefectCard key={defect.id} defect={defect} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}