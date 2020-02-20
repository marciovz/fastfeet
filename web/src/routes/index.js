import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import Deliveryman from '~/pages/Deliveryman';
import Recipient from '~/pages/Recipient';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/deliveryman" component={Deliveryman} />
      <Route path="/recipient" component={Recipient} />
      <Route path="/problem" component={Problem} />
    </Switch>
  );
}
