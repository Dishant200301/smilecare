
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </svg>
);

interface Testimonial {
    id: number;
    content: string;
    author: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        content: "My experience was outstanding. I've never felt so confident about my dental care.",
        author: "Nick T.",
        rating: 5,
    },
    {
        id: 2,
        content: "The treatment was painless, and the results were outstanding. The whole team made me feel comfortable and cared for.",
        author: "Olivia D.",
        rating: 5,
    },
    {
        id: 3,
        content: "I've been seeing Dr. Bodily for years, and he consistently provides top-notch care. His expertise and friendly demeanor make each visit pleasant.",
        author: "Jake R.",
        rating: 5,
    },
    {
        id: 4,
        content: "They were attentive, thorough, and made me feel at ease during my visit. Highly recommend for anyone looking for quality dental work.",
        author: "Claire W.",
        rating: 4,
    },
    {
        id: 5,
        content: "Dr. Bodily and his team provided exceptional care. The staff was friendly and attentive.",
        author: "Nate S.",
        rating: 5,
    },
    {
        id: 6,
        content: "He took the time to explain every step of the procedure, and I felt well cared for throughout. Great results and great service!",
        author: "John M.",
        rating: 5,
    },
    {
        id: 7,
        content: "From start to finish, my experience was outstanding. The team is professional, skilled, and genuinely caring.",
        author: "Jane U.",
        rating: 5,
    },
    {
        id: 8,
        content: "They are professional, kind, and dedicated to providing excellent care. I would definitely recommend them to friends and family.",
        author: "Natalie H.",
        rating: 5,
    },
    {
        id: 9,
        content: "The office was clean, the staff was welcoming, and my treatment went smoothly. Highly recommend!",
        author: "Lisa M.",
        rating: 5,
    },
    {
        id: 10,
        content: "A fantastic dentist! His thorough explanations and gentle approach made my visit stress-free.",
        author: "Carrie G.",
        rating: 4,
    },
    {
        id: 11,
        content: "The results exceeded my expectations.",
        author: "Carlos B.",
        rating: 5,
    },
    {
        id: 12,
        content: "The level of care and attention I received was incredible. The team made sure I was comfortable.",
        author: "Emma T.",
        rating: 5,
    },
];

const ReviewCard = ({ item }: { item: Testimonial }) => (
    <div className="bg-white rounded-[20px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-gray-100/50 flex flex-col gap-3 h-auto break-inside-avoid transform transition-transform duration-300">
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={cn(
                        "w-[18px] h-[18px]",
                        i < item.rating ? "fill-dental-pink text-dental-pink" : "fill-gray-200 text-gray-200 opacity-50"
                    )}
                    strokeWidth={0}
                />
            ))}
        </div>
        <h4 className="font-bold text-[#1E2024] text-sm">
            {item.author}
        </h4>
        <p className="font-roboto text-gray-500 text-sm leading-relaxed">
            {item.content}
        </p>
    </div>
);

const GoogleCard = () => (
    <div className="bg-white rounded-[20px] p-6 border border-gray-100/50 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <GoogleLogo />
            <div>
                <div className="flex items-baseline gap-2">
                    <span className="font-playfair font-bold md:text-2xl text-xl text-[#1E2024]">4.8</span>
                    <div className="flex gap-0.5 pt-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-[14px] h-[14px] fill-dental-pink text-dental-pink"
                                strokeWidth={0}
                            />
                        ))}
                    </div>
                </div>
                <p className="font-roboto text-[11px] text-gray-400 mt-0.5">
                    rating on Google
                </p>
            </div>
        </div>
    </div>
);

const ReviewColumn = ({
    reviews,
    duration = "40s",
    animationName = "scroll-up",
    className
}: {
    reviews: Testimonial[],
    duration?: string,
    animationName?: "scroll-up" | "scroll-down",
    className?: string
}) => {
    return (
        <div className={cn("relative overflow-hidden", className)}>
            <div
                className={cn("flex flex-col gap-6 py-4")} // Added py-4 to ensure content doesn't clip immediately
                style={{
                    animation: `${animationName} ${duration} linear infinite`
                }}
            >
                {/* 
                   We duplicate the reviews 6 times (an even number) to ensure:
                   1. The list is tall enough to cover the container height + scroll distance.
                   2. The -50% animation lands exactly on an identical set of items (Set 4), creating a seamless loop.
                   Start (0%): Set 1 is at top.
                   End (100%): Set 4 is at top.
                   Since Set 4 is identical to Set 1, the jump is invisible.
                */}
                {[...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews].map((item, idx) => (
                    <ReviewCard key={`${item.id}-${idx}`} item={item} />
                ))}
            </div>

            {/* Top Fade Gradient (Simulates Blur) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

            {/* Bottom Fade Gradient (Simulates Blur) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        </div>
    );
};

const TestimonialSection = () => {
    // Split testimonials for columns matching the reference distribution
    const col1 = [testimonials[3], testimonials[4], testimonials[11]]; // Claire, Nate, Emma
    const col2 = [testimonials[0], testimonials[5], testimonials[8]];  // Nick, John, Lisa
    const col3 = [testimonials[1], testimonials[6], testimonials[9]];  // Olivia, Jane, Carrie
    const col4 = [testimonials[2], testimonials[7], testimonials[10]]; // Jake, Natalie, Carlos

    return (
        <section className="py-20 lg:py-24 bg-white overflow-hidden">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">

                {/* Header */}
                <div className="mb-12 text-center items-center justify-center max-w-[600px] mx-auto">
                    <h2 className="font-playfair font-bold text-2xl sm:text-4xl lg:text-5xl text-[#1E2024] mb-3 tracking-tight">
                        Read our reviews
                    </h2>
                    <p className="text-gray-500 text-sm md:text-lg">
                        We take pride in exceeding customer expectations, every single visit.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[600px] md:h-[700px] lg:h-[800px]">

                    {/* Column 1: Google Card + Reviews (Top to Bottom) */}
                    <div className="flex flex-col h-full gap-6">
                        <div className="flex-shrink-0 z-20 relative">
                            <GoogleCard />
                        </div>
                        <div className="flex-1 overflow-hidden relative">
                            {/* Mobile: Bottom to Top */}
                            <div className="md:hidden h-full">
                                <ReviewColumn
                                    reviews={testimonials}
                                    duration="120s"
                                    animationName="scroll-up"
                                    className="h-full"
                                />
                            </div>

                            {/* Desktop: Top to Bottom */}
                            <div className="hidden md:block h-full">
                                <ReviewColumn
                                    reviews={col1}
                                    duration="90s"
                                    animationName="scroll-down"
                                    className="h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Bottom to Top */}
                    <div className="hidden md:block h-full">
                        <ReviewColumn
                            reviews={col2}
                            duration="100s"
                            animationName="scroll-up"
                            className="h-full"
                        />
                    </div>

                    {/* Column 3: Top to Bottom (Laptop/Desktop) */}
                    <div className="hidden lg:block h-full">
                        <ReviewColumn
                            reviews={col3}
                            duration="95s"
                            animationName="scroll-down"
                            className="h-full"
                        />
                    </div>

                    {/* Column 4: Bottom to Top (Desktop Only) */}
                    <div className="hidden xl:block h-full">
                        <ReviewColumn
                            reviews={col4}
                            duration="110s"
                            animationName="scroll-up"
                            className="h-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
