import APIConnector from './Connector';

export default class Subscribers extends APIConnector {
  constructor(HTTPService) {
    super(HTTPService, 'subscribers');
  }

  async subscribe(subscriber = { email: '' }) {
    const errorMsg = 'No email provided';
    if (!subscriber.email) return new Error(errorMsg);
    return await this.create(subscriber);
  }
}
