import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';

const MAX_LENGTH = 200;

export const Card = ({ title, onClick, description }) => {
  return (
    <Tilt>
      <CardWrapper
        layout
        animate={{ opacity: 1, scale:1 }}
        initial={{ opacity: 0, scale:0 }}
        exit={{ opacity: 0,scale:0 }}
        transition={{duration:0.5}} 
        onClick={onClick}
      >
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {description
              ? `${description.substring(0, MAX_LENGTH)}...`
              : 'Definition not available'}
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>
    </Tilt>
  );
};

export const CardWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 180px;
  grid-template-areas: 'text';
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin-bottom: 15px;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 15px;
  overflow: hidden;
`;

export const CardTextTitle = styled.h2`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #202020;
  margin-top: 0.5rem;
  font-family: 'Sora', sans-serif;
`;

export const CardTextBody = styled.p`
  color: #202020;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  text-align: left;
  font-weight: 300;
`;
