import type { Route } from "./+types/projects";
import { Link } from "react-router";

function withBaseUrl(path: string) {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

type Project = {
    title: string;
    description: string;
    illustration: string;
    illustrationAlt: string;
    techniques: string[];
    connaissances: string[];
    competences: string[];
    status: string;
    repoUrl?: string;
    productionUrl?: string;
};

const projects: Project[] = [
    {
        title: "Strasflow",
        description:
            "ERP de gestion de materiel pour manifestations sportives de l'Eurometropole de Strasbourg, avec une application de back-office et une application mobile agent.",
        illustration: "/strasflow.png",
        illustrationAlt: "Illustration du projet Strasflow",
        techniques: ["TypeScript", "React Router", "Architecture ERP"],
        connaissances: ["Cycle de vie applicatif", "Flux metier", "Qualite logicielle"],
        competences: ["Analyse fonctionnelle", "Travail en equipe", "Communication"],
        status: "Termine",
        repoUrl: "https://git.unistra.fr/fenrir/stras-flow",
    },
    {
        title: "Portfolio personnel",
        description:
            "Site personnel pour presenter mon profil, mes projets et mes competences, avec une interface responsive et evolutive.",
        illustration: "/photo_likedin.png",
        illustrationAlt: "Illustration du portfolio personnel",
        techniques: ["React Router", "TypeScript", "CSS"],
        connaissances: ["Routing", "Composants reutilisables", "Accessibilite web"],
        competences: ["UI Integration", "Structuration de contenu", "Autonomie"],
        status: "En cours",
    },
    {
        title: "Projet universitaire",
        description:
            "Application realisee en equipe pendant les etudes avec organisation des taches, versioning et suivi de livraison.",
        illustration: "/photo_likedin.png",
        illustrationAlt: "Illustration du projet universitaire",
        techniques: ["Java", "Git", "SQL"],
        connaissances: ["POO", "Tests de base", "Methodes projet"],
        competences: ["Collaboration", "Resolution de problemes", "Rigueur"],
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
                            Chaque fiche contient une description courte, une illustration, les
                            techniques, les connaissances, les competences et les liens utiles.
                        </p>
                    </div>
                </section>

                <section className="projects-grid" aria-label="Liste de projets">
                    {projects.map((project) => (
                        <article key={project.title} className="project-card">
                            <img
                                src={withBaseUrl(project.illustration)}
                                alt={project.illustrationAlt}
                                className="project-illustration"
                            />

                            <div className="project-head">
                                <h2>{project.title}</h2>
                                <span className="project-status">{project.status}</span>
                            </div>

                            <p>{project.description}</p>

                            <div className="project-section">
                                <h3>Techniques</h3>
                                <ul className="skills-list">
                                    {project.techniques.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-section">
                                <h3>Connaissances</h3>
                                <ul className="skills-list">
                                    {project.connaissances.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-section">
                                <h3>Competences</h3>
                                <ul className="skills-list">
                                    {project.competences.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-links">
                                {project.repoUrl ? (
                                    <a
                                        className="project-link"
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Depot de code
                                    </a>
                                ) : (
                                    <span className="project-link-muted">Depot: a ajouter</span>
                                )}

                                {project.productionUrl ? (
                                    <a
                                        className="project-link project-link-secondary"
                                        href={project.productionUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        URL de production
                                    </a>
                                ) : (
                                    <span className="project-link-muted">Production: non disponible</span>
                                )}
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}