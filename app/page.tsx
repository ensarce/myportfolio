import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SkillsChart from "@/components/SkillsChart";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ScrollProgress from "@/components/ScrollProgress";
import EasterEggs from "@/components/EasterEggs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black dark:bg-black transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Language Switcher (Top Left) */}
      <LanguageSwitcher />

      {/* Theme Switcher (Top Right) */}
      <ThemeSwitcher />

      {/* Hero Section */}
      <Hero />

      {/* About & Philosophy Section */}
      <About />

      {/* Skills Chart Section */}
      <SkillsChart />

      {/* Services Grid */}
      <Services />

      {/* Portfolio / Shipped Products */}
      <Portfolio />

      {/* Stats Bar */}
      <Stats />

      {/* Footer with Contact Form */}
      <Footer />

      {/* AI Chat Assistant */}
      <ChatBot />

      {/* Easter Eggs */}
      <EasterEggs />
    </main>
  );
}
