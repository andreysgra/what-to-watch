import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  filmsCount: number;
}

function App({filmsCount}: AppProps) {
  return <MainPage filmsCount={filmsCount} />;
}

export default App;
