import React from 'react';

export default function BackpackDetail({ name, backpack }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{backpack.name}</h3>
    </div>
  );
}
