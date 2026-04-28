import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../ui/Heading";

const certificatesData = [
  {
    id: 1,
    title: "Data Analytics And Visualization",
    issuer: "Professional Certification",
    date: "2025",
    category: "Data Analytics",
    pdfUrl: `${import.meta.env.BASE_URL}Data Analytics And Vissulization.pdf`,
    imageUrl: `${import.meta.env.BASE_URL}certificates/Data Analytics And Visualization.png`,
  },
  {
    id: 2,
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM / Coursera",
    date: "2025",
    category: "Data Science",
    pdfUrl: `${import.meta.env.BASE_URL}Databases and SQL for Data Science with Python.pdf`,
    imageUrl: `${import.meta.env.BASE_URL}certificates/Databases and SQL for Data Science with Python.png`,
  },
  {
    id: 3,
    title: "Gen AI For Data Analytics",
    issuer: "Professional Certification",
    date: "2025",
    category: "Generative AI",
    pdfUrl: `${import.meta.env.BASE_URL}Gen AI For Data Analytics.pdf`,
    imageUrl: `${import.meta.env.BASE_URL}certificates/Gen AI For Data Analytics.png`,
  },
  {
    id: 4,
    title: "Gen AI Prompt Engineering",
    issuer: "Professional Certification",
    date: "2025",
    category: "Generative AI",
    pdfUrl: `${import.meta.env.BASE_URL}Gen Ai Prompt Engg.pdf`,
    imageUrl: `${import.meta.env.BASE_URL}certificates/Gen AI Prompt Engineering.png`,
  },
  {
    id: 5,
    title: "Google Agile Project Management",
    issuer: "Google / Coursera",
    date: "2025",
    category: "Project Management",
    pdfUrl: `${import.meta.env.BASE_URL}Google Agile Project Management.pdf`,
    imageUrl: `${import.meta.env.BASE_URL}certificates/Google Agile Project Management.png`,
  },
  {
    id: 6,
    title: "Microsoft ETL",
    issuer: "Microsoft",
    date: "2025",
    category: "Data Engineering",
    pdfUrl: `${import.meta.env.BASE_URL}Microsoft (ETL).pdf`,
    imageUrl: `${import.meta.env.BASE_URL}certificates/Microsoft ETL.png`,
  },
];

/* ─── Certificate Card Component ─── */
function CertificateCard({ cert, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-accent-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
      
      <div className="relative bg-white rounded-2xl border-2 border-secondary-300 group-hover:border-accent-400 overflow-hidden transition-all duration-300 shadow-sm group-hover:shadow-xl">
        {/* Certificate Image Preview */}
        <div className="relative h-56 bg-secondary-200 overflow-hidden">
          <img 
            src={cert.imageUrl}
            alt={cert.title}
            className="w-full h-full object-cover object-top"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* View Certificate button - appears on hover */}
          <motion.a
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-accent-400/95 backdrop-blur-sm z-10"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg font-general">View Certificate</span>
            </div>
          </motion.a>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          {/* Category badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-grotesk bg-secondary-200 text-secondary-600 border border-secondary-300">
              {cert.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-accent-400 mb-2 font-general group-hover:text-accent-300 transition-colors line-clamp-2 min-h-[3.5rem]">
            {cert.title}
          </h3>
          
          {/* Issuer */}
          <p className="text-secondary-600 font-grotesk mb-3 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {cert.issuer}
          </p>
          
          {/* Date and Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-secondary-300">
            <span className="text-sm text-secondary-500 font-grotesk flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {cert.date}
            </span>
            
            {/* Download icon */}
            <a
              href={cert.pdfUrl}
              download
              className="w-9 h-9 rounded-full bg-secondary-200 hover:bg-accent-400 flex items-center justify-center transition-colors group/download border border-secondary-300"
              onClick={(e) => e.stopPropagation()}
              title="Download Certificate"
            >
              <svg className="w-4 h-4 text-secondary-600 group-hover/download:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function Certificates({ forwardedRef }) {
  const [sectionRef, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section
      ref={(el) => {
        sectionRef(el);
        if (forwardedRef) forwardedRef(el);
      }}
      id="certificates"
      className="my-[10%]"
      aria-label="professional certificates"
    >
      <Heading title="certificates" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 md:mt-16"
      >
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificatesData.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-white border-2 border-secondary-300 relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-500/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2 font-general">{certificatesData.length}</div>
              <div className="text-secondary-600 text-sm font-grotesk">Total Certificates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2 font-general">5+</div>
              <div className="text-secondary-600 text-sm font-grotesk">Platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2 font-general">2025</div>
              <div className="text-secondary-600 text-sm font-grotesk">Latest Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2 font-general">100%</div>
              <div className="text-secondary-600 text-sm font-grotesk">Verified</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
