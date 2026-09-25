import { Star } from "lucide-react";


interface Testimonial {
  stars: number;
  heading: string;
  text: string;
  name: string;
  occupation: string;
}

const TestimonialsCard = ({
  stars,
  heading,
  text,
  name,
  occupation,
}: Testimonial) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-8 flex flex-col gap-6  mb-4 break-inside-avoid">
      <div className="flex flex-col gap-3">
        <div className="flex gap-1">
          {[...Array(stars)].map((_, i) => (
            <Star className="size-5 text-primary" key={i} />
          ))}
        </div>
        <h4 className="text-2xl">{heading}</h4>
        <p className="text-base">{text}</p>
      </div>
      <div className="">
        <h5 className="text-lg">{name}</h5>
        <p className="text-sms">{occupation}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
