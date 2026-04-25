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
                        <p className="subtitle">Développeur</p>
                    </div>

                    <div className="about-photo-wrapper">
                        <img
                            src="/profile.jpg"
                            alt="Photo de profil"
                            className="about-photo"
                        />
                        <p className="photo-hint">Remplace cette image avec `public/profile.jpg`</p>
                    </div>
                </section>

                <section className="about-section-card">
                    <h2>Mon Histoire</h2>
                    <p>
                        Je suis un développeur actuellement étudiant en informatique, je suis en alternance chez Soprema.
                        Dans le cadre de mon alternance, je travaille dans un ERP et j'apprend a develloper en Diva un language proprietaire de l'ERP.
                        Lors de mes etudes, j'ai participé a plusieurs projets universitaires qui m'ont permis de développer mes compétences dans différents langages et technologies, j'ai aussi pu apprendre la gestion de projet.
                    </p>
                </section>

                <section className="about-section-card">
                    <h2>Mes Compétences</h2>
                    <ul className="skills-list">
                        <li>React & React Router</li>
                        <li>TypeScript</li>
                        <li>Vite</li>
                        <li>CSS & Design Responsive</li>
                        <li>Docker</li>
                        <li>Frontend Development</li>
                        <li>Java</li>
                    </ul>
                </section>

                <section className="about-section-card">
                    <h2>Ma Philosophie</h2>
                    <p>
                        Je crois que le code doit être à la fois fonctionnel et beau. Chaque
                        projet que j'entreprends est une opportunité de créer quelque chose
                        d'exceptionnel qui fait une réelle différence pour les utilisateurs.
                    </p>
                </section>

                <section className="about-section-card">
                    <h2>Contactez-moi</h2>
                    <p>
                        Intéressé par une collaboration ? N'hésitez pas à me contacter pour
                        discuter de vos projets !
                    </p>
                </section>
            </main>
        </div>
    );
}
