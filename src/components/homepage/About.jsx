import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About({ forwardedRef }) {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([heading.current, body.current], {
        opacity: 0,
        y: 50
      });

      ScrollTrigger.create({
        trigger: aboutSection.current,
        start: "top 80%",
        // markers: true,
        animation: gsap
          .timeline()
          .to(
            heading.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0
          )
          .to(
            body.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0.2
          ),

        toggleActions: "play none none none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about"
      ref={(el) => { aboutSection.current = el; if (forwardedRef) forwardedRef(el); }} 
      aria-label="about me"
    >
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10">
        {/* Image - Shows first on mobile, first on desktop (LEFT) */}
        <div className="order-1 md:order-1 w-full md:w-2/5 top-28 overflow-hidden rounded-md md:sticky px-4 md:px-0">
          <div className="w-full max-w-md mx-auto md:max-w-none">
            <img
              ref={profile}
              loading="lazy"
              className="w-full h-auto rounded-md object-cover object-center"
              src="/Portfolio/Vinit.png"
              width="480"
              height="640"
              alt="portrait image of Vinit posing at an event"
            />
          </div>
        </div>
        
        {/* Content - Shows second on mobile, second on desktop (RIGHT) */}
        <div className="order-2 md:order-2 w-full md:w-3/5 top-20 sm:sticky md:top-28 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10 px-4 md:px-0">
            <h3
              ref={heading}
              className="text-heading-3 2xl:text-7xl font-semibold leading-tight text-white"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className="text-body-1 2xl:text-4xl text-white">
              Computer Science undergraduate (B.Tech, Big Data Analytics) transitioning into AI Product Management with strong technical and analytical grounding. Built and analyzed 3+ data-driven projects across analytics and AI workflows, working with 8,000+ labeled data instances and large datasets to extract actionable insights.

              <br></br>
              <br></br>

              Currently pursuing advanced coursework in Data Analytics and AI, enabling strong understanding of model performance, data pipelines, KPIs, and experimentation metrics. Experienced in Python, SQL, Power BI, and product research.

              <br></br>
              <br></br>

              Researched 20+ product-based and service-based companies and studied multiple real-world product case studies to understand product strategy, growth levers, and user-centric decision making. As a fresher, I bring structured problem-solving, data-backed thinking, and the ability to bridge technical teams with business objectives.

              <br></br>
              <br></br>

              Actively seeking an AI PM / Product Manager role to build scalable, user-focused, AI-driven products.
            </p>
            
            {/* Education Section */}
            <div className="mt-10 space-y-6">
              <h4 className="text-3xl 2xl:text-5xl font-bold text-white mb-8">
                Education
              </h4>
              
              <div className="space-y-6">
                {/* Bachelor's Degree */}
                <div className="bg-secondary-50 border-2 border-accent-300 rounded-lg p-6 hover:border-accent-400 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,10.09V17H23V9L12,3Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-2xl font-bold text-secondary-700 mb-3">
                        Bachelor of Technology in Computer Science & Engineering
                      </h5>
                      <p className="text-secondary-600 text-base mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        Parul University, Gujarat, India
                      </p>
                      
                      {/* Highlighted Specialization */}
                      <div className="bg-gradient-to-r from-accent-400 to-accent-500 rounded-lg p-4 mb-4 shadow-lg">
                        <div className="flex items-center gap-3">
                          <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                          </svg>
                          <div>
                            <p className="text-white text-xs font-medium uppercase tracking-wide mb-1">Specialization</p>
                            <p className="text-white text-lg font-bold">Big Data Analytics</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-secondary-200 text-secondary-700 text-sm rounded-full font-semibold">
                          Bachelor's Degree
                        </span>
                        <span className="px-4 py-2 bg-secondary-300 text-secondary-700 text-sm rounded-full font-semibold">
                          Computer Science & Engineering
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
