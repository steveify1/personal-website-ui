import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PrimaryCard from './PrimaryCard';
import { findByTestAttr } from '../../../testUtils';

const setup = (props = {}) => {
  return shallow(<PrimaryCard {...props} />);
};

describe('<PrimaryCard />', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  describe('When no prop is passed', () => {
    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'primary-card');
      const cardImage = findByTestAttr(component, 'card__image');
      expect(wrapper.length).to.equal(1);
      expect(cardImage.length).to.equal(1);
    });
  });

  describe('When props are passed', () => {
    beforeEach(() => {
      component = setup({ title: 'L', author: 'A' });
    });

    it('should render the card title and author that are passed as props', () => {
      const cardTitle = findByTestAttr(component, 'card__title');
      expect(cardTitle.length).to.equal(1);
    });
  });
});
