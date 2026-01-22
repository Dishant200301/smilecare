export interface ServiceDetail {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    icon: string;
    sections: {
        heading: string;
        content: string;
    }[];
}

export const serviceDetails: ServiceDetail[] = [
    {
        id: "dental-implants",
        title: "Dental Implants",
        subtitle: "Offered since 2010",
        image: "/image/service/dental-implants.jpg",
        icon: "/image/icon/service/icon-1.png",
        sections: [
            {
                heading: "What Are Dental Implants?",
                content: "Dental implants are titanium posts surgically placed into your jawbone to serve as artificial tooth roots. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth. This advanced solution offers a permanent way to restore your smile and oral function."
            },
            {
                heading: "Benefits of Dental Implants",
                content: "Dental implants offer numerous advantages over traditional tooth replacement options. They look, feel, and function like natural teeth, providing improved comfort and confidence. Unlike dentures, implants don't slip or click, and they help preserve jawbone structure by stimulating bone growth. With proper care, dental implants can last a lifetime."
            },
            {
                heading: "The Implant Procedure",
                content: "The dental implant process typically involves several stages over a few months. First, the implant is surgically placed into the jawbone. During the healing period, the bone grows around the implant in a process called osseointegration. Once healed, an abutment is attached to the implant, and finally, a custom crown is placed on top, completing your new tooth."
            },
            {
                heading: "Caring for Your Implants",
                content: "Maintaining dental implants is similar to caring for natural teeth. Regular brushing, flossing, and dental checkups are essential. While implants can't decay, the surrounding gum tissue needs to stay healthy to support them. With proper oral hygiene and professional care, your implants will serve you well for many years."
            }
        ]
    },
    {
        id: "general-dentistry",
        title: "General Dentistry",
        subtitle: "Offered since 2010",
        image: "/image/service/general-dentistry.jpg",
        icon: "/image/icon/service/icon-2.png",
        sections: [
            {
                heading: "Comprehensive Dental Care",
                content: "General dentistry encompasses a wide range of services designed to maintain and improve your oral health. From routine checkups and cleanings to fillings and preventive care, we provide comprehensive treatment for patients of all ages. Our goal is to help you maintain a healthy, beautiful smile for life."
            },
            {
                heading: "Preventive Services",
                content: "Prevention is the cornerstone of general dentistry. Regular dental exams allow us to detect problems early, often before you experience any symptoms. Professional cleanings remove plaque and tartar buildup that can't be eliminated by brushing alone. We also provide fluoride treatments and dental sealants to protect your teeth from decay."
            },
            {
                heading: "Restorative Treatments",
                content: "When dental issues arise, we offer a variety of restorative treatments to repair and restore your teeth. Our services include tooth-colored fillings, crowns, bridges, and more. We use the latest materials and techniques to ensure your restorations are durable, functional, and aesthetically pleasing."
            },
            {
                heading: "Patient Education",
                content: "We believe that informed patients make better decisions about their oral health. Our team takes time to educate you about proper brushing and flossing techniques, dietary choices that affect your teeth, and the importance of regular dental visits. We're here to answer your questions and help you achieve optimal oral health."
            }
        ]
    },
    {
        id: "emergency-care",
        title: "Emergency Dental Care",
        subtitle: "Offered since 2010",
        image: "/image/service/emergency-care.jpg",
        icon: "/image/icon/service/icon-3.png",
        sections: [
            {
                heading: "When You Need Immediate Care",
                content: "Dental emergencies can happen at any time and often require immediate attention. Whether it's a knocked-out tooth, severe toothache, broken tooth, or other urgent dental issue, our team is here to help. We understand that dental pain and trauma can be distressing, and we prioritize emergency cases to provide prompt relief."
            },
            {
                heading: "Common Dental Emergencies",
                content: "Common dental emergencies include severe toothaches, chipped or broken teeth, knocked-out teeth, lost fillings or crowns, abscesses, and soft tissue injuries. Each situation requires specific care, and timing is often critical. If you experience a dental emergency, contact us immediately for guidance and to schedule an urgent appointment."
            },
            {
                heading: "What to Do in an Emergency",
                content: "If you have a dental emergency, stay calm and contact our office right away. For a knocked-out tooth, try to place it back in the socket or keep it moist in milk. For severe pain, rinse with warm water and use a cold compress to reduce swelling. Avoid taking aspirin, which can increase bleeding. We'll provide specific instructions based on your situation."
            },
            {
                heading: "Emergency Prevention",
                content: "While not all emergencies can be prevented, many can be avoided with proper care. Wear a mouthguard during sports, avoid chewing hard objects like ice or popcorn kernels, and maintain good oral hygiene to prevent infections. Regular dental checkups also help identify potential problems before they become emergencies."
            }
        ]
    },
    {
        id: "prosthesis",
        title: "Dental Prosthesis",
        subtitle: "Offered since 2010",
        image: "/image/service/dental-prosthesis.jpg",
        icon: "/image/icon/service/icon-4.png",
        sections: [
            {
                heading: "Restoring Your Smile",
                content: "Dental prosthetics, including dentures and bridges, are custom-made replacements for missing teeth. These devices restore your ability to eat, speak, and smile with confidence. Modern prosthetics are designed to look natural and feel comfortable, providing a practical solution for tooth loss."
            },
            {
                heading: "Types of Dentures",
                content: "We offer several types of dentures to meet different needs. Complete dentures replace all teeth in the upper or lower jaw, while partial dentures fill in gaps when some natural teeth remain. Implant-supported dentures provide enhanced stability and comfort. Our team will help you choose the best option for your situation."
            },
            {
                heading: "Dental Bridges",
                content: "Dental bridges literally bridge the gap created by one or more missing teeth. A bridge consists of artificial teeth anchored to adjacent natural teeth or implants. Bridges restore your bite, prevent remaining teeth from shifting, and maintain the shape of your face. They're a durable, fixed solution for missing teeth."
            },
            {
                heading: "Adjusting to Prosthetics",
                content: "It's normal to need an adjustment period when you first receive dentures or bridges. You may experience increased saliva production, minor soreness, or difficulty eating certain foods initially. These issues typically resolve within a few weeks. We'll provide guidance on care and maintenance, and we're available for adjustments to ensure optimal fit and comfort."
            }
        ]
    },
    {
        id: "whitening",
        title: "Teeth Whitening",
        subtitle: "Offered since 2010",
        image: "/image/service/teeth-whitening.jpg",
        icon: "/image/icon/service/icon-5.png",
        sections: [
            {
                heading: "Professional Whitening Solutions",
                content: "Professional teeth whitening is one of the most popular cosmetic dental procedures. Our advanced whitening treatments can dramatically brighten your smile, removing years of stains and discoloration. Unlike over-the-counter products, professional whitening delivers faster, more dramatic, and longer-lasting results under the supervision of dental professionals."
            },
            {
                heading: "In-Office Whitening",
                content: "Our in-office whitening treatment delivers immediate results in just one visit. We use professional-grade whitening gel and specialized light technology to break down stains and lighten tooth enamel. The procedure typically takes about an hour, and you'll leave with a noticeably brighter smile. This option is perfect for special occasions or when you want quick results."
            },
            {
                heading: "Take-Home Whitening Kits",
                content: "For those who prefer to whiten at home, we offer custom take-home whitening kits. We'll create custom-fitted trays that ensure even application of the whitening gel. You'll wear the trays for a specified time each day, typically for one to two weeks. This gradual approach is gentle on sensitive teeth while still delivering excellent results."
            },
            {
                heading: "Maintaining Your White Smile",
                content: "After whitening, you can maintain your bright smile by avoiding staining foods and beverages like coffee, tea, red wine, and berries. Good oral hygiene, including regular brushing and flossing, is essential. Touch-up treatments every few months can help maintain your results. With proper care, your whitened smile can last for years."
            }
        ]
    },
    {
        id: "braces",
        title: "Orthodontic Braces",
        subtitle: "Offered since 2010",
        image: "/image/service/orthodontic-braces.jpg",
        icon: "/image/icon/service/icon-6.png",
        sections: [
            {
                heading: "Straightening Your Smile",
                content: "Orthodontic treatment does more than create a beautiful smile—it improves oral health and function. Properly aligned teeth are easier to clean, reducing the risk of cavities and gum disease. They also improve bite function, reducing wear on teeth and jaw strain. Whether you choose traditional braces or clear aligners, orthodontic treatment is an investment in your long-term oral health."
            },
            {
                heading: "Traditional Braces",
                content: "Traditional metal braces remain the most effective treatment for complex orthodontic issues. Modern braces are smaller, more comfortable, and more efficient than ever before. They use brackets bonded to teeth and connected by wires that gradually move teeth into proper position. Treatment typically takes 18-24 months, depending on the complexity of your case."
            },
            {
                heading: "Clear Aligners",
                content: "Clear aligners offer a nearly invisible alternative to traditional braces. These custom-made, removable trays gradually shift your teeth into place. Aligners are comfortable, convenient, and allow you to eat and clean your teeth normally. They're ideal for adults and teens who want to straighten their teeth discreetly. Treatment time varies but typically ranges from 12-18 months."
            },
            {
                heading: "Life After Braces",
                content: "Once your braces are removed, you'll need to wear a retainer to maintain your new smile. Retainers prevent teeth from shifting back to their original positions. Initially, you may need to wear your retainer full-time, then transition to nighttime wear. Following your orthodontist's instructions ensures your beautiful new smile lasts a lifetime."
            }
        ]
    },
    {
        id: "root-canal",
        title: "Root Canal Treatment",
        subtitle: "Offered since 2010",
        image: "/image/service/root-canal.jpg",
        icon: "/image/icon/service/icon-7.png",
        sections: [
            {
                heading: "Saving Your Natural Tooth",
                content: "Root canal treatment is a procedure designed to save a tooth that has become infected or severely decayed. Despite its reputation, modern root canal therapy is no more uncomfortable than getting a filling. The procedure removes infected pulp from inside the tooth, eliminating pain and preventing the need for extraction. Saving your natural tooth is always preferable to replacement options."
            },
            {
                heading: "When You Need a Root Canal",
                content: "You may need a root canal if you experience severe toothache, prolonged sensitivity to hot or cold, tooth discoloration, swelling and tenderness in nearby gums, or a persistent pimple on the gums. These symptoms indicate that the tooth's pulp has become inflamed or infected. Without treatment, the infection can spread and lead to tooth loss or more serious health issues."
            },
            {
                heading: "The Root Canal Procedure",
                content: "During a root canal, we first numb the area to ensure your comfort. We then create a small opening in the tooth to access the infected pulp. The pulp is carefully removed, and the inside of the tooth is cleaned and disinfected. Finally, the tooth is filled and sealed. In most cases, a crown is placed over the tooth to protect it and restore full function."
            },
            {
                heading: "Recovery and Aftercare",
                content: "After a root canal, you may experience some sensitivity for a few days, which can be managed with over-the-counter pain medication. Avoid chewing on the treated tooth until it's fully restored with a crown. With proper care, a tooth that has had root canal treatment can last a lifetime. Regular dental checkups ensure the tooth remains healthy."
            }
        ]
    },
    {
        id: "pediatric",
        title: "Children's Dentistry",
        subtitle: "Offered since 2010",
        image: "/image/service/pediatric-dentistry.jpg",
        icon: "/image/icon/service/icon-8.png",
        sections: [
            {
                heading: "Specialized Care for Children",
                content: "We are dedicated to providing compassionate and comprehensive care for children of all ages. We offer a unique range of services to support your child's dental needs at they grow, ensuring each visit is a positive experience. Below are some of the key services we offer."
            },
            {
                heading: "Routine Cleanings & Exams",
                content: "Regular cleanings and exams are essential for keeping your child's smile healthy and strong. During these visits, our team will gently clean your child's teeth and check for any signs of cavities or gum disease. We also take time to teach proper brushing and flossing techniques. These check-ups help prevent future dental issues and ensure that your child's teeth and gums develop properly."
            },
            {
                heading: "Fluoride Treatments",
                content: "Fluoride is a natural mineral that helps strengthen tooth enamel and prevent decay. We offer fluoride treatments as part of our preventive care, especially for children, as their teeth are more susceptible to cavities at a higher risk of developing cavities. This simple, painless treatment provides an extra layer of protection, keeping your child's smile strong and healthy."
            },
            {
                heading: "Sealants",
                content: "Sealants are thin, protective coating applied to the chewing surfaces of molars, where cavities are most likely to form. This treatment is especially beneficial for children, as their back teeth have difficult to clean grooves. Thoroughly, Sealants create a barrier that food particles and bacteria, significantly reducing the risk of cavities and decay in these vulnerable areas."
            },
            {
                heading: "Early Orthodontic Assessments",
                content: "Monitoring the development of your child's teeth and jaw is important for catching potential orthodontic issues early. During routine exams, we assess your child's bite, tooth alignment, and overall dental development. Early orthodontic assessments allow us to identify concerns such as crowding, overbites, or jaw misalignment. If needed, we can refer you to better long-term results and a straighter smile as your child grows."
            },
            {
                heading: "Emergency Dental Care",
                content: "Children are active, and accidents can happen. Whether it's a chipped tooth, a knocked-out tooth, or other dental emergencies, our team is here to help. We quickly to manage pain, repair damage, and protect your child's oral health, ensuring that their smile is restored as soon as possible."
            },
            {
                heading: "Preventive Care for Lifelong Health",
                content: "Our approach to children's dentistry goes beyond treating immediate issues. We emphasize preventive care to stop problems before they start. By teaching good oral hygiene habits early and supporting your child's dental development, we help them maintain excellent oral health into adulthood. We work closely with families to develop good habits at home, which are essential for long-term success."
            },
            {
                heading: "We are committed to creating a fun, friendly, and supportive environment for children's dental care. Our team understands the unique needs of young patients and is dedicated to providing exceptional care that protects and nurtures your child's smile.",
                content: ""
            }
        ]
    }
];
