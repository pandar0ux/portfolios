import type { Route } from "./+types/about";
import { Link } from "react-router";

function withBaseUrl(path: string) {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "À Propos - Mon Portfolio" },
        { name: "description", content: "Découvrez mon histoire et mes compétences" },
    ];
}

export default function About() {
    return (
        <div className="about-container">
            <main className="main-content">
                <nav className="page-nav" aria-label="Navigation principale">
                    <Link to="/" className="page-nav-link active">A propos</Link>
                    <Link to="/projects" className="page-nav-link">Projets</Link>
                </nav>

                <section className="about-hero-card">
                    <div>
                        <h1>À Propos de Moi</h1>

                        <p>
                            Je suis développeur et actuellement étudiant en informatique, en alternance chez Soprema. Dans ce cadre, je travaille sur un ERP et développe en DIVA, un langage propriétaire, ce qui me permet de monter en compétences sur des problématiques concrètes en environnement professionnel.
                            Au cours de mes études, j’ai participé à plusieurs projets universitaires qui m’ont permis de développer mes compétences dans différents langages et technologies, ainsi que d’acquérir des bases en gestion de projet.
                            J’ai également réalisé un stage lors de ma deuxième année, durant lequel j’ai redéveloppé différents flux dans le cadre du passage d’une application en mode SaaS pour Soprema.
                        </p>
                    </div>

                    <div className="about-photo-wrapper">
                        <img
                            src={withBaseUrl("photo_likedin.png")}
                            alt="Photo de profil"
                            className="about-photo"
                        />
                    </div>
                </section>

                <section className="about-section-card">
                    <h2>Mes Compétences</h2>
                    <ul className="skills-list">
                        <li>React & React Router</li>
                        <li>TypeScript</li>
                        <li>Vite</li>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>Diva</li>
                        <li>C</li>
                        <li>C#</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>Git</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
