import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 20px;
`;

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

export const Summary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const TotalContainer = styled.View`
  gap: 4px;
  flex: 1;
`;
