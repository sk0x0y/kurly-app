import React from 'react';

interface IProps {
  defaultValue?: string;
  children: React.ReactElement;
}
function Group(props: IProps) {
  const { children } = props;
  const propsWithChildren = React.cloneElement(children, { a: 'a' });

  return (
    <div>
      <p>Radio Group</p>
      {propsWithChildren}
    </div>
  );
}

export default Group;
