import React, { useState, useEffect } from 'react';
import { Radio, Space, Table, Tag, Tooltip, Popconfirm, Button } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector, useDispatch }  from "react-redux";
import { EditOutlined, EyeOutlined, DeleteOutlined, QuestionCircleOutlined, PoweroffOutlined} from '@ant-design/icons';
import { cargarProductosAll } from "../../store/actions/productsAllAction";
import AdminLayoud   from '../../admin/adminLayoud';
import TinyLineChart from '../../admin/estadistica/TinyLineChart';
import TinyAreaChart from '../../admin/estadistica/TinyAreaChart';

const index = () =>{  
    const dispatch = useDispatch();
    const [bottom, setBottom] = useState('bottomRight');
    
    useEffect(() => {      
         dispatch( cargarProductosAll() );          
    }, [ dispatch])

   
    const formatofecha = (fecha)=>{
        var date = new Date(fecha);
        return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    }
  
    var dataproducto= [];
    const  productosState =  useSelector(state => state.productsAll);
        productosState.productos.map((producto, index)=>{
        var modelproducto= {
        item: index,
        key: index,
        image : producto.image.location,
        name: producto.name,
        create: formatofecha(producto.createdAt),
        update: formatofecha(producto.updatedAt),
        id: producto._id,
        }
        dataproducto = [...dataproducto, modelproducto]
    });

  function borrarEmpresa (id){
    console.log('borrar id=',id)
   }
   
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    router.push('/dashboard/producto/crear')
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };


  const columns = [
    {
      title: 'item',
      dataIndex: 'item',
      key: 'item'
    },
    {
        title: 'Imagen',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <LazyLoadImage  
            src={image} 
            width={50} 
            height={50} 
            alt="producto" 
        />,
      },
    {
      title: 'Nombre de la empresa',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Creada',
      dataIndex: 'create',
      key: 'create',
    },
    {
      title: 'Actualizada',
      dataIndex: 'update',
      key: 'update',    
    }, 
    {
      title: 'Acciones',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => (
        <Space size="middle">
          <a>
          <Popconfirm placement="left" title="¿Desea ver la empresa?"  onConfirm ={  () => router.push(  `/dashboard/producto/${ record.id }`)}>    
              <Tooltip title='Ver'>
                <EyeOutlined />
              </Tooltip>   
            </Popconfirm>     
          </a>
          <a>    
          <Popconfirm placement="left" title="¿Desea editar la empresa?"  onConfirm ={  () => router.push(  `/dashboard/producto/editar/${ record.id }`)} >    
              <Tooltip title="Editar">
                <EditOutlined />
              </Tooltip>   
            </Popconfirm>
          </a>
          <a>
          <Popconfirm placement="left" title="¡Alerta! Está seguro que quiere borrar la empresa?" okText="Confirrmar" cancelText="Cancelar" onConfirm={() => borrarEmpresa( record.id )}  icon={ <QuestionCircleOutlined style={{color: 'red',  margin: '2px'}}/> } >
              <Tooltip title="Borrar">           
                <DeleteOutlined />
              </Tooltip>  
            </Popconfirm>       
          </a>
        </Space>       
      ),
    },
  ];


  return (    
      <AdminLayoud>
          <>
              <div className='row my-2'>
                <div className="col-xxl-3 col-md-3 col-sm-12 my-1 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">Número de vistas</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#13c9f2'} />                              
                                        </div>
                                    </div>
                                    <div className="info"><span className="change up text-danger"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-md-3 col-sm-12 my-1 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">A Favoritos</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck text-center">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#ff63a5'} /> 
                                        </div>
                                    </div>
                                    <div className="info"><span className="change up text-danger"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-md-3 col-sm-12 my-1 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">A la Cesta</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#854fff'} />                               
                                        </div>
                                    </div>
                                    <div className="info"><span className="change down"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-md-3 col-sm-12 my-1 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">Empresa vista</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck text-center">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#20c997'} />  
                                        </div>
                                    </div>
                                    <div className="info"><span className="change up"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-4'>
                <div className="col-xxl-6 col-sm-12 my-2 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner overflow-md">
                                <div className="card-title-group p-3 ml-3">
                                    <div className="card-title">
                                        <h6  className="title">Rendimiento del mes</h6>
                                        <p>Numero de vistas diarias del més actual. <a href="#">Más detalles</a></p>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">                                    
                                        <div className="nk-ecwg6-ck text-center">                                          
                                            <TinyAreaChart width = {550} height={405} color = {'#20c997'} />  
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-sm-12 my-2 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner overflow-md">
                                <div className="card-title-group p-3 ml-3">
                                    <div className="card-title">
                                        <h6  className="title">Productos destacados</h6>
                                        <p>Numero de vista de la tarjeta de productos. <a href="#">Más detalles</a></p>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">                                    
                                        <div className="nk-ecwg6-ck text-center">                                          
                                            <Table
                                                columns={columns}
                                                pagination={
                                                {
                                                    position: [bottom],
                                                    pageSize: 3          
                                                }
                                                }
                                                dataSource={dataproducto}
                                            /> 
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
              
          </>         
      </AdminLayoud>
  )
}

export default index