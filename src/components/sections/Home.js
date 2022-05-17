import React, { useEffect, useMemo, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {  isDetailPage, selectedData } from '../../feature/ontologyDataSlice';
import { Card } from '../Card';
import jsonData from '../../db.json'
import { filterSearch } from '../../utils/filtersUtil';
import Pagination from '../Pagination';
import { motion, AnimatePresence } from 'framer-motion';


let PageSize = 40;

export const Home = ({input}) => {
  const dispatch = useDispatch();
  const classe = useSelector((state) => state.ontologyData.selectedClass);
  const property = useSelector((state) => state.ontologyData.selectedProperty);
  const individual = useSelector((state) => state.ontologyData.selectedIndividual);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(isDetailPage(false));
    }, []);

  useEffect(() => {
    setData(() => filterSearch(jsonData, classe, property, individual, input));
    
  }, [input, classe, property, individual,dispatch]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,data]);

    console.log('data', data);
  console.log('currentTableData', currentTableData);

  
  
  const results = currentTableData.map((item, index) => {
    if (index < 100)
      return (
        <div style={{ display: 'flex' }} key={index}>
          <Link
            onClick={() =>
              localStorage.setItem('movieDetail', JSON.stringify(item))
            }
            to={`/data/${item['@id'].split('/').pop()}`}
          >
            <motion.div layout>
              <AnimatePresence>
                <Card
                  title={item.label[0]['@value']}
                  description={item.definition && item.definition[0]['@value']}
                  onClick={() => dispatch(selectedData(item))}
                />
              </AnimatePresence>
            </motion.div>
          </Link>
          <Separator />
        </div>
      );
    else return null;
  });


        
  return (
    <PageContainer>
      <CardWrapper>
        <CardContainer>{results}</CardContainer>
      </CardWrapper>
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100%;
  margin-top:20px ;
  display:flex;
  flex-direction:column;
  align-items:center ;
`;

const CardWrapper = styled.div`
  width: 90%;
  margin: auto;

`;

const CardContainer = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  grid-column-gap:1rem;
  grid-row-gap: 2rem;
  
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;



 