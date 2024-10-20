import Footer from '../components/footer/Footer'
import Header from "../components/header/Header";
import CardSlider from "../components/cardslider/CardSlider";

function MainPage() {
  return (
    <div className="App">
      <Header />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <Footer /> 
    </div>
  )
}

export default MainPage;
