import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />

        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
      {/* Home */}
      {/* Header */}

      {/* Banner */}
      {/* Search */}

      {/* Cards */}

      {/* Footer */}

      {/* SearchPage */}
      {/* Header */}
    </div>
  );
}

export default App;
