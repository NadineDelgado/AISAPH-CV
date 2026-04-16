import Link from "next/link";

export default function Calendario() {
    return(
        <section id="calendario">
            <div className="cal-header reveal">
                <div className="section-tag">Próximas Turmas</div>
                <h2 className="section-title light">Reserve a Sua Vaga</h2>
                <p>Garanta já a sua inscrição nas próximas turmas disponíveis e obtenha uma certificação reconhecida nacional e internacionalmente.</p>
            </div>

            <div className="cal-layout">
                <div className="turmas reveal">
                    {/*<!--<div class="turma">
                        <div class="turma-date"><div class="day">10</div><div class="month">Mar</div></div>
                        <div class="turma-info">
                        <h4>Primeiros Socorros – Básico</h4>
                        <span>📍 Praia, Santiago &nbsp;|&nbsp; ⏱ 20h &nbsp;|&nbsp; Início: 10 Mar 2026</span>
                        </div>
                        <span class="turma-tag">Vagas Abertas</span>
                    </div>
                    <div class="turma">
                        <div class="turma-date"><div class="day">14</div><div class="month">Abr</div></div>
                        <div class="turma-info">
                        <h4>Atendimento Pré-Hospitalar – Avançado</h4>
                        <span>📍 Mindelo, São Vicente &nbsp;|&nbsp; ⏱ 40h &nbsp;|&nbsp; Início: 14 Abr 2026</span>
                        </div>
                        <span class="turma-tag">Vagas Limitadas</span>
                    </div>
                    <div class="turma">
                        <div class="turma-date"><div class="day">05</div><div class="month">Mai</div></div>
                        <div class="turma-info">
                        <h4>APH Profissional – Especializado</h4>
                        <span>📍 Espargos, Sal &nbsp;|&nbsp; ⏱ 60h &nbsp;|&nbsp; Início: 5 Mai 2026</span>
                        </div>
                        <span class="turma-tag">Pré-inscrição</span>
                    </div>
                    <div class="turma">
                        <div class="turma-date"><div class="day">20</div><div class="month">Jun</div></div>
                        <div class="turma-info">
                        <h4>Primeiros Socorros – Básico</h4>
                        <span>📍 Praia, Santiago &nbsp;|&nbsp; ⏱ 20h &nbsp;|&nbsp; Início: 20 Jun 2026</span>
                        </div>
                        <span class="turma-tag">Em Breve</span>
                    </div>-->*/}
                </div>

            <div className="form-card reveal">
                <h3>Reservar Minha Vaga</h3>
                <p>Preencha o formulário e entraremos em contacto em menos de 24 horas.</p>
                <div className="form-group">
                    <label>Nome Completo</label>
                    <input type="text" placeholder="O seu nome"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="email@exemplo.com"/>
                </div>
                <div className="form-group">
                    <label>Telemóvel / WhatsApp</label>
                    <input type="tel" placeholder="+238 000 0000"/>
                </div>
                <div className="form-group">
                    <label>Curso de Interesse</label>
                    <select>
                    <option value="">Selecione o curso...</option>
                    <option>Básico – Primeiros Socorros (20h)</option>
                    <option>Avançado – Atendimento Pré-Hospitalar (40h)</option>
                    <option>Especializado – APH Profissional (60h)</option>
                    <option>Formação In-Company / Empresas</option>
                    </select>
                </div>
                <button className="btn-submit">Quero Reservar Minha Vaga →</button>
                </div>
            </div>
        </section>
    );
}