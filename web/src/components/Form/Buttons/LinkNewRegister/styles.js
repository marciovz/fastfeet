import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { darken } from 'polished';

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #7d40e7;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background-color: ${darken(0.1, '#7d40e7')};
  }
`;

export const Icon = styled(MdAdd)`
  margin-right: 2px;
  font-size: 16px;
  color: #fff;
`;
