import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { NavDropdown } from 'app/shared/layout/menus/menu-components';

const itineraryMenuItems = () => (
  <>
    <MenuItem id="login-item" icon="sign-in-alt" to="/itinerary" data-cy="login">
      <span>Public Itinerary</span>
    </MenuItem>
    <MenuItem icon="user-plus" to="/itinerary" data-cy="register">
      <span>Personal Itinerary</span>
    </MenuItem>
  </>
);

export const ItineraryMenu = () => (
  <NavDropdown icon="user" name="Itinerary" id="itinerary-menu" data-cy="accountMenu">
    {itineraryMenuItems()}
  </NavDropdown>
);
