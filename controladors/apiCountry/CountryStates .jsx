import React, {useState} from 'react';

export default CountryStates = (country)=>{

      var estados=[];
       
          

        fetch("https://countriesnow.space/api/v0.1/countries/states", {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify({
                    "country": country
                }),
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.text())
            .then(result => {
                data_received = JSON.parse(result)
                estados = data_received.data.states;
                console.log(estados)
               

            })
            .catch(error => console.log('error', error));

    return estados
}