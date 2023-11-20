import React from 'react';

const profiles = [
  { id: 1, name: 'Awoke Dejenie', image: 'awoke.jpg' },
  { id: 2, name: 'Samrawit Fekadu', image: 'profile2.jpg' },
  { id: 3, name: 'Amsalu Mekuria', image: 'amsalu.jpg' },
  { id: 3, name: 'Yohannis Dires', image: 'profile4.jpg' },
  // Add more profiles as needed
];

const Sidebar = () => {
  return (
    <div className=" p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="flex items-center mb-2">
            <img
              src={profile.image}
              alt={'image'}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>{profile.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar