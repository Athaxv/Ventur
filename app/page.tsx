'use client';

import { useState } from 'react';

const categories = [
  { id: 'outdoor', name: 'Outdoor Activities', icon: '🌳' },
  { id: 'indoor', name: 'Indoor Activities', icon: '🏠' },
  { id: 'social', name: 'Social Activities', icon: '👥' },
  { id: 'creative', name: 'Creative Activities', icon: '🎨' },
  { id: 'learning', name: 'Learning Activities', icon: '📚' },
  { id: 'fitness', name: 'Fitness Activities', icon: '💪' },
];

const activities = {
  outdoor: [
    'Go for a hike in a nearby trail',
    'Have a picnic in the park',
    'Try geocaching',
    'Go stargazing',
    'Visit a botanical garden',
  ],
  indoor: [
    'Try a new recipe',
    'Start a puzzle',
    'Learn a new card game',
    'Create a home spa day',
    'Organize your space',
  ],
  social: [
    'Host a game night',
    'Join a local meetup group',
    'Volunteer in your community',
    'Start a book club',
    'Plan a potluck dinner',
  ],
  creative: [
    'Start a DIY project',
    'Write a short story',
    'Learn to play an instrument',
    'Try painting or drawing',
    'Create a photo album',
  ],
  learning: [
    'Learn a new language',
    'Take an online course',
    'Read a non-fiction book',
    'Watch educational videos',
    'Practice coding',
  ],
  fitness: [
    'Try a new workout routine',
    'Go for a bike ride',
    'Join a sports team',
    'Try yoga or meditation',
    'Go swimming',
  ],
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [generatedActivity, setGeneratedActivity] = useState<string | null>(null);

  const generateActivity = () => {
    if (selectedCategory) {
      const categoryActivities = activities[selectedCategory as keyof typeof activities];
      const randomIndex = Math.floor(Math.random() * categoryActivities.length);
      setGeneratedActivity(categoryActivities[randomIndex]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Ventur
          </h1>
          <p className="text-xl text-gray-600">
            Discover new activities and ideas to make your day more exciting!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center space-y-2
                ${selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 hover:bg-purple-50 hover:shadow-md'
                }`}
            >
              <span className="text-3xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div className="text-center">
            <button
              onClick={generateActivity}
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Generate Activity
            </button>
          </div>
        )}

        {generatedActivity && (
          <div className="mt-8 p-6 bg-white rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Your Activity
            </h2>
            <p className="text-xl text-purple-600">{generatedActivity}</p>
          </div>
        )}
      </div>
    </main>
  );
}
