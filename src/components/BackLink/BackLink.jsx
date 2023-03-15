import { StyledLink } from "./BackLink.styled";
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const BackLink = ({ onClick, to }) => {
        return (
          <StyledLink onClick={onClick} to={to}>
            <AiOutlineArrowLeft/>
            <span>back</span>
          </StyledLink>
        );
};
