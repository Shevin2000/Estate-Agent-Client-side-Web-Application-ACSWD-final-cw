import React from 'react';
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Properties.css';
import data from '/src/properties.json';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useFavorite } from './FavoriteContext';


const Properties = () => {

  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minRooms, setMinRooms] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);

  const { dispatch } = useFavorite();
  const { state } = useFavorite();

  useEffect(() => {
    // From json file
    setProperties(data.properties);
  }, []);

  const filteredProperties = properties.filter((property) => {
    const matchesSearchTerm = property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinRooms = property.bedrooms >= minRooms;
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
    return matchesSearchTerm && matchesMinRooms && matchesPrice;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function showAll() {
    setProperties(data.properties)
  }

  function showFavorites() {
    setProperties(state.favorites)
  }

  const handleMinRoomsChange = (e) => {
    setMinRooms(parseInt(e.target.value, 10));
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value, 10));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value, 10));
  };

  function sortByPrice() {
    const sortedProperties = [...properties].sort((a, b) => a.price - b.price);
    setProperties(sortedProperties);
  }

  function sortByRooms() {
    const sortedProperties = [...properties].sort((a, b) => a.bedrooms - b.bedrooms);
    setProperties(sortedProperties);
  }

  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/Properties/' + e, { state: { id: e, name: "just name" } })
  }

  const handleFavorites = (item) => {
    const isItemInFavorites = state.favorites.some(i => i.id === item.id);
    !isItemInFavorites
      ? addToFavorites(item)
      : removeFromFavorites(item)
  }

  const addToFavorites = (item) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
    console.log("added to favorites: " + item.id);
  };

  const removeFromFavorites = (item) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: item });
    console.log("removed from favorites: " + item.id);
  };


  return (
    <div style={{ marginTop: 160 }}>
      <div>
        <form>
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                className="form-control"
                style={{ display: 'flex' }}
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="col-1">
              <Button onClick={{}}>Search</Button>
            </div>
          </div>
        </form>
      </div>
      <div style={{}}>
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a style={{ margin: '10px' }}>Price</a>
          <a style={{ margin: '10px' }}>Min</a>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={handleMinPriceChange}
            style={{ height: '30px', width: '100px' }}
          />
          <a style={{ margin: '10px' }}>Max</a>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            style={{ height: '30px', width: '100px' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a style={{ margin: '10px' }}>Min Rooms</a>
          <input
            type="number"
            id="rooms"
            value={minRooms}
            onChange={handleMinRoomsChange}
            style={{ height: '30px', width: '40px' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button onClick={sortByPrice} style={{ margin: '10px' }}>Sort by Price</Button>
          <Button onClick={sortByRooms} style={{ margin: '10px' }}>Sort by Rooms</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button class="btn btn-success" onClick={showFavorites} style={{ margin: '10px' }}>Favorites</Button>
          <Button class="btn btn-success" onClick={showAll} style={{ margin: '10px' }}>All</Button>
        </div>
      </div>
      <Container fluid>
        <Row className="justify-content-center" style={{ margin: '8rem 0' }}>
          {filteredProperties.map((property) => (
            <Card style={{ width: '22rem', margin: '0 0 60px 30px', padding: '0px' }}>
              <Card.Img variant="top" src="/src/components/CarouselImage/home1Ca.jpg" alt="Card image" />
              <div style={{ height: '72px' }}>
                <Card.Title>
                  <div style={{ padding: '16px' }}>
                    {property.location}
                  </div>
                </Card.Title>
              </div>
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Type: {property.type}</li>
                  <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
                  <li className="list-group-item">Tenure: {property.tenure}</li>
                  <li className="list-group-item">Price: ${property.price}</li>
                </ul>
              </div>
              <div style={{ padding: '16px' }}>
                <Card.Text>{property.description.substring(0, 200) + "..."}</Card.Text>
              </div>
              <div style={{ padding: '16px' }}>
                <Button onClick={() => { handleClick(property.id) }} variant="primary">More</Button>
                <Button onClick={() => { handleFavorites(property) }} style={{ marginLeft: '20px' }} class="btn btn-danger">
                  <FaHeart style={state.favorites.some(i => i.id === property.id) ? { fontSize: '20px', color: 'blue' } : { fontSize: '20px', color: 'white' }} />
                </Button>
              </div>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Properties;
