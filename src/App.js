
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';
import { Home } from './components/sections/Home';
import Navigation from './components/Navigation';
import { Route, Routes} from 'react-router-dom';
import PageNotFound from './components/sections/PageNotFound';
import DetailPage from './components/sections/DetailPage';
import {  useState } from 'react';



 export const App = () => {
  const [input, setInput] = useState('');


  
 
  const handleChange = (e) => setInput(e.target.value)
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation input={input} setInput={handleChange} />
        <Routes>
          <Route path='/' element={<Home input={input} />} />
          <Route path='/data/:id' element={<DetailPage  />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </main>
  );
}

 

