import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import React from 'react';
import choiceTraceFixture from 'src/__fixtures__/fixtures/choiceTrace';
import speakTraceFixture from 'src/__fixtures__/fixtures/speakTrace';
import visualTraceFixture from 'src/__fixtures__/fixtures/visualTrace';

import ChoiceMessage from '../ChoiceMessage';
import SpeakMessage from '../SpeakMessage';
import VisualMessage from '../VisualMessage';
import ChatTraces from './ChatTraces';

describe('Integration | Components | ChatTraces', () => {
  describe('when there are no traces', () => {
    it('does not render', () => {
      const component = shallow(<ChatTraces traces={[]} />);

      expect(component.isEmptyRender()).toBeTruthy();
    });
  });

  describe('when trace are traces', () => {
    describe('and its a speak message', () => {
      it('renders speak message component', () => {
        const message = 'Hello World';
        const speakTrace = speakTraceFixture(message);

        const component = shallow(<ChatTraces traces={[speakTrace]} />);

        expect(component.find(SpeakMessage).exists()).toBeTruthy();
      });
    });

    describe('and its a visual message', () => {
      it('renders visual message component', () => {
        const visualTrace = visualTraceFixture();

        const component = shallow(<ChatTraces traces={[visualTrace]} />);

        expect(component.find(VisualMessage).exists()).toBeTruthy();
      });
    });

    describe('and its a choice message', () => {
      it('renders choice message component', () => {
        const buttonName = 'Some action';
        const choiceTrace = choiceTraceFixture(buttonName);

        const component = shallow(<ChatTraces traces={[choiceTrace]} />);

        expect(component.find(ChoiceMessage).exists()).toBeTruthy();
      });
    });
  });
});
