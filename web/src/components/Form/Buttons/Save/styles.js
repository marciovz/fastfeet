import styled from 'styled-components';
import { MdDone } from 'react-icons/md';
import { darken } from 'polished';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  width: 112px;
  height: 36px;
  background: #7d40e7;
  border: none;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background: ${darken(0.1, '#7d40e7')};
  }

  svg {
    font-size: 18px;
    margin-right: 3px;
    color: #ffffff;
  }
`;

export const Icon = styled(MdDone)``;
