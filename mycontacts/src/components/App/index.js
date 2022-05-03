import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import theme from '../../assets/styles/theme';

import Header from '../Header';

import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Container>
        <Header />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
