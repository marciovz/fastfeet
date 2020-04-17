import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormContainer = styled(Form)``;

export const Line = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: ${props => (props.grid ? props.grid : '1fr')};
  grid-column-gap: 20px;
`;
