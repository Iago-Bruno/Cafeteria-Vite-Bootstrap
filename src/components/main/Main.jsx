import { useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import UsersData from "../../dataSet/UsersData";
import CoffeeCarouselData from "../../dataSet/CoffeeCarouselData";
import CoffeeCardData from "../../dataSet/CoffeeCardData";

import CoffeeCarousel from "./components/Carousel";
import CoffeeCard from "./components/CoffeeCard";

import "./Main.css";

const Main = () => {
  return (
    <Container className="main py-3">
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
      <Container className="mt-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Email</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {UsersData.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.address.street}, {user.address.city},{" "}
                    {user.address.suite}, {user.address.zipcode}
                  </td>
                  <td style={{ maxHeight: "400px" }}>
                    <MapContainer
                      center={[user.address.geo.lat, user.address.geo.lng]}
                      zoom={13}
                      style={{
                        width: "300px",
                        height: "200px",
                      }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[user.address.geo.lat, user.address.geo.lng]}
                      >
                        <Popup maxWidth={200}>
                          <h4 style={{ fontSize: "16px", fontWeight: "bold" }}>
                            {user.company.name}
                          </h4>
                          <h6 style={{ fontSize: "12px" }}>
                            {user.company.catchPhrase} <br /> {user.company.bs}
                          </h6>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default Main;
