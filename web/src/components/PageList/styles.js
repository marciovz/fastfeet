import styled from 'styled-components';

export const PageListContainer = styled.div`
  max-width: 1200px;
  margin: 34px auto 0;
`;

export const PageListContent = styled.div``;

export const TitleList = styled.div`
  padding: 0 25px;
  display: grid;
  grid-template-columns:  ${props => props.grid || '1fr 1fr 1fr 1fr 1fr'};

  > h1 {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
  }

  h1:last-of-type {
    text-align: right;
  }
`;

export const ContentList = styled.div`
  padding-bottom: 30px;
`;

export const LineList = styled.div`
  display: flex;
  margin: 21px 0;
  padding: 0 25px;
  height: 57px;
  display: grid;
  grid-template-columns: ${props => props.grid || '1fr 1fr 1fr 1fr 1fr'};
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 4px;

  > p {
    font-size: 16px;
    color: #666666;
  }
`;

export const ContentInline = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 5px;
  }
`;