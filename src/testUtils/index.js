import { ShallowWrapper } from 'enzyme';

/**
 * Searches the shallow dom for a list of elements with the given
 * data-test attribute.
 * @param { ShallowWrapper } component an Enzyme shallow wrapper
 * @param { string } attribute The value of the data-test attribute to search for
 *
 * @returns { Array<ShallowWrapper | React.Component> } an array of elements
 */
export const findByTestAttr = (component, attribute) => {
  return component.find(`[data-test='${attribute}']`);
};
