import styled from "@emotion/styled";

export const Tr = styled.tr`
  align-items: center;
  text-align: center;
  border: 1px solid red;
  :nth-of-type(even) {
  background-color: #ffc83c6a;
}
`;

export const Td = styled.td`
  padding: 5px 0;
  width: 250px;
  border: 1px solid #000000;
  border-top: 0;
`;