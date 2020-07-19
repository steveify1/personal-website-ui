import axios from 'axios';
import queryString from 'query-string';
import Cache from './cache';

export default class APIConnector {
  constructor(HTTPService, resource) {
    this.HTTPService = HTTPService || axios;
    this.resource = resource;
    this.baseUrl = this.HTTPService.baseURL || '';
    this.default = {
      options: {
        // withCredentials: true,
      },
    };
    this.cache = new Cache();
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

    const cachedValue = this.cache.get(url);
    if (cachedValue) return cachedValue;

    const result = await this.HTTPService.get(
      options.url || url,
      this.composeOptions(options)
    );

    this.cache.set(url, result);
    return result;
  }

  /**
   * Fetches a single row of data
   */
  async getOne(identifier, options = { queryParams: {} }) {
    const url = this.composeUrl({
      identifier,
      queryParams: options.queryParams,
    });

    const cachedValue = this.cache.get(url);
    if (cachedValue) return cachedValue;

    const result = await this.HTTPService.get(
      url,
      this.composeOptions(options)
    );
    this.cache.set(url, result);
    return result;
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
