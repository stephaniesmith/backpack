import React, { PureComponent } from 'react';
import Gear from '../gear/Gear';
import { withList } from '../../components/withList';

export default class BackpackDetail extends PureComponent {
  render() {
    if(!this.props.detail) return null;

    const { name, backpack, gear } = this.props.detail;

    const GearList = withList(Gear);

    return (
      <div>
        <h2>{name}</h2>
        <h3>Backpack: {backpack.name}</h3>
        <h3>Gear:</h3>
        <GearList list={gear}/>
      </div>
    );
  }
}
