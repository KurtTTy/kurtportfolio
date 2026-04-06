import { Github, Linkedin, Mail, Code2, Server, Gamepad2, BotIcon } from "lucide-react";

// ─── How to add images ────────────────────────────────────────────────────────
// 1. Drop your file into:  public/image/<project-slug>/<project-slug>-1.png
// 2. Use the path string:  "/image/<project-slug>/<project-slug>-1.png"
// No imports needed — just type the path directly in the media array below.

// ─── Nav & Social ────────────────────────────────────────────────────────────

export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

export const SOCIAL_LINKS = [
  { icon: Github,   href: "https://github.com/KurtTTy",              label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/its-ljkurt/", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:ljkurtaxsterpascual01@gmail.com",   label: "Email"    },
];

// ─── About Section ───────────────────────────────────────────────────────────

export const ABOUT_CARDS = [
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "1.5+ years of FiveM development experience, creating custom scripts, frameworks, and immersive roleplay systems.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "2+ years of frontend development, and 1 year of backend development building modern web applications with React, TypeScript, and cutting-edge technologies.",
  },
  {
    icon: Server,
    title: "Systems Engineering",
    description: "Computer engineering background enabling robust hardware architectures, distributed systems, and scalable solutions.",
  },
];

export const STATS = [
  { value: "2+",   label: "Years Frontend" },
  { value: "1+",   label: "Years Backend"  },
  { value: "1.5+", label: "Years Game Dev" },
  { value: "10+",  label: "Projects Built" },
  { value: "100%", label: "Passion Driven" },
];

// ─── Skills Section ───────────────────────────────────────────────────────────

export const SKILL_CATEGORIES = [
  { icon: Code2,    title: "Frontend",          skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Svelte", "Next.js", "Vite"] },
  { icon: Server,   title: "Backend",           skills: ["Node.js", "C++", "C#", "REST APIs", "Python", "PHP"] },
  { icon: Server,   title: "Database",          skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Supabase"] },
  { icon: Gamepad2, title: "Game Development",  skills: ["C++", "Lua 5.4", "FiveM", "QBCore", "Game Optimization", "Server Scripts"] },
  { icon: BotIcon,  title: "AI Tools",          skills: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Claude.Ai"], wide: true },
];

export const TOOLS = ["Git", "GitHub", "Docker", "Linux", "VS Code", "Figma"];

// ─── Projects ─────────────────────────────────────────────────────────────────
//
// Each project has:
//   image  — thumbnail shown on the main portfolio page
//   media  — array of { type: "image" | "video", src: string } shown on the detail page
//            For videos: local file path OR YouTube URL (e.g. "https://www.youtube.com/watch?v=xxx")
//
// To add more media, just push items into the media array:
//   { type: "image", src: myScreenshot },
//   { type: "video", src: "https://www.youtube.com/watch?v=abc123" },

export const PROJECTS = [
  {
    slug:            "gta5-roleplay-server",
    title:           "GTA 5 Roleplay Server (Helix RP)",
    description:     "Complete FiveM roleplay system with jobs, housing, and economy",
    longDescription: `Helix RP is a fully custom-built FiveM roleplay server designed to deliver a high-quality, immersive, and performance-optimized experience. Developed from the ground up using the QBOX framework, the server focuses on deep roleplay mechanics, a player-driven economy, and seamless system integration.
    At its core, Helix RP features a comprehensive job system that supports both whitelisted and civilian roles — police, EMS, mechanics, and various legal and illegal professions. Each job comes with custom mechanics, interactive systems, and progression paths. 
    The housing system lets players purchase, manage, and personalize properties, complete with storage and access control. A robust economy covers banking, business ownership, trading, and an evolving black market.
    All systems are powered by optimized Lua scripts with a React-based NUI for all menus and interfaces, backed by a MySQL database for reliable data persistence.`,
    tech: ["Lua", "React", "MySQL", "QBOX Framework"],
    image: "/image/helix-rp/helix-rp-1.png",
    media: [
      { type: "image", src: "/image/helix-rp/helix-rp-1.png" },
    ],
    github: "",
    live:   "",
  },

  {
    slug:            "player-hud",
    title:           "Player and Vehicle HUD",
    description:     "Custom FiveM HUD inspired by Prodigy RP's design, built with HTML/CSS and JavaScript",
    longDescription: `A fully custom Player and Vehicle HUD for FiveM servers, inspired by the clean interface of Prodigy RP. Built with HTML, CSS, JavaScript, and Lua for seamless NUI communication.
    Real-time player stats (health, armor, hunger, thirst, stamina, voice) are displayed in a minimal layout. The vehicle HUD adds a dynamic speedometer, gear indicator, fuel level, and engine status — all with smooth animated transitions.
    The HUD is fully modular: colors, positions, and features can be adjusted to match any server's branding. Optimized for low resource usage and compatible with QBX, QBcore, and standalone setups.`,
    tech:["HTML/CSS", "JavaScript", "Lua"],
    image: "/image/player-hud/player-hud-1.png",
    media: [
      { type: "image", src: "/image/player-hud/player-hud-1.png" },
      { type: "image", src: "/image/player-hud/player-hud-2.png" },
      { type: "image", src: "/image/player-hud/player-hud-3.png" },
    ],
    github: "https://github.com/KurtTTy",
    live:   "",
  },

  {
    slug:            "ox-library",
    title:           "Ox_Library Redesign",
    description:     "Ox_lib redesigned — a modern, glass-UI library for FiveM",
    longDescription: `A complete visual and functional overhaul of the original ox_lib, transforming it from a basic utility library into a fully modernized UI framework for high-end FiveM servers.
    The redesign introduces a sleek glass-like interface with transparency, depth, and smooth animations. Context menus, dialogs, progress bars, and notifications are rebuilt from scratch with a consistent design language — clean spacing, color-coded feedback, and subtle blur backgrounds.
    The result is a premium UI experience comparable to top-tier servers like Prodigy RP, serving as the visual backbone of an entire server ecosystem.`,
    tech:            ["Lua", "React"],
    image:           "/image/ox-library/ox-library-1.png",
    media: [
      { type: "image", src: "/image/ox-library/ox1.png" },
      { type: "image", src: "/image/ox-library/ox2.png" },
      { type: "image", src: "/image/ox-library/ox3.png" },
      { type: "image", src: "/image/ox-library/ox4.png" },
      { type: "image", src: "/image/ox-library/ox7.png" },
      { type: "image", src: "/image/ox-library/ox8.png" },
      { type: "video", src: "/image/ox-library/ox5.mp4" },
      { type: "video", src: "/image/ox-library/ox6.mp4" },


    ],
    github: "https://github.com/KurtTTy",
    live:   "",
  },

  {
    slug:            "site-survey-app",
    title:           "Technical Site Survey Report Application",
    description:     "Android app for technical site surveys with photo capture and PDF report export",
    longDescription: `An Android application built with Kotlin and Java for field engineers conducting technical site surveys. Users fill structured forms, attach on-site photos, annotate images, and export comprehensive PDF reports.

All data is stored locally with SQLite for offline-first use in areas with poor connectivity, with optional sync to a central server when online.`,
    tech:            ["Kotlin", "Java", "SQL"],
    image: "/image/site-survey/thumbnailsitesurvey.png",
    media: [
      { type: "image", src: "/image/site-survey/thumbnailsitesurvey.png" },
      { type: "image", src: "/image/site-survey/login.png" },
      { type: "image", src: "/image/site-survey/menu.png" },
      { type: "image", src: "/image/site-survey/page1.png" },
      { type: "image", src: "/image/site-survey/code.png" },
    ],
    github: "",
    live:   "",
  },

  {
    slug:            "flood-monitoring",
    title:           "AI-Based Flood Monitoring and Early Warning System",
    description:     "ML-powered flood prediction with real-time IoT sensors and community alerts",
    longDescription: `An AI-Based Real-Time Flood Detection and Early Warning System developed as a capstone thesis for Barangay Nabbuan, Santiago City, Isabela — a flood-prone community in the Philippines.
    The system integrates IoT ultrasonic sensors to measure water levels in real time. A machine learning model trained with TensorFlow analyzes this data alongside weather forecasts to classify flood risk as low, moderate, or high — triggering automated alerts before events occur.
    The backend runs on Python with Supabase for real-time data sync. The system is designed for edge operation in low-connectivity environments, with multi-channel alerts (audible alarms, SMS/digital notifications) reaching residents quickly and effectively.`,
    tech:["Python", "TensorFlow", "Supabase"],
    image:"https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
    ],
    github: "https://github.com/KurtTTy",
    live:   "",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_CARDS = [
  { icon: Mail,     title: "Email",    href: "ljkurtaxsterpascual01@gmail.com", label: "ljkurtaxsterpascual01@gmail.com", copyEmail: true },
  { icon: Github,   title: "GitHub",   href: "https://github.com/KurtTTy",     label: "github.com/KurtTTy" },
  { icon: Linkedin, title: "LinkedIn", href: "https://www.linkedin.com/in/its-ljkurt/", label: "linkedin.com/in/its-ljkurt" },
];
