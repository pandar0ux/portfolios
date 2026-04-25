import type { Route } from "./+types/projects";
import { Link } from "react-router";

type Project = {
    title: string;
    description: string;
    stack: string[];
    status: string;
};

const projects: Project[] = [
    {
        title: "Strasflow",
        description:
            "Un ERP de gestion de matirele pour des manifestation sportive pour l'eurometropole de strasbourg. Cela comprenait une application lourde de gestion et une application mobile pour les agents. J'ai principalement travaillé sur l'application lourde.",
        stack: ["React Router", "TypeScript", "Gestion de projet"],
        status: "Fini",
    },
    {
        title: "Portfolio personnel",
        description:
            "Creation et evolution de mon portfolio pour presenter mon profil, mes competences et mes realisations.",
        stack: ["React Router", "TypeScript", "CSS"],
        status: "En cours",
    },
    {
        title: "Projet universitaire",
        description:
            "Application developpee en equipe pendant mes etudes avec suivi des taches et repartition des roles.",
        stack: ["Java", "Git", "Travail en equipe"],
        status: "Termine",
    },
];

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Mes Projets - Mon Portfolio" },
        {
            name: "description",
            content: "Decouvrez les projets sur lesquels je travaille.",
        },
    ];
}

export default function Projects() {
    return (
        <div className="about-container">
            <main className="main-content">
                <nav className="page-nav" aria-label="Navigation principale">
                    <Link to="/" className="page-nav-link">
                        A propos
                    </Link>
                    <Link to="/projects" className="page-nav-link active">
                        Projets
                    </Link>
                </nav>

                <section className="about-hero-card">
                    <div>
                        <h1>Mes Projets</h1>
                        <p>
                            Cette page te permet de presenter tes realisations. Tu peux modifier
                            la liste dans le tableau <strong>projects</strong> du fichier.
                        </p>
                    </div>
                </section>

                <section className="projects-grid" aria-label="Liste de projets">
                    {projects.map((project) => (
                        <article key={project.title} className="project-card">
                            <div className="project-head">
                                <h2>{project.title}</h2>
                                <span className="project-status">{project.status}</span>
                            </div>

                            <p>{project.description}</p>

                            <ul className="skills-list">
                                {project.stack.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}