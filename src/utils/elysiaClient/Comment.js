import APIConnector from './Connector';

export default class Comment extends APIConnector {
  constructor(HTTPService) {
    super(HTTPService, 'comments');
  }
}
