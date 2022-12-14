import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';




const Chart = ({data:{confirmed,deaths,recovered},country}) => {
    const [dailyData,setDailyData]= useState([]);
    useEffect(()=>{
        const fetchAPI = async()=>{
           setDailyData(await fetchDailyData()) ;
        }
        fetchAPI();
    },[]);
    
    const lineChart=(
        dailyData.length?
        (<Line 
         data={{
             labels:dailyData.map(({date})=>date),
             datasets:[{
                 
                 data:dailyData.map(({confirmed})=>confirmed),
                 label:'Infected',
                 borderColor:'#333ff',
                 
             },{ 
                 data:dailyData.map(({deaths})=>deaths),
                 label:'Deaths',
                 borderColor:'red',
                 backgroundColor:'rgba(255,0,0,0.5)',
                 fill:true}],
         }}
         />):null

    );
    const barChart=(
        confirmed?
        (<Bar
        data={{
           labels:['Infected','Recovered','Deaths'],
           datasets:[{
               label:`Current stats of covid in ${country}`,
               backgroundColor:['green','blue','red'],
               data:[confirmed.value,recovered.value,deaths.value]
           }]
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current state in ${country}`},
        }}
        />):null
    );
        
    
    return (
        <div className="row" >
           <div className="col-10 main3">
           {country?barChart:lineChart} 
           </div> 
        </div>
    )
}

export default Chart;
