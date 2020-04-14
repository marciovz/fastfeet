import styled from 'styled-components';

import ButtonLink from '~/components/ButtonLink';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const HeaderTop = styled.View`
  width: 100%;
  height: 90px;
  background: #7D40E7;
`;

export const ContainerInformation = styled.View`
  margin-top: -90px;
  padding: 0 20px;
`;

export const BlockInformation = styled.View`
  margin-top: 10px;
  padding: 15px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  elevation: 3;
`;

export const BlockTitleInformation = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const TitleInformation = styled.Text`
  margin-left: 5px;
  padding: 0;
  font-size: 14px;
  font-weight: bold;
  color: #7D40E7;
`;

export const Title = styled.Text`
  margin: 5px 0 0;
  padding: 0;
  font-size: 14px;
  font-weight: bold;
  color: #999999;
`;

export const Content = styled.Text`
  margin: 5px 0 8px;
  padding: 0;
  font-size: 14px;
  font-weight: normal;
  color: #666666;
`;

export const BlockLine = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BlockColumn = styled.View`
  flex-direction: column;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkButton = styled(ButtonLink).attrs({
  text: {
    width: 80,
    textAlign: 'center',  
    fontSize: 12,
    fontWeight: 'normal',
    color: '#999999',
  },
})`
  width: 33%;
  height: 80px;
  background: #F8F9FD;
  border: 1px solid #999999;
  elevation: 6;
`;
