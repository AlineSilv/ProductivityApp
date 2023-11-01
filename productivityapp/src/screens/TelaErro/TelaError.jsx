import React from 'react';
import styled from 'styled-components';
import RobotError from '../../assets/TelaErro/RobotError.svg';
import Bell from '../../assets/TelaErro/Bell.svg';
import TreePoints from '../../assets/TelaErro/TreePoints.svg';
import UserCircle from '../../assets/TelaErro/UserCircle.svg';
import LogoCard from '../../assets/TelaErro/LogoCard.svg'

const HeaderContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between; 
  background-color:#FFFF;
  color:black;
  height:auto;

`;

const MenuConfig = styled.div`
padding-top:30px;
text-align:right;
color:gray;
width:200px;
height:auto;
`;
const ImgLogo =styled.img`
width:200px;
height:200px;
`;
const BoxLogo = styled.div`
width:300px;
height:auto;
text-align:left;
padding-left:50px;
`;
const HeaderLogo = styled.img``;

const UserIcon = styled.img`
  height:auto;
  width:20px;
  padding-right:20px;
  padding-bottom:6px;
`;

const MenuIcon = styled.img`
height:auto;
width:8px;
padding-right:20px;
opacity:0.7;
`;

const AlertIcon = styled.img`
height:auto;
width:18px;
padding-right:40px;
padding-bottom:6px;
`

const ContainerContent = styled.div`
width:100%;
`;

const Illustration = styled.div`
width:64%;
height:500px;
text-align: center;
background-repeat: no-repeat;
background-image: url(${RobotError});
background-position:right;
`;

const BoxDescription = styled.div`
color:black;
font-size:18px;

p{
  text-align: center;
}
span{
  font-weight:800;
}
`;

const ButtonContainer = styled.div`
text-align: center;
`;

const Button = styled.button`
border:none;
border-radius:20px;
margin-top:50px;
margin:0 auto; 
text-align: center;
width:300px;
padding-top:10px;
padding-bottom:10px;
color:#C9E437;
background-color:#252F64;
font-size:18px;
font-weight:800;

`;

function TelaError() {
  return (
    <>
    <HeaderContainer>
    <BoxLogo><ImgLogo src={LogoCard}/></BoxLogo>
    <MenuConfig>
      <UserIcon src={UserCircle} alt="Ícone de Usuário" />
      <MenuIcon src={TreePoints} alt="Ícone de Menu"/>
      <AlertIcon src={Bell} alt="Ícone de Alertas"/>
    </MenuConfig>
    </HeaderContainer>
    <ContainerContent>
     <Illustration/>
    <BoxDescription>
      <p>Ops, parece que nosso robô explorador deu um passo em falso!<br></br>
        <span>Vamos guiá-lo de volta ao caminho certo.</span></p>
        
    </BoxDescription>
    <ButtonContainer><Button>Voltar para a página inicial</Button></ButtonContainer>
    </ContainerContent>
    </>
  );
}

export default TelaError;