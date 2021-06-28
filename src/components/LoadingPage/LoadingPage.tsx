import React from 'react';

interface Props {
  message: string;
}

const LoadingPage: React.FC<Props> = ({ message }) => {
  return (
    <div className="ui segment" style={{ height: '100vh' }}>
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">{message}</div>
      </div>
    </div>
  );
};

export default LoadingPage;
