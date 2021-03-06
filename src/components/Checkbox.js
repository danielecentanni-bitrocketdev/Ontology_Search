import { useState } from 'react';
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from 'react-spring';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-family: 'Sora', sans-serif;
`;



function Checkbox({ label, filter,selector }) {

  
  const dispatch = useDispatch();
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: selector ? '#202020' : '#fff',
    borderColor: selector ? '#202020' : '#ddd',
    borderRadius: '20px',
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: selector ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    selector
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <StyledLabel>
      <input type='checkbox' onChange={() => dispatch(filter)} />
      <animated.svg
        style={checkboxAnimationStyle}
        className={`checkbox ${selector ? 'checkbox--active' : ''}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden='true'
        viewBox='0 0 15 11'
        fill='none'
      >
        <animated.path
          d='M1 4.5L5 9L14 1'
          strokeWidth='2'
          stroke='#fff'
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
      {label}
    </StyledLabel>
  );
}

export default Checkbox;
