import React, {useState} from 'react'
import {properties} from "../../data/properties/allproperties";
import {forRentData} from "../../data/properties/forrent";
import {forSaleData} from "../../data/properties/forsale";
import {forBuyData} from "../../data/properties/forbuy";
import ImageCard from '../../components/ImageCard';
import "../../styles/properties/_properties.scss"
import Slider from '@mui/material/Slider';
import AgentCard from "../../components/AgentCard";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {newData} from "../../data/properties/newproperties";
import {agentsData} from "../../data/agents";
function Properties() {
  const [tab, settab] = useState(1);
  const [range, setrange]=useState([0, 20000]);
  const updateRange=(e, data)=>{
    setrange(data)
  }
  const [sale, setsale] = useState('');
  const handleChangeSale = (event) => {
    setsale(event.target.value);
  };
  const [type, settype] = useState('');
  const handleChangeType = (event) => {
    settype(event.target.value);
  };
  const [bed, setbed] = useState('');
  const handleChangeBed = (event) => {
    setbed(event.target.value);
  };
  const [location, setlocation] = useState('');
  const handleChangeLocation = (event) => {
    setlocation(event.target.value);
  };
  const [area, setarea] = useState('');
  const handleChangeArea = (event) => {
    setarea(event.target.value);
  };
  const [bath, setbath] = useState('');
  const handleChangeBath = (event) => {
    setbath(event.target.value);
  };
  return (
    <div className="properties__container">      
      <ul className="properties__tabs">
        <li onClick={()=>settab(1)} className={tab===1?"properties__tab properties__active__tab":"properties__tab"}>ALL</li>
        <li onClick={()=>settab(2)} className={tab===2?"properties__tab properties__active__tab":"properties__tab"}>FOR BUY</li>
        <li onClick={()=>settab(3)} className={tab===3?"properties__tab properties__active__tab":"properties__tab"}>FOR SALE</li>
        <li onClick={()=>settab(4)} className={tab===4?"properties__tab properties__active__tab":"properties__tab"}>FOR RENT</li>
      </ul>
      <div className="properties__product__container">
        <div className={tab===1?"properties__tabpane properties__active__tabpane":"properties__tabpane"}>
          {properties.map((item, index)=>{
            return (<div key={index} className="properties__product__card">
              <ImageCard title={item.title} 
              image={item.image}
              style={item.style}
              properties={item.properties}
              price={item.price}
              address={item.address}/>
            </div>)
          })}
        </div>
        <div className={tab===2?"properties__tabpane properties__active__tabpane":"properties__tabpane"}>
          {forBuyData.map((item, index)=>{
            return (<div key={index} className="properties__product__card">
              <ImageCard title={item.title} 
              image={item.image}
              style={item.style}
              properties={item.properties}
              price={item.price}
              address={item.address}/>
            </div>)
          })}
        </div>
        <div className={tab===3?"properties__tabpane properties__active__tabpane":"properties__tabpane"}>
          {forSaleData.map((item, index)=>{
            return (<div key={index} className="properties__product__card">
              <ImageCard title={item.title} 
              image={item.image}
              style={item.style}
              properties={item.properties}
              price={item.price}
              address={item.address}/>
            </div>)
          })}
        </div>
        <div className={tab===4?"properties__tabpane properties__active__tabpane":"properties__tabpane"}>
          {forRentData.map((item, index)=>{
            return (<div key={index} className="properties__product__card">
              <ImageCard title={item.title} 
              image={item.image}
              style={item.style}
              properties={item.properties}
              price={item.price}
              address={item.address}/>
            </div>)
          })}
        </div>
        <div className="properties__right__side">
          <div className="properties__find__home">
            <h2 className="properties__title">Find your home</h2>
            <div className="properties__find__home__dropdown">
              <FormControl sx={{ minWidth: 120}}>                                
                <Select className="dropdown"                                   
                  value={sale}
                  onChange={handleChangeSale}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    All Sale
                  </MenuItem>
                  <MenuItem value={10}>For Sale</MenuItem>
                  <MenuItem value={20}>For Rent</MenuItem>
                  
                </Select>
                <Select className="dropdown"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  value={type}
                  onChange={handleChangeType}
                >
                  <MenuItem value="">All Types</MenuItem>
                  <MenuItem value={10}>Resort</MenuItem>
                  <MenuItem value={20}>Villa</MenuItem>
                  <MenuItem value={30}>Apartment</MenuItem>
                  
                </Select>
                <Select className="dropdown"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  value={bed}
                  onChange={handleChangeBed}
                >
                  <MenuItem value="">Bedroom</MenuItem>
                  <MenuItem value={10}>1 Bedroom</MenuItem>
                  <MenuItem value={20}>2 Bedroom</MenuItem>
                  <MenuItem value={30}>3 Bedroom</MenuItem>
                  
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120}}>                                
                <Select className="dropdown"                                   
                  value={location}
                  onChange={handleChangeLocation}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    All Location
                  </MenuItem>
                  <MenuItem value={10}>New York</MenuItem>
                  <MenuItem value={20}>Boston</MenuItem>
                  <MenuItem value={30}>Chicago</MenuItem>
                  <MenuItem value={40}>Denver</MenuItem>
                  
                </Select>
                <Select className="dropdown"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  value={area}
                  onChange={handleChangeArea}
                >
                  <MenuItem value="">All Area(sqft)</MenuItem>
                  <MenuItem value={10}>800(sqft)</MenuItem>
                  <MenuItem value={20}>1200(sqft)</MenuItem>
                  <MenuItem value={30}>1600(sqft)</MenuItem>
                  
                </Select>
                <Select className="dropdown"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  value={bath}
                  onChange={handleChangeBath}
                >
                  <MenuItem value="">Bathroom</MenuItem>
                  <MenuItem value={10}>1 Bathroom</MenuItem>
                  <MenuItem value={20}>2 Bathroom</MenuItem>
                  <MenuItem value={30}>3 Bathroom</MenuItem>
                  <MenuItem value={40}>4 Bathroom</MenuItem>                  
                </Select>
              </FormControl>
            </div>
            <Slider
            value={range}
            onChange={updateRange}
            valueLabelDisplay="auto"
            min={0}
            max={20000}/>
            <button className="properties__button__search">SEARCH</button>
          </div>
          <div className="properties__latest">
          <h2 className="properties__title">Lastest Properties</h2>

          {newData.map((item, index)=>{
            return (<div key={index} className="properties__product__card">
              <ImageCard title={item.title} 
              image={item.image}
              style={item.style}
              properties={item.properties}
              price={item.price}
              address={item.address}/>
            </div>)
          })}
          </div>
          <div className="properties__agent">
          <h2 className="properties__title">Our Agents</h2>
          <div className="properties__agent__cards">
            <span>
              <div className="properties__agent__card">
                <img src="/assets/images/agents01.jpg" alt="" />
                <h3 className="properties__agent__name">Jassica Thomson</h3>
              </div>
              <div className="properties__agent__card">
                <img src="/assets/images/agents03.jpg" alt="" />
                <h3 className="properties__agent__name">Sayana Sarlin</h3>

              </div>
            </span>
            <span>
              <div className="properties__agent__card">
              <img src="/assets/images/agents06.jpg" alt="" />
              <h3 className="properties__agent__name">Thomas Eilliams</h3>

              </div>
              <div className="properties__agent__card">
              <img src="/assets/images/agents04.jpg" alt="" />
              <h3 className="properties__agent__name">Kuddus Boyati</h3>

              </div>
            </span>
          </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Properties
