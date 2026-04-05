import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Github, ExternalLink, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PROJECTS, NAV_LINKS } from "./data";

function isYouTube(src: string) {
  return src.includes("youtube.com") || src.includes("youtu.be");
}

function getYouTubeEmbed(src: string) {
  const match = src.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : src;
}

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const project = PROJECTS.find((p) => p.slug === slug);

  const scrollToHome = (section: string) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMobileMenuOpen(false);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Project not found.</p>
          <button onClick={() => navigate("/")} className="text-cyan-400 hover:underline">Go back home</button>
        </div>
      </div>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = PROJECTS[currentIndex - 1] ?? null;
  const nextProject = PROJECTS[currentIndex + 1] ?? null;

  const media = (project as any).media ?? [{ type: "image", src: project.image }];
  const active = media[activeIndex];

  const goPrev = () => setActiveIndex((i) => (i - 1 + media.length) % media.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % media.length);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/")}
              className="text-2xl text-white hover:text-cyan-400 transition-colors"
            >
              LJ<span className="text-cyan-400">.</span>
            </motion.button>

            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((item) => (
                <button key={item} onClick={() => scrollToHome(item.toLowerCase())}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {item}
                </button>
              ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="md:hidden pt-4 pb-2 flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <button key={item} onClick={() => scrollToHome(item.toLowerCase())}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left py-2">
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-32 pb-20 max-w-5xl relative z-10">

        {/* Back button */}
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          onClick={() => { navigate("/"); setTimeout(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), 100); }}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-cyan-400 mb-3 uppercase tracking-widest text-sm">Project</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">{project.title}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-10" />
        </motion.div>

        {/* Main viewer */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }} className="mb-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">

            <AnimatePresence mode="wait">
              {active.type === "video" ? (
                isYouTube(active.src) ? (
                  <motion.iframe
                    key={activeIndex}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    src={getYouTubeEmbed(active.src)}
                    className="w-full h-[400px] md:h-[520px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <motion.video
                    key={activeIndex}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    controls
                    playsInline
                    className="w-full h-[400px] md:h-[520px] bg-black"
                  >
                    <source src={active.src} />
                  </motion.video>
                )
              ) : (
                <motion.img
                  key={activeIndex}
                  src={active.src}
                  alt={`${project.title} ${activeIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(active.src)}
                  className="w-full h-[400px] md:h-[520px] object-cover cursor-zoom-in"
                />
              )}
            </AnimatePresence>

            {media.length > 1 && (
              <>
                <button onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs text-gray-400">
                  {activeIndex + 1} / {media.length}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        {media.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 mb-10">
            {media.map((item: any, i: number) => (
              <button key={i} onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all relative ${
                  i === activeIndex ? "border-cyan-500 opacity-100" : "border-white/10 opacity-50 hover:opacity-80"
                }`}>
                {item.type === "video" ? (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <span className="text-xs text-gray-400">{isYouTube(item.src) ? "YT" : "Video"}</span>
                  </div>
                ) : (
                  <img src={item.src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Description + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
            <h2 className="text-2xl text-white mb-4">About this project</h2>
            <div className="w-12 h-0.5 bg-cyan-500 mb-6" />
            <p className="text-gray-400 leading-relaxed whitespace-pre-line text-lg">
              {project.longDescription}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-6">

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-sm uppercase tracking-widest text-cyan-400 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col gap-3">
              <h3 className="text-sm uppercase tracking-widest text-cyan-400 mb-1">Links</h3>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  <Github size={16} /> View on GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {!project.github && !project.live && (
                <p className="text-gray-600 text-sm">No links available</p>
              )}
            </div>

          </motion.div>
        </div>

        {/* Prev / Next */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/10 flex justify-between items-center gap-4">
          {prevProject ? (
            <button onClick={() => { navigate(`/project/${prevProject.slug}`); setActiveIndex(0); }}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">{prevProject.title}</span>
            </button>
          ) : <div />}

          {nextProject ? (
            <button onClick={() => { navigate(`/project/${nextProject.slug}`); setActiveIndex(0); }}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group text-right">
              <span className="text-sm">{nextProject.title}</span>
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out">
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={lightbox} alt="Full size"
              className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10 pointer-events-none" />
            <button onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
