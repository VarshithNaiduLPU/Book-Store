import React from 'react';

type propsSchema = {
  logOut : () => Promise<React.JSX.Element | undefined>
}

const LogoutButton = (props : propsSchema) => {
  return (
    <div className="auth" onClick={props.logOut}>
      <span className="log-out">Log Out</span>
    </div>
  );
};

export default LogoutButton;
