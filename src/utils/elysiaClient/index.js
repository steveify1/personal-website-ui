import Articles from './Articles';
import Subscribers from './Subscribers';

class APIComposition {
  constructor() {
    this.rootOptions = {
      HTTPService: {},
      baseUrl: '',
      token: '',
    };

    this.articles = new Articles(this.HTTPService);
    this.subscribers = new Subscribers(this.HTTPService);
  }

  configure(
    options = {
      HTTPService: {},
      baseUrl: '',
      token: '',
    }
  ) {
    this.rootOptions = { ...this.rootOptions, ...options };
  }
}

export default new APIComposition();
