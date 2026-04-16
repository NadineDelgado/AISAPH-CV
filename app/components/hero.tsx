import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-bg"></div>
            <div className="hero-grid"></div>
            <div className="hero-accent"></div>
            
            <div className="hero-content">
                <div className="hero-badge">Certificação Internacional</div>
                <h1 className="hero-title">
                    Formação em<br />Socorrismo &<br /><span className="accent">Atendimento</span><br />Pré-Hospitalar
                </h1>
                <p className="hero-sub">
                    Capacitamos profissionais e instituições em Cabo Verde com certificações
                    reconhecidas e prática intensiva para salvar vidas em qualquer cenário.
                </p>
                <div className="hero-ctas">
                    <a href="#calendario" className="btn-primary">Inscreva-se Agora</a>
                    <a href="#incompany" className="btn-secondary">Formação In-Company</a>
                </div>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <div className="stat-num">+<span className="unit">350</span></div>
                    <div className="stat-label">Profissionais Formados</div>
                </div>
                <div className="stat">
                    <div className="stat-num">3<span className="unit">+</span></div>
                    <div className="stat-label">Certificações Internacionais</div>
                </div>
                <div className="stat">
                    <div className="stat-num">100<span className="unit">%</span></div>
                    <div className="stat-label">Prática em Simulações Reais</div>
                </div>
                <div className="stat">
                    <div className="stat-num">9<span className="unit">+</span></div>
                    <div className="stat-label">Ilhas de Alcance</div>
                </div>
            </div>
        </section>
    );
}