import axios from 'axios';
import queryString from 'query-string';

export default class APIConnector {
  constructor(HTTPService, resource) {
    this.HTTPService = HTTPService || axios;
    this.resource = resource;
    this.baseUrl = 'http://localhost:5000/api/v1';
    this.default = {
      options: {
        // withCredentials: true,
      },
    };
  }

  attachIdentifier(identifier) {
    return `${this.resource}/${identifier || ''}`;
  }

  composeQueryParams(queryParams = {}) {
    return queryString.stringify(queryParams, { arrayFormat: 'comma' });
  }

  composeOptions(options = {}) {
    return {
      ...this.default.options,
      ...options,
    };
  }

  composeUrl({ identifier, queryParams }) {
    return `${this.baseUrl}/${this.attachIdentifier(
      identifier
    )}?${this.composeQueryParams(queryParams)}`;
  }

  /**
   * Fetches a list of data
   */
  async create(body, options = {}) {
    return await this.HTTPService.post(
      options.url || this.resource,
      body,
      this.composeOptions(options)
    );
  }

  async getCount({ queryParams, ...otherOptions }) {
    return await this.getAll({
      queryParams: { fields: ['count'], ...queryParams },
      ...otherOptions,
    });
  }

  /**
   * Fetches a list of data
   */
  async getAll(options = { queryParams: {} }) {
    const url = this.composeUrl({ queryParams: options.queryParams });
    return await this.HTTPService.get(
      options.url || url,
      this.composeOptions(options)
    );
  }

  /**
   * Fetches a single row of data
   */
  async getOne(identifier, options = { queryParams: {} }) {
    const url = this.composeUrl({
      identifier,
      queryParams: options.queryParams,
    });
    return await this.HTTPService.get(url, this.composeOptions(options));
  }

  /**
   * updates a single row of data
   */
  async update(identifier, body, options = {}) {
    const url = this.composeUrl({
      queryParams: options.queryParams,
      identifier,
    });
    const composedOptions = this.composeOptions(options);
    return await this.HTTPService.update(url, body, composedOptions);
  }

  /**
   * updates a single row of data
   */
  async delete(identifier, options = {}) {
    const url = this.composeUrl({
      queryParams: options.queryParams,
      identifier,
    });
    const composedOptions = this.composeOptions(options);
    return await this.HTTPService.delete(url, composedOptions);
  }
}
