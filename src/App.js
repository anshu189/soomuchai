import './assets/Css/App.css';
import Home from './components/Home';
import HomeBlog from './components/HomeBlog';
import BusinessEssentials from './components/BusinessEssentials';
import OtherEssentials from './components/OtherEssentials';

function App() {

  return (
    <div className='main-app'>
      <div className="header-main-cont">
        <Home/>
      </div>
      <BusinessEssentials/>
      <OtherEssentials/>
      <HomeBlog/>
    </div>
  );
}

export default App;