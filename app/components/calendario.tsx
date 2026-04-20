"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import Link from "next/link";
import { GET_CALENDARIO, GET_CURSO_CALENDARIO } from "../lib/queries/data";
import { useState } from "react";
import Cursos from "./cursos";

export default function Calendario() {
    const [form, setForm] = useState<any>({
        nome: null,
        email: null,
        telefone :null,
        curso: null,
    });

    const[errors, setErrors] = useState<any>({});
    const { data:data_curso_calendario, loading:loading_curso_calendario, error:error_curso_calendario } = useQuery(GET_CURSO_CALENDARIO, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-and-network'
    });
    

    const [createCalendario, { data, loading, error }] = useMutation(GET_CALENDARIO);

    const validate = () => { const newErrors: any = {};

        if (!form.nome.trim()) {
            newErrors.nome = "Nome é obrigatório";
        }

        if (!form.email || !form.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email inválido";
        }

        if (!form.telefone || !form.telefone.trim()) {
            newErrors.telefone = "Telefone é obrigatório";
        }

        if (!form.curso) {
            newErrors.curso = "Selecione um curso";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    console.log(data, "dataapi");
    const calendarioData: any = data_curso_calendario
    console.log(calendarioData, "dataap");
    const calendario: any[] = calendarioData?.cursocalendarios;
    const[showModal, setShowModal] = useState(false);
    /*const[sucess, setSuccess] = useState(false);*/

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validate()) return;
        try {
            const { data: result } = await createCalendario({
                variables: { data:form }
            });
                
            console.log('Saved:', result);

            /*setSuccess(true);*/

            setShowModal(true);

            setForm({
                nome: "",
                email: "",
                telefone: "",
                curso: "",
            });

            setErrors({});
        } catch (err) {
            console.error('Mutation error', err);
        }
    };

    if(loading_curso_calendario) return null; 
    if (error) return <p>Erro ao carregar</p>;

    return (
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

                {showModal && (
                    <div className="showmodal-box">
                        <div className="showmodal">
                            <h3>Reserva enviada com sucesso!</h3>
                            <button className="btn-ok" onClick={() => setShowModal(!showModal)}>OK</button>
                        </div>
                    </div>
                )}

                <form className="form-card reveal" onSubmit={handleSubmit}>
                    <h3>Reservar Minha Vaga</h3>
                    <p>Preencha o formulário e entraremos em contacto em menos de 24 horas.</p>
                    <div className="form-group">
                        <label>Nome Completo</label>
                        <input type="text" placeholder="O seu nome" value={form.nome??""}
                            onChange={(e) => setForm({ ...form, nome: e.target.value })
                            } />
                            {errors.nome && <span className="error">{errors.nome}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="email@exemplo.com" value={form.email??""}
                            onChange={(e) => setForm({ ...form, email: e.target.value })} />
                            {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Telemóvel / WhatsApp</label>
                        <input type="tel" placeholder="+238 000 0000" value={form.telefone??""}
                            onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                            {errors.telefone && <span className="error">{errors.telefone}</span>}
                    </div>

                    <div className="form-group">
                        <label>Curso de Interesse</label>

                        <select
                            value={form.curso??""}
                            onChange={(e) =>
                            setForm({ ...form, curso: e.target.value })
                            }
                        >
                            <option value="">Selecione o curso...</option>

                            {calendario?.map((item: any) => {
                            const curso = item.attributes;

                            return (
                                <option
                                key={item.documentId}
                                value={item?.nome}
                                >
                                    {item?.nome}
                                </option>
                            );
                            })}
                        </select>
                        {errors.curso && <span className="error">{errors.curso}</span>}
                    </div>
                    <button type="submit"  className="btn-submit">Quero Reservar Minha Vaga →</button>

                    
                </form>
            </div>
        </section>
    );
}