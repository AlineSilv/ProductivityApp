import styled from 'styled-components';

export const ContentScreen = styled.div``;

export const Content = styled.div`


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: initial;
  }
`;

export const BoxLogo = styled.div``;

export const ContainerLogin = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  width: 35%;
  max-width: 35%;
  height: auto;
  position: relative;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const CardLogo = styled.img`
  align-content: flex-start;
  padding-left: 7%;
  padding-top: 5%;
  padding-bottom: 2%;
`;

export const BoxWelcome = styled.div`
  text-align: center;
  white-space: nowrap;
`;

export const TextWelcome = styled.div`
  color: #252f40;
  font-weight: 800;
`;

export const BoxLabel = styled.div`
  padding-left: 20%;
  padding-top: 3%;
  height: auto;

  @media (max-width: 768px) {
    padding-right: 20%;
    text-align: center;
  }
`;

export const LabelLogin = styled.div`
  color: #252f64;
`;

export const BoxInput = styled.div`
  text-align: center;
  padding-top: 3px;
  padding-bottom: 0px;
  height: auto;
`;

export const InputLogin = styled.input`
  width: 60%;
  border-radius: 20px;
  border: 1px solid #252f64;
  color: #252f64;
  height: 30px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  padding: 0 14px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const BoxButton = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 2%;
  height: auto;
`;

export const ButtonLogin = styled.button`
  width: 65%;
  color: #e0ff3d;
  font-size: 16px;
  font-weight: 600;
  background-color: #252f64;
  border-radius: 20px;
  border: 1px solid #252f64;
  height: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 2px;
    width: 114%;
  }

  @media (max-width: 390px) {
    margin-top: 2px;
    width: 116%;
  }
`;

export const BoxAccount = styled.div`
  text-align: center;
  padding-bottom: 5%;
  padding-top: 5%;
`;

export const TextAccount = styled.span`
  color: #252f40;

  @media (max-width: 768px) {
    text-align: center;
    white-space: nowrap;
  }
`;

export const TextAccountBold = styled.a`
  color: #252f40;
  font-weight: 800;
  text-decoration: none;
`;

export const BoxIcons = styled.div`
  color: #252f64;
  text-align: center;
  white-space: nowrap;
  padding-top: 5%;
`;

export const IconSpace = styled.span`
  margin-right: 2%;
`;

export const BoxBackground = styled.div`
  width: 70%;
  float: right;
  height: auto;
`;

export const AsideTarja = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: auto;
`;

export const ImgAsideLogin = styled.img`
  display: block;

  @media (min-width: 1500px) {
    height: auto;
  }
  @media (max-width: 1200px) {
    display: none;
    height: auto;
  }
`;

export const BackGroundReserveImg = styled.img`
  float: right;
  height: 100%;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackGroundReserve = styled.div``;
