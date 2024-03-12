import { Header } from './Components/Header/Header';
import { Content } from './Components/Content/Content';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <div className='header'>
      <Header text='hea' />
      <Content number={123123}/>
      <Footer array={[1, 3, 4]}/>
    </div>
  );
}

export default App;
