import React, {useState} from 'react';

export function  CountryStates(country){
        var estados=[];
        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
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
                estados = JSON.parse(result).data         
            })
            .catch(error => console.log('error', error));

    return estados
}