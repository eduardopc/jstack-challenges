import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import theme from '../../assets/styles/theme';

import Header from '../Header';
import Routes from '../../Routes';

import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
