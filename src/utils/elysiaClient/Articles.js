import APIConnector from './Connector';

export default class Articles extends APIConnector {
  constructor(HTTPService) {
    super(HTTPService, 'articles');
  }
}
