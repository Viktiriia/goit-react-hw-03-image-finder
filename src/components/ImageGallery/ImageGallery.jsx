import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ imagesArray, showModal }) => {
  return (
    <ImageGalleryList>
      {imagesArray.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          showModal={showModal}
        />
      ))}
    </ImageGalleryList>
  );
};


export default ImageGallery;