import React from 'react';
import LogoCard from '../../assets/Navbar/LogoCard.svg';
import help_icon from '../../assets/Navbar/icon-box-help.svg';
import notification_up_icon from '../../assets/Navbar/icon-header-menu-config-notification.svg';
import dashboard_icon from '../../assets/Navbar/icon-dashboard-home.svg';
import TreePoints_icon from '../../assets/Navbar/TreePoints.svg';
import audit_sales_icon from '../../assets/Navbar/icon-audit-vendas-home.svg';
import UserCircle from '../../assets/Navbar/UserCircle.svg';
import financial_conciliation_icon from '../../assets/Navbar/icon-conciliacao-financeira-home.svg';
import financial_conference_icon from '../../assets/Navbar/icon-conciliacao-financeira-home.svg';
import forecast_receivables_icon from '../../assets/Navbar/icon-previsao-recebiveis-home.svg';
//import backgroundView from '../../assets/MenuAside/background_home.svg';

import {
  ContentScreen,
  RowHeader,
  BoxLogo,
  CardLogo,
  HeaderMenuBar,
  LabelInstruct,
  LabelInstructBlack,
  CompanySelect,
  InputSelectDate,
  MenuConfig,
  IconUser,
  IconMenuConfig,
  IconMenuNotification,
  ContentAside,
  IconDashboard,
  IconConfVendas,
  IconAuditVendas,
  IconConciliFinanceira,
  IconPrevisaoRecebiveis,
  WindowsAside,
  BoxIconTitle,
  BoxIconDash,
  BoxIconConfVendas,
  BoxIconAuditVendas,
  BoxIconConciliFinanceira,
  BoxIconPrevisaoRecebiveis,
  ContainerHelp,
  BoxIconHelp,
  IconHelp,
  TextBoxHelp,
  TextBoldHelp,
  BoxButtonContact,
  ButtonContact,
  BoxIconTitleDash,
  
} from "./MenuAsideStyles.tsx";

function Menu() {

  return (
      <ContentScreen>
        <RowHeader>
            <BoxLogo><CardLogo src={LogoCard}/></BoxLogo>
            <HeaderMenuBar>
                <LabelInstruct> Card / <LabelInstructBlack>* * * *</LabelInstructBlack></LabelInstruct>
                <CompanySelect>
                  <option value="" selected>
                    Selecione a empresa
                  </option>
                  <option value="empresa1">Empresa 1</option>
                  <option value="empresa2">Empresa 2</option>
                  <option value="empresa3">Empresa 3</option>
                </CompanySelect>
                <InputSelectDate type="calendar" placeholder="Selecione o período"></InputSelectDate>                      
              </HeaderMenuBar>
            <MenuConfig>
            <IconMenuNotification>
                <img
                  src={notification_up_icon}
                  style={{ width: 25, height: 20 }}
                ></img>
            </IconMenuNotification>
            <IconMenuConfig>
              <img
                src={TreePoints_icon}
                style={{ width: 40, height: 25 }}
                alt=""
              />
            </IconMenuConfig>
            <IconUser>
            <img
              src={UserCircle}
              style={{ width: 25, height: 20 }}
              ></img><p>Aline</p>
            </IconUser>
            </MenuConfig>
        </RowHeader>
        <ContentAside>
          <WindowsAside>
              <BoxIconDash>
                <IconDashboard
                  style={{ width: 35, height: 35 }}
                  src={dashboard_icon}
                  alt="ícone Dashboard"
                />
                <BoxIconTitleDash>Dashboard</BoxIconTitleDash>
              </BoxIconDash>
              <BoxIconConfVendas>
                <IconConfVendas
                  style={{ width: 35, height: 35 }}
                  src={financial_conference_icon}
                  alt="ícone Conferência de Vendas"
                />
                <BoxIconTitle>Conferência de Vendas</BoxIconTitle>
              </BoxIconConfVendas>
              <BoxIconAuditVendas>
                <IconAuditVendas
                  style={{ width: 35, height: 35 }}
                  src={audit_sales_icon}
                  alt="ícone Auditoria de Vendas"
                />
                <BoxIconTitle>Auditoria de Vendas</BoxIconTitle>
              </BoxIconAuditVendas>
              <BoxIconConciliFinanceira>
                <IconConciliFinanceira
                  style={{ width: 35, height: 35 }}
                  src={financial_conciliation_icon}
                  alt="ícone Conciliação Financeira"
                />
                <BoxIconTitle>Conciliação Financeira</BoxIconTitle>
              </BoxIconConciliFinanceira>
              <BoxIconPrevisaoRecebiveis>
                <IconPrevisaoRecebiveis
                  style={{ width: 35, height: 35 }}
                  src={forecast_receivables_icon}
                  alt="ícone Previsão de Recebíveis"
                />
                <BoxIconTitle>Previsão de Recebíveis</BoxIconTitle>
              </BoxIconPrevisaoRecebiveis>
          </WindowsAside>
          <ContainerHelp>
            <BoxIconHelp>
              <IconHelp
                style={{ width: 50, height: 35 }}
                src={help_icon}
                alt="ícone de Ajuda"
              />
            </BoxIconHelp>
            <TextBoxHelp>
              <TextBoldHelp>Precisa de Ajuda?</TextBoldHelp>
              <br></br>
              Fale conosco!
            </TextBoxHelp>
            <BoxButtonContact>
              <a href="#">
                <ButtonContact>Clique aqui</ButtonContact>
              </a>
            </BoxButtonContact>
          </ContainerHelp>
        </ContentAside>
      </ContentScreen>
  );
}

export default Menu;
