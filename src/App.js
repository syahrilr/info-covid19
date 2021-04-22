import React from 'react';

import { Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/covid-19.png';

class App extends React.Component{
  
  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    // fetch data
    const fetchedData = await fetchData(country)

    // set the state
    this.setState({data: fetchedData, country: country})
  }

  render(){

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    )
  }
}

export default App;