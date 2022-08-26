import React , {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { Button, Descriptions, PageHeader, Col, Row ,  Space, Spin, Tabs , Skeleton} from 'antd';
import { useForm,  useFormState } from 'react-hook-form';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import AdminLayoud from '../../../../admin/adminLayoud';
import { useDispatch ,useSelector }  from "react-redux";
import { cargarCompaniaId } from "../../../../store/actions/companyIdActionGet";
const { TabPane } = Tabs;

export default function EditarEmpresa() {
const dispatch = useDispatch();
const router = useRouter();
const query = router.query;
const empresaId = query.empresaId;
const [valueText, setValueText] = useState('');
const [statusForm, setStatusForm] = useState(false);
const { quill, quillRef } = useQuill();
const { register, handleSubmit, formState: { errors }, setValue  } = useForm();

const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

var empresaData=[];

const formatofecha = (fecha)=>{
    var date = new Date(fecha);
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
}

console.log('empresaId', empresaId);
useEffect(() => {   
    dispatch( cargarCompaniaId(empresaId) );       
}, [ dispatch, empresaId]);

const  companyIdGetState =  useSelector(state => state.companyIdGet);

useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {        
        setValueText(quill.root.innerHTML);      
      });      
    }
  }, [quill, valueText]);


if(companyIdGetState.error=='ERR_NETWORK' && companyIdGetState.error=='ERR_BAD_RESPONSE'){  
    for(let i=0; i==2;i++){
        setInterval(() => {
            dispatch( cargarCompaniaId(empresaId) ); 
        }, 10000);        
    }       
}  

if(companyIdGetState.loading){ 
    setTimeout(() => {
        empresaData = companyIdGetState.compania;       
        setValue("name", `${empresaData.name}`),
        setValue("nit", `${empresaData.nit}`)
        setValue("bussiness", `${empresaData.bussiness}`),
        setValue("products", `${empresaData.products}`),
        setValue("services", `${empresaData.services}`),
        setValue("activity_time", `${empresaData.activity_time}`),    
        setValue("country", `${empresaData.country}`),
        setValue("state", `${empresaData.state}`)
        setValue("city", `${empresaData.city}`),
        setValue("corporate_address", `${empresaData.corporate_address}`),
        setValue("corporate_phone", `${empresaData.corporate_phone}`),
        setValue("corporate_email", `${empresaData.corporate_email}`),
        setValue("contact_firstName", `${empresaData.contact_firstName}`),
        setValue("contact_lastName", `${empresaData.contact_lastName}`),
        setValue("contact_gender", `${empresaData.contact_gender}`),
        setValue("contact_position", `${empresaData.contact_position}`),
        setValue("contact_profesion", `${empresaData.contact_profesion}`),        
        setValue("contact_email", `${empresaData.contact_email}`),
        setValue("contact_phone", `${empresaData.contact_phone}`),   
        setStatusForm(true);
        
    }, 50);
}

const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
        <Descriptions.Item label="Propietario">{
        <div>
            <span>{companyIdGetState.compania.OWNER.firstName}</span>
            <span> </span>
            <span> {companyIdGetState.compania.OWNER.lastName }</span>       
        </div>
        }
        </Descriptions.Item>
        <Descriptions.Item label="Correo">
            { companyIdGetState.loading? companyIdGetState.compania.contact_email : '...'}
        </Descriptions.Item>
        <Descriptions.Item label="Creada">{formatofecha( companyIdGetState.compania.createdAt)}</Descriptions.Item>
        <Descriptions.Item label="Actualizada">{formatofecha(companyIdGetState.compania.updatedAt)}</Descriptions.Item>
        <Descriptions.Item label="Productos">
            { companyIdGetState.compania.products}
        </Descriptions.Item>
        <Descriptions.Item label="Estatus">
            { companyIdGetState.compania.isListed? 'Activa' : 'Inactiva'}
        </Descriptions.Item>        
    </Descriptions>
  );
   
  const Content = ({ children, extra }) => (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
  
  return (
    <AdminLayoud>
         <Row>
            <Col span={24} style= {{backgroundColor: '#ffffff'}}>  
            { 
                companyIdGetState.loading?         
                    <PageHeader
                        className="site-page-header-responsive"
                        onBack={() => window.history.back()}
                        title={ companyIdGetState.compania.name } 
                        extra={[                    
                        <Button key="2"  onBack={() => window.history.back()} >Cancelar</Button>,
                        <Button key="1" type="primary">
                            Borrar
                        </Button>,
                        ]}
                    
                    >
                    <Content>{renderContent()}</Content>
                    </PageHeader>
                    :
                    <div className='p-5'>
                       <Skeleton />
                    </div>
            }                     
            </Col>
        </Row>  
        
        <Row className='bg-white my-5 py-5'>
            <Col span={14} offset={5}>   
                  {  
                    companyIdGetState.loading && statusForm?     
                        <>       
                            <div className="text-center">
                                    <h1 className="display-4 my-5 pb-3">Editar Empresa</h1>
                            </div>
                            <div className='formularioAdmin'>        
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-row">
                                        <div  className="col-md-6">
                                                <label>Nombre de la compañia</label>
                                                <input type="text" name="name" ref={register} className="form-control"  {...register("name", {required: true, maxLength: 100})} />
                                                {errors.name?.type === 'required' && <small className='tagErrorForm'>Nombre requerido.</small>}
                                        </div>
                                        <div  className="col-md-6">
                                        <label>NIT</label>                             
                                                <input type="text" name="nit" ref={register} className="form-control" placeholder="..." {...register("nit", {required: true, maxLength: 100})} />
                                                {errors.nit?.type === 'required' && <small className='tagErrorForm'>NIT es requerido.</small>}
                                        </div>
                                    </div>
                                    <div  className="form-row">
                                        <div  className="col-md-6">
                                                <label>Giro de Negocio</label>
                                                <input type="text" name="bussiness" ref={register}  className="form-control" placeholder="..." {...register("bussiness", {required: true, maxLength: 80})} />
                                                {errors.bussiness?.type === 'required' && <small className='tagErrorForm'>Giro de Negocio es requerido.</small>}
                                        </div>
                                        <div  className="col-md-6">
                                        <label>Tipo de Productos</label>
                                                <input type="text"  name="products" ref={register} className="form-control" placeholder="..." {...register("products", {required: true, maxLength: 100})} />
                                                {errors.products?.type === 'required' && <small className='tagErrorForm'>Tipo de Productos es requerido.</small>}
                                        </div>
                                    </div>
                                    <div  className="form-row">
                                        <div  className="col-md-6">
                                                <label>Tipo de Servicios</label>
                                                <input type="text"  name="services" ref={register} className="form-control" placeholder="..." {...register("services", {required: true, maxLength: 80})} />
                                                {errors.services?.type === 'required' && <small className='tagErrorForm'>Tipo de Servicios es requerido.</small>}
                                        </div>
                                        <div  className="col-md-6">
                                        <label>Años en actividad</label>
                                                <input type="number"  name="activity_time" ref={register} className="form-control" placeholder="..." {...register("activity_time", {required: true, maxLength: 100})} />
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
                                            <input type="text"  className="form-control" placeholder="..." {...register("corporate_address", {required: true, maxLength: 500})} />
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
                                                <input type="hidden"  className="form-control" {...register("description", {required: false, maxLength: 2000})} />
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
                                                <option disabled selected defaultValue="none">Seleccione una opción</option>                                        
                                                <option value="Masculino">Masculino</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="Sin definir">Otros</option>
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
                                                <input type="text"  className="form-control" placeholder="..." {...register("contact_profesion", {required: true, maxLength: 100})} />
                                                {errors.contact_profesion?.type === 'required' && <small className='tagErrorForm'>Profesión requerido.</small>}                                 
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
                                        
                                    <button type="submit" className="btn btn-primary my-5">Guardar</button>
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
        
    </AdminLayoud>
  );
}