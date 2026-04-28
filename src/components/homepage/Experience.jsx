import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../ui/Heading";

const experienceData = [
  {
    id: "homedepot",
    role: "AI Product Manager",
    company: "The Home Depot",
    location: "USA",
    period: "Aug 2024 – Present",
    type: "current",
    achievements: [
      {
        metric: "$3M+",
        description:
          "incremental revenue by defining product strategy and shipping personalized search and recommendation engine using collaborative filtering and embeddings—improved conversion from 28% to 39% in 6 months across 50M+ annual customers.",
      },
      {
        metric: "25%",
        description:
          "reduction in merchandising decision time for 2,000+ store operations through agentic AI platform with multi-turn conversational interface leveraging autonomous reasoning agents (GPT 4, Claude, Gemini) and RAG architecture.",
      },
      {
        metric: "4 months",
        description:
          "to deliver MVP by leading cross-functional team of 12 (engineering, data science, UX)—defined product vision, authored 30+ PRDs and user stories, aligned stakeholders on OKRs, and managed sprint execution through Agile ceremonies.",
      },
      {
        metric: "$500K",
        description:
          "annual inventory optimization validated through ML-driven promotional pricing across 20+ quarterly tests using experimentation strategy and A/B testing framework with statistical rigor (power analysis, 95% confidence intervals).",
      },
      {
        metric: "98%",
        description:
          "responsible AI compliance achieved through AI governance framework including bias detection, explainability dashboards (SHAP), and human-in-the-loop validation—reduced model rollback incidents 60%.",
      },
      {
        metric: "30%",
        description:
          "acceleration in feature development across 5 product teams through reusable AI platform components (prompt templates, evaluation frameworks, deployment pipelines) on AWS SageMaker and Vertex AI.",
      },
      {
        metric: "15+",
        description:
          "product KPIs tracked through Power BI dashboards with ML performance metrics (precision, recall, drift) and ROI attribution—used by C-suite for strategic planning.",
      },
      {
        metric: "40%",
        description:
          "improvement in task completion time delivered through user research with 200+ store managers and merchandisers to drive product-market fit—translated insights into prioritized roadmap.",
      },
    ],
  },
  {
    id: "accenture",
    role: "Product Manager",
    company: "Accenture",
    location: "India",
    period: "Sept 2020 – Aug 2023",
    type: "previous",
    achievements: [
      {
        metric: "22%",
        description:
          "improvement in operational efficiency across core workflows by owning enterprise SaaS product roadmap and delivery strategy for digital transformation platform.",
      },
      {
        metric: "95%",
        description:
          "on-time delivery achieved by managing and prioritizing a 300+ item backlog using Jira while leading cross-functional Agile teams.",
      },
      {
        metric: "30%",
        description:
          "reduction in requirement clarification cycles through authoring detailed PRDs, release documentation, and decision logs in Confluence.",
      },
      {
        metric: "15+",
        description:
          "manual workflow steps eliminated and 28% reduction in fulfillment cycle time through discovery workshops and process mapping initiatives.",
      },
      {
        metric: "25%",
        description:
          "improvement in internal user task completion speed by collaborating with UX teams to validate wireframes and interaction designs.",
      },
      {
        metric: "18%",
        description:
          "increase in platform adoption within six months by leveraging SQL and analytics dashboards for data-informed feature prioritization.",
      },
      {
        metric: "20%",
        description:
          "reduction in integration defects by partnering with engineering teams to define API integration requirements and reviewing Swagger specifications.",
      },
      {
        metric: "Executive",
        description:
          "KPI dashboards built using Tableau to provide leadership visibility into delivery progress and business impact, enabling smooth phased deployments.",
      },
    ],
  },
];

/* ─── Framer Motion variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.97,
    transition: { duration: 0.3 },
  },
};

/* ─── Sub-components ─── */

function TabBar({ tabs, activeId, onSelect }) {
  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={`
              relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl
              font-general font-semibold text-sm sm:text-base whitespace-nowrap
              transition-all duration-400 ease-out select-none
              ${isActive
                ? "bg-accent-400 text-white shadow-xl shadow-accent-400/20"
                : "bg-white text-secondary-600 border border-secondary-300 hover:border-secondary-500 hover:text-accent-400 hover:shadow-md"
              }
            `}
          >
            {tab.type === "current" && (
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isActive ? "bg-green-400" : "bg-green-500"
                    }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isActive ? "bg-green-400" : "bg-green-500"
                    }`}
                />
              </span>
            )}
            <span>{tab.company}</span>

            {/* Active underline indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-white/40 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

function CompanyHeader({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl bg-accent-400 p-6 sm:p-8 md:p-10"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-200/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-6 right-8 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
        <svg
          className="w-3.5 h-3.5 text-secondary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-secondary-400 text-xs font-grotesk">
          {data.location}
        </span>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
              {data.role}
            </h3>
            <p className="text-secondary-400 text-base sm:text-lg font-grotesk">
              {data.company}, {data.location}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {data.type === "current" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold font-grotesk tracking-wide">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                CURRENT
              </span>
            )}
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-sm text-white/80 text-sm font-grotesk font-medium">
              {data.period}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MetricCard({ achievement, index }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative bg-white rounded-xl border border-secondary-300 hover:border-accent-400/40 transition-colors duration-300 overflow-hidden cursor-default"
    >
      {/* Left accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-400 via-accent-300 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 sm:p-6 flex items-start gap-4 sm:gap-5">
        {/* Metric badge */}
        <div className="flex-shrink-0 min-w-[56px] sm:min-w-[64px]">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-secondary-200 border-2 border-secondary-300 group-hover:border-accent-400 group-hover:bg-secondary-300 flex items-center justify-center transition-all duration-300">
            <span className="text-accent-400 text-xs sm:text-sm font-bold font-general text-center leading-tight px-1">
              {achievement.metric}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary-600 group-hover:text-accent-300 text-sm leading-relaxed font-grotesk transition-colors duration-300">
          {achievement.description}
        </p>
      </div>

      {/* Bottom subtle glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

/* ─── Main Component ─── */

export default function Experience({ forwardedRef }) {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);
  const [sectionRef, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  const activeCompany = experienceData.find((d) => d.id === activeTab);

  return (
    <section
      ref={(el) => {
        sectionRef(el);
        if (forwardedRef) forwardedRef(el);
      }}
      id="experience"
      className="my-[10%]"
      aria-label="professional experience"
    >
      <Heading title="experience" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 md:mt-16 space-y-6 md:space-y-8"
      >
        {/* Tab Bar */}
        <TabBar
          tabs={experienceData}
          activeId={activeTab}
          onSelect={setActiveTab}
        />

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          {activeCompany && (
            <motion.div
              key={activeCompany.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Company Header Card */}
              <CompanyHeader data={activeCompany} />

              {/* Achievements Grid */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-lg sm:text-xl font-semibold text-accent-400 font-general">
                    Key Achievements
                  </h4>
                  <span className="text-secondary-500 text-sm font-grotesk">
                    {activeCompany.achievements.length} highlights
                  </span>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-4 sm:gap-5 md:grid-cols-2"
                >
                  {activeCompany.achievements.map((achievement, i) => (
                    <MetricCard
                      key={`${activeCompany.id}-${i}`}
                      achievement={achievement}
                      index={i}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}