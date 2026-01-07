import { useParams, Link } from "react-router-dom";
import { portfolioItems, categoryDetailData } from "@/data/categoryDetailData";
import { subCategoryDetailData } from "@/data/subcategoryDetailData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
    SubCategoryHero,
    BadWebExperience,
    GoodWebExperience,
    ResponsiveShowcase,
    MobileUIShowcase,
    InvestmentComparison,
    DifferentService,
    AnalyticsSection,
    BehaviorTracking,
    PlanComparison,

} from "@/components/subcategory";

const SubCategoryDetail = () => {
    const { slug, subcategorySlug } = useParams();

    // Find the category items
    const categoryItems = portfolioItems[slug as keyof typeof portfolioItems];

    // Find the specific subcategory item
    const item = categoryItems?.find(i =>
        i.title.toLowerCase().replace(/ /g, '-') === subcategorySlug
    );

    // Get specific subcategory data
    const subCategoryData = subcategorySlug ? subCategoryDetailData[subcategorySlug] : null;

    // Get category detail data
    const categoryData = categoryDetailData[slug as keyof typeof categoryDetailData];

    if (!item) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                        <Link to={`/category/${slug}`} className="text-brand hover:underline">
                            Back to Category
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // Prepare data for components
    const websiteImage = subCategoryData?.image || item.image || categoryData?.heroImages?.[0] || "";
    const heroImages = subCategoryData?.badExperienceImages || categoryData?.heroImages || [];
    const features = subCategoryData?.features;
    const serviceFeatures = subCategoryData?.serviceFeatures;

    const blogImage = subCategoryData?.blogImage;
    const serviceImage = subCategoryData?.serviceImage;
    const laptopMockup = subCategoryData?.laptopMockup;
    const mobileMockup = subCategoryData?.mobileMockup;

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Helmet>
                <title>{item.title} | TryzenIQ</title>
                <meta name="description" content={`Grow your ${item.title} business with TryzenIQ.`} />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-black">
                {/* Hero Section */}
                <SubCategoryHero title={item.title} />

                {/* Bad Web Experience Section */}
                <BadWebExperience heroImages={heroImages} />

                {/* Good Web Experience Section */}
                <GoodWebExperience
                    image={websiteImage}
                    features={features}
                />

                {/* Responsive Showcase - Looks Perfect Every Time */}
                <ResponsiveShowcase
                    image={websiteImage}
                    laptopMockup={laptopMockup}
                    mobileMockup={mobileMockup}
                />

                {/* Mobile UI Showcase Section */}
                {/* <MobileUIShowcase image={websiteImage} /> */}

                {/* Comparison Section - Single vs Multi-Page */}
                <InvestmentComparison />

                {/* Different Service Section */}
                <DifferentService
                    image={websiteImage}
                    blogImage={blogImage}
                    serviceImage={serviceImage}
                    serviceFeatures={serviceFeatures}
                />

                {/* Analytics Section - Who + How Many + Where From */}
                <AnalyticsSection />

                {/* Behavior Tracking Section - What They Do + Why They Leave */}
                <BehaviorTracking />

                {/* Plan Comparison Section */}
                <PlanComparison />
            </main>

            <Footer />
        </div>
    );
};

export default SubCategoryDetail;
