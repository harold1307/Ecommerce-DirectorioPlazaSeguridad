import React , {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { Button, Descriptions, PageHeader, Col, Row ,  Space, Spin, Tabs , Skeleton} from 'antd';
import { useForm } from 'react-hook-form';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import AdminLayoud from '../../../../admin/adminLayoud';
import { useDispatch ,useSelector }  from "react-redux";
import { cargarProductoId } from "../../../../store/actions/productoIdActionGet";
const { TabPane } = Tabs;

export default function EditarProducto() {
const dispatch = useDispatch();
const router = useRouter();
const query = router.query;
const producto = query.productoId;

useEffect(() => {   
     dispatch( cargarProductoId(producto) );       
}, [ dispatch])
const  productoIdGetState =  useSelector(state => state.productoIdGet);

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
        <span>{productoIdGetState.producto.OWNER.firstName}</span>
        <span> </span>
        <span> {productoIdGetState.producto.OWNER.lastName }</span>
       
      </div>
       }
       </Descriptions.Item>
      <Descriptions.Item label="Correo">
        { productoIdGetState.loading? productoIdGetState.producto.contact_email : '...'}
      </Descriptions.Item>
      <Descriptions.Item label="Creada">{formatofecha( productoIdGetState.producto.createdAt)}</Descriptions.Item>
      <Descriptions.Item label="Actualizada">{formatofecha(productoIdGetState.producto.updatedAt)}</Descriptions.Item>
      <Descriptions.Item label="Productos">
          { productoIdGetState.producto.products}
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
                productoIdGetState.loading?         
                    <PageHeader
                        className="site-page-header-responsive"
                        onBack={() => window.history.back()}
                        title={ productoIdGetState.producto.name } 
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
                    productoIdGetState.loading?     
                        <>       
                            <div className="text-center">
                                    <h1 className="display-4 my-5 pb-3">Editar Empresa</h1>
                            </div>
                            <div className='formulariocrearEmpresa'>                        
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-row">
                                        <div  className="col-md-6 mb-3">
                                                <label>Nombre de la compañia</label>
                                                <input type="text"  className="form-control"  placeholder={productoIdGetState.producto.name} {...register("companyName", {required: true, maxLength: 100})} />
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