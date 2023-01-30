import React, {useEffect} from 'react';
import {Radio, Avatar, Tooltip, Button, Divider} from 'antd';
import axios from 'axios';
import data from '../../../../data/insight_data.json';
import chartData from '../../../../data/chart_data.json';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Legend} from 'recharts';
const quantiveLogo: string =
  require('../../../../assests/svg/company_logo_name.svg').default;
import type {RadioChangeEvent} from 'antd';
import {
  UserOutlined,
  AntDesignOutlined,
  ThunderboltOutlined,
  EyeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import {
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
} from './common';

function OrganizationDetails() {
  const [userData, setUserData] = React.useState<any>([]);
  const [cardsToShow, setCardsToShow] = React.useState<any>([]);
  const [showMyCards, setShowMyCards] = React.useState<boolean>(false);
  const saveCard = (id: string) => {
    const token = localStorage.getItem('token');
    var config = {
      method: 'post',
      url: 'https://quantive-backend-hny6.vercel.app/cards/add',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      data: {
        cardId: id,
        email: userData.email,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const removeCard = (id: string) => {
    const token = localStorage.getItem('token');
    var config = {
      method: 'post',
      url: 'https://quantive-backend-hny6.vercel.app/cards/remove',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      data: {
        cardId: id,
        email: userData.email,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    var config = {
      method: 'get',
      url: 'https://quantive-backend-hny6.vercel.app/auth/me',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
    };

    axios(config)
      .then(function (response) {
        setUserData(response.data._doc);
      })
      .catch(function () {
        window.location.href = '/auth/login';
      });
  }, []);

  const onChange = ({target: {value}}: RadioChangeEvent) => {
    setShowMyCards(value === 'saved-cards' ? true : false);
  };
  console.log('userData', userData);
  useEffect(() => {
    if (showMyCards) {
      const token = localStorage.getItem('token');
      var config = {
        method: 'get',
        url: 'https://quantive-backend-hny6.vercel.app/cards/getMyCards',
        headers: {
          'Content-Type': 'application/json',
          token: token,
        },
        data: {
          email: userData.email,
        },
      };

      axios(config)
        .then(function (response) {
          console.log(response.data.cardIds);
          // get all the matching cards from the data and set it to cardsToShow
          const cards = data.filter((card: any) =>
            response.data.cardIds.includes(card.id)
          );
          setCardsToShow(cards);
        })
        .catch(function (error) {
          if (error.response.status === 500) {
            setCardsToShow([]);
          }
        });
    } else {
      setCardsToShow(data);
    }
  }, [showMyCards]);
  console.log('showMyCards', showMyCards);
  return (
    <MainContainer>
      <Logo>
        <img src={quantiveLogo} style={{width: '100px'}} />
        <div>
          <Tooltip title={userData.username} placement="bottom">
            <Avatar
              style={{backgroundColor: '#7484a1', marginLeft: '10px'}}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Tooltip title="Logout" placement="bottom">
            <Button
              type="primary"
              shape="circle"
              icon={<LogoutOutlined />}
              style={{marginLeft: '10px'}}
              onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/auth/login';
              }}
            />
          </Tooltip>
        </div>
      </Logo>
      <MainFrame>
        <Header>
          <Radio.Group onChange={onChange}>
            <Radio.Button value="all-cards">All Cards</Radio.Button>
            <Radio.Button value="saved-cards">Saved Cards</Radio.Button>
          </Radio.Group>
        </Header>
        {cardsToShow.length === 0 && (
          <Empty>No cards to show. Please save some cards to view them here.</Empty>
        )}
        {cardsToShow.length > 0 && (
          <CardsSection>
            {cardsToShow.map((item, index) => {
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardHeaderLeft>
                      <LogoImg src={item.source.logo} />
                      <CardTitle>
                        <p>{item.header}</p>
                      </CardTitle>
                    </CardHeaderLeft>
                    <CardHeaderRight>
                      <ThunderboltOutlined style={{color: '#7484a1'}} />
                      <Severity>Medium</Severity>
                      <EyeOutlined style={{color: '#7484a1'}} />
                      <Avatar.Group>
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <a href="https://ant.design">
                          <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>
                        </a>
                        <Tooltip title="Ant User" placement="top">
                          <Avatar
                            style={{backgroundColor: '#87d068'}}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Avatar
                          style={{backgroundColor: '#1890ff'}}
                          icon={<AntDesignOutlined />}
                        />
                      </Avatar.Group>
                    </CardHeaderRight>
                  </CardHeader>
                  <CardBody>
                    <CardBodyLeft>
                      <Top>{item.content}</Top>
                      <Middle>
                        <table>
                          <tr>
                            <th>Top Drives</th>
                            <th>Change</th>
                            <th>Absolute Change</th>
                            <th>Effective Change</th>
                          </tr>
                          {item.stats.topDrivers.map((item: any, index) => (
                            <tr key={index}>
                              <td>
                                <WhiteButton>{item[0][0].split('=')[1]}</WhiteButton>
                              </td>
                              <td>{item[2].change}</td>
                              <td>
                                <RedButton>-{item[2].absoluteChange}%</RedButton>
                              </td>
                              <td>
                                <GreenButton>+{item[2].effectiveChange}%</GreenButton>
                              </td>
                            </tr>
                          ))}
                        </table>
                      </Middle>
                    </CardBodyLeft>
                    <Divider type="vertical" style={{height: '100%'}} />
                    <CardBodyRight>
                      <LineChart
                        width={400}
                        height={200}
                        data={chartData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis dataKey="value" />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="predictedValue"
                          stroke="#8884d8"
                          activeDot={{r: 8}}
                        />
                      </LineChart>
                      <ChartInfo>
                        <table style={{width: '100%'}}>
                          <tr>
                            <th>Change</th>
                            <th>60K to 30K</th>
                          </tr>

                          <tr>
                            <td>20 Oct 2020 - 20 Nov 2020</td>
                            <td>
                              <GreenButton>+{'60'}%</GreenButton>
                            </td>
                          </tr>
                        </table>
                      </ChartInfo>
                    </CardBodyRight>
                    <br />
                  </CardBody>
                  <Bottom>
                    <Button
                      type="primary"
                      onClick={() =>
                        showMyCards ? removeCard(item.id) : saveCard(item.id)
                      }
                    >
                      {showMyCards ? 'Remove' : 'Save'}
                    </Button>
                  </Bottom>
                </Card>
              );
            })}
          </CardsSection>
        )}
      </MainFrame>
    </MainContainer>
  );
}

export default OrganizationDetails;
