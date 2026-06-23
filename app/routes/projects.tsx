import { Link } from "react-router";

import demographyImage from "../assets/demographique.png";
import iutImage from "../assets/iut.png";
import strasflowImage from "../assets/strasflow.png";
import tyrImage from "../assets/tyr.png";

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
            "ERP de gestion de matériel pour les manifestations sportives de l’Eurométropole de Strasbourg, avec une application de back-office et une application mobile pour les agents.",
        illustration: strasflowImage,
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
            "Un jeu sérieux dans lequel on incarne le chef d’un dojo qui fait partie de la mafia. Il faut éviter d’avoir trop d’élèves en les violentant et, en même temps, il faut avoir une plutôt bonne réputation pour éviter d’avoir des ennuis avec la police. Ce jeu doit permettre de sensibiliser aux différentes formes de violences et aux différentes formes qu’elles peuvent prendre.",
        illustration: tyrImage,
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
            "Ce projet est un simulateur de démographie qui se base sur la massification scolaire pour montrer les problématiques de la démographie. Il permet de simuler l’évolution de la population en fonction de différentes variables comme le taux de natalité, le taux de mortalité et le taux de réussite et de continuité dans les études. Il permet aussi de simuler l’impact de différentes politiques publiques sur la démographie.",
        illustration: demographyImage,
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
        description:
            "Ce projet est une simulation de gestion d’un IUT. Il vous met dans la peau du directeur d’un IUT pour gérer principalement le nombre d’étudiants et le nombre de professeurs dans chaque département, ainsi que l’entretien des locaux. Le but du projet est de sensibiliser aux problématiques de la gestion d’un IUT et de montrer les différentes variables qui peuvent influencer cette gestion.",
        illustration: iutImage,
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

export function meta() {
    return [
        { title: "Tableau des quêtes - Portfolio RPG" },
        {
            name: "description",
            content: "Découvrez les projets sous forme de tableau de quêtes avec un style RPG.",
        },
    ];
}

export default function Projects() {
    return (
        <div className="projects-container">
            <main className="main-content">
                <header className="rpg-banner rpg-banner-projects">
                    <div className="rpg-banner-grid">
                        <div>
                            <h1 className="rpg-banner-title">Missions accomplies</h1>
                            <p className="rpg-banner-copy">
                                Chaque projet est présenté avec ses techniques et les connaissances nessesaire pour le réaliser.
                            </p>
                        </div>

                        <div className="rpg-banner-panel">
                            <div className="rpg-progress">
                                <div className="rpg-progress-label">Missions terminées</div>
                                <div className="rpg-progress-track"><span className="rpg-progress-fill rpg-progress-fill-quest" /></div>
                            </div>
                            <div className="rpg-progress">
                                <div className="rpg-progress-label">Outils maîtrisés</div>
                                <div className="rpg-progress-track"><span className="rpg-progress-fill rpg-progress-fill-tool" /></div>
                            </div>
                            <div className="rpg-progress">
                                <div className="rpg-progress-label">Ambition</div>
                                <div className="rpg-progress-track"><span className="rpg-progress-fill rpg-progress-fill-ambition" /></div>
                            </div>
                        </div>
                    </div>
                </header>

                <nav className="page-nav" aria-label="Navigation principale">
                    <Link to="/" className="page-nav-link">
                        Compétences
                    </Link>
                    <Link to="/projects" className="page-nav-link active">
                        Missions
                    </Link>
                </nav>

                <section className="about-hero-card">
                    <div>
                        <h1>Mes projets</h1>
                        <p>
                            Voici une sélection de projets sur lesquels j’ai travaillé dans le cadre de mes études et de mes expériences. Chaque carte représente une mission accomplie avec ses outils, ses apprentissages et ses récompenses.
                        </p>
                    </div>
                </section>

                <section className="projects-grid" aria-label="Liste de projets">
                    {projects.map((project) => (
                        <article key={project.title} className="project-card">
                            <img
                                src={project.illustration}
                                alt={project.illustrationAlt}
                                className="project-illustration"
                                loading="lazy"
                                decoding="async"
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