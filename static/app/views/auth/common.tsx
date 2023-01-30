import styled from '@emotion/styled';

const AuthPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
  color: red;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
`;

export {AuthPageWrapper, Left, Right, Logo};
