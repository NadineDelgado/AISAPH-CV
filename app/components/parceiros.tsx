"use client";

import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { GET_PARCEIROS } from "../lib/queries/data";
import ParceirosSkeleton from "./skeleton/parceirosSkeleton";

export default function Parceiros() {
    const { data, loading, error } = useQuery(GET_PARCEIROS, {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-and-network'
    });

        console.log(data, "dataab");
        const parceiroData: any = data
        console.log(parceiroData, "dataatb");
        const parceiros:any[] = parceiroData?.parceiros;
        
        if (loading) return <ParceirosSkeleton count={3} />;
        if (error) return <p>Erro ao carregar parceiros</p>;
        
        
        if (!parceiros?.length) {
            return <p>Sem parceiros disponíveis</p>;
        }

    return(
        <section id="parceiros">
            <p className="parceiros-label">Reconhecidos e credenciados por parceiros internacionais</p>
            <div className="parceiros-row">
                {parceiros?.map((parceiro: any) => {
                    return(
                        <div  key={parceiro.pais1} className="parceiro-group">
                            <span className="parceiro-tag">{parceiro?.pais1}</span>
                            <span className="parceiro-tag">{parceiro?.pais2}</span>
                            <span className="parceiro-tag">{parceiro?.pais3}</span>
                            <span className="parceiro-tag">{parceiro?.pais4}</span>
                            <span className="parceiro-tag">{parceiro?.pais5}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
    