import React from 'react';

const adsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'MotoG 2',
    description: 'Buy Now!'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1720128401402-81c9dc339870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm90aW5nfGVufDB8fDB8fHww',
    title: 'Vote for BJG',
    description: 'Vote for better days'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1532916697008-5bc24f95592a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D',
    title: 'Wash for sins',
    description: 'Whirlpool washing machines.'
  }
];

const Ads = () => {
  return (
    <div className="w-full  bg-gray-100 p-4 space-y-4">
      {adsData.map(ad => (
        <div key={ad.id} className="border border-gray-300 rounded-lg shadow-md p-2 bg-white">
          <img src={ad.image} alt={ad.title} className="w-full h-auto rounded" />
          <h2 className="text-lg font-bold mt-2">{ad.title}</h2>
          <p className="text-sm text-gray-600">{ad.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Ads;
