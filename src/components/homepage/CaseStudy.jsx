import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../ui/Heading";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    slug: "creditwise-score-roadmap",
    title: "CreditWise Score Roadmap: Empowering Financial Health",
    subtitle: "A Data-Driven Approach to Credit Score Improvement",
    type: "FinTech • Data Product • ML Product Management • Behavioral Design",
    year: "2026",
    tools: ["Python", "TensorFlow", "React", "PostgreSQL", "ML", "Data Analytics"],
    image: "/Portfolio/Capitalone.jpeg",
    featured: true
  },
  {
    id: 3,
    slug: "youtube-music-growth-strategy",
    title: "Growing YouTube Music: A Strategic Path to Market Leadership",
    subtitle: "Closing the Gap with Spotify Through Innovation & Ecosystem Leverage",
    type: "Product Strategy • Market Growth • Competitive Analysis",
    year: "2026",
    tools: ["Gemini AI", "Android", "Google Cloud", "A/B Testing", "Market Research", "Analytics"],
    image: "/Portfolio/Youtube.jpeg",
    featured: true
  },
  {
    id: 4,
    slug: "spotify-discovery-platform",
    title: "Breaking the Echo Chamber: Spotify's Music Discovery Revolution",
    subtitle: "Solving Music Discovery Staleness Through User-Controlled Personalization",
    type: "Consumer Product • Algorithmic Systems • UX Innovation",
    year: "2026",
    tools: ["BaRT Algorithm", "Python", "TensorFlow", "Redis", "A/B Testing", "React", "ML"],
    image: "/Portfolio/Sportify.jpeg",
    featured: true
  },
  {
    id: 5,
    slug: "ai-personalization-platform",
    title: "AI-Driven Personalization & Agentic Decision Platform",
    subtitle: "Transforming E-commerce Through Intelligent Automation",
    type: "AI Product Strategy • ML Product Management",
    year: "2024",
    tools: ["GPT-4", "Claude", "Gemini", "AWS SageMaker", "Vertex AI", "Python", "TensorFlow"],
    image: "/Portfolio/Case1.jpg.jpeg",
    featured: true
  },
  {
    id: 6,
    slug: "financial-portfolio-platform",
    title: "Financial Portfolio Insights & ESG Analytics Platform",
    subtitle: "Revolutionizing Wealth Management Through Data Intelligence",
    type: "Data Product • Business Intelligence • RegTech",
    year: "2023",
    tools: ["Python", "SQL", "Tableau", "React", "ML Models", "GDPR", "MiFID II"],
    image: "/Portfolio/Case2.jpeg",
    featured: true
  },
  {
    id: 2,
    slug: "uber-eats-strategy",
    title: "Uber Eats Product Case Study: How to Win the Food Delivery War",
    subtitle: "A Fresh Strategy for 2026 to Close the Gap with DoorDash",
    type: "Product Strategy • AI/ML • Operations • Ecosystem Integration",
    year: "2026",
    tools: ["Python", "TensorFlow", "Machine Learning", "Redis", "Kafka", "React Native"],
    image: "/Portfolio/UberCase.jpeg",
    featured: true
  }
];

export default function CaseStudy({ forwardedRef }) {
  const sectionRef = useRef(null);
  const cardsWrapRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsWrapRef.current) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".cs-section-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cs-section-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ========== STACKED CARDS ==========
      const cards = gsap.utils.toArray(".cs-stack-card");
      const cardInners = gsap.utils.toArray(".cs-stack-inner");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        // Animate the current card scaling down exactly when the *next* card moves up
        gsap.to(cardInners[i], {
          scale: 0.9 - (i * 0.02), // Stack cards smaller towards the back
          opacity: 1, // Keep opacity to 100%
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 85%", // Animation starts when the next card's top reaches 85% of screen
            end: "top 15%",   // Animation ends when the next card hits the sticky header area
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        if (forwardedRef) {
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else {
            forwardedRef.current = node;
          }
        }
      }}
      id="case-studies"
      className="relative my-[8%] md:my-[6%]"
      aria-label="case studies"
    >
      {/* Section Heading */}
      <div className="cs-section-heading">
        <Heading title="Case Studies" />
      </div>

      {/* Stacked Cards Container */}
      <div ref={cardsWrapRef} className="mt-10 md:mt-16 -mx-5 md:-mx-10 xl:-mx-20 2xl:-mx-28 pb-[15vh]">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            className="cs-stack-card sticky mb-12 md:mb-16"
            style={{
              top: `calc(15vh + ${index * 20}px)`
            }}
          >
            <div className="cs-stack-inner will-change-transform" style={{ transformOrigin: "center top" }}>
              <Link to={`/case-studies/${caseStudy.slug}`} className="block">
                <div className="group relative bg-secondary-100 rounded-2xl overflow-hidden border border-secondary-300/50 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image — alternates side: odd=left, even=right */}
                    <div
                      className="relative overflow-hidden aspect-[16/9] md:aspect-auto md:min-h-[360px] bg-gray-900/50 flex items-center justify-center"
                      style={{ order: index % 2 === 0 ? 0 : 1 }}
                    >
                      <img
                        className="w-full h-full object-contain"
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
                      {/* Index badge */}
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center font-grotesk text-sm font-bold text-accent-400 shadow-md">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content — alternates side opposite to image */}
                    <div
                      className="p-6 md:p-10 lg:p-14 flex flex-col justify-center"
                      style={{ order: index % 2 === 0 ? 1 : 0 }}
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="rounded-full bg-transparent border border-accent-400/30 px-3 py-1.5 text-accent-400 text-xs font-grotesk font-medium">
                          {caseStudy.year}
                        </span>
                        <span className="rounded-full bg-transparent border border-accent-400/30 px-3 py-1.5 text-accent-400 text-xs font-grotesk font-medium">
                          {caseStudy.tools.slice(0, 2).join(" • ")}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-general font-semibold text-accent-400 leading-tight tracking-tight mb-3">
                        {caseStudy.title}
                      </h3>

                      <p className="text-secondary-600 font-grotesk text-sm md:text-base leading-relaxed mb-2">
                        {caseStudy.subtitle}
                      </p>

                      <p className="text-secondary-500 font-grotesk text-xs md:text-sm mb-6">
                        {caseStudy.type}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {caseStudy.tools.slice(0, 5).map((tool, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full bg-white text-secondary-700 text-[11px] font-grotesk font-medium border border-secondary-300/50"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-accent-400 font-grotesk font-bold text-sm tracking-wide group-hover:tracking-wider transition-all duration-300">
                          Read Case Study
                        </span>
                        <div className="w-8 h-8 rounded-full border border-accent-400/30 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-400 group-hover:border-accent-400">
                          <svg
                            className="w-3.5 h-3.5 text-accent-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}