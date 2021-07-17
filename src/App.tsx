import React, { useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { NovelIndexPage } from './view/pages/novel/Index';
import { AboutPage } from './view/pages/About';
import { HomePage } from './view/pages/Home';

function Topic() {
  const params = useParams<{topicId: string}>();

  return (
    <h3>
      Requested topic ID:
      {params.topicId}
    </h3>
  );
}

function Topics() {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    axios.get('/users/2')
      .then((res) => {
        console.dir('called');
        console.dir(res.data);
      });
  }, []);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/novels">Novels</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/novels">
            <NovelIndexPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
