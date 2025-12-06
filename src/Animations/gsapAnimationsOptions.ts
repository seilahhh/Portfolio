import AnimationSettings from "../Models/Animation/AnimationsSettings";

export const aboutAnimationSettings: Record<string, AnimationSettings> = {
    title: {
        initial: { y: -100, opacity: 0 },
        final: { y: 0, opacity: 1 },
        trigger: ".aboutTitle",
        customOptions: { end: "bottom 501px" },
    },
    tecnologias: {
        initial: { x: 150, opacity: 0 },
        final: { x: 0, opacity: 1 },
        trigger: "#about",
        customOptions: { end: "bottom 700px" },
    },
    aboutText: {
        initial: { x: -150, opacity: 0 },
        final: { x: 0, opacity: 1 },
        trigger: "#about",
        customOptions: { end: "bottom 700px" },
    },
};

export const projectAnimationSettings: Record<string, AnimationSettings> = {
    title: {
        initial: { y: -100, opacity: 0 },
        final: { y: 0, opacity: 1 },
        trigger: ".projectsTitle",
        customOptions: { end: "bottom 501px" },
    },
    projects: {
        initial: { y: 150, opacity: 0 },
        final: { y: 0, opacity: 1 },
        trigger: "#projects",
    },
};