import React from 'react';
import ReactMapboxGl, {NavigationControl} from 'react-mapbox-gl';
import withAuthorization from './withAuthorization';

const Map = ReactMapboxGl({
  accessToken: 'TOKEN_HERE'
});

const HomePage = () =>
  <div>

  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
