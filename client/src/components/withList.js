import React from 'react';

export const withList = (Component) => {
  return function List(props) {
    const { list } = props;
    return <div>{list.map((item, i) => <Component key={item._id || i} {...item}/>)}</div>;
  };
};
