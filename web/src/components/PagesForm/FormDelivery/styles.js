import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled(Form)``;

export const Line = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;
