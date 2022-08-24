import React , {useState, Fragment} from 'react';
import { useForm } from 'react-hook-form';
import {  Col, Row  } from 'antd';

export default function CrearEmpresa() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Fragment>
        <Row className='bg-white my-5 py-5'>
        <Col  xs={{span: 22, offset: 1}}  sm={{span: 20, offset: 2}}  md={{span: 20, offset: 2}}  lg={{span: 14, offset: 5}}  xl={{span: 14, offset: 5}}   >                
                <div className="text-center">
                        <h1 className="display-4 my-5">Crear Empresa</h1>
                </div>
                <div className='formulariocrearEmpresa'>
            
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
                                    <input type="text"  className="input-group-text" value = '+0502' placeholder="..." {...register("dial_code", {required: true, maxLength: 4})} />
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
                    <div  className="form-row">
                            <div  className="col-md-12">
                                <label>Descripción</label>
                                <input type="text"  className="form-control" placeholder="..." {...register("description", {required: true, maxLength: 50})} />
                                {errors.corporate_phone?.type === 'required' && <small className='tagErrorForm'>Teléfono Empresarial es requerido.</small>}                                 
                            </div>                     
                    </div>

                        <input type="submit"  className="btn btn-primary mb-2" />
                    </form>
                </div>                       
            
        </Col>
        </Row> 
    </Fragment>  
  );
}