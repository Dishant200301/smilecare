import Link from "react-router-dom";
import visionDentist from "/image/service/general-dentistry.jpg";
import { Check } from "lucide-react";

const AboutVision = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* CONTENT COLUMN */}
                    {/* Mobile: Order 1 (Top) | Desktop: Order 1 (Left) */}
                    <div className="order-1 lg:order-1 text-center lg:text-left">
                        <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-dental-dark mb-6">
                            Our Vision
                        </h2>

                        <p className="font-roboto text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                            To be the leading dental care provider, recognized for our excellence in patient care, innovative treatments, and dedication to community well-being. We envision a world where everyone wears a confident, healthy smile.
                        </p>

                        <ul className="space-y-4 inline-block text-left sm:block">
                            {[
                                "Commitment to Excellence in Dental Care",
                                "State-of-the-Art Technology Integration",
                                "Patient-Centered Treatment Plans",
                                "Fostering Long-Term Patient Relationships"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 text-dental-blue">
                                        <Check className="w-5 h-5" strokeWidth={3} />
                                    </div>
                                    <span className="font-roboto text-dental-dark text-[14px] md:text-lg lg:text-lg">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* IMAGE COLUMN */}
                    {/* Mobile: Order 2 (Bottom) | Desktop: Order 2 (Right) */}
                    <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
                        <img
                            src={visionDentist}
                            alt="Our Vision"
                            className="w-full max-w-[800px] lg:h-[500px] lg:max-w-none h-auto rounded-3xl object-cover shadow-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutVision;
