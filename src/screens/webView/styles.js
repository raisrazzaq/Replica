import styled from 'styled-components';
export const Container = styled.View`
  flex-direction: row;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

export const HomeLogo = styled.Image`
  height: 30px;
  width: 30px;
`;

export const TextinputModal = styled.TextInput`
  height: 35px;
  width: 130px;
  border-radius: 30px;
  background-color: pink;
  padding: 7px;
`;

export const Wrapper = styled.TouchableOpacity``;
export const PlusSign = styled.Text`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

export const Box = styled.View`
  height: 17px;
  width: 17px;
  border-radius: 5px;
  border-width: 2px;
  border-color: black;
`;

export const CrossImgContainer = styled.TouchableOpacity``;

export const CloseImage = styled.Image`
  height: 25px;
  width: 25px;
`;

export const Button = styled.TouchableOpacity`
  background-color: skyblue;
  padding: 10px;
  border-radius: 5px;
  align-self: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
