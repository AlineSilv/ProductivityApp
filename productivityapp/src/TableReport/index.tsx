import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0em;
  width: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  margin: 3em 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 14px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 14px;
  text-align: left;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;