import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Session from "./Session";
import NotFound from "./NotFound";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above.</h3>} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/confirmed" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="container">
        &copy;{new Date().getFullYear()} |{" "}
        <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
