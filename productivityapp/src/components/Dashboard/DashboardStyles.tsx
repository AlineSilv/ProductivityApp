import styled from 'styled-components';


export const SectionOne = styled.section`
background: linear-gradient(#f8f9fa 40%, transparent 70%);
  border-radius: 10px;

`;
export const SectionTwo = styled.div`
margin-top:10%;
`;

export const ChartContainerOne = styled.div`
  display:flex;
  margin-bottom:-7%;;
 @media (max-width: 1755px) {
  display: flex;
  flex-direction: column;
}

@media (max-width: 990px) {
  display: flex;
  flex-direction: column;
}

`;

export const WindowChartOne = styled.div`
width: 620px;
heigth: 60%;
padding-left:25px;
padding-right:3%;
margin-top:2%;
padding-bottom:2%;
margin-left:2%;
background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const LabelWindowContainerOne = styled.p`
font-weight:700;
font-size:20px;
padding:0;
`;

export const LabelFilterWindowContainerOne = styled.p`
font-size:16px;
padding:0;
`;

export const FilterVendas =styled.div`
display:flex;
flex-direction:row;
`;

export const InputSelectGroup = styled.input`
border: 1px solid #ccc;
width:120px;
margin-top:2%;
margin-left: 26px;
padding-left:3%;
margin-right: 5%;
border-radius: 8px;
background-image: url("./assets/Navbar/icon-input-header-chevron.svg");
background-position:4% center;
background-repeat: no-repeat;
background-size: 15px 15px; 

&::placeholder{
  padding-left: 7%;
  font-size: 17px;
  color: #ccc;
  font-weight: 510;
}
`;

export const TableWrapper =styled.div`
  margin-top:40px;
  width: 100%;
  overflow-x: auto;
  `;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

 export const TableHeader = styled.thead`
  color:gray;
  font-weight: bold;
`;

export const TableHeaderCell = styled.th`
  width: 200px;
  border: none;
  padding: 20px;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    margin-bottom:15px;
  }
`;

export const TableCell = styled.td`
  border: none;
  padding: 10px;
  padding-left:25px;
`;

export const BoxDescription =styled.div``;

export const LabelBoxDescription =styled.table``;

export const WindowChartTwo =styled.div`
width: 620px;
heigth: 60%;
padding-left:25px;
padding-right:3%;
margin-top:2%;
padding-bottom:2%;
margin-left:4%;
background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;


export const StyledBarChart = styled.div`
  width:550px;
  height:300px;
  padding-top: 5%;
  padding-right:5%;
  padding-left:5%;
  padding-bottom: 4%;
  background-color:#252F64;
  border-radius: 15px;
`;
export const ChartContainerTwo = styled.div`
display:flex;
margin-left:300px;
margin-bottom:8%;

@media (max-width: 1755px) {
display: flex;
flex-direction: column;

}

@media (max-width: 990px) {
display: flex;
flex-direction: column;

}

`;

export const WindowChartTree = styled.div`
width: 620px;
heigth: 60%;
padding-left:25px;
padding-right:3%;
padding-bottom:2%;
margin-left:40px;
background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

@media (max-width: 1755px) {
margin-bottom:60px;
margin-left:45px;
  
  }
  

`;

export const StyledLineChart = styled.div``;

export const WindowChartFour = styled.div`
width: 620px;
heigth: 60%;
padding-left:25px;
padding-right:3%;
padding-bottom:2%;
margin-left:60px;
background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

@media (max-width: 1755px) {
  margin-left:45px;
    
    }
`;

export const LabelWindowContainerTwo =styled.div`
font-size:20px;
font-weight:700;
padding-top:20px;
`;

export const LabelIndiceWindowContainerTwo =styled.div`
font-size:16px;
color:#ccc;
font-weight:700;
padding-top:8px;
`;

export const InputSelectGroupTaxa =styled.input`
border: 1px solid #ccc;
width:220px;
margin-top:2%;
margin-left: 26px;
padding-left:3%;
margin-right: 5%;
border-radius: 8px;
background-image: url("./assets/Navbar/icon-input-header-chevron.svg");
background-position:4% center;
background-repeat: no-repeat;
background-size: 15px 15px; 

&::placeholder{
  padding-left: 8%;
  font-size: 17px;
  color: #ccc;
  font-weight: 510;
}
`;

export const ChartContainerTree = styled.div`
`;

export const StatisticBox = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

export const StatisticTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Progress = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  height: 10px;
  margin-bottom: 10px;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  background-color: #E0FF3D;
  border-radius: 4px;
  height: 5px;
  width: ${(props) => props.progress}%;
`;

export const StatisticValue = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const PieChart = styled.div`
  width: 50%; 
  margin-right: 20px; 
`;

