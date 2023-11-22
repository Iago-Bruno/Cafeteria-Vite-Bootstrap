import { Button, Form, Table } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import UsersData from '../../dataSet/UsersData';
import { useState } from 'react';

const Cardapio = () => {
  const [filter, setFilter] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(filter);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formFilter">
          <Form.Label>Buscar</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Digite um alimento"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Email</th>
            <th>Endereço</th>
            <th>Localização</th>
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
                  {user.address.street}, {user.address.city},{' '}
                  {user.address.suite}, {user.address.zipcode}
                </td>
                <td style={{ maxHeight: '400px' }}>
                  <MapContainer
                    center={[user.address.geo.lat, user.address.geo.lng]}
                    zoom={13}
                    style={{
                      width: '300px',
                      height: '200px',
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
                        <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                          {user.company.name}
                        </h4>
                        <h6 style={{ fontSize: '12px' }}>
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
    </>
  );
};

export default Cardapio;
