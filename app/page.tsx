import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen text-stone-900 selection:bg-amber-200 selection:text-stone-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Hobbies />
      <Contact />
      <Footer />
      <ResumeModal />
    </main>
  );
}