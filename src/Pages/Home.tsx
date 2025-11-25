import React, { useRef, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Introduction from "../Components/Introduction/Introduction";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
import Contact from "../Components/Contact/Contact";
import ScrollToTopButton from "../Components/ScrollToTop/ScrollToTopButton";
import { gsap } from "gsap";
import {
  setupSimpleAnimation,
  setupTimelineAnimation,
} from "../Animations/gsapAnimations";
import {
  aboutAnimationSettings,
  contactAnimationSettings,
  projectAnimationSettings,
} from "../Animations/gsapAnimationsOptions";

interface AnimationItem {
  selector: string | NodeListOf<HTMLElement>;
  settings: any;
  type: "simple" | "timeline";
}

function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectElements = projectsRef.current?.querySelectorAll<HTMLElement>(".project");

    const animations: AnimationItem[] = [
      { selector: ".aboutTitle", settings: aboutAnimationSettings.title, type: "simple" },
      { selector: ".aboutText", settings: aboutAnimationSettings.aboutText, type: "simple" },
      { selector: ".tecnologias", settings: aboutAnimationSettings.tecnologias, type: "simple" },
      { selector: ".projectsTitle", settings: projectAnimationSettings.title, type: "simple" },
      { selector: ".contactTitle", settings: contactAnimationSettings.title, type: "simple" },
      { selector: ".contactForm", settings: contactAnimationSettings.contact, type: "simple" },
    ];

    if (projectElements && projectElements.length > 0) {
      animations.push({
        selector: projectElements,
        settings: projectAnimationSettings.projects,
        type: "timeline",
      });
    }

    animations.forEach(({ selector, settings, type }) => {
      const { initial, final, trigger, customOptions } = settings;
      if (type === "simple") {
        setupSimpleAnimation(selector, initial, final, trigger, customOptions);
      } else if (type === "timeline" && selector instanceof NodeList) {
        setupTimelineAnimation(selector, initial, final, trigger, customOptions);
      }
    });

    return () => {
      const selectorsToKill = [
        ".aboutTitle",
        ".aboutText",
        ".tecnologias",
        ".projectsTitle",
        ".project",
        ".contactTitle",
        ".contactForm",
      ];
      selectorsToKill.forEach((selector) => gsap.killTweensOf(selector));
    };
}, []);


  return (
    <div className="App bg-lightbackground dark:bg-darkbackground text-lighttext dark:text-darktext overflow-hidden">
      <header>
        <Navbar />
        <Introduction />
      </header>

      <main>
        <section id="about">
          <About />
        </section>

        <section ref={projectsRef} id="projects" className="mt-5">
          <ProjectsSection />
        </section>

        <section id="contact" className="mt-5">
          <Contact />
        </section>

        <ScrollToTopButton />
      </main>
    </div>
  );
}

export default Home;
