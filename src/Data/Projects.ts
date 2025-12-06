import Project from "../Models/Project/Project";
import ProjectType from "../Models/Project/ProjectType";

const Projects: Project[] = [
    {
        name: "Caparte",
        image: "caparte.png",
        projectType: ProjectType.Personal,
        description: "Caparte é uma aplicação interativa que usa <b>Fabric.js</b> para criar capas personalizadas. Oferece experiência de design intuitiva e em tempo real, permitindo ajustar textos, imagens e elementos gráficos com facilidade.",
        website: "https://caparte.vercel.app/",
    },
    {
        name: "Three Shop",
        image: "threeshop.png",
        projectType: ProjectType.Academic,
        description: "Este projeto é uma aplicação que permite explorar e interagir com um modelo 3D (uma cama). Utilizando <b>Three.js</b>, a aplicação permite ao utilizador mudar o material e a cor de diferentes partes da mesma de forma simples e intuitiva.",
        github: "https://github.com/seilahAlbino/Three.JS-Shop-Example",
        website: "https://threeshop.netlify.app/",
    },
    {
        name: "Especialidades CNE",
        image: "cne_specialities.jpg",
        projectType: ProjectType.Professional,
        description: "Aplicação desenvolvida para escuteiros descobrirem as especialidades com que mais se identificam. Através de uma interface simples e intuitiva, os utilizadores respondem a questões que os ajudam a descobrir quais as especialidades que melhor correspondem aos seus interesses e aptidões.",
        website: "https://especialidades-cne.vercel.app/",
    },
]

export default Projects;
