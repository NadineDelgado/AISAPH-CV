"use client";

import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { GET_CURSOS } from "../lib/queries/data"
import CursosSkeleton from "./skeleton/cursosSkeleton";

export default function Cursos() {
    const { data, loading, error } = useQuery(GET_CURSOS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-and-network'
    });

    console.log(data, "dataapi");
    const cursoData: any = data
    console.log(cursoData, "dataap");
    const cursos:any[] = cursoData?.cursos;

    if (loading) return <CursosSkeleton count={3} />;
    if (error) return <p>Erro ao carregar cursos</p>;


    if (!cursos?.length) {
        return <p>Sem cursos disponíveis</p>;
    }

    return (
        <section id="cursos">
            <div className="cursos-intro reveal">
                <div className="section-tag">Programas de Formação</div>
                <h2 className="section-title">Escolha o Nível<br />Certo para Si</h2>
                <p>Do nível básico ao especializado, oferecemos cursos adaptados a diferentes públicos, com certificação nacional e internacional.</p>
            </div>

            <div className="cursos-grid">
                {cursos?.map((curso: any) => {
                    return (
                        <div key={curso.documentId} className="curso-card reveal">
                            <div className="curso-num">{String(curso?.num).padStart(2, "0")}</div>
                            <div className="curso-icon">{curso?.icone}</div>
                            <div className="curso-level">{curso?.nivel}</div>
                            <h3 className="curso-name">{curso?.Nome}</h3>
                            <p className="curso-desc">{curso?.description}</p>
                            <div className="curso-meta">
                                <div className="meta-item"><strong>{curso?.duracao}</strong>Carga Horária</div>
                                <div className="meta-item"><strong>{curso?.publico}</strong>Público-alvo</div>
                                <div className="meta-item"><strong>{curso?.certificacao}</strong>Certificação</div>
                            </div>
                            {/*<!--<a href="#calendario" className="btn-curso">Inscreva-se ›</a>-->*/}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}