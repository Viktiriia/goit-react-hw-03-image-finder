import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPhotos } from '../services/api';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { AppWrapper } from './App.styled';


export class App extends Component {
  state = {
    cards: [],
    loading: false,
    searchQuery: '',
    page: 1,
    showModal: false,
    forModalLink: '',
    loadMore: false,
  };
   fetchPhotosImg = async (query, page) => {
    const { hits, totalHits } = await fetchPhotos(query, page);
    try {
      this.setState(({ cards }) => ({
      cards: [...cards, ...hits],
      loadMore: this.state.page < Math.ceil(totalHits / 12)
      }));
      if (totalHits === 0) {
        toast.warning(
          'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
        );
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error ('Щось пішло не так.');
    } finally {
      this.setState({ loading: false });
    }
    }
  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ loading: true, cards: [] });    // скидання стану компонента
      this.fetchPhotosImg (this.state.searchQuery)
    }
// перевірка стану пейдж з попереднім, додавання картинок та оновлюю cards
  if (prevState.page !== this.state.page) {

      this.setState({ loading: true });
      this.fetchPhotosImg (this.state.searchQuery, this.state.page) 
  }
}
// лодер, підвантажує зображеня
  addPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  showModal = link => {
    this.setState({
      showModal: true,
      forModalLink: link,
    });
  };

  // надсилаю форму пошуку та скидаю page
  handleFormSubmit = searchText => {
    this.setState({ searchQuery: searchText, page: 1 });
  };

  render() {
    const { loading, cards, showModal, forModalLink, loadMore } = this.state;
    return (
      
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        {cards.length !== 0 && (
          <ImageGallery imagesArray={cards} showModal={this.showModal} />
        )}
        {loading && <Loader />}
        {loadMore && (
          <Button handleClick={this.addPage}></Button>
        )}
        {showModal && (
          <Modal handleClose={this.showModal}>
            <img src={forModalLink} alt="" />
          </Modal>
        )}
      </AppWrapper>  
    );
  }
}
