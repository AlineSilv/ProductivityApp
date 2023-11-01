import React from 'react';
import styled from 'styled-components';
import provisorio from '../../assets/TelaAuditoria/provisorio.svg';
import plussquarewhite from '../../assets/TelaAuditoria/plussquarewhite.svg';
import plussquareblack from '../../assets/TelaAuditoria/plussquareblack.svg';


const Container = styled.div`
display:flex;
background-color: rgba(0, 0, 0, 0); 
`;
const SectionOne = styled.div`
height:600px;
width:450px;
`;
const SectionTwo = styled.div`
height:600px;
width:450px;
margin-left:5%;
margin-right:5%;
`;
const SectionTree = styled.div`
height:600px;
width:450px;
`;

const CardRegistros= styled.div`
height:200px;
width:450px;
border-radius:15px;
margin-bottom:10px;
background-color:#6068B2;
color:white;
box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
`;

const CardMediaOne = styled.div`
height:200px;
width:450px;
border-radius:15px;
margin-bottom:10px;
background-color:#6068B2;
color:white;
box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
`;

const CardMediaTwo = styled.div`
height:200px;
width:450px;
border-radius:15px;
margin-bottom:10px;
background-color:#6068B2;
color:white;
box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
`;

const HeaderCard = styled.div`
  display:flex;
  padding-top:20px;
  padding-left:20px;
`;

const IconeCard = styled.img`
  padding-right:15px;
`;

const LabelData = styled.p`
  margin-top:0px;
  padding-right:100px;
`;

const DescriptionCard = styled.p`
  font-size:40px;
  padding-left:25px;
  font-weight:800;
  margin-top:20px;

  > span{
    font-weight:350;
    font-size:18px;
  }
`;

const CardCancelamento = styled.div`
margin-top:20px;
color:gray;
margin-bottom:20px;
background-color:#FFFF;
display:flex;
height:122px;
width:450px;
border-radius:10px;
box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
`;

const CardRejeitado = styled.div`
margin-top:20px;
color:gray;
margin-bottom:20px;
background-color:#FFFF;
display:flex;
height:122px;
width:450px;
border-radius:10px;
box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
`;

const IconePlus = styled.img`
  padding-left:10px;
`;

const IconsSubCard = styled.div`
margin-top:10px;
display:flex;
justify-content:space-between;
`;

const IconeSubPlus = styled.img`
margin-left:200px;
`;

const IconeSubCard = styled.img`

`;

const ContentSubCard = styled.div`
margin-left:20px;
`;

const LabelRejeitado = styled.p`
  margin-bottom:0px;
  font-weight:600;
`;

const LabelRegistros = styled.p`
  margin-top:0px;
`;

const DescriptionCancelamentos = styled.p`
margin-top:0px;
font-size:25px;
font-weight:800;
`;

const DescriptionRejeitado = styled.p`
margin-top:0px;
font-size:25px;
font-weight:800;
`;

function Auditoria() {
    return (
      <>
       <Container>
        <SectionOne>
          <CardRegistros>
            <HeaderCard>
              <IconeCard
                  style={{ width: 45, height: 45 }}
                  src={provisorio}
                  alt="ícone Registros"
              />
              <LabelData>Registros:<br></br>
                <span>000</span>
              </LabelData>
              <IconePlus
                style={{ width: 35, height: 35 }}
                src={plussquarewhite}
                alt="ícone Média"
              />
            </HeaderCard>
          <DescriptionCard>
            115.165,08<br></br>
            <span>Venda bruta</span>
          </DescriptionCard>
          </CardRegistros>
          <CardRejeitado>
            <IconsSubCard>
              <IconeSubCard
                  style={{ width: 80, height: 80 }}
                  src={provisorio}
                  alt="ícone Rejeitado"
                />
              <ContentSubCard>
                <LabelRejeitado>
                  Cancelados
                </LabelRejeitado>
                <LabelRegistros>
                  Registro:<span>0</span>
                </LabelRegistros>
                <DescriptionCancelamentos>
                  0,00
                </DescriptionCancelamentos>
              </ContentSubCard>
              <IconeSubPlus
                  style={{ width: 35, height: 35 }}
                  src={plussquareblack}
                  alt="ícone Média"
                />
            </IconsSubCard>
          </CardRejeitado>
          <CardRejeitado>
            <IconsSubCard>
              <IconeSubCard
                  style={{ width: 80, height: 80 }}
                  src={provisorio}
                  alt="ícone Rejeitado"
                />
              <ContentSubCard>
                <LabelRejeitado>
                  Cancelados
                </LabelRejeitado>
                <LabelRegistros>
                  Registro:<span>0</span>
                </LabelRegistros>
                <DescriptionCancelamentos>
                  0,00
                </DescriptionCancelamentos>
              </ContentSubCard>
              <IconeSubPlus
                  style={{ width: 35, height: 35 }}
                  src={plussquareblack}
                  alt="ícone Média"
                />
            </IconsSubCard>
          </CardRejeitado>
        </SectionOne>
        <SectionTwo>
          <CardMediaOne>
          <HeaderCard>
              <IconeCard
                style={{ width: 45, height: 45 }}
                src={provisorio}
                alt="ícone Média"
              />
              <LabelData>Registros:<br></br>
                <span>000</span>
              </LabelData>
              <IconePlus
                style={{ width: 35, height: 35 }}
                src={plussquarewhite}
                alt="ícone Média"
              />
            </HeaderCard>
          <DescriptionCard>
              1.100,60<br></br>
              <span>Taxa</span>
          </DescriptionCard>
          </CardMediaOne>
          <CardRejeitado>
            <IconsSubCard>
              <IconeSubCard
                  style={{ width: 80, height: 80 }}
                  src={provisorio}
                  alt="ícone Rejeitado"
                />
              <ContentSubCard>
                <LabelRejeitado>
                  Rejeitado
                </LabelRejeitado>
                <LabelRegistros>
                  Registro:<span>0</span>
                </LabelRegistros>
                <DescriptionRejeitado>
                  0,00
                </DescriptionRejeitado>
              </ContentSubCard>
              <IconeSubPlus
                  style={{ width: 35, height: 35 }}
                  src={plussquareblack}
                  alt="ícone Média"
                />
            </IconsSubCard>
          </CardRejeitado>
          <CardRejeitado>
          <IconsSubCard>
            <IconeSubCard
                style={{ width: 80, height: 80 }}
                src={provisorio}
                alt="ícone Rejeitado"
              />
            <ContentSubCard>
              <LabelRejeitado>
                Rejeitado
              </LabelRejeitado>
              <LabelRegistros>
                Registro:<span>0</span>
              </LabelRegistros>
              <DescriptionRejeitado>
                0,00
              </DescriptionRejeitado>
            </ContentSubCard>
              <IconeSubPlus
                  style={{ width: 35, height: 35 }}
                  src={plussquareblack}
                  alt="ícone Média"
                />
          </IconsSubCard>
          </CardRejeitado>
        </SectionTwo>
        <SectionTree>
          <CardMediaTwo>
            <HeaderCard>
              <IconeCard
                style={{ width: 45, height: 45 }}
                src={provisorio}
                alt="ícone Média"
              />
              <LabelData>Registros:<br></br>
                <span>000</span>
              </LabelData>
              <IconePlus
                style={{ width: 35, height: 35 }}
                src={plussquarewhite}
                alt="ícone Média"
              />
            </HeaderCard>
            <DescriptionCard>
              1.165,08<br></br>
              <span>Taxa</span>
            </DescriptionCard>
          </CardMediaTwo>
          <CardRejeitado>
          <IconsSubCard>
          <IconeSubCard
              style={{ width: 80, height: 80 }}
              src={provisorio}
              alt="ícone Rejeitado"
            />
            <ContentSubCard>
              <LabelRejeitado>
                Rejeitado
              </LabelRejeitado>
              <LabelRegistros>
                Registro:<span>0</span>
              </LabelRegistros>
              <DescriptionRejeitado>
                0,00
              </DescriptionRejeitado>
            </ContentSubCard>
            <IconeSubPlus
                style={{ width: 35, height: 35 }}
                src={plussquareblack}
                alt="ícone Média"
              />
          </IconsSubCard>
          </CardRejeitado>
          <CardRejeitado>
          <IconsSubCard>
          <IconeSubCard
              style={{ width: 80, height: 80 }}
              src={provisorio}
              alt="ícone Rejeitado"
            />
            <ContentSubCard>
              <LabelRejeitado>
                Rejeitado
              </LabelRejeitado>
              <LabelRegistros>
                Registro:<span>0</span>
              </LabelRegistros>
              <DescriptionRejeitado>
                0,00
              </DescriptionRejeitado>
            </ContentSubCard>
            <IconeSubPlus
                style={{ width: 35, height: 35 }}
                src={plussquareblack}
                alt="ícone Média"
              />
          </IconsSubCard>
          </CardRejeitado>
        </SectionTree>
       </Container>
      </>
    );
  }
  
  export default Auditoria;
  