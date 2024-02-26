import React, { useState, useEffect } from 'react';
import { URL_API } from '../constantes';

function ElementFilterList({ onChange, type, nameList }) {
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState('');

    useEffect(() => {
        let url = URL_API + 'getListElement?type=' + type;
        if(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>  setElements(data))
            .catch(err => console.log(err));
        }
    }, []);

    const handleSelectChange = (event) => {
        const selectedElement = event.target.value;
        setSelectedElement(selectedElement);
        onChange(selectedElement);
    };

    return (
        <div>
            <select value={selectedElement} onChange={handleSelectChange}>
            <option value="">{nameList}</option>
            {elements.map((element, index) => (
                <option key={index} value={element.name}>
                    {element.name}
                </option>
            ))}
            </select>
        </div>  
    );
}

export default ElementFilterList;
