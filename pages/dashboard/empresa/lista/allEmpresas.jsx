import { Radio, Space, Table, Tag, Tooltip, Popconfirm, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector }  from "react-redux";
import {useRouter} from 'next/router';
import { EditOutlined, EyeOutlined, DeleteOutlined, QuestionCircleOutlined, PoweroffOutlined} from '@ant-design/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AllEmpresas = () => {
  const [loadings, setLoadings] = useState([]);
  const [top, setTop] = useState('topLeft');
  const [bottom, setBottom] = useState('bottomRight');
  const router = useRouter();  

  const formatofecha = (fecha)=>{
      var date = new Date(fecha);
      return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  }

  var dataempresa = [];
  const  companiesState =  useSelector(state => state.companiesAll);
  companiesState.companias.map((empresa, index)=>{
    var modelempresa = {
      item: index,
      key: index,
      image : empresa.logo,
      name: empresa.name,
      create: formatofecha(empresa.createdAt),
      update: formatofecha(empresa.updatedAt),
      id: empresa._id,
    }
    dataempresa = [...dataempresa, modelempresa]
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
      key: 'item',
      render: (text) => <a className='text-center'>{text}</a>,
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
          <Popconfirm placement="left" title="¿Desea ver la empresa?"  onConfirm ={  () => router.push(  `/dashboard/empresa/${ record.id }`)}>    
              <Tooltip title='Ver'>
                <EyeOutlined />
              </Tooltip>   
            </Popconfirm>     
          </a>
          <a>    
          <Popconfirm placement="left" title="¿Desea editar la empresa?"  onConfirm ={  () => router.push(  `/dashboard/empresa/editar/${ record.id }`)} >    
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
         <h1 className="display-4">Mis Empresas</h1>

        </div>
      </div>
      <div className='d-flex justify-content-end py-3'>
          <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
             Crear empresa
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
        dataSource={dataempresa}
      />
    </div>
  );
};

export default AllEmpresas;