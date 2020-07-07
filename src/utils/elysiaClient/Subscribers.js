import APIConnector from './Connector';

export default class Subscribers extends APIConnector {
  constructor(HTTPService) {
    super(HTTPService, 'subscribers');
  }
}
