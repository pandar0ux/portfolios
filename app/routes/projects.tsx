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
            "ERP de gestion de materiel pour manifestations sportives de l'Eurometropole de Strasbourg, avec une application de back-office et une application mobile pour les agent.",
        illustration: "/strasflow.png",
        illustrationAlt: "Illustration du projet Strasflow",
        techniques: ["TypeScript", "React Router", "CICD gitlab", "git"],
        connaissances: ["Analyse des besoins", "Qualite logicielle"],
        competences: ["Analyse fonctionnelle", "Travail en equipe", "Communication", "Gestion de projet"],
        status: "Termine",
        repoUrl: "https://git.unistra.fr/fenrir/stras-flow",
    },
    {
        title: "Tyr - Jeux serieux sur les violences",
        description:
            "Un jeux serieux dans lequel on incarne le chef d'un dojo qui fait partie de la mifia. Il faut eviter d'avoire trop d'eleve en les voilentant et en meme temps il faut avoir un plutôt bonne reputation pour eviter d'avoire des ennuis avec la police. Ce jeux doit permettre de sensibiliser aux differentes formes de violences et les differente forme qu'elle peuvent prendre.",
        illustration: "/tyr.png",
        illustrationAlt: "Illustration du projet de jeux serieux",
        techniques: ["Java", "Git"],
        connaissances: ["programation orienté objet", "Composants reutilisables"],
        competences: ["creation d'assets", "utilisation d'un moteur graphique maison"],
        status: "Termine",
        repoUrl: "https://git.unistra.fr/dtoupense/t3-maj23-t3-b",
        productionUrl: "https://git.unistra.fr/czekaj/t3-maj23-t3-b/-/releases"
    },
    {
        title: "Demography-Simulator",
        description:
            "ce projet est un simulateur de demographie qui se base sur la massification scolaire pour montrer les problematique de la demographie. Il permet de simuler l'evolution de la population en fonction de differentes variables comme le taux de natalite, le taux de mortalite et le taux de reussite et continiter dans les etudes. Il permet aussi de simuler l'impact de differentes politiques publiques sur la demographie.",
        illustration: "/demographique.png",
        illustrationAlt: "Illustration du projet de simulateur de demographie",
        techniques: ["TypeScript", "Git", "HTML", "CSS"],
        connaissances: [
            "Modelisation demographique (natalite, mortalite, scolarisation)",
            "Logique de simulation et evolution temporelle",
            "Structuration d'une interface web de visualisation",
        ],
        competences: [
            "travaille sous pressions de delais",
            "Priorisation des fonctionnalites essentielles",
            "Implementation front-end en TypeScript/HTML/CSS",
            "Collaboration et versioning avec Git/GitHub",
        ],
        status: "Termine",
        repoUrl: "https://github.com/Xen0Xys/Demography-Simulator",
        productionUrl: "https://xen0xys.github.io/Demography-Simulator/"
    },
    {
        title: "Simulation de Gestion d'un IUT",
        description: "Ce projet est une simulation de gestion d'un IUT. Il vous mes dans la peau du directeur d'un IUT pour gerer principalement le nombre d'etudiant et le nombre de professeur dans chaque departement et l'entretient des locaux. Le but du projet est de sensibiliser aux problematique de la gestion d'un IUT et de montrer les differentes variables qui peuvent influencer la gestion d'un IUT.",
        illustration: "/iut.png",
        illustrationAlt: "Illustration du projet de simulateur de gestion d'un IUT",
        techniques: ["C#", "Git", "Unity"],
        connaissances: [
            "Modelisation de la gestion d'un IUT",
            "Logique de simulation et evolution temporelle",
            "Structuration d'une interface de gestion",
        ],
        competences: [
            "developpement d'un jeu en 3D avec Unity",
            "creation d'assets 3D",
            "travail en equipe",
            "gestion de projet",
        ],
        status: "Termine",
        repoUrl: "https://git.unistra.fr/g.seiler/coresoftware-t3/-/tree/main?ref_type=heads",
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