import type { Route } from "./+types/about";
import { Link } from "react-router";

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
                <section className="about-hero-card">
                    <div>
                        <h1>À Propos de Moi</h1>

                        <p>
                            Je suis un développeur actuellement étudiant en informatique, je suis en alternance chez Soprema.
                            Dans le cadre de mon alternance, je travaille dans un ERP et j'apprend a develloper en Diva un language proprietaire de l'ERP.
                            Lors de mes etudes, j'ai participé a plusieurs projets universitaires qui m'ont permis de développer mes compétences dans différents langages et technologies, j'ai aussi pu apprendre la gestion de projet.
                        </p>
                    </div>

                    <div className="about-photo-wrapper">
                        <img
                            src="/photo_likedin.png"
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
                        <li>Git</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
