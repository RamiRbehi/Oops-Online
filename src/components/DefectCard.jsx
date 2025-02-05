import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DefectCard({ defect }) {
  return (
    <Link
      to={`/defect/${defect.id}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-100"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
          {defect.title}
        </h2>
        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" />
      </div>
      <p className="mt-3 text-gray-600 line-clamp-2 group-hover:text-gray-700">
        {defect.description}
      </p>
      <div className="mt-4 inline-flex items-center text-sm text-indigo-600 font-medium">
        View Example
        <ChevronRight className="h-4 w-4 ml-1" />
      </div>
    </Link>
  );
}