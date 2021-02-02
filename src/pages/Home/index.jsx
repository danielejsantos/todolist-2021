import React, { useState } from 'react';

import { 
  Container,
  TodoContainer,
  Title,
  InputWrapper,
  StyledInput,
  ButtonWrapper,
  PlusIcon,
  ListItemWrapper,
  ListItem,
  DeleteIcon 
} from './styles';

const Home = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (item) => {
    if (item === '') return null;
    setList([...list, { item, completed: false }]);
    setItem('');
  }

  const handleCompleted = index => {
      const newList = [...list];
      newList[index].completed = !newList[index].completed;
      setList(newList);
  }

  const handleRemove = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <Container>
      <Title>To do list</Title>
      <TodoContainer>
        <InputWrapper>
          <StyledInput value={item} onChange={(e => { setItem(e.target.value) })} placeholder="add a new task" />
          <ButtonWrapper onClick={() => handleSubmit(item)}>
            <PlusIcon />
          </ButtonWrapper>
        </InputWrapper>
        {list.map((listItem, index) =>
          <ListItemWrapper>
            <div onClick={() => handleCompleted(index)}>
              <ListItem isCompleted={listItem.completed}>{listItem.item}</ListItem>
            </div>
            <ButtonWrapper onClick={() => handleRemove(index)}>
              <DeleteIcon />
            </ButtonWrapper>
          </ListItemWrapper>
        )}
      </TodoContainer>
    </Container>
  )
};

export default Home;