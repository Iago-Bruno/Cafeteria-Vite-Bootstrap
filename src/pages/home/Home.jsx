import { Container, Row } from "react-bootstrap";

import CoffeeCarousel from "./components/Carousel";
import CoffeeCard from "./components/CoffeeCard";

import CoffeeCarouselData from "../../dataSet/CoffeeCarouselData";
import CoffeeCardData from "../../dataSet/CoffeeCardData";

import "./Home.css";

function Home() {
  return (
    <div className="main py-3">
      <Container className="main-carousel">
        <CoffeeCarousel data={CoffeeCarouselData} />
      </Container>
      <Container fluid className="main-cards mt-4">
        <Row className="gap-3">
          {CoffeeCardData.map((coffee, index) => {
            return <CoffeeCard key={index} coffee={coffee} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
