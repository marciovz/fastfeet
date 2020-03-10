import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import NewDelivery from '~/pages/Delivery/New';
import EditDelivery from '~/pages/Delivery/Edit';
import Deliveryman from '~/pages/Deliveryman';
import Recipient from '~/pages/Recipient';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/delivery/new" component={NewDelivery} isPrivate />
      <Route path="/delivery/:id/edit" component={EditDelivery} isPrivate />

      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/problem" component={Problem} isPrivate />
    </Switch>
  );
}
