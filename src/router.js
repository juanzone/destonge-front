import React, { Component } from 'react';
import {BrowserRouter as Router, Route, hashHistory, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';
import ChambresContainer from './chambres/chambres';
import RoomContainer from './rooms/rooms-container';
import RoomContentContainer from './rooms/room-content-container';
import GiteContainer from './gite/gite-container'
import ActiviteContainer from './activites/activites.container';
import GalleryContainer from './gallery/gallery.container';
import EventContainer from './events/events.container';
import BookingContainer from './booking/booking.container';
import 'bootstrap/dist/css/bootstrap.css'
import './css/global.css'
import 'font-awesome/css/font-awesome.min.css'



class Rooter extends Component {

  render() {
    const data = this.props.data;
    console.log(data);
    return (
        <Router history={hashHistory}>
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/chambres" component={ChambresContainer} />
            <Route exact path="/rooms" component={RoomContainer} />
            <Route exact path="/rooms/:slug" component={RoomContentContainer} />
            <Route exact path="/gite" component={GiteContainer} />
            <Route exact path="/activity" component={ActiviteContainer} />
            <Route exact path="/gallery" component={GalleryContainer} />
            <Route exact path="/events" component={EventContainer} />
            <Route exact path="/booking" component={BookingContainer} />
            <Route component={Layout} />
          </Switch>
        </Router>
    );
  }
}

export default Rooter
