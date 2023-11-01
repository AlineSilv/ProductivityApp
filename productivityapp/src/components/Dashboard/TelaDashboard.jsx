import MenuAside from '../../screens/MenuAside/MenuAside.jsx';

import {
  SectionOne,
  ChartContainerOne,
  WindowChartOne,
  LabelWindowContainerOne,
  LabelFilterWindowContainerOne,
  FilterVendas,
  InputSelectGroup,
  BoxDescription,
  LabelBoxDescription,
  TableWrapper,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  WindowChartTwo,
  ChartContainerTwo,
  WindowChartTree,
  StyledLineChart,
  LabelWindowContainerTwo,
  LabelIndiceWindowContainerTwo,
  WindowChartFour,
  InputSelectGroupTaxa,
  ChartContainerTree,
  SectionTwo,
  ProgressBar,
  StyledBarChart,
} from "./DashboardStyles.tsx";
import BarChart from '../BarChart/BarChart.tsx';
import { LineChart } from '../LineChart/index.tsx';
//import { ContentReport } from "../../styles/ContentReport";


function TelaDashboard() {
  const barChartData = {
    labels: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro"
    ],
    datasets: [
      {
        label: "Vendas Mensais",
        data: [12000, 15000, 18000, 22000, 17000, 20000, 4958, 21000, 14530, 24200],
        backgroundColor: '#FFFF',
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius:18,
        barThickness: 15,      
      },
    ],
  };

  const tableData = [
    { descricao: 'Empresa A', total: 14000, vendasPercent: 20 },
    { descricao: 'Empresa B', total: 800, vendasPercent: 16 },
    { descricao: 'Empresa C', total: 1200, vendasPercent: 24 },
    { descricao: 'Empresa D', total: 600, vendasPercent: 12 },
  ];

  const tableDataB = [
    { modalidade: 'Crédito à vista', bandeira: 'Maestro', economia: '00.01', valor: 'R$17.023', vendasPercent: 20 },
    { modalidade: 'Crédito à vista', bandeira: 'Maestro', economia: '00.01', valor: 'R$17.023', vendasPercent: 16 },
    { modalidade:  'Crédito à vista', bandeira: 'Maestro', economia: '00.01', valor: 'R$17.023', vendasPercent: 16 },
    { modalidade: 'Crédito à vista', bandeira: 'Maestro', economia: '00.01', valor: 'R$17.023', vendasPercent: 16},
  ];

  return (
    <>
     <MenuAside/>
          <SectionOne>
            <ChartContainerOne>
              <WindowChartOne>
                <LabelWindowContainerOne>Vendas</LabelWindowContainerOne>
                <StyledBarChart><BarChart data={barChartData} /></StyledBarChart>
                <FilterVendas>
                <LabelFilterWindowContainerOne>Agrupar por</LabelFilterWindowContainerOne>
                <InputSelectGroup type="text" placeholder="Empresas"></InputSelectGroup>
                </FilterVendas>
                <BoxDescription>
                  <LabelBoxDescription>
                  <TableWrapper>
                      <Table>
                        <TableHeader>
                          <tr>
                            <TableHeaderCell>Descrição</TableHeaderCell>
                            <TableHeaderCell>Total</TableHeaderCell>
                            <TableHeaderCell>Vendas(%)</TableHeaderCell>
                          </tr>
                        </TableHeader>
                        <TableBody>
                          {tableData.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.descricao}</TableCell>
                              <TableCell>{item.total}</TableCell>
                              <TableCell>{item.vendasPercent}%<ProgressBar progress={item.vendasPercent} /></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableWrapper>
                  </LabelBoxDescription>
                </BoxDescription>
              </WindowChartOne>
              <WindowChartTwo>
                <LabelWindowContainerOne>Pagamentos</LabelWindowContainerOne>
                <StyledBarChart><BarChart data={barChartData} /></StyledBarChart>
                <FilterVendas>
                <LabelFilterWindowContainerOne>Agrupar por</LabelFilterWindowContainerOne>
                <InputSelectGroup type="text" placeholder="Empresas"></InputSelectGroup>
                </FilterVendas>
                <BoxDescription>
                  <LabelBoxDescription>
                  <TableWrapper>
                      <Table>
                        <TableHeader>
                          <tr>
                            <TableHeaderCell>Descrição</TableHeaderCell>
                            <TableHeaderCell>Total</TableHeaderCell>
                            <TableHeaderCell>Vendas(%)</TableHeaderCell>
                          </tr>
                        </TableHeader>
                        <TableBody>
                          {tableData.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.descricao}</TableCell>
                              <TableCell>{item.total}</TableCell>
                              <TableCell>{item.vendasPercent}%<ProgressBar progress={item.vendasPercent} /></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableWrapper>
                  </LabelBoxDescription>
                </BoxDescription>
              </WindowChartTwo>
            </ChartContainerOne>
          </SectionOne>
          <SectionTwo>
            <ChartContainerTwo>
              <WindowChartTree>
              <LabelWindowContainerTwo>Débitos</LabelWindowContainerTwo>
              <LabelIndiceWindowContainerTwo>Serviços:</LabelIndiceWindowContainerTwo>
                <StyledLineChart><LineChart/></StyledLineChart>
              </WindowChartTree>
              <WindowChartFour>
              <LabelWindowContainerTwo>Taxas Aplicadas</LabelWindowContainerTwo>
              <FilterVendas>
                <LabelFilterWindowContainerOne>Agrupar por</LabelFilterWindowContainerOne>
                <InputSelectGroupTaxa type="text" placeholder="Estimativa de Economia"></InputSelectGroupTaxa>
                </FilterVendas>
                <BoxDescription>
                  <LabelBoxDescription>
                  <TableWrapper>
                      <Table>
                        <TableHeader>
                          <tr>
                            <TableHeaderCell>Modalidade</TableHeaderCell>
                            <TableHeaderCell>Bandeira</TableHeaderCell>
                            <TableHeaderCell>Economia</TableHeaderCell>
                            <TableHeaderCell>Valor</TableHeaderCell>
                            <TableHeaderCell>Vendas(%)</TableHeaderCell>
                          </tr>
                        </TableHeader>
                        <TableBody>
                          {tableDataB.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.modalidade}</TableCell>
                              <TableCell>{item.bandeira}</TableCell>
                              <TableCell>{item.economia}</TableCell>
                              <TableCell>{item.valor}</TableCell>
                              <TableCell>{item.vendasPercent}%<ProgressBar progress={item.vendasPercent} /></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableWrapper>
                  </LabelBoxDescription>
                </BoxDescription>
              </WindowChartFour>
            </ChartContainerTwo>
            <ChartContainerTree>

            </ChartContainerTree>
          </SectionTwo>
    </>
  );
}

export default TelaDashboard;
