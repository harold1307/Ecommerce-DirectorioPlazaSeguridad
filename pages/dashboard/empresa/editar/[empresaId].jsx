import React , {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { Button, Descriptions, PageHeader, Col, Row ,  Space, Spin, Tabs , Skeleton} from 'antd';
import { useForm } from 'react-hook-form';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import AdminLayoud from '../../../../admin/adminLayoud';
import { useDispatch ,useSelector }  from "react-redux";
import { cargarCompaniaId } from "../../../../store/actions/companyIdActionGet";
const { TabPane } = Tabs;

export default function EditarEmpresa() {
const dispatch = useDispatch();
const router = useRouter();
const query = router.query;
const empresa = query.empresaId;
//console.log(toString(empresa));
useEffect(() => {   
     dispatch( cargarCompaniaId(empresa) );       
}, [ dispatch])
const  companyIdGetState =  useSelector(state => state.companyIdGet);

const formatofecha = (fecha)=>{
    var date = new Date(fecha);
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
}
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
const { region, setRegion } = useState({});

const selectRegion = ({value})=>{
    console.log(value)
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
                        <Button key="2">Cancelar</Button>,
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
                    companyIdGetState.loading?     
                        <>       
                            <div className="text-center">
                                    <h1 className="display-4 my-5 pb-3">Editar Empresa</h1>
                            </div>
                            <div className='formulariocrearEmpresa'>                        
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-row">
                                        <div  className="col-md-6 mb-3">
                                                <label>Nombre de la compañia</label>
                                                <input type="text"  className="form-control"  placeholder="{companyIdGetState.compania.name}" {...register("companyName", {required: true, maxLength: 100})} />
                                                {errors.name?.type === 'required' && "Nombre de la empresa es requerido."}
                                        </div>
                                        <div  className="col-md-6 mb-3">
                                        <label>NIT</label>
                                                <input type="text"  className="form-control"  placeholder="..." {...register("nit", {required: true, maxLength: 100})} />
                                        </div>
                                    </div>
                                    <div  className="form-row">
                                        <div  className="col-md-6 mb-3">
                                                <label>Giro de Negocio</label>
                                                <input type="text"  className="form-control" placeholder="..." {...register("giroNegocio", {required: true, maxLength: 80})} />
                                                {errors.services?.type === 'required' && "Servicio de la empresa es requerido."}
                                        </div>
                                        <div  className="col-md-6 mb-3">
                                        <label>Tipo de Productos</label>
                                                <input type="text"  className="form-control" placeholder="..." {...register("productoTipo", {required: true, maxLength: 100})} />
                                                {errors.bussiness?.type === 'required' && "Servicio de la empresa es requerido."}
                                        </div>
                                    </div>
                                    <div  className="form-row">
                                        <div  className="col-md-6 mb-3">
                                                <label>Servicios</label>
                                                <input type="text"  className="form-control" placeholder="Ingresar nombre de la empresa.." {...register("activity_time", {required: true, maxLength: 80})} />
                                                {errors.activity_time?.type === 'required' && "Servicio de la empresa es requerido."}
                                        </div>
                                        <div  className="col-md-6 mb-3">
                                        <label>Tipo de Servicios</label>
                                                <input type="text"  className="form-control" placeholder="..." {...register("tipoDeServicios", {required: true, maxLength: 100})} />
                                                {errors.country?.type === 'required' && "Servicio de la empresa es requerido."}
                                        </div>
                                    </div>

                                    <div  className="form-row">
                                        <div  className="col-md-6 mb-3">
                                            <label>Pais</label>
                                                <CountryDropdown
                                                    value="Guatemala"    
                                                    
                                                />
                                                {errors.activity_time?.type === 'required' && "Servicio de la empresa es requerido."}
                                        </div>
                                        <div  className="col-md-6 mb-3">
                                        <label>Region</label>
                                                <RegionDropdown
                                                country="Guatemala"   
                                                value={region}
                                                onChange={(value) => selectRegion(value)}               
                                                />
                                                {errors.country?.type === 'required' && "Servicio de la empresa es requerido."}
                                        </div>
                                    </div>
                                

                                    <div  className="form-row">
                                        <div  className="col-md-6 mb-3">
                                        <label>Correo</label>
                                            <input type="text" placeholder="..." {...register("correo", {required: true, pattern: /^\S+@\S+$/i})} />
                                            <p>{errors.mail?.message}</p>
                                        </div>
                                    </div>


                                        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
                                

                                        <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                                        <input {...register("Developer", { required: true })} type="radio" value="No" />


                                        <div  className="input-group is-invalid">
                                            <div  className="custom-file">
                                            <input type="file" className="custom-file-input" {...register("logo", {required: true, pattern: /^\S+@\S+$/i})} />
                                            <label  className="custom-file-label">Choose file...</label>
                                            </div>
                                            <div className="input-group-append">
                                                <button  className="btn btn-outline-secondary" type="button">Button</button>
                                            </div>
                                        </div>

                                        <input type="submit"  className="btn btn-primary mb-2" />
                                    </form>                        
                            </div>  
                        </> 
                    :
                    <div className='py-5'>
                       <Skeleton />
                    </div>                        
                }                     
              
            </Col>
        </Row>           
        
    </AdminLayoud>
  );
}