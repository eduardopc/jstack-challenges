import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from '../../assets/styles/global';
import theme from '../../assets/styles/theme';

import Header from '../Header';
import Routes from '../../Routes';
import CustomToastContainer from '../Toast/CustomToastContainer';

import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <CustomToastContainer />
      <S.Container>
        <Header />
        <Routes />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
