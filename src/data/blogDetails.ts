import { BlogPost } from "@/types/blog";

// Extended blog post interface for detailed content
export interface BlogDetailSection {
    heading: string;
    content: string;
}

export interface BlogDetailPost extends BlogPost {
    detailSections: BlogDetailSection[];
    mainImage: string;
}

export const BLOG_DETAILS: BlogDetailPost[] = [
    {
        ...require("./blogPosts").BLOG_POSTS[0],
        mainImage: "/image/blog/cavity-prevention.jpg",
        detailSections: [
            {
                heading: "Building strong oral care routines for cavity prevention",
                content: "Cavities are one of the most common dental issues, but they're also highly preventable. Consistent daily habits like brushing twice a day and flossing can significantly reduce the risk of decay. These simple practices remove plaque, the sticky film of bacteria that leads to cavities."
            },
            {
                heading: "",
                content: "Using fluoride toothpaste strengthens enamel and helps reverse early signs of decay. Coupled with regular dental checkups and professional cleanings, these habits create a strong defense against cavities."
            },
            {
                heading: "",
                content: "A balanced diet also plays a role in cavity prevention. Limiting sugary snacks and beverages reduces the risk of acid attacks on teeth, while nutrient-rich foods like vegetables and dairy promote stronger enamel."
            },
            {
                heading: "Key tips for cavity-free teeth",
                content: "Choose a toothbrush with soft bristles and replace it every three months to ensure effective cleaning. Combine this with daily flossing to reach areas between teeth where plaque often hides."
            },
            {
                heading: "",
                content: "Additionally, consider using a mouthwash with fluoride or antibacterial properties to further protect your teeth. Regular visits to your dentist for cleanings and sealants offer an extra layer of cavity prevention."
            }
        ]
    },
    {
        ...require("./blogPosts").BLOG_POSTS[1],
        mainImage: "/image/blog/heart-health.jpg",
        detailSections: [
            {
                heading: "The connection between oral health and heart disease",
                content: "Research has shown a strong link between oral health and cardiovascular health. Bacteria from gum disease can enter the bloodstream and cause inflammation in the blood vessels, potentially leading to heart problems."
            },
            {
                heading: "",
                content: "Brushing your teeth three or more times a day has been associated with a 10% lower risk of atrial fibrillation and a 12% lower risk of heart failure. This simple habit can have profound effects on your overall health."
            },
            {
                heading: "Maintaining good oral hygiene for heart health",
                content: "Regular brushing and flossing remove harmful bacteria that can contribute to inflammation. Professional dental cleanings every six months help eliminate tartar buildup that brushing alone can't remove."
            },
            {
                heading: "",
                content: "By maintaining excellent oral hygiene, you're not just protecting your teeth and gums—you're also taking care of your heart. It's a simple yet effective way to reduce your risk of serious health conditions."
            }
        ]
    },
    {
        ...require("./blogPosts").BLOG_POSTS[2],
        mainImage: "/image/blog/teeth-archive.jpg",
        detailSections: [
            {
                heading: "Teeth as biological time capsules",
                content: "Teeth are remarkable biological archives that preserve a record of an individual's life from childhood to adulthood. Like tree rings, teeth grow in layers, and each layer captures chemical signatures from the body at the time of formation."
            },
            {
                heading: "",
                content: "Scientists can analyze these layers to reconstruct a timeline of a person's life, identifying periods of stress, illness, dietary changes, and even environmental exposures. This makes teeth invaluable for archaeological and forensic research."
            },
            {
                heading: "Applications in science and medicine",
                content: "In archaeology, teeth help researchers understand ancient populations' diets, health conditions, and migration patterns. In forensic science, teeth can be used to identify unknown remains and determine causes of death."
            },
            {
                heading: "",
                content: "The study of teeth continues to reveal new insights into human history and biology, demonstrating that these small structures hold vast amounts of information about our lives and our past."
            }
        ]
    }
];
