import APIConnector from './Connector';

export default class Search extends APIConnector {
  constructor(HTTPService) {
    super(HTTPService, 'search');
  }

  async getAll(q = '', options = { limit: '', page: '' }) {
    return await super.getAll({
      queryParams: {
        q,
        ...options,
      },
    });
  }
}
