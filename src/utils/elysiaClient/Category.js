import APIConnector from './Connector';

export default class Category extends APIConnector {
  constructor(HTTPService) {
    super(HTTPService, 'categories');
  }
}
