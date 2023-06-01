import { useState, useEffect } from 'react';
import './styles/clock.scss';

const Clock = () => {
    const [ fecha, setFecha ] = useState(new Date());
    const [ edad, setEdad ] = useState(0);
    const nombre = 'Lionel';
    const apellidos = 'Messi';

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setFecha(new Date());
        setEdad(prevEdad => prevEdad + 1);
    };

    return (
        <div>
            <h2>Hora actual: {fecha.toLocaleTimeString()}</h2>
            <h2>{nombre} {apellidos}</h2>
            <h2>Edad: {edad}</h2>
        </div>
    );
};

export default Clock;
