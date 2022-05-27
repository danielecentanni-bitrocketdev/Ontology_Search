import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { isDetailPage } from '../../feature/ontologyDataSlice';


export const WrapperPage = styled.div`
  padding: 30px;
  font-family: 'Akaya Telivigala', cursive;
  color: ${(props) => props.theme.text};
  font-weight: 100;
  line-height: 50px;
  letter-spacing: 1px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  padding: 0 0 40px;
  border-bottom: double #555;
`;

export const Container = styled.div`
  padding: 20px 0;
  border-bottom: double #555;
`;

export const Definitionlabel = styled.h4`
  font-weight: 100;
  font-size: ${(props) => props.theme.fontlg};
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin-top: 0.5rem;
  font-family: 'Sora', sans-serif;
  padding-left: 30px;
  color: #202020;
`;

const DetailPage = () => {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.ontologyData.selectedData);
  const {
    label = [],
    definition = [],
    wikiAbstract = [],
    wikiURL = [],
  } = selectedData;

    useEffect(() => {
      dispatch(isDetailPage(true));
    }, []);

  const title = useMemo(
    () =>
      label[0]
        ? label[0]['@value']
        : JSON.parse(localStorage.getItem('movieDetail')).label[0]['@value'],
    [label]
  );
  
    const description = useMemo(
      () =>
        definition[0]
          ? definition[0]['@value']
          : JSON.parse(localStorage.getItem('movieDetail')).definition ? JSON.parse(localStorage.getItem('movieDetail')).definition[0]['@value'] :" No Definition",
      [definition]
    );

    const abstract = useMemo(
      () =>
        wikiAbstract[0]
          ? wikiAbstract[0]['@value']
          : JSON.parse(localStorage.getItem('movieDetail')).wikiAbstract
          ? JSON.parse(localStorage.getItem('movieDetail')).wikiAbstract[0][
              '@value'
            ]
          : ' No wikiAbstract',
      [wikiAbstract]
    );

    const wiki = useMemo(
      () =>
        wikiURL[0]
          ? wikiURL[0]['@value']
          : JSON.parse(localStorage.getItem('movieDetail')).wikiURL
          ? JSON.parse(localStorage.getItem('movieDetail')).wikiURL[0]['@value']
          : null,
      [wikiURL]
    );
   

  return (
    <WrapperPage>
      <Title>{title}</Title>
      <Container>
        <Definitionlabel>Definition</Definitionlabel>
        <Paragraph>{description}</Paragraph>
      </Container>
      <Container>
        <Definitionlabel>Abstract</Definitionlabel>
        <Paragraph>{abstract}</Paragraph>
      </Container>
      <p>{wiki}</p>
    </WrapperPage>
  );
};

export default DetailPage;
