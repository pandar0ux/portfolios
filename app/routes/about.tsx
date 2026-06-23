import { Link } from "react-router";

function withBaseUrl(path: string) {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

const profileStats = [
    { label: "Rôle", value: "Développeur en quête de maîtrise" },
    { label: "Niveau", value: "Alternant + étudiant" },
    { label: "Domaine", value: "ERP, applications métier, jeux sérieux" },
    { label: "Personnalité", value: "Curieux, rigoureux, orienté équipe" },
];

const journeySteps = [
    "Alternance chez Soprema sur un ERP et le langage propriétaire Diva.",
    "Projets universitaires variés avec du front-end, du Java, du C# et de la simulation.",
    "Stage de deuxième année centré sur la reprise de flux pour le passage d’une application en SaaS.",
];

export function meta() {
    return [
        { title: "Bastion - Portfolio RPG" },
        { name: "description", content: "Découvrez mon profil, mes compétences et mon parcours sous forme de fiche RPG." },
    ];
}

export default function About() {
    return (
        <div className="about-container">
            <main className="main-content">
                <header className="rpg-banner">
                    <div className="rpg-banner-grid">
                        <div>
                            <p className="subtitle">A propos</p>
                            <h1 className="rpg-banner-title">Développeur d'application</h1>
                            <p className="rpg-banner-copy">
                                Développeur et étudiant en informatique, j’avance entre ERP, projets universitaires et applications métier comme dans une vraie campagne RPG.
                            </p>
                        </div>

                        <div className="rpg-banner-panel">
                            <div className="rpg-progress">
                                <div className="rpg-progress-label">Expérience</div>
                                <div className="rpg-progress-track"><span className="rpg-progress-fill rpg-progress-fill-xp" /></div>
                            </div>
                            <div className="rpg-progress">
                                <div className="rpg-progress-label">Polyvalence</div>
                                <div className="rpg-progress-track"><span className="rpg-progress-fill rpg-progress-fill-skill" /></div>
                            </div>
                            <div className="rpg-progress">
                                <div className="rpg-progress-label">Travail d'équipe</div>
                                <div className="rpg-progress-track"><span className="rpg-progress-fill rpg-progress-fill-team" /></div>
                            </div>
                        </div>
                    </div>
                </header>

                <nav className="page-nav" aria-label="Navigation principale">
                    <Link to="/" className="page-nav-link active">Compétences</Link>
                    <Link to="/projects" className="page-nav-link">Mission</Link>
                </nav>

                <section className="about-hero-card">
                    <div>
                        <h1>À propos de moi</h1>

                        <p>
                            Je suis développeur et étudiant en informatique. En alternance chez Soprema, je travaille sur un ERP et je forge mes compétences sur Diva, un langage propriétaire, au contact de problématiques concrètes.
                            Au fil de mes études, j’ai participé à plusieurs projets universitaires qui m’ont permis d’élargir mon arsenal technique en front-end, en Java, en C# et en gestion de projet.
                            J’ai aussi réalisé un stage durant ma deuxième année, où j’ai redéveloppé différents flux dans le cadre du passage d’une application en mode SaaS pour Soprema.
                        </p>

                        <div className="rpg-metadata" aria-label="Informations de personnage">
                            {profileStats.map((stat) => (
                                <div key={stat.label} className="rpg-stat">
                                    <span className="rpg-stat-label">{stat.label}</span>
                                    <span className="rpg-stat-value">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-photo-wrapper">
                        <img
                            src={withBaseUrl("photo_likedin.png")}
                            alt="Portrait du développeur"
                            className="about-photo"
                        />
                    </div>
                </section>

                <section className="about-section-card">
                    <div className="quest-header">
                        <h2 className="section-heading">Mes compétences</h2>
                    </div>
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

                <section className="about-section-card">
                    <div className="quest-header">
                        <h2 className="section-heading">Parcours</h2>
                    </div>
                    <div className="quest-list">
                        {journeySteps.map((step) => (
                            <div className="quest-list-item" key={step}>
                                <span className="quest-list-icon" aria-hidden="true" />
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
