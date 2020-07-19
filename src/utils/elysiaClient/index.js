import Articles from './Articles';
import Subscribers from './Subscribers';
import Comment from './Comment';
import Search from './Search';
import Category from './Category';

class APIComposition {
  constructor() {
    this.rootOptions = {
      HTTPService: {},
      baseUrl: '',
      token: '',
    };

    this.articles = new Articles(this.HTTPService);
    this.subscribers = new Subscribers(this.HTTPService);
    this.comment = new Comment(this.HTTPService);
    this.search = new Search(this.HTTPService);
    this.category = new Category(this.HTTPService);
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
