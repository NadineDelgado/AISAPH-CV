"use client";

import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { GET_PORQUES } from "../lib/queries/data";
import PorquesSkeleton from "./skeleton/porquesSkeleton";

export default function Porque() {
    const { data, loading, error } = useQuery(GET_PORQUES, {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-and-network'
        });

        console.log(data, "dataaa");
        const porqueData: any = data
        console.log(porqueData, "dataatbc");
        const porques:any[] = porqueData?.porques;
                
        if (loading) return <PorquesSkeleton count={3} />;
        if (error) return <p>Erro ao carregar porques</p>;
                
                
        if (!porques?.length) {
            return <p>Sem porques disponíveis</p>;
        }

    return(
        <section id="porque">
            <div className="porque-header reveal">
                <div className="section-tag">A Nossa Diferença</div>
                <h2 className="section-title light">A Credibilidade<br/>que Faz a Diferença</h2>
                <p>Somos referência em Cabo Verde pela qualidade técnica, corpo docente especializado e reconhecimento internacional dos nossos programas.</p>
            </div>

            <div className="porque-grid">
                {porques?.map((porque: any) => {
                    return(
                        <div key={porque.cargo} className="porque-item reveal">
                            <div className="icon-wrap">{porque?.icone}</div>
                            <h3>{porque?.cargo}</h3>
                            <p>{porque?.descricao}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
