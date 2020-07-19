const store = {};

class Cache {
  composeKey(key) {
    return typeof key === 'string' ? key : JSON.stringify(key);
  }

  set(key, value) {
    key = this.composeKey(key);
    store[key] = value;
  }

  get(key) {
    return store[this.composeKey(key)];
  }

  remove(key) {
    const storeCopy = { ...store };
    const copyOfItemToDelete = storeCopy[key];
    delete store[key];
    return copyOfItemToDelete;
  }

  clear(key) {
    store = {};
    return store;
  }
}

Cache.prototype.store = store;

export default Cache;
