import React , {useState, useRef, useEffect, Fragment} from 'react';
import { useForm, useFormState  } from 'react-hook-form';
import { useDispatch }  from "react-redux";
import {  Col, Row, Skeleton  } from 'antd';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import { crearEmpresaPost } from "../../../../store/actions/crearEmpresaActionPost";

export default function CrearEmpresa() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.description=valueText;
    dispatch( crearEmpresaPost(JSON.stringify(data)));       
    console.log('Dataformulario: ',JSON.stringify(data))
  };
  const [valueText, setValueText] = useState('');
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        //console.log('Text change!');
        //console.log(quill.getText()); // Get text only
       // console.log(quill.getContents()); // Get delta contents
       
        //console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setValueText(quill.root.innerHTML);
        //console.log(valueText); // Get innerHTML using quill
      });
    }
  }, [quill, valueText]);

return (
    <Fragment>
        <Row className='bg-white my-5 py-5'>
        <Col  xs={{span: 22, offset: 1}}  sm={{span: 20, offset: 2}}  md={{span: 20, offset: 2}}  lg={{span: 14, offset: 5}}  xl={{span: 14, offset: 5}}   >                
          {
             true?     
             <>           
                <div className="text-center">
                        <h1 className="display-4 my-5">Crear Empresa</h1>
                </div>
                <div className='formularioAdmin'>        
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div  className="col-md-6">
                                    <label>Nombre de la compañia</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("name", {required: true, maxLength: 100})} />
                                    {errors.name?.type === 'required' && <small className='tagErrorForm'>Nombre requerido.</small>}
                            </div>
                            <div  className="col-md-6">
                            <label>NIT</label>                             
                                    <input type="text"  className="form-control" placeholder="..." {...register("nit", {required: true, maxLength: 100})} />
                                    {errors.nit?.type === 'required' && <small className='tagErrorForm'>NIT es requerido.</small>}
                            </div>
                        </div>
                        <div  className="form-row">
                            <div  className="col-md-6">
                                    <label>Giro de Negocio</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("bussiness", {required: true, maxLength: 80})} />
                                    {errors.bussiness?.type === 'required' && <small className='tagErrorForm'>Giro de Negocio es requerido.</small>}
                            </div>
                            <div  className="col-md-6">
                            <label>Tipo de Productos</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("products", {required: true, maxLength: 100})} />
                                    {errors.products?.type === 'required' && <small className='tagErrorForm'>Tipo de Productos es requerido.</small>}
                            </div>
                        </div>
                        <div  className="form-row">
                            <div  className="col-md-6">
                                    <label>Tipo de Servicios</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("services", {required: true, maxLength: 80})} />
                                    {errors.services?.type === 'required' && <small className='tagErrorForm'>Tipo de Servicios es requerido.</small>}
                            </div>
                            <div  className="col-md-6">
                            <label>Años en actividad</label>
                                    <input type="number"  className="form-control" placeholder="..." {...register("activity_time", {required: true, maxLength: 100})} />
                                    {errors.activity_time?.type === 'required' && <small className='tagErrorForm'>Años en actividad es requerido.</small>}
                            
                            </div>
                        </div>
                        <div  className="form-row">
                            <div  className="col-md-6">
                                <label>País</label>
                                <input type="text"  className="form-control" placeholder="..." {...register("country", {required: true, maxLength: 50})} />
                                {errors.country?.type === 'required' && <small className='tagErrorForm'>País es requerido.</small>}                                 
                            </div>
                            <div  className="col-md-6">
                            <label>Estado o Departamento</label>
                                <input type="text"  className="form-control" placeholder="..." {...register("state", {required: true, maxLength: 50})} />
                                {errors.state?.type === 'required' && <small className='tagErrorForm'>Estado o Departamento es requerido.</small>}                             
                            </div>
                        </div>
                        <div  className="form-row">
                            <div  className="col-md-6">
                                <label>Ciudad o Municipio</label>
                                <input type="text"  className="form-control" placeholder="..." {...register("city", {required: true, maxLength: 50})} />
                                {errors.city?.type === 'required' && <small className='tagErrorForm'>Ciudad o Municipio es requerido.</small>}                                 
                            </div>
                            <div  className="col-md-6">
                            <label>Dirección Empresarial</label>
                                <input type="text"  className="form-control" placeholder="..." {...register("corporate_address", {required: true, maxLength: 50})} />
                                {errors.corporate_address?.type === 'required' && <small className='tagErrorForm'>Dirección Empresarial es requerido.</small>}                             
                            </div>
                        </div>
                        <div  className="form-row">
                            <div  className="col-md-6">
                                <label>Teléfono Empresarial</label>
                                
                                <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                        <input type="text"  className="input-group-text" value = '+0502' placeholder="..." {...register("dial_code", {required: false, maxLength: 6})} />
                                        </div>
                                        <input type="text"  className="form-control" placeholder="..." {...register("corporate_phone", {required: true, maxLength: 50})} />                
                                    </div>
                                    {errors.corporate_phone?.type === 'required' && <small className='tagErrorForm'>Teléfono Empresarial es requerido.</small>}                                                    
                            </div>
                            <div  className="col-md-6">
                                <label>Correo Electrónico Empresarial</label>
                                <input type="email"  className="form-control" placeholder="..." {...register("corporate_email", {required: true, pattern: /^\S+@\S+$/i})} />
                                {errors.corporate_email?.type === 'required' && <small className='tagErrorForm'>Correo Electrónico Empresarial es requerido.</small>}                             
                            </div>
                        </div>             
                        <div className="form-row">
                                <div  className="col-md-12">
                                    <label>Descripción</label>
                                    <input type="hidden"  className="form-control" value={valueText}  {...register("description", {required: false, maxLength: 2000})} />
                                    <div className='quillForm'>
                                        <div ref={quillRef} />                                   
                                    </div>                                                                                       
                                </div>              
                        </div>

                        <h6 className='my-5'>Información de contacto</h6>

                        <div  className="form-row">
                            <div  className="col-md-6">
                                    <label>Nombre</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("contact_firstName", {required: true, maxLength: 80})} />
                                    {errors.contact_firstName?.type === 'required' && <small className='tagErrorForm'>Nombre es requerido.</small>}
                            </div>
                            <div  className="col-md-6">
                                        <label>Apellido</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("contact_lastName", {required: true, maxLength: 100})} />
                                    {errors.contact_lastName?.type === 'required' && <small className='tagErrorForm'>Apellido es requerido.</small>}                           
                            </div>
                        </div>
                        <div  className="form-row">
                            <div  className="col-md-6">
                                <label>Género</label>
                                <select  className="form-control"   {...register("contact_gender")}>
                                    <option disabled  value="none">Seleccione una opción</option>                                        
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option selected value="Sin definir">Otros</option>
                                </select>                                                                                
                                {errors.contact_gender?.type === 'required' && <small className='tagErrorForm'>Género es requerido.</small>}                                                    
                            </div>
                            <div  className="col-md-6">
                                    <label>Cargo</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("contact_position", {required: true, maxLength: 100})} />
                                    {errors.contact_position?.type === 'required' && <small className='tagErrorForm'>Cargo requerido.</small>}                                 
                                </div>
                        </div>  
                        <div  className="form-row">
                                <div  className="col-md-6">
                                    <label>Profesión</label>
                                    <input type="text"  className="form-control" placeholder="..." {...register("contact_profession", {required: true, maxLength: 100})} />
                                    {errors.contact_profession?.type === 'required' && <small className='tagErrorForm'>Profesión requerido.</small>}                                 
                                </div>
                                <div  className="col-md-6">
                                <label>Correo Electrónico Empresarial</label>
                                <input type="email"  className="form-control" placeholder="..." {...register("contact_email", {required: true, pattern: /^\S+@\S+$/i})} />
                                    {errors.contact_email?.type === 'required' && <small className='tagErrorForm'>Correo Electrónico es requerido.</small>}                             
                            </div>
                        </div>  
                        <div  className="form-row">
                            <div  className="col-md-6">
                                <label>Télefono de contacto</label>
                                
                                <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                        <input type="text"  className="input-group-text" value = '+0502' placeholder="..." {...register("dial_code", {required: false, maxLength: 6})} />
                                        </div>
                                        <input type="text"  className="form-control" placeholder="..." {...register("contact_phone", {required: true, maxLength: 50})} />                
                                    </div>
                                    {errors.contact_phone?.type === 'required' && <small className='tagErrorForm'>Teléfono Empresarial es requerido.</small>}                                                    
                            </div>
                            <div  className="col-md-6">
                                <label>Code País</label>
                                <input type="text"  className="form-control" value='GT' placeholder="..." {...register("shortCountry", {required: true, maxLength: 6})} />
                                {errors.shortCountry?.type === 'required' && <small className='tagErrorForm'>Requerido.</small>}                                                  
                            </div>
                       
                        </div> 
                            
                        <input type="submit"  className="btn btn-primary mb-2" />
                    </form>
                </div>  
            </>  
            :  
            [1,2].map((item,index)=>{
                        return(
                            <div className='py-4' key= {index} >
                                <Skeleton  />                    
                            </div>  
                        )  
                      })       
          }                            
        </Col>
        </Row> 
    </Fragment>  
  );
}