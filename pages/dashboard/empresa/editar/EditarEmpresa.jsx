import React , {useState} from 'react';
import { useForm } from 'react-hook-form';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default function EditarEmpresa() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const { region, setRegion } = useState({});

  const selectRegion = ({value})=>{
      console.log(value)
  }
  
  

  
  return (

 
<p>Editar</p>
   
   
  );
}