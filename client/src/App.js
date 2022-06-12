import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client"

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}