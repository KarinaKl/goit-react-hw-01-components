import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
    margin: 50px;
    padding: 25px 15px;
    background-color: #FFFFFF;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
`;
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;
export const Stats = styled.ul`
    display: flex;
    padding-left: 0;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  width: 100%;
  border: 1px solid #696969;
  background-color: #f3f3f3;
`;
export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #DCDCDC;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
  :hover {
  box-shadow: 2px 2px #5bc0f8, 4px 4px #ffc93c;
  top: -2px;
  left: -2px;
}
`
export const Name = styled.p`
  margin: 0 0 10px 0;
  font-size: 24px;
`;
export const Tag = styled.p`
  margin: 0 0 10px 0;
  color: #646464;
`;
export const Location = styled.p`
  margin: 0 0 10px 0;
  color: #646464;
`;
export const Label = styled.span`
  color: #646464;
`;
export const Quantity = styled.span`
  font-size: 18px;
`;