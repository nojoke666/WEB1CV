import "./App.css";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Spin } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quotes from "./components/quotes/quotes";
import { ImagesProvider } from './utils/ImagesContext'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Favourites from './components/Favourites'
import { FavouritesProvider } from './utils/FavouritesContext'
const App = () => {
  return (
    <Suspense fallback={<Spin spinning={true} />}>
      <Helmet>
        <title>{process.env.REACT_APP_TITLE}</title>
      </Helmet>
      <ImagesProvider>
        <FavouritesProvider>
          <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={Quotes} />
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/favourites">
                <Favourites />
              </Route>
            </Switch>
          </Router>
        </FavouritesProvider>
      </ImagesProvider>
    </Suspense>
  );
};

export default App;
