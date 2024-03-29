import Nav from "./components/Nav/Nav";
import GlobalStyle from "./components/Style/globalStyle";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const loca = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={loca} key={loca.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route exact path="/work/:id">
            <MovieDetail />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
