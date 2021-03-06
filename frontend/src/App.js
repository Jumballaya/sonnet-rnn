import React from 'react';
import { Route, Switch } from 'react-router';

import './styles/main.css';

import Layout from './views/Layout';
import Home from './views/Home';
import Sonnet from './views/Sonnet';
import Imagenet from './views/Imagenet';

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sonnet" component={Sonnet} />
      <Route path="/imagenet" component={Imagenet} />
    </Switch>
  </Layout>
);
