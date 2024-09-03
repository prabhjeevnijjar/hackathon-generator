import Banner from './components/HompComp/Banner';
import Challanges from './components/HompComp/Challanges';
import Faqs from './components/HompComp/Faqs';
import Stats from './components/HompComp/Stats';

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <Faqs />
      <Challanges />
    </>
  );
}
