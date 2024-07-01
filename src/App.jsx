
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
  } from 'react-speedometer';

  import './App.css'

  //Init socket
const socket = io('http://localhost:4000'); 

const App = () => {
    const [data, setData] = useState({});

    //UseEffect for observing the 
    useEffect(() => {
        console.log(data)
        socket.on('newData', (newData) => {
            setData(newData);
        });

        return () => {
            socket.off('newData');
        };
    }, [data]);

    return (
        <>
        <h1>Speedometer App</h1>
        <div className='section'>
        <Speedometer
                value={data.speed}
                fontFamily='squada-one'
                max={60}
                width={350}
        >
        <Background color='black' fon/>
        <Arc color='black'/>
        <Needle color='black'/>
        <Progress color='green'/>
        <Marks lineColor='black'/>
        <Indicator color='white'
            />
        </Speedometer>
           
        </div>
        <h2>Time: {data.time}</h2>
        </>
    );
};

export default App;
