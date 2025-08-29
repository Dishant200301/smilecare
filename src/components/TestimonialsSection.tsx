import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    role: "Product Designer",
    avatar: "https://framerusercontent.com/modules/.../99qcDQP7.png",
    quote:
      "Galao is my go-to resource for design inspiration. The articles on user experience help me create more intuitive products, making it essential for my workflow.",
  },
  {
    name: "James Rodriguez",
    role: "Web Developer",
    avatar: "https://framerusercontent.com/modules/.../szTmT1K4.png",
    quote:
      "As a web developer, I rely on Galao for its clear and concise tutorials. They break down complex concepts, making it easier for me to learn and apply new technologies.",
  },
  {
    name: "Emily Chen",
    role: "Content Strategist",
    avatar: "https://framerusercontent.com/modules/.../BRu6MhHh.png",
    quote:
      "Galao has completely changed how I approach content strategy. The insights on storytelling and audience engagement have sparked new ideas and improved my campaigns significantly.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-lime-100 rounded-2xl p-6 shadow-md flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        {/* <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        /> */}
        <div>
          <h6 className="font-semibold text-black">{testimonial.name}</h6>
          <p className="text-sm text-gray-700">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-900 text-sm">{testimonial.quote}</p>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center"
    >
      <p className="text-lime-400 text-xs font-semibold tracking-widest">
        TESTIMONIALS
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-2">
        Real-life testimonials and reviews
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl">
        Discover genuine stories from real people sharing their experiences.
        Honest feedback that helps you make informed decisions.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 w-full">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} index={i} />
        ))}
      </div>
    </section>
  );
}
