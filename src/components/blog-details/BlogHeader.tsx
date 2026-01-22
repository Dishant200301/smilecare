import headerCurve from "@/assets/blog-details-header-curve.png";

const BlogHeader = () => {
    return (
        <section className="relative bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end h-[70px] lg:h-[200px] w-full overflow-hidden">
            {/* Background Image at Bottom */}
            {/* Background Image at Bottom - HIDDEN to show gradient */}
            {/* <div className="absolute bottom-0 left-0 right-0 z-0">
                <img
                    src="/image/blog-details-bg.png"
                    alt=""
                    className="w-full h-auto object-cover "
                />
            </div> */}
            {/* Background Image at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-0">
                <img
                    src="/image/hero-bg-2.png"
                    alt=""
                    className="w-full h-auto object-cover "
                />
            </div>


        </section>
    );
};

export default BlogHeader;
