import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + div {
    border-top: 1px solid #eeeeee;
  }
`;

export const Button = styled.button`
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  color: #999999;
  background: transparent;
  border: none;
  padding: 5px 0;
  transition: color 0.3s;

  &:hover {
    color: #444444;
  }

  svg {
    font-size: 15px;
    margin-right: 7px;
  }
`;
