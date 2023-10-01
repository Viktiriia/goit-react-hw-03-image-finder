import {
  ImageGalleryElement,
  ImageGalleryElementImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  showModal,
}) => {
  return (
    <ImageGalleryElement key={id}
    onClick={() => showModal(largeImageURL)}>
      <ImageGalleryElementImage
        src={webformatURL}
        alt="image"
        data={largeImageURL}
      />
    </ImageGalleryElement>
  );
};



export default ImageGalleryItem;