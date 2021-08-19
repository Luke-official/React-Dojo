import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import HomeContainer from "./Containers/HomeContainer";
import Landing from "./Pages/Landing";
import BooksContainer from "./Containers/BooksContainer";
import ExploreContainer from "./Containers/ExploreContainer";
import FriendsContainer from "./Containers/FriendsContainer";
import GamesContainer from "./Containers/GamesContainer";
import MoviesContainer from "./Containers/MoviesContainer";
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  const isAuth = true;

  return (
    <Router>
      <Switch>
        {isAuth ? (
          <>
            <div className="container-page d-flex">
              <Sidebar />
              <div className="container-content d-flex flex-column">
                <Navbar />
                <div>
                  <Route path="/Home" exact component={HomeContainer} />
                  <Route path="/Books" exact component={BooksContainer} />
                  <Route path="/Movies" exact component={MoviesContainer} />
                  <Route path="/Games" exact component={GamesContainer} />
                  <Route path="/Friends" exact component={FriendsContainer} />
                  <Route path="/Explore" exact component={ExploreContainer} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Landing />
        )}
      </Switch>
    </Router>
  );
};
export default App;
