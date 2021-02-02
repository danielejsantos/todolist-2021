import styled from 'styled-components';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to top right, #ABE5E6, #7062F0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 4px;
  z-index: 2;

  @media (max-width: 450px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const TodoContainer = styled.div`
  height: 500px;
  width: 400px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 46px 1px rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 450px) {
    width: 300px;
  }

  @media (max-width: 330px) {
    width: 250px;
  }

  @media (min-height: 900px) {
    height: 700px;
    width: 500px;
  }

  @media (min-height: 1200px) {
    height: 900px;
    width: 600px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const StyledInput = styled.input`
  border: 1px solid #cccccc;
  border-radius: 20px;
  outline: 0;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  margin-right: 10px;

  ::placeholder{
    color: #b4b4b4;
  }
`;

export const ButtonWrapper = styled.button`
  background: none;
  outline: 0;
  cursor: pointer;
`;

export const PlusIcon = styled(AiOutlinePlusCircle)`
  width: 30px;
  height: 30px;
  fill: #bbbbbb;
`;

export const ListItemWrapper = styled.div`
  padding: 10px 3px;
  border-bottom: 1px solid #bbbbbb;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.p`
  font-size: 18px;
  color: #797a7e;
  text-decoration: ${({ isCompleted }) => isCompleted ? "line-through" : "none"};
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  width: 22px;
  height: 22px;
  fill: #797a7e;
`;