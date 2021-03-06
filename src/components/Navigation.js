import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectedClass, selectedIndividual, selectedProperty } from '../feature/ontologyDataSlice'
import Checkbox from './Checkbox'
import Logo from './Logo'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.body};

`
const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: ${(props) => props.theme.navHeight};
  padding: 40px 20px;
  box-sizing:border-box ;
 
`;

const Container = styled.div`
  display: flex;
  align-items:center ;
`;


const WrapperSearch = styled.div`
  padding: 0 1.5em;
  border: 1px solid lightgray;
  border-radius: 1.5em;
  margin-right:20px ;
  &:hover,
  &.focus {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  height: 2em;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    border: 0;
    outline: none;
    font-family: 'Sora', sans-serif;
  }
`;


const Navigation = ({input,setInput}) => {
  const dispatch = useDispatch();
  const isDetailPage = useSelector((state) => state.ontologyData.isDetailPage);
  const isCheckedClass = useSelector((state) => state.ontologyData.selectedClass);
  const isCheckedProperty = useSelector((state) => state.ontologyData.selectedProperty);
  const isCheckedindividual = useSelector((state) => state.ontologyData.selectedIndividual);
  

  return (
    <Section id='navigation'>
      <NavBar>
        <Logo />
        {!isDetailPage && (
          <Container>
            <WrapperSearch>
              <SearchContainer>
                <input
                  type='text'
                  placeholder='insert text'
                  value={input}
                  onChange={setInput}
                />
                <FontAwesomeIcon icon={faSearch} />
              </SearchContainer>
            </WrapperSearch>
            <Checkbox
              label='Class'
              filter={() => dispatch(selectedClass())}
              selector={isCheckedClass}
            />
            <Checkbox
              label='Property'
              filter={() => dispatch(selectedProperty())}
              selector={isCheckedProperty}
            />
            <Checkbox
              label='Individual'
              filter={() => dispatch(selectedIndividual())}
              selector={isCheckedindividual}
            />
          </Container>
        )}
      </NavBar>
    </Section>
  );
}



export default Navigation