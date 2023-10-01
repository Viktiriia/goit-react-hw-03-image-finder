import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchbarTop,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };
  // оновлю стан компонента коли з'являється текст
  handleChange = e => {
    this.setState({ searchText: e.currentTarget.value });
  };
// надсилаю форму пошуку
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchText.trim() === '') {
      return toast.error ('Введіть дані для пошуку');
      
    }
    this.props.onSubmit(this.state.searchText);
  };


  render() {
    return (
      <SearchbarTop>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarTop>
    );
  }
}

export default Searchbar;