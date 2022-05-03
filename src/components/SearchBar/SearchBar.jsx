import { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    searchImages: '',
  };

  searchNameImages = event => {
    this.setState({ searchImages: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchImages.trim() === '') {
      alert('Введите слово для поиска');
      return;
    }

    this.props.onSubmit(this.state.searchImages);
    this.setState({ searchImages: '' });
  };

  render() {
    return (
      <>
        <header className="searchBar">
          <form className="searchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="searchForm-button">
              <span className="searchForm-button-label">Search</span>
            </button>

            <input
              className="searchForm-input"
              type="text"
              name="searchImages"
              value={this.state.searchImages}
              onChange={this.searchNameImages}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
