import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Backpack({ name, _id }) {

  return (
    <div>
      <Link to={ROUTES.BACKPACK.linkTo(_id)}>{name}</Link>
    </div>
  );
}
