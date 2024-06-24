import React from 'react'

type Props = {
    name: string;
    salutation : string;
};

const LeftAuth = (props : Props) => {
  return (
    <div className="left">
        <div className="auth-name">
            <span>{props.name}</span>
        </div>
        <div className="salutation">
            <span>{props.salutation}</span>
        </div>
    </div>
  )
}

export default LeftAuth