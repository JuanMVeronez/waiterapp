import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  height: 12.375rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;


    h1 {
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`;
