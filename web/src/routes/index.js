import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import NewDelivery from '~/pages/Delivery/New';
import EditDelivery from '~/pages/Delivery/Edit';
import Deliveryman from '~/pages/Deliveryman';
import NewDeliveryman from '~/pages/Deliveryman/New';
import EditDeliveryman from '~/pages/Deliveryman/Edit';
import Recipient from '~/pages/Recipient';
import NewRecipient from '~/pages/Recipient/New';
import EditRecipient from '~/pages/Recipient/Edit';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/delivery/new" component={NewDelivery} isPrivate />
      <Route path="/delivery/:id/edit" component={EditDelivery} isPrivate />

      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />
      <Route path="/deliveryman/new" component={NewDeliveryman} isPrivate />
      <Route
        path="/deliveryman/:id/edit"
        component={EditDeliveryman}
        isPrivate
      />

      <Route path="/recipient" exact component={Recipient} isPrivate />
      <Route path="/recipient/new" component={NewRecipient} isPrivate />
      <Route path="/recipient/:id/edit" component={EditRecipient} isPrivate />

      <Route path="/problem" component={Problem} isPrivate />
    </Switch>
  );
}
