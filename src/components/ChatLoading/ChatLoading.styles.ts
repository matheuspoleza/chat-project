import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Dots = styled.div`
  background-color: rgb(244, 244, 244);
  color: rgb(19, 33, 68);
  border-radius: 15px 15px 15px 5px;
  padding: 12px 16px;
  display: flex;
`;

export const DotFlashing = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: rgb(143, 142, 148);
  color: rgb(143, 142, 148);
  animation: 0.8s linear 0.25s infinite alternate none running dotFlashing;
  margin-left: 4px;
`;
