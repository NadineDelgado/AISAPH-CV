"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import React from "react";

// Create a new Apollo client
const httpLink = new HttpLink({
   uri: process.env.NEXT_PUBLIC_API_URL,
});


const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache(),  
});

// Wrap the application with the ApolloProvider
export function ApolloWrapper({ children }) {
   return <ApolloProvider client={client}>{children}</ApolloProvider>;
}