import APIConnector from './Connector';

export default class Articles extends APIConnector {
  constructor(HTTPService) {
    super(HTTPService, 'articles');
  }

  fetchComments(identifier) {
    return this.getAll({
      url: `articles/${identifier}/comments`,
    });
  }

  postComment(identifier, body) {
    return this.create(body, {
      url: `articles/${identifier}/comments`,
    });
  }
}
