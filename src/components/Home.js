import TopAppBar from '../components/TopAppBar';
import MainImage from '../components/MainImage';
import Menu from '../components/Menu';
import BasicInfo from '../components/BasicInfo';
import Location from '../components/Location';
import AboutUs from '../components/AboutUs';

function Home() {
  return (
    <div>
      <TopAppBar />
      <MainImage/>
      <Menu/>
      <BasicInfo/>
      <Location/>
      <AboutUs/>
    </div>
      

  );
}

export default Home;