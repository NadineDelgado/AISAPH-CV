import { gql } from "@apollo/client";

export const GET_CURSOS = gql`
  query Cursos {
  cursos(sort: "num:asc") {
    Nome
    certificacao
    description
    duracao
    icone
    nivel
    num
    publico
    documentId
  }
}
`;

export const GET_DEPOIMENTOS = gql`
  query Depoimentos {
  depoimentos  {
    mensagem
    cargo
    nome
    inicial
  }
}
`;

export const GET_PARCEIROS = gql`
query Parceiros {
  parceiros {
    pais1
    pais2
    pais3
    pais4
    pais5
  }
}
`;

export const GET_PORQUES = gql`
query Porques {
  porques {
    icone
    descricao
    cargo
  }
}
`;

export const GET_CALENDARIO = gql`
mutation CreateCalendario($data: CalendarioInput!) {
  createCalendario(data: $data) {
    curso
    email
    nome
    telefone
  }
}
`;

export const GET_CURSO_CALENDARIO = gql`
query Cursocalendarios {
  cursocalendarios {
    nome
    documentId
  }
}
`;