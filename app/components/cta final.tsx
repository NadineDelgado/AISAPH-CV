import Link from "next/link";

export default function Ctafinal() {
    return(
        <section id="cta-final">
            <div className="cta-content">
                <div className="section-tag">Junte-se à AISAPH-CV</div>
                <h2>Seja Protagonista na<br/>Segurança e Resposta<br/>a Emergências</h2>
                <p>Conquiste certificações que abrem portas internacionalmente e faça parte de uma comunidade de profissionais comprometidos a salvar vidas.</p>
                <div className="cta-btns">
                    <a href="#calendario" className="btn-white">Quero Reservar Minha Vaga</a>
                    <a href="#incompany" className="btn-outline-white">Solicitar Proposta para Empresas</a>
                </div>
            </div>
        </section>
    );
}