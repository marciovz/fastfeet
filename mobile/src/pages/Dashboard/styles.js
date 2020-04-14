import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px 0;
  background: #ffffff;
`;

/** Estilização do Header Dashboard */
export const HeaderDashboard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentHeader = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
`;

export const TextContentHeader = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: #666666;
`;

export const TextProfileName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const LogoutButton = styled(Button)`
  width: 60px;
  height: 40px;
  background: transparent;
  border: none;
`;

export const IconExit = styled(Icon)``;

/** Estilização do Content Dashboard */
export const ContentDashboard = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const HeaderContentDashboard = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const TextTitleDashboard = styled.Text`
  flex: 1;
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const LinkButton = styled(Button).attrs(props => ({
  fontSize: 12,
  fontWeight: 'bold',
  color: props.isActive ? '#7d40e7' : '#999999',
}))`
  margin-left: 15px;
  width: auto;
  height: auto;
  padding: 10px 0;
  background: transparent;
`;

export const ListDelivery = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 15px;
`;

export const BlockContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #0000001a; */
`;
export const TextEmpty = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #e0e0e0;
`;
