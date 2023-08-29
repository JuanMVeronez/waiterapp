import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 24px;
  right: 24px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background: #fafafa;
  padding: 32px 24px 0px;
`;

export const Header = styled.View`
  gap: 8px;
`;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  gap: 16px;
  flex: 1;
`;

export const Ingredient = styled.View`
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;

  flex-direction: row;
  align-items: center;

  padding: 16px;
  gap: 20px;
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceContainer = styled.View``;
