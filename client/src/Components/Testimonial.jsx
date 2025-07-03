import React from 'react';
import Title from './Title';

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Ruturaj Gaikwad",
      review: "Bought the SS Vintage 1.0 bat from SS Cricket Shop — top-notch quality and excellent balance. Perfect for my timing-based game!",
      rating: 5
    },
    {
      id: 2,
      name: "Abhinav Mukund",
      review: "Picked up the SG Sunny Tonny bat from SS Cricket Shop. Great pickup, balance, and fast delivery. A solid experience!",
      rating: 4
    },
    {
      id: 3,
      name: "Dinesh Karthik",
      review: "Got the GM Diamond gloves from SS Cricket Shop. Excellent grip and comfort — exactly what I need behind the stumps.",
      rating: 5
    },
    {
      id: 4,
      name: "T. Natarajan",
      review: "Purchased Adidas 22YDS shoes through SS Cricket Shop. They offer fantastic grip and comfort for my bowling run-up.",
      rating: 5
    }
  ];

  return (
    <div className='text-center py-8 text-3xl'>
      <Title text1="CUSTOMER" text2="REVIEWS" />
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 p-4'>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className='bg-white shadow-md rounded-lg p-6 transition-transform duration-200 hover:scale-[1.02]'>
              <h3 className='text-gray-600 font-semibold mb-2 text-lg'>{review.name}</h3>
              <p className='text-gray-700 mb-4 font-medium text-sm'>{review.review}</p>
              <div className='flex items-center justify-center gap-1'>
                {[...Array(review.rating)].map((_, index) => (
                  <svg key={`star-${review.id}-${index}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500" aria-label="Star">
                    <path d="M12 .587l3.668 7.568 8.332 1.214-6.042 5.882 1.428 8.316L12 18.896l-7.386 3.671 1.428-8.316L.001 9.369l8.332-1.214L12 .587z" />
                  </svg>
                ))}
              </div>

            </div>
      ))
      ) : (
      <p className='text-gray-500 text-lg'>No reviews available at the moment.</p>
        )}
    </div>
    </div >
  );
};

export default Testimonial;
