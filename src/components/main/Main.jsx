import { useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

import UsersData from '../../dataSet/UsersData';
import CoffeeCarouselData from '../../dataSet/CoffeeCarouselData';
import CoffeeCardData from '../../dataSet/CoffeeCardData';

import CoffeeCarousel from './components/Carousel';
import CoffeeCard from './components/CoffeeCard';

import './Main.css';

const Main = () => {
  const [users, setUsers] = useState(UsersData);

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
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.address.street}, {user.address.city},{' '}
                    {user.address.suite}, {user.address.zipcode}
                  </td>
                  <td style={{ position: 'relative' }}>
                    <MapContainer
                      center={[51.51, -0.08]}
                      zoom={13}
                      scrollWheelZoom={false}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[51.51, -0.08]}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
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
