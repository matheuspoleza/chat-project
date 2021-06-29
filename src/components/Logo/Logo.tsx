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

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Logo: React.FC = () => {
  return (
    <LogoImage>
      <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.136.816c1.006.57 2.488 2.587 1.906 6.935-.954 6.934-4.765 12.626-6.036 12.626-.74 0-.689-1.083.265-5.123 1.27-5.278 3.018-12.782-3.865-12.782-7.307 0-8.207 7.659-3.495 8.59-.688-3.57 1.483-6.934 3.547-6.934 2.224 0 1.271 4.192.37 8.695C5.769 18.049 4.552 24 8.788 24c5.876 0 10.271-10.609 11.065-16.253 1.01-7.138-3.439-9.053-5.717-6.93z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
    </LogoImage>
  );
};

export default Logo;
