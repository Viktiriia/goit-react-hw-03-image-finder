import { LoadMoreButton } from './Button.styled';

export const Button = ({ handleClick }) => {
  return (
    <LoadMoreButton type="button" onClick={handleClick}>
      Load more
    </LoadMoreButton>
  );
};


export default Button;