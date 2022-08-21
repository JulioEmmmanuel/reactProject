import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 5px;
  padding: 36px 44px;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  max-width: 950px;
  background-color: #fff;
`;

export const ContainerList = styled.ul`
  justify-content: center;
  align-items: center;
`;

export const TravelItem = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #665;
  justify-content: space-between;
  align-items: center;

  img {
    height: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 100px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  strong {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const Quantity = styled.input`
  font-size: 16px;
  color: #665;
  padding: 6px;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: 1px solid #0676d9;
  text-align: center;
`;

export const Subtotal = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  align-items: center;

  p {
    margin-right: 10px;
  }

  button {
    margin-right: 10px;
  }
`;

export const Total = styled.div`
  display: flex;
  margin-right: 10px;
  max-width: fit-content;
  align-self: flex-end;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
`;
