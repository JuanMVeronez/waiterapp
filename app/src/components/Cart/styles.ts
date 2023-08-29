import styled from 'styled-components/native';

export const Item = styled.View`
  padding: 8px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const ProductImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 6px;
  margin-right: 12px;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
`;

export const ProductDetails = styled.View`
  gap: 4px;
`;
