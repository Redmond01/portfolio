

"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Github, ExternalLink, Mail } from 'lucide-react';
import { BsTiktok } from 'react-icons/bs';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import RaymondJPG from '@/public/asset/RaymondJPG.jpeg'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      name: "Powerhaven Church",
      description: "A fullstack web application for church which contains payment system, and event tracking for email integration",
      stack: ["Next.js", "React", "Node.js"],
      link: "https://powerhavenchurch.org",
      github: ""
    },
    {
      name: "Inplay Alert",
      description: "A web automation tool that tracks live football inplay matches and alerts football events that are winnable for preset options",
      stack: ["Node.js", "Puppeteer", "WebSocket"],
      link: "",
      github: ""
    }
  ];

  const skills = [
    "React.js", "Next.js", "Node.js", "JavaScript", "TypeScript",
    "Tailwind CSS", "Puppeteer", "WebSocket", "REST APIs", "Git"
  ];

  const socialLinks = [
    { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/raymonddev_", username: "@raymonddev_" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/oke-raymond-6b742a2a4/", username: "Oke Raymond" },
    { name: "TikTok", icon: BsTiktok, link: "https://tiktok.com/@imredmond", username: "@imredmond" }
  ];

  return (
    <div className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-200 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              Raymond.dev
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${activeSection === section
                    ? 'text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-blue-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left transition-colors ${activeSection === section
                    ? 'text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-blue-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Oke Raymond<br />Jesutofunmi
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium">Software Engineer</p>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              I build web applications and web automation tools and extensions using React.js and Node.js
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <Image src={RaymondJPG} alt='img' className='w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-blue-600 to-blue-900 border-4 border-blue-500/30' quality={100} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700 space-y-8">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate software engineer specializing in building modern web applications and automation tools.
              With expertise in both frontend and backend development, I create scalable solutions that solve real-world problems.
              My focus is on writing clean, efficient code and delivering exceptional user experiences.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Technologies & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 space-y-6"
              >
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>

                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700/50 text-blue-300 px-3 py-1 rounded-md text-sm border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700 space-y-8">
            <p className="text-lg text-slate-300 text-center leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of my social channels!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 bg-slate-700/30 rounded-xl border border-slate-600 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all group"
                  >
                    <Icon size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <div className="text-center">
                      <p className="font-semibold text-white">{social.name}</p>
                      <p className="text-sm text-slate-400">{social.username}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="text-center pt-4">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <Mail size={20} />
                <span>Send Me an Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-slate-400">
            © 2025 Oke Raymond Jesutofunmi. Built with Next.js & Tailwind CSS
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}