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
`;
