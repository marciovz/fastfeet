import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const HeaderTop = styled.View`
  width: 100%;
  height: 90px;
  background: #7D40E7;
`;


export const ContentBlock = styled.View`
  margin-top: -80px;
  padding: 0 20px;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;

export const ListProblems = styled(FlatList)`
`;

export const BlockContent = styled.View`
  margin-top: 15px;
  padding: 20px;
  min-height: 160px;
  background: #ffffff;
  border: 1px solid #0000001a;
  elevation: 6;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #e0e0e0;
`;
