import React from 'react';
import "./index.css";
import { fetchData } from './api';
import {Cards ,Chart,CountryPicker,CovidAnimation,CovidText} from './components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
state ={
  data:{},
  country:'',
}

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }
  handleCountryChange=async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country});
  }
render(){
  const{data,country}=this.state;
    return (
        <>
        <div className="row UpperTextBox">
          <CovidText/>
          <CovidAnimation/> 
        </div>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
       </> 
    )
 }
}
export default App;