// Routing
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import TVPage from './pages/TVPage';
import PersonPage from './pages/PersonPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movie/:name" component={MoviePage} />
        <Route path="/tv/:name" component={TVPage} />
        <Route path="/person/:name" component={PersonPage} />
        <Route path="/search/:name" component={SearchResultsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
