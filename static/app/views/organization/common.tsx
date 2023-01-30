import styled from '@emotion/styled';

const WhiteButton = styled('div')`
  background-color: #fafafb;
  padding: 5px 10px;
  border-radius: 50px;
  color: #314462;
  width: fit-content;
  margin: 0 auto;
  border: 1px solid #d8e0ea;
`;

const GreenButton = styled('div')`
  background-color: #e3fcef;
  padding: 5px 10px;
  border-radius: 50px;
  color: #04a587;
  width: fit-content;
  margin: 0 auto;
  border: 1px solid #b0efdf;
`;
const RedButton = styled('div')`
  background-color: #fff2f2;
  padding: 5px 10px;
  border-radius: 50px;
  color: #db5e65;
  width: fit-content;
  margin: 0 auto;
  border: 1px solid #ffb3b3;
`;
const Top = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  color: black;
  margin: 10px 0;
`;

const Middle = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  color: black;
  th,
  td {
    text-align: center;
    vertical-align: middle;
    padding: 10px;
  }
  th {
    margin-bottom: 10px;
  }

  table {
    overflow: scroll;
    border-collapse: collapse;
  }
  tr:not(:first-child) {
    border-bottom: 1px solid #97a2b8;
  }
`;
const Bottom = styled('div')`
  padding: 10px;
  position: aboslute;
  bottom: 0px;
  left: 0px;
`;

const CardsSection = styled('div')`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const Card = styled('div')`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardHeader = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardHeaderLeft = styled('div')`
  display: flex;
  align-items: center;
`;
const LogoImg = styled('img')`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;
const CardTitle = styled('p')`
  font-size: 15px;
  font-weight: 200;
  color: #5a8bed;
`;
const CardHeaderRight = styled('div')`
  display: flex;
  align-items: center;
`;
const Severity = styled('div')`
  font-size: 14px;
  color: #f2b449;
  margin-right: 20px;
  border: 1px solid #fee383;
  padding: 5px 10px;
  background-color: #fffae7;
  border-radius: 50px;
`;
const CardBody = styled('div')`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CardBodyLeft = styled('div')`
  display: flex;
  flex-direction: column;
  width: 70%;
  position: relative;
`;
const CardBodyRight = styled('div')`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: white;
  font-family: sans-serif;
`;

const Logo = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const MainFrame = styled('div')`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  color: red;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Header = styled('div')`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #e8e8e8;
  padding: 20px;
  h1 {
    font-size: 20px;
  }
  Button {
    margin-right: 20px;
  }
`;
const Empty = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 20px;
  color: #97a2b8;
`;

const ChartInfo = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  p {
    font-size: 24px;
    color: #97a2b8;
  }
  padding: 10px;
  background-color: #eff2f5;
  border-radius: 10px;
  color: black;
`;

export {
  WhiteButton,
  GreenButton,
  RedButton,
  Top,
  Middle,
  Bottom,
  CardsSection,
  Card,
  CardHeader,
  CardHeaderLeft,
  LogoImg,
  CardTitle,
  CardHeaderRight,
  Severity,
  CardBody,
  CardBodyLeft,
  CardBodyRight,
  MainContainer,
  Logo,
  MainFrame,
  Header,
  Empty,
  ChartInfo,
};
