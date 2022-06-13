import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client"
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import "./styles/App.scss"

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <div className="nav-container">
            <Navbar />
          </div>
          <div className="sub-container">
            <Routes>
              <Route index element={<Home />} />
              <Route path="projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}