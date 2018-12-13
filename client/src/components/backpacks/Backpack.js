import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Backpack({ name }) {

  return (
    <div>
      <Link to={ROUTES.BACKPACK.linkTo()}>{name}</Link>
    </div>
  );
}
