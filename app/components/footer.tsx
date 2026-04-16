import Link from "next/link";

export default function Footer() {
    return(
        <footer>
        <div className="footer-top">
            <div>
            <div className="footer-logo">AISAPH<span>-CV</span></div>
            <p className="footer-desc">Academia Internacional de Socorrismo e Atendimento Pré-Hospitalar de Cabo Verde. Formação técnica, certificada e reconhecida para salvar vidas.</p>
            <div className="footer-contact">
                <a href="mailto:info@aisaph.com">📧 info@aisaph.com</a>
                <a href="tel:+2389847658">📞 (+238) 984 7658</a>
                <a href="https://wa.me/2389847658">💬 WhatsApp – Clique para conversar</a>
                <a href="#">📍 Praia, Cabo Verde</a>
            </div>
            </div>
            <div className="footer-col">
            <h4>Cursos</h4>
            <ul>
                <li><a href="#">Básico – Primeiros Socorros</a></li>
                <li><a href="#">Avançado – APH</a></li>
                <li><a href="#">Especializado – APH Prof.</a></li>
                <li><a href="#">Formação In-Company</a></li>
            </ul>
            </div>
            <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Certificações</a></li>
                <li><a href="#">Parceiros</a></li>
                <li><a href="#">Calendário</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            </div>
            <div className="footer-col">
            <h4>Contato</h4>
            <ul>
                <li><a href="https://www.facebook.com/AISAPH.CV">Facebook</a></li>
                <li><a href="https://www.instagram.com/aisaph.cv">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/academia-internacional-de-socorrismo-e-aph-cabo-verde-0349213a6/">LinkedIn</a></li>
                <li><a href="#">YouTube</a></li>
            </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <span>© 2026 AISAPH-CV — Todos os direitos reservados.</span>
            <div className="social-links">
            <a href="https://www.facebook.com/AISAPH.CV">f</a>
            <a href="https://www.linkedin.com/in/academia-internacional-de-socorrismo-e-aph-cabo-verde-0349213a6/">in</a>
            <a href="https://www.instagram.com/aisaph.cv">ig</a>
            </div>
        </div>
        </footer>
    );
}