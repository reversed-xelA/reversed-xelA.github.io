import React from 'react';
import { ChevronRight } from 'lucide-react';

const Prologue = () => {
  const chapters = [
    {
      number: '1',
      title: 'The Scientific Foundation',
      description: 'Where precision meets curiosity in the realm of molecular biology.'
    },
    {
      number: '2',
      title: 'The Catalyst',
      description: 'Data-driven impact through community mental health initiatives.'
    },
    {
      number: '3',
      title: 'The Transformation',
      description: 'Evolution into data science through real-world projects.'
    },
    {
      number: '4',
      title: 'Current Chapter',
      description: 'Recent ventures and future horizons in data analytics.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-serif">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Prologue</h1>
      
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Image */}
        <div className="md:w-1/3">
          <img 
            src="/api/placeholder/400/500" 
            alt="Portrait" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        {/* Introduction Text */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">From Laboratory to Data Laboratory</h2>
          <p className="text-lg leading-relaxed mb-4">
            My journey began in the precise world of molecular biology, where each experiment
            was a story waiting to be told through data. As a researcher, I discovered that
            my true passion lay not just in conducting experiments, but in interpreting
            their results and finding patterns in complexity.
          </p>
          <p className="text-lg leading-relaxed">
            Today, I transform complex datasets into compelling narratives, bringing the
            same rigorous methodology from scientific research to the realm of data science.
            This portfolio is my laboratory notebook, documenting the experiments, discoveries,
            and insights of my professional evolution.
          </p>
        </div>
      </div>

      {/* Delimiter */}
      <div className="flex items-center justify-center my-16">
        <div className="w-1/3 h-px bg-gray-300"></div>
        <div className="mx-4">❧</div>
        <div className="w-1/3 h-px bg-gray-300"></div>
      </div>

      {/* Table of Contents */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Table of Contents</h2>
        <div className="space-y-8">
          {chapters.map((chapter) => (
            <div 
              key={chapter.number}
              className="group flex items-start hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
            >
              <div className="mr-6 text-4xl font-bold text-gray-300">
                {chapter.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {chapter.title}
                </h3>
                <p className="text-gray-600">{chapter.description}</p>
              </div>
              <ChevronRight 
                className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 mt-1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prologue;