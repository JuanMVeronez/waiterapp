import styled from 'styled-components';

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    width: 100%;
    height: 8rem;

    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }
  }
`;
