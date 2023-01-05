import axios from 'axios';

export default class NewApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 0;
  }
  fetchImages() {
    const Link = 'https://pixabay.com/api';
    const ApiKey = '31433324-839028e91242531f773701706';
    const SearchParameters =
      'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';
    async function fetchImages(q, page) {
      const apiResponse = await axios.get(
        `${Link}/?key=${ApiKey}&q=${q}&${SearchParameters}&page=${page}`
      );
      return apiResponse;
    }

    return fetchImages(this.searchQuery, this.page).then(data => {
      this.totalHits = data.data.totalHits;
      this.incrementPage();
      return data.data.hits;
    });
  }

  getTotalHits() {
    return this.totalHits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
