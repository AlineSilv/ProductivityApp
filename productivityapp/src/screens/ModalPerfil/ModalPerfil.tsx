import React, { useState } from "react";
import styled from "styled-components";


const ModalDisplay = styled.div<{ isOpen: boolean }>`
display: ${(props) => (props.isOpen ? "block" : "none")};
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(rgba(37, 47, 100, 0.7), rgba(37, 47, 100, 0.5));
backdrop-filter: blur(10px); 
z-index: 1000;
`;

const ModalView = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width:900px;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 18px;
  background-color:#252F64;
  border-radius:8px;
  color:#FFFF;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

const HeaderModal = styled.div`
padding-bottom:20px;
`;

const LabelHeaderModal = styled.div`
font-size:18px;
font-weight:700;
padding-right:10px;

`;

const ModalContent = styled.div`
display:flex;
`;

const MenuAside = styled.div`
background-color:#EDF2F7;
padding-top:20px;
padding-left:20px;
width:250px;
margin-right:20px;
border-radius:8px;
`;

const OptionPerfilUser = styled.div`
background-color:#252F64;
border-radius:8px;
padding-left:10px;
width:180px;
`;

const OptionA = styled.div``;

const OptionB = styled.div``;

const OptionC = styled.div``;

const LabelPerfilUserForm = styled.div`
color:#FFFF;
font-size:16px;
font-weight:700;
`;

const ConteinerView = styled.div`
width:600px;

`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  padding-right:10px;
  font-size:16px;
  font-weight:200;
`;

const Input = styled.input`
  width: 100%;
  color:#8392AB;
  padding: 10px;
  border:none;
  font-size:16px;
  background-color:#EDF2F7;
  border-radius: 5px;
  outline: none;
`;

const SectionFormA = styled.div`
 display:flex;
`;


const FormGroupNome = styled.div`
  margin-bottom: 20px;
`;

const FormGroupSobrenome = styled.div`
  margin-bottom: 20px;
`;


const InputNome = styled.input`
  width: 50%;
  color:#8392AB;
  padding: 10px;
  border:none;
  font-size:16px;
  background-color:#EDF2F7;
  border-radius: 5px;
  outline: none;
`;

const InputSobrenome = styled.input`
  width: 50%;
  color:#8392AB;
  padding: 10px;
  border:none;
  font-size:16px;
  background-color:#EDF2F7;
  border-radius: 5px;
  outline: none;
`;

const SectionFormB = styled.div`
display:flex;
`;


const FormGroupSenha = styled.div`
  margin-bottom: 20px;

`;

const FormGroupNovaSenha = styled.div`
  margin-bottom: 20px;

`;

const InputSenha = styled.input`
width: 50%;
color:#8392AB;
padding: 10px;
border:none;
font-size:16px;
background-color:#EDF2F7;
border-radius: 5px;
outline: none;
`;

const InputNovaSenha = styled.input`
width: 50%;
color:#8392AB;
padding: 10px;
border:none;
font-size:16px;
background-color:#EDF2F7;
border-radius: 5px;
outline: none;`;

const InputNivel = styled.input`
  width: 100%;
  padding: 10px;
  border:none;
  font-size:16px;
  color:#8392AB;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  background-color: #E0FF3D;
  color:#252F64;
  font-size:15px;
  font-weight:900;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const ModalPerfil: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    const [formData, setFormData] = useState({
        firstName: "Aline",
        lastName: "Silva",
        username: "Aline.Silv",
        email: "aline@silv.com",
        password: "123123",
        newPassword: "2222",
        userLevel: "Admin",
      });
    
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // sincronizar db
        console.log(formData);
      };

  return (
    <ModalDisplay isOpen={isOpen}>
      <ModalView>
        <HeaderModal>
        <LabelHeaderModal>Perfil | Usuário </LabelHeaderModal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        </HeaderModal>
        <ModalContent>
            <MenuAside>
                <OptionPerfilUser>
                <LabelPerfilUserForm>Perfil de Usuário</LabelPerfilUserForm>
                </OptionPerfilUser>
                <OptionA></OptionA>
                <OptionB></OptionB>
                <OptionC></OptionC>
            </MenuAside>
            <ConteinerView>
                <h3>Configurações de Perfil</h3>
                <FormContainer>
                <form onSubmit={handleSubmit}>
                <SectionFormA>
                <FormGroupNome>
                        <Label>Nome:</Label>
                        <InputNome type="text" name="firstName" value={formData.firstName}onChange={handleChange}/>
                </FormGroupNome>
                <FormGroupSobrenome>
                        <Label>Sobrenome:</Label>
                        <InputSobrenome type="text" name="lastName" value={formData.lastName}onChange={handleChange}/>
                </FormGroupSobrenome>
                </SectionFormA>
                <FormGroup>
                    <Label>Usuário:</Label>
                    <Input type="text" name="username" value={formData.username} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>E-mail:</Label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </FormGroup>
                <SectionFormB>
                <FormGroupSenha>
                    <Label>Senha:</Label>
                    <InputSenha type="password" name="password" value={formData.password} onChange={handleChange}/>
                </FormGroupSenha>
                <FormGroupNovaSenha>    
                    <Label>Nova Senha:</Label>
                    <InputNovaSenha type="password" name="newPassword" value={formData.newPassword} onChange={handleChange}/>
                </FormGroupNovaSenha>
                </SectionFormB>
                <FormGroup>
                    <Label>Nível de Usuário:</Label>
                    <InputNivel name="userLevel" value={formData.userLevel} onChange={handleChange}>
                    </InputNivel>
                </FormGroup>
                <Button type="submit">Salvar alterações</Button>
                </form>
            </FormContainer>

            </ConteinerView>
        </ModalContent>
      </ModalView>
    </ModalDisplay>
  );
};

export default ModalPerfil;