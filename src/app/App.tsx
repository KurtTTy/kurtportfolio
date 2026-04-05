import { motion, useAnimation } from "motion/react";
import { ExternalLink, ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { SiReact, SiTypescript, SiNodedotjs, SiCss, SiGit, SiDocker, SiMysql, SiMongodb, SiPython, SiJavascript, SiLua } from "react-icons/si";
import { NAV_LINKS, SOCIAL_LINKS, ABOUT_CARDS, STATS, SKILL_CATEGORIES, TOOLS, PROJECTS, CONTACT_CARDS } from "./data";

function FloatingItem({ children, startX, startY, speed }: {
  children: React.ReactNode;
  startX: number;
  startY: number;
  speed: number;
}) {
  const controls = useAnimation();
  const [pos, setPos] = useState({ x: startX, y: startY });

  const jump = () => {
    const next = { x: Math.random() * 88, y: Math.random() * 88 };
    setPos(next);
    controls.start({ left: `${next.x}%`, top: `${next.y}%`, transition: { duration: speed, ease: "easeInOut" } });
  };

  useEffect(() => {
    controls.start({ left: `${pos.x}%`, top: `${pos.y}%`, transition: { duration: speed, ease: "easeInOut" } });
  }, []);

  return (
    <motion.div
      animate={controls}
      onAnimationComplete={jump}
      onHoverStart={jump}
      style={{ position: "absolute", left: `${startX}%`, top: `${startY}%` }}
      className="cursor-pointer z-0"
    >
      {children}
    </motion.div>
  );
}

const PROFILE_IMAGE = {
  src:        "/image/kurt.png",

  container: {
    width:  "480px",
    height: "480px",
  },

  image: {
    width:  "100%",
    height: "100%",
    left:   "0%",
    top:    "0%",
  },

  glow: {
    size:   "80%",
    left:   "10%",
    top:    "10%",
  },
};


export default function App() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative bg-[#0a0a0a]">

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl text-white"
            >
              LJ<span className="text-cyan-400">.</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pt-4 pb-2 flex flex-col gap-3"
            >
              {NAV_LINKS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left py-2"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">

        <section id="home" className="min-h-screen snap-start flex items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden pt-20 pb-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left order-1 lg:order-1"
              >
                <div className="text-cyan-400 mb-4 text-sm uppercase tracking-widest">Welcome to my portfolio</div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Lj Kurt
                  </span>
                </h1>

                <h2 className="text-3xl md:text-4xl text-gray-300 mb-6">Axster Pascual</h2>
                <p className="text-xl text-gray-400 mb-4">Computer Engineer</p>
                <p className="text-lg text-gray-500 mb-8">Game Developer • Full Stack Developer</p>

                <p className="text-gray-400 mb-10 max-w-lg leading-relaxed">
                  Passionate about building immersive gaming experiences and modern web applications.
                  Combining engineering principles with creative development.
                </p>

                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <motion.button
                    onClick={() => scrollTo("projects")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-all flex items-center gap-2"
                  >
                    View Projects
                    <ArrowRight size={18} />
                  </motion.button>

                  <motion.button
                    onClick={() => scrollTo("contact")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
                  >
                    Contact Me
                  </motion.button>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all"
                    >
                      <Icon size={20} className="text-gray-400" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-end order-2 lg:order-2"
              >
                <div className="relative" style={{ width: PROFILE_IMAGE.container.width, height: PROFILE_IMAGE.container.height }}>

                  {/* Glowing circle — positioned to follow image center via PROFILE_IMAGE.glow */}
                  <div className="absolute rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-2xl"
                    style={{ width: PROFILE_IMAGE.glow.size, height: PROFILE_IMAGE.glow.size, left: PROFILE_IMAGE.glow.left, top: PROFILE_IMAGE.glow.top }} />
                  <div className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-700/10"
                    style={{ width: PROFILE_IMAGE.glow.size, height: PROFILE_IMAGE.glow.size, left: PROFILE_IMAGE.glow.left, top: PROFILE_IMAGE.glow.top }} />

                  {([
                    { Icon: SiReact,      color: "#61DAFB", x: 8,  y: 10, speed: 5  },
                    { Icon: SiTypescript, color: "#3178C6", x: 75, y: 5,  speed: 6  },
                    { Icon: SiLua,        color: "#00007C", x: 5,  y: 70, speed: 8  },
                    { Icon: SiCss,        color: "#264DE4", x: 60, y: 80, speed: 7  },
                    { Icon: SiMysql,      color: "#E48E00", x: 15, y: 45, speed: 6  },
                    { Icon: SiPython,     color: "#3776AB", x: 25, y: 85, speed: 5  },
                    { Icon: SiJavascript, color: "#F7DF1E", x: 50, y: 20, speed: 7  },
                  ] as const).map(({ Icon, color, x, y, speed }, i) => (
                    <FloatingItem key={`icon-${i}`} startX={x} startY={y} speed={speed}>
                      <Icon size={36} color={color} style={{ opacity: 0.2 }} />
                    </FloatingItem>
                  ))}

                  {[
                    { text: "< >", x: 30, y: 50, speed: 7 },
                    { text: "{ }", x: 88, y: 80, speed: 7 },
                    { text: "/",   x: 3,  y: 30, speed: 7 },
                    { text: "[ ]", x: 55, y: 90, speed: 7 },
                  ].map(({ text, x, y, speed }, i) => (
                    <FloatingItem key={`code-${i}`} startX={x} startY={y} speed={speed}>
                      <span className="text-4xl font-mono font-bold text-cyan-400" style={{ opacity: 0.2 }}>
                        {text}
                      </span>
                    </FloatingItem>
                  ))}

                  <img
                    src={PROFILE_IMAGE.src}
                    alt="Lj Kurt"
                    className="absolute object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] z-20 pointer-events-none"
                    style={{
                      width:  PROFILE_IMAGE.image.width,
                      height: PROFILE_IMAGE.image.height,
                      left:   PROFILE_IMAGE.image.left,
                      top:    PROFILE_IMAGE.image.top,
                    }}
                  />
                </div>
              </motion.div>


            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen snap-start flex items-center justify-center bg-[#0a0a0a] py-20 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <div className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">About Me</div>
                <h2 className="text-4xl md:text-5xl text-white mb-6">Who I Am</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {ABOUT_CARDS.map(({ icon: Icon, title, description }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                      <Icon className="text-cyan-400" size={28} />
                    </div>
                    <h3 className="text-2xl mb-4 text-white">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
                {STATS.map(({ value, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                      {value}
                    </div>
                    <div className="text-gray-500 text-sm">{label}</div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        <section id="skills" className="min-h-screen snap-start flex items-center justify-center bg-[#0a0a0a] py-20 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <div className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">Tech Stack</div>
                <h2 className="text-4xl md:text-5xl text-white mb-6">Skills & Tools</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES.map(({ icon: Icon, title, skills, wide }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ${wide ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}`}
                  >
                    <h3 className="text-xl mb-6 text-white flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <Icon className="text-cyan-400" size={20} />
                      </div>
                      {title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg border border-white/10 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <h3 className="text-lg mb-6 text-gray-400">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {TOOLS.map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg border border-white/10 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        <section id="projects" className="min-h-screen snap-start flex items-center justify-center bg-[#0a0a0a] py-20 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <div className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">Portfolio</div>
                <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    onClick={() => navigate(`/project/${project.slug}`)}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer group"
                  >
                    <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl mb-2 text-white flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                          <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg text-sm border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        <section id="contact" className="min-h-screen snap-start flex items-center justify-center bg-[#0a0a0a] py-20 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-cyan-400 mb-4 uppercase tracking-widest text-sm">Get In Touch</div>
              <h2 className="text-4xl md:text-5xl text-white mb-6">Let's Work Together</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />

              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities.
                Whether it's a FiveM server, web application or a mobile application, let's make it happen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {CONTACT_CARDS.map(({ icon: Icon, title, href, label, copyEmail: isCopyEmail }) => (
                  isCopyEmail ? (
                    <motion.button
                      key={title}
                      onClick={() => copyEmail(href)}
                      whileHover={{ y: -5 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all w-full cursor-pointer"
                    >
                      <Icon className="mx-auto mb-4 text-cyan-400" size={32} />
                      <h3 className="text-lg mb-2 text-white">{title}</h3>
                      <span className="text-sm transition-colors" style={{ color: emailCopied ? "#22d3ee" : "#9ca3af" }}>
                        {emailCopied ? "Copied!" : label}
                      </span>
                    </motion.button>
                  ) : (
                    <motion.a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all block cursor-pointer"
                    >
                      <Icon className="mx-auto mb-4 text-cyan-400" size={32} />
                      <h3 className="text-lg mb-2 text-white">{title}</h3>
                      <span className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">{label}</span>
                    </motion.a>
                  )
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <motion.a
                  href="mailto:ljkurtaxsterpascual01@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-all"
                >
                  Send Message
                </motion.a>

                <motion.button
                  onClick={() => scrollTo("home")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
                >
                  Back to Top
                </motion.button>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">© 2026 Lj Kurt Axster Pascual. All rights reserved.</p>
              </div>

            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
