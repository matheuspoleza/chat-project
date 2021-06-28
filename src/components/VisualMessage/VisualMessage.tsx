import { GeneralTrace } from '@voiceflow/general-types';
import React from 'react';
import styled from 'styled-components';

interface Props {
  message: GeneralTrace;
}

const ImageBox = styled.div`
  box-shadow: rgb(17 49 96 / 8%) 0px 1px 3px 0px, rgb(17 49 96 / 8%) 0px 0px 1px 1px;
`;

const VisualMessage: React.FC<Props> = ({ message }) => {
  return (
    <ImageBox>
      <img
        className="ui medium rounded image"
        alt="trace"
        src={message.payload.image}
        style={{ width: message.payload.dimensions.width, height: message.payload.dimensions.height, maxWidth: '150px', maxHeight: '100px' }}
      />
    </ImageBox>
  );
};

export default VisualMessage;
