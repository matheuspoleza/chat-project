import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.div`
  background-image: linear-gradient(rgba(19, 33, 68, 0.85), rgb(19, 33, 68));
  box-shadow: rgb(255 255 255) 0px 0px 0px 1px, rgb(19 33 68 / 4%) 0px 0px 0px 2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
`;

const Logo: React.FC = () => {
  return <LogoImage>P</LogoImage>;
};

export default Logo;
