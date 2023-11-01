import React from 'react';
import styled from 'styled-components';
import logoCard from '../../assets/TelaLogin/logo-card-union.svg';
import Background from '../../assets/TelaCadastro/BackgroundCadastro.svg';


const Container = styled.div`
font-family: 'Poppins', sans-serif;
background-color:#F8F9FA;
font-size: 18px;
display:flex;
`;

const ContentAsideForm = styled.div`
margin-left:200px;
width:600px;
height:auto;

`;

const BoxLogo = styled.div``;

const ImgLogo = styled.img``;

const BoxForm = styled.div``;

const BoxInstruct = styled.div`
font-weight:800;
`;

const TextWelcome = styled.p`
padding-left:20%;
text-aling:center;
`;

const LabelForm = styled.div`
padding-top:15px;
padding-bottom:10px;
`;


const BoxInput = styled.div``;

const InputForm = styled.input`
font-family: 'Poppins', sans-serif;
font-size:16px;
padding-left:15px;
border: 1px solid #cccc;
outline:none;
color: #cccc;
border-radius:15px;
height:30px;
width:400px;
`;

const InputFormPass = styled.input`
font-family: 'Poppins', sans-serif;
font-size:16px;
padding-left:15px;
border: 1px solid #cccc;
outline:none;
color: #cccc;
border-radius:15px;
height:30px;
width:400px;

background-image: url("../../assets/TelaCadastro/eye.svg");
background-position:95% center;
background-repeat: no-repeat;
background-size: 30px 25px;
opacity:0.9;
`;

const BoxLabel = styled.div `
padding-left:10px;
`;

const BoxButton = styled.div `
padding-top:20px;
`;

const ButtonForm = styled.button`
width:400px;
font-size:16px;
border:none;
height:30px;
padding-top:5px;
padding-bottom:5px;
border-radius:10px;
background-color:#24126A;
color:#C9E437;
font-weight:800;
`;

const ContentIllustration = styled.div`
margin-left:70px;
height:auto;


`;

const ImgIllustration = styled.img`
height:auto;
width:1050px;
`;

function Cadastro() {
  return (
    <>
    <Container>
    <ContentAsideForm>
      <BoxLogo>
        <ImgLogo style={{ width: 200, height: 200 }} src={logoCard} alt="Card Logo" />
      </BoxLogo>
      <BoxForm>
          <BoxInstruct>
            <TextWelcome>Preencha seus dados:</TextWelcome>
          </BoxInstruct>
          <form>
          <LabelForm>Nome completo:</LabelForm>
            <BoxInput>
              <InputForm
                type="text"
                placeholder="Usuário01" />
            </BoxInput>
            <BoxLabel>
              <LabelForm>Celular com DDD:</LabelForm>
            </BoxLabel>
              <BoxInput>
              <InputForm
                  type="text"
                  placeholder="(31)912345678" />
              </BoxInput>
              <BoxLabel>
              <LabelForm>E-mail:</LabelForm>
            </BoxLabel>
            <BoxInput>
              <InputForm
                  type="text"
                  placeholder="user@gmail.com" />
              </BoxInput>
              <BoxLabel>
              <LabelForm>Senha:</LabelForm>
            </BoxLabel>
            <BoxInput>
              <InputFormPass
                type="password"
                placeholder="********" />
            </BoxInput>
            <BoxLabel>
              <LabelForm>Confirmar senha:</LabelForm>
            </BoxLabel>
            <BoxInput>
              <InputFormPass
                type="password"
                placeholder="********" />
            </BoxInput>
            <BoxButton>
              <ButtonForm type="submit">Começar a usar o Finly</ButtonForm>
            </BoxButton>
          </form>
      </BoxForm>
      </ContentAsideForm>
      <ContentIllustration>
        <ImgIllustration alt="Ilustração Artística" src={Background}/>
        </ContentIllustration>
    </Container>
    </>
 
  );
}

export default Cadastro;