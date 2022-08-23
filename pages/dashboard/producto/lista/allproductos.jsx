import { Radio, Space, Table, Tag, Tooltip, Popconfirm, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector, useDispatch }  from "react-redux";
import {useRouter} from 'next/router';
import { EditOutlined, EyeOutlined, DeleteOutlined, QuestionCircleOutlined, PoweroffOutlined} from '@ant-design/icons';
import { cargarProductosAll } from "../../../../store/actions/productsAllAction";

const Productos = () => {
  const [loadings, setLoadings] = useState([]);
  const [top, setTop] = useState('topLeft');
  const [bottom, setBottom] = useState('bottomRight');
  const router = useRouter();  
  const dispatch = useDispatch();
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
    router.push('/dashboard/empresa/crear')
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
    <div>   
      <div className='py-5'>
        <div className='text-center'>
         <h1 className="display-4">Lista de productos</h1>

        </div>
      </div>
      <div className='d-flex justify-content-end py-3'>
          <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
             Crear producto
          </Button>
      </div>
      <Table
        columns={columns}
        pagination={
          {
            position: [bottom],
            pageSize: 5          
          }
        }
        dataSource={dataproducto}
      />
    </div>
  );
};

export default Productos;