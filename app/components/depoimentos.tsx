"use client";

import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { GET_DEPOIMENTOS } from "../lib/queries/data"
import DepoimentosSkeleton from "./skeleton/depoimentosSkeleton";

export default function Porque() { 
    const { data, loading, error } = useQuery(GET_DEPOIMENTOS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-and-network'
    });

        console.log(data, "dataa");
        const depoimentoData: any = data
        console.log(depoimentoData, "dataat");
        const depoimentos:any[] = depoimentoData?.depoimentos;
    
        if (loading) return <DepoimentosSkeleton count={3} />;
        if (error) return <p>Erro ao carregar depoimentos</p>;
    
    
        if (!depoimentos?.length) {
            return <p>Sem depoimentos disponíveis</p>;
        }

    return(
        <section id="depoimentos">
            <div className="dep-header reveal">
                <div className="section-tag" style={{justifyContent :"center"}}>Testemunhos</div>
                <h2 className="section-title">O Que Dizem os Nossos<br/>Alunos e Parceiros</h2>
                <p>A confiança de quem já investiu na sua capacitação com a AISAPH-CV.</p>
            </div>

            <div className="dep-grid">
                {depoimentos?.map((depoimento: any) => {
                    return(
                        <div key={depoimento.nome} className="dep-card reveal">
                            <div className="dep-quote">"</div>
                            <p className="dep-text">{depoimento?.mensagem}</p>
                            <div className="dep-author">
                                <div className="dep-avatar">{depoimento?.inicial}</div>
                                <div>
                                    <div className="dep-name">{depoimento?.nome}</div>
                                    <div className="dep-role">{depoimento?.cargo}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}