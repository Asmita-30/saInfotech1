import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
};

export default TestimonialCard;