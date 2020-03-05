import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';
import { darken } from 'polished';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  background: #cccccc;
  border: none;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background: ${darken(0.1, '#cccccc')};
  }

  svg {
    font-size: 18px;
    margin-right: 3px;
    color: #ffffff;
  }
`;

export const Icon = styled(MdChevronLeft)``;
