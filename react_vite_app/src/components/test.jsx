import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

function TestimonialCard({ name, image, quote }) {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{quote}</CardText>
      </CardBody>
    </Card>
  );
}

// Example usage
const testimonials = [
  { name: 'John Doe', image: 'https://example.com/john-doe.jpg', quote: 'SHEVINHOMES helped me find my dream home!' },
  { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', quote: 'The service was exceptional, and the process was seamless.' },
];

function TestimonialSection() {
  return (
    <div className="testimonial-section">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} {...testimonial} />
      ))}
    </div>
  );
}
