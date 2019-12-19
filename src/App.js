import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import animations from './animations';
import presets from './presets';
import * as Styles from './styles';
import PageTransition from '@steveeeie/react-page-transition'
import Home from './components/home';
import Tech from './components/tech';

const pages = [
  {
    path: '/',
    title: 'Inicio',
    color: '#0984e3',
    component: (color) => <Home color={color} />
  },
  {
    path: '/tech',
    title: 'Tecnnologias',
    color: '#a29bfe',
    component: (color) => <Tech color={color} />
  },
  // {
  //   path: '/page-3',
  //   title: 'Page 3',
  //   color: '#FDC162'
  // },
  // {
  //   path: '/page-4',
  //   title: 'Page 4',
  //   color: '#47B881'
  // },
  // {
  //   path: '/page-5',
  //   title: 'Page 5',
  //   color: '#425A70'
  // },
  // {
  //   path: '/page-6',
  //   title: 'Page 6',
  //   color: '#735DD0'
  // }
];

function App() {
  const [preset, setPreset] = useState('moveToBottomScaleUp');
  const [enterAnimation, setEnterAnimation] = useState('');
  const [exitAnimation, setExitAnimation] = useState('');
  // const handlePresetChange = event => setPreset(event.target.value);
  // const handleEnterAnimationChange = event => setEnterAnimation(event.target.value);
  // const handleExitAnimationChange = event => setExitAnimation(event.target.value);

  return (
    <Router basename="/">
      <Route exact path="/" render={() => <Redirect to="/" />} />
      <Route
        render={({ location }) => (
          <>
            <Styles.Global />

            <Styles.NavWrapper>
              <Styles.Nav>
                {pages.map((page, index) => (
                  <Styles.NavLink as={Link} key={index} to={page.path}>
                    {page.title}
                  </Styles.NavLink>
                ))}
              </Styles.Nav>
            </Styles.NavWrapper>

            <PageTransition
              preset={preset}
              transitionKey={location.pathname}
              enterAnimation={enterAnimation}
              exitAnimation={exitAnimation}>
              <Switch location={location}>
                {pages.map(page => {
                  return (
                    <Route
                      exact
                      path={page.path}
                      render={() => page.component(page.color)}
                    />
                  );
                })}
                <Route exact path="/" render={() => <Redirect to="/" />} />
              </Switch>
            </PageTransition>
          </>
        )}
      />
    </Router>
  );
}
export default App