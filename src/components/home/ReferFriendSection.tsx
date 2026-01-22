import { useState } from "react";
import { Button } from "@/components/ui/button";

const ReferFriendSection = () => {
    const [activeTab, setActiveTab] = useState("refer");

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    {/* ============================
          CONTENT (Always no overlap)
      ============================= */}
                    <div className="order-1 lg:order-2 space-y-4 animate-fade-left container mx-auto px-6 lg:pl-16 lg:pr-24">
                        <div>
                            <h3 className="font-playfair text-[#333C4A] text-[28px] sm:text-[38px] lg:text-[42px] leading-tight">
                                Reward Awaits When
                            </h3>

                            <h1 className="font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end
            text-[54px] sm:text-[62px] lg:text-[70px] leading-tight tracking-[-2px]">
                                You Refer A Friend
                            </h1>
                        </div>

                        <p className="font-roboto text-[#191919]
          text-[16px] sm:text-[18px] leading-[27px] max-w-[580px]">
                            If you’ve been happy with the care you’ve received and would like to
                            share dental referrals with your friends and family, SmileCare invites
                            you to take part in our dental referrals rewards program.
                        </p>

                        {/* Tabs */}
                        <div className="flex items-center gap-12">
                            <p
                                className={`font-['Roboto_Condensed'] text-[16px] cursor-pointer ${activeTab === "refer" ? "text-transparent bg-clip-text bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end font-bold" : "text-[#191919]/60"
                                    }`}
                                onClick={() => setActiveTab("refer")}
                            >
                                Refer a friend now
                            </p>

                            <p
                                className={`font-['Roboto_Condensed'] text-[16px] cursor-pointer ${activeTab === "how" ? "text-transparent bg-clip-text bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end font-bold" : "text-[#191919]/60"
                                    }`}
                                onClick={() => setActiveTab("how")}
                            >
                                How it works?
                            </p>
                        </div>

                        {/* Footer line with dot */}
                        <div className="relative w-full flex items-center justify-center mt-4 mb-6">
                            <div className="w-full h-[1px] bg-black/10"></div>

                            {activeTab === "refer" ? (
                                <div className="absolute left-[16%] lg:left-[8%] w-[12px] h-[12px] bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end rounded-full"></div>
                            ) : (
                                <div className="absolute left-[75%] lg:left-[34%] w-[12px] h-[12px] bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end rounded-full"></div>
                            )}
                        </div>

                        {/* Tab Content */}
                        {activeTab === "refer" ? (
                            <form className="space-y-5">
                                <input
                                    placeholder="Your name *"
                                    className="w-full max-w-[580px] h-[52px] px-4 rounded-md
                bg-white border border-gray-300 shadow-sm focus:border-[#1D70B8]"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email Address *"
                                    className="w-full max-w-[580px] h-[52px] px-4 rounded-md
                bg-white border border-gray-300 shadow-sm focus:border-[#1D70B8]"
                                />

                                <input
                                    placeholder="Who you Referred *"
                                    className="w-full max-w-[580px] h-[52px] px-4 rounded-md
                bg-white border border-gray-300 shadow-sm focus:border-[#1D70B8]"
                                />

                                <textarea
                                    placeholder="Additional Comments or referral date"
                                    className="w-full max-w-[580px] h-[156px] p-4 rounded-md
                bg-white border border-gray-300 shadow-sm resize-none focus:border-[#1D70B8]"
                                ></textarea>

                                <Button className="bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end text-white 
              font-roboto text-[16px] px-8 py-6">
                                    Refer Your Friend
                                </Button>
                            </form>
                        ) : (
                            <div className="space-y-4 max-w-[580px] text-[16px] sm:text-[18px] 
            font-roboto text-[#191919] leading-[28px]">
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                            </div>
                        )}
                    </div>

                    {/* ===================================
          IMAGE WITH *ZERO* PADDING & MARGIN
      ==================================== */}
                    <div className="order-2 lg:order-1 w-full h-full flex justify-center lg:justify-start">

                        <img
                            src="/image/girl.png"
                            alt=""
                            className="
            w-full
            max-w-none     /* stops auto max-width shrink */
            object-contain
            block          /* removes default inline gap */
            m-0 p-0        /* removes margin/padding */
          "
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ReferFriendSection;
