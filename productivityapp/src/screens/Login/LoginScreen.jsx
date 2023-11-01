import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import logoCard from '../../assets/TelaLogin/logo-card-union.svg';
import backGround from '../../assets/TelaLogin/background-unido.svg';
import backGroundReserve from '../../assets/TelaLogin/aside-tarja-background.svg';
import {
  BoxLogo,
  ContentScreen,
  ContainerLogin,
  CardLogo,
  BoxWelcome,
  TextWelcome,
  BoxLabel,
  LabelLogin,
  BoxInput,
  InputLogin,
  BoxButton,
  ButtonLogin,
  BoxAccount,
  TextAccount,
  TextAccountBold,
  BoxIcons,
  IconSpace,
  BoxBackground,
  AsideTarja,
  ImgAsideLogin,
  Content,
  BackGroundReserve,
  BackGroundReserveImg,
} from './LoginStyles.tsx';


function Login() {
  return (
    <ContentScreen>
      <Content>
        <BoxLogo>
          <CardLogo style={{ width: 150, height: 150 }} src={logoCard} alt="Card Logo" />
        </BoxLogo>
        <ContainerLogin>
          <BoxWelcome>
            <TextWelcome>Bem vindo de volta!</TextWelcome>
          </BoxWelcome>
          <BoxLabel>
            <LabelLogin>Usuário:</LabelLogin>
          </BoxLabel>
          <form>
            <BoxInput>
              <InputLogin
                type="text"
                placeholder="User" />
            </BoxInput>
            <BoxLabel>
              <LabelLogin>Senha:</LabelLogin>
            </BoxLabel>
            <BoxInput>
              <InputLogin
                type="password"
                placeholder="********" />
            </BoxInput>
            <BoxButton>
              <ButtonLogin type="submit">
              </ButtonLogin>
            </BoxButton>
          </form>
          <BoxAccount>
            <p>
              <TextAccount>Ainda não possui uma conta?</TextAccount>
              <TextAccountBold href="#"> Saiba mais</TextAccountBold>
            </p>
          </BoxAccount>
          <BoxIcons>
            <IconSpace>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#252F64' }} />
              </a>
            </IconSpace>
            <IconSpace>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#252F64' }} />
              </a>
            </IconSpace>
            <IconSpace>
              <a href="#">
                <FontAwesomeIcon icon={faTelegram} size="2x" style={{ color: '#252F64' }} />
              </a>
            </IconSpace>
          </BoxIcons>
        </ContainerLogin>
      </Content>
      <BoxBackground>
        <AsideTarja>
          <ImgAsideLogin alt="Ilustração Artística" src={backGround} />
        </AsideTarja>
      </BoxBackground>
      <BackGroundReserve>
        <AsideTarja>
          <BackGroundReserveImg alt="Ilustração Artística" src={backGroundReserve} />
        </AsideTarja>
      </BackGroundReserve>
    </ContentScreen>
  );
}

export default Login;
