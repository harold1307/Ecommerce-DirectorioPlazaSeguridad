import React , {useState} from 'react';
import { useForm } from 'react-hook-form';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default function CrearEmpresa() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const { region, setRegion } = useState({});

  const selectRegion = ({value})=>{
      console.log(value)
  }
  
  

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-row">
        <div class="col-md-6 mb-3">
                <label for="validationDefault01">Nombre de la empresa</label>
                <input type="text" class="form-control" placeholder="Ingresar nombre de la empresa.." {...register("name", {required: true, maxLength: 80})} />
                {errors.name?.type === 'required' && "Nombre de la empresa es requerido."}
        </div>
        <div class="col-md-6 mb-3">
        <label for="validationDefault01">NIT</label>
                <input type="text" class="form-control" placeholder="nit" {...register("nit", {required: true, maxLength: 100})} />
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
                <label for="validationDefault01">Servicios</label>
                <input type="text" class="form-control" placeholder="Ingresar nombre de la empresa.." {...register("services", {required: true, maxLength: 80})} />
                {errors.services?.type === 'required' && "Servicio de la empresa es requerido."}
        </div>
        <div class="col-md-6 mb-3">
        <label for="validationDefault01">Negocio</label>
                <input type="text" class="form-control" placeholder="nit" {...register("bussiness", {required: true, maxLength: 100})} />
                {errors.bussiness?.type === 'required' && "Servicio de la empresa es requerido."}
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
                <label for="validationDefault01">Servicios</label>
                <input type="text" class="form-control" placeholder="Ingresar nombre de la empresa.." {...register("activity_time", {required: true, maxLength: 80})} />
                {errors.activity_time?.type === 'required' && "Servicio de la empresa es requerido."}
        </div>
        <div class="col-md-6 mb-3">
        <label for="validationDefault01">País</label>
                <input type="text" class="form-control" placeholder="nit" {...register("country", {required: true, maxLength: 100})} />
                {errors.country?.type === 'required' && "Servicio de la empresa es requerido."}
        </div>
    </div>

    <div>
        <CountryDropdown
          value="Guatemala"    
          
         />
        <RegionDropdown
          country="Guatemala"   
          value={region}
          onChange={(value) => selectRegion(value)} />
      </div>


    <div class="col-md-6 mb-3">
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <p>{errors.mail?.message}</p>
    </div>
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <select {...register("Title", { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
        </select>

        <input {...register("Developer", { required: true })} type="radio" value="Yes" />
        <input {...register("Developer", { required: true })} type="radio" value="No" />


        <div class="input-group is-invalid">
            <div class="custom-file">
            <input type="file" class="custom-file-input" {...register("logo", {required: true, pattern: /^\S+@\S+$/i})} />
            <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
            </div>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>







        <input type="submit" class="btn btn-primary mb-2" />
    </form>
  );
}