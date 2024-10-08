import React, { useState, useEffect } from 'react';
import { Container, Grid, Image, Header, GridColumn, GridRow } from 'semantic-ui-react';
// import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

import axios from 'axios';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:1337/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <Container className="netflix-container">
      <Header as='h1' inverted textAlign='center' style={{ margin: '2rem 0' }}>
        👀 คุณคือใคร ?
      </Header>
      <Grid>
        {
          // console.log('c =>', customers ?? '...')
        }
        <GridRow columns={3}>
          {customers.map((customer) => (
            <Grid.Column key={customer.id} className="netflix-item"  >
              <div className="netflix-image-container">
                <Image
                  src={`http://localhost:1337${customer.image.url ?? ''}`}
                  alt={customer.name}
                  fluid
                  className="netflix-image"
                />
                <div className="netflix-overlay">
                  <p className="netflix-title">{customer.name}</p>
                </div>
              </div>
            </Grid.Column>
          ))}
        </GridRow>
      </Grid>
    </Container>
  );
};

export default App;