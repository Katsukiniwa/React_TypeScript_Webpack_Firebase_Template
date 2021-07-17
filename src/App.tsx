import React, { useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  // useParams,
} from 'react-router-dom';
import {
  AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex,
} from '@chakra-ui/react';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
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
      {/* <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch> */}
    </div>
  );
}

// function Topic() {
//   const { topicId } = useParams();
//   return (
//     <h3>
//       Requested topic ID:
//       {topicId}
//     </h3>
//   );
// }

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          Box with Flex props
        </Box>
        <Flex align="center" justify="center">
          Flex Container
        </Flex>
        <AlertDialog isOpen onClose={() => {}} leastDestructiveRef={undefined}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader>ダイアログ</AlertDialogHeader>
              <AlertDialogBody>ダイアログの本文で〜〜〜す！</AlertDialogBody>
              <AlertDialogFooter>
                <Button>閉じる</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
