import Link from "next/link";

export default function Incompany() {
    return(
        <section id="incompany">
            <div className="incompany-img reveal">
                <img src="https://images.unsplash.com/photo-1583947582774-fc3c0c75a43b?w=900&q=80" alt="Formação in-company"/>
                <div className="incompany-badge">
                    <span className="num">100%</span>
                    <span className="label">Personalizado</span>
                </div>
            </div>

            <div className="incompany-content reveal">
                <div className="section-tag">Para Empresas & Eventos</div>
                <h2 className="section-title">Formações Sob Medida<br/>para a Sua Equipa</h2>
                <p>Treinamos equipas corporativas para garantir segurança em ambientes de risco. Desenvolvemos programas personalizados de acordo com o perfil e as necessidades da sua organização.</p>
                <ul className="incompany-list">
                    <li>Treinamento em primeiros socorros para equipas de hotelaria e turismo</li>
                    <li>Capacitação de guias turísticos e operadores de atividades de risco</li>
                    <li>Planos de resposta a emergências para eventos corporativos de grande porte</li>
                    <li>Formação especializada para empresas de transporte e logística</li>
                    <li>Certificação reconhecida para toda a equipa com registo blockchain</li>
                </ul>
                <a href="#calendario" className="btn-primary">Solicitar Proposta Personalizada</a>
            </div>
        </section>
    );
}