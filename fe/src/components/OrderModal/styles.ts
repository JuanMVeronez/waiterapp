import { styled } from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0px;
  top: 0px;

  background: rgba(0,0,0, 0.8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: #fff;
  width: 30rem;
  border-radius: 8px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      border: 0;
      background: transparent;
      display: flex;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 1.25rem;
        margin-left: 0.75rem;
      }

      .product-details {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-left: 0.25rem;

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.5rem;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 2rem;

  .primary {
    background: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 0.75rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .secondary {
    padding: 0.75rem 1.5rem;
    color: #d73035;

    font-weight: 600;
    border: 0;
    background: transparent;
  }
`;
