import React , {useState, useEffect} from 'react';
import Image from 'next/image';
import { PlusOutlined,  LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined  } from '@ant-design/icons';
import ALink  from '~/components/features/alink';
import {
    Row,
    Col,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Space,
  Steps,
  Modal,
  Alert, 
  Spin 
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
const { Step } = Steps;

export default function CrearProducto() {
    const [valuedc, setValuedc] = useState('');
    const [valuedl, setValuedl] = useState('');
    const [current, setCurrent] = useState(0);
    const [ selectEmpresa , setSelectEmpresa ] = useState(false);
    
    
    <Select
    defaultValue="+"
    style={{
    width: 60,
    }}
    >
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
    </Select>

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
    });

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    console.log('fileList', fileList);
    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
  
    const handleChangeImg = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Cargar
          </div>
        </div>
      );
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';      
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');        
        }
        const isLt2M = file.size > 512;    
        
        if (isLt2M) {
            message.error('La imagen debe se menor 2MB.');
            console.log('isLt2M', isLt2M)  
        }

    return isJpgOrPng && isLt2M;
    };

    const onChange = (value) => {
        console.log('changed', value);
    };

    const handleChangeStop = (value) => {
        console.log(`selected ${value}`);
    };
    const  ChangeCategoria = (value) => {
        console.log(`selected ${value}`);
    };
    const ChangeEmpresa = (value) => {

        console.log(`selected empresa ${value}`); 
        setSelectEmpresa(true)  
        console.log('selectEmpresa ',selectEmpresa) 

        
     
    };

 


   





    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };  
    const next = () => {
        setCurrent(current>=7? 7 : current + 1);
    }; 
    const prev = () => {
        setCurrent(current<=0? 0 : current - 1);
        
    };
   
    const handleChangeTags = (value) => {       
        console.log(`selected tags ${value}`);         
    };

  
   
   

 return (
    <>
        <Row className='py-5'>
            <Col xs={{span: 24,offset: 0,}}  sm={{span: 22,offset: 1,}}  md={{span: 20,offset: 2,}}  lg={{span: 18,offset: 3,}}  xl={{span: 18,offset: 3,}}>
                <div className='steps'>
                <Steps current={current} percent={current*(100/7)}>
                        {['Paso 1','Paso 2','Paso 3','Paso 4', 'Paso 5','paso 6','Listo'].map((item) => (
                        <Step key={item} title={item} />
                        ))}
                    </Steps>                              
                </div>                          
            </Col>


        </Row>
        <Row className='pt-2'>
                 <div className="text-center">
                    <h4 className="">Crear Producto</h4>
                </div>
        </Row>
        <Row className='bg-white my-5 py-50 px-2'>
            <Col  xs={{span: 24, offset: 0,}}  sm={{span: 24, offset: 1,}}  md={{span: 22,offset: 2,}}  lg={{span: 18,offset: 4,}}  xl={{span: 18,offset: 4,}} >                
          
                    <div className='formulariocrearEmpresa'>
                        <Form
                            labelCol={{
                            span: 22,
                            }}
                            wrapperCol={{
                            span: 22,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout='vertical' 
                        >   

                            <div className={`${  current==0? 'paso-0' : 'visibilidadStep'}`}>
                                <div className='pb-2'>
                                    <h6 className="title">Seleccionar Empresa</h6>                                                                         
                                    <p>Debe seleccionar previamente la empresa, si no tiene ninguna, debe crear una primero. <ALink href="/dashboard/empresa/crear">Crear</ALink></p>
                               </div>
                                <Row className='mt-1 py-3'>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                        <Select
                                            defaultValue=""   
                                            style={{
                                                    width: '100%',
                                                }}                                             
                                            onChange={ChangeEmpresa}
                                            >
                                            <Option value="empresa 1">Empresa 1</Option>
                                            <Option value="empresa 2">Empresa 2</Option>                                               
                                        </Select>                                      
                                     </Col>                                           
                                </Row>                                                    
                            </div> 

                            <div className={`${  current==1? 'paso-1' : 'visibilidadStep'}`}>
                                <div className='pb-2'>
                                    <h6 className="title">Datos del producto</h6>                                                                         
                                    <p>Datos de la persona a ser contactada por el cliente.</p>
                               </div>
                                <Row className='mt-1 py-3'>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                            <Form.Item layout="inline"  label="Nombre del producto" name="name">
                                                <Input  placeholder="" />
                                            </Form.Item>  
                                    </Col>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}}  md={{span: 12,}}  >
                                            <Form.Item layout="inline"  label="Marca" name="brand">
                                                <Input />
                                            </Form.Item>  
                                    </Col>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                        <Form.Item label="Sub-Categoría" name="subCategory">                                            
                                            <Select
                                                defaultValue=""                                                
                                                onChange={ChangeCategoria}
                                                >
                                                <Option value="Disponible">Categoria 1</Option>
                                                <Option value="Sin Stock">Categoria 2</Option>                                               
                                            </Select>         
                                        </Form.Item>  
                                    </Col>  
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                        <Form.Item label="Tags" name="tags">                                            
                                             <Select
                                                mode="tags"
                                                style={{
                                                width: '100%',
                                                }}
                                                placeholder="Adjuntar tags"
                                                onChange={handleChangeTags}
                                            >
                                               
                                            </Select>        
                                        </Form.Item>  
                                    </Col>           
                                </Row>
                                                    
                            </div>                    
                            <div className={`${ current==2? 'paso-2' : 'visibilidadStep'}`}>
                                <div className='pb-2'>
                                    <h6 className="title">Precio e inventario</h6>                                                                         
                                    <p>Precio de venta, precio de oferta, cantidad disponible y disponibilidad del producto. </p>
                               </div>
                                <Row className='mt-1 py-3'>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                        <Form.Item label="Precio Regular:" name="regularPrice">           
                                            <InputNumber addonBefore="+" addonAfter="$" defaultValue={0}  style={{
                                                    width: '100%',
                                                }}/>                  
                                        </Form.Item>   
                                    </Col>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                        <Form.Item label="Precio de oferta" name="salePrice">
                                            <InputNumber addonBefore="+" addonAfter="$" defaultValue={null} style={{
                                                    width: '100%',
                                                }}/>
                                        </Form.Item>  
                                    </Col>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                        <Form.Item label="Cantidad disponible" name="stockQuantity">
                                            <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} style={{
                                                    width: '100%',
                                                }}/>
                                        </Form.Item>   
                                    </Col>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                        <Form.Item label="Disponibilidad" name="stockStatus">                                            
                                            <Select
                                                defaultValue="Sin Stock"
                                                style={{
                                                    width: '100%',
                                                }}
                                                onChange={handleChangeStop}
                                                >
                                                <Option value="Disponible">Disponible</Option>
                                                <Option value="Sin Stock">Sin Stock</Option>                                               
                                            </Select>         
                                        </Form.Item>    
                                    </Col>                                
                                </Row>                                 
                            </div>                        
                                        
                            <div className={`${  current==3? 'paso-3' : 'visibilidadStep'}`}>    
                                <div className='pb-2'>
                                    <h6 className="title">Descripciones</h6>                                                                         
                                    <p>Textos cortos y largo para describir los detalles del producto.</p>
                               </div>
                                <Row className='mt-1 py-3'>
                                        <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 24,}}  >
                                            <Form.Item label="Descripción corta" name="shortDescription">  
                                                <TextArea
                                                    value={valuedc}
                                                    onChange={(e) => setValuedc(e.target.value)}
                                                    placeholder=""
                                                    autoSize={{
                                                    minRows: 2,
                                                    maxRows: 4,                                    
                                                    }}
                                                    maxLength={150}
                                                    showCount='true'
                                                />
                                            </Form.Item>  
                                        </Col>
                                        <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 24,}}  >
                                            <Form.Item label="Descripción larga" name="longDescription">  
                                                <TextArea
                                                    value={valuedl}
                                                    onChange={(e) => setValuedl(e.target.value)}
                                                    placeholder=""
                                                    autoSize={{
                                                    minRows: 3,
                                                    maxRows: 8,
                                                    }}
                                                    maxLength={1500}
                                                    showCount='true'
                                                />
                                            </Form.Item> 
                                        </Col>                                                                 
                                </Row>                     
                            </div>

                            <div className={`${  current==4? 'paso-4' : 'visibilidadStep'}`}>   
                              <div className='pb-2'>
                                    <h6 className="title">Datos de contacto</h6>                                                                         
                                    <p>Datos de la persona a ser contactada por el cliente.</p>
                               </div>
                                <Row className='mt-1 py-3'>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                            <Form.Item layout="inline"  label="Nombre" name="contact_firstName">
                                                <Input  placeholder="Nombre de la Empresa" />
                                            </Form.Item>  
                                    </Col>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}}  md={{span: 12,}}  >
                                            <Form.Item layout="inline"  label="Apellido" name="contact_lastName">
                                                <Input />
                                            </Form.Item>  
                                    </Col>                                       
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}}  md={{span: 12,}}  >
                                        <Form.Item
                                            name='contact_email'
                                            label="Correo"
                                            rules={[
                                            {
                                                type: 'email',
                                            },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>                                           
                                    </Col>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}}  md={{span: 12,}}  >                                                                       
                                        <Input.Group size="large">
                                            <Row gutter={8}>
                                                <Col span={5}>
                                                    <Form.Item label="Code">
                                                        <Input defaultValue="0571" name="dial_code"/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={8}>
                                                    <Form.Item label="Teléfono" name="contact_phone">
                                                       <Input defaultValue={null} />
                                                    </Form.Item>                                                
                                                </Col>
                                            </Row>
                                        </Input.Group>                                        
                                    </Col>
                                </Row>
                            </div> 
                            
                            <div className={`${  current==5? 'paso-5' : 'visibilidadStep'}`}> 
                               <div className='pb-2'>
                                     <h6 className="title">Imagenes del producto</h6>                                                                         
                                    <p>Ingrese 4 imagenes del producto, cada imagen no debe se mayor de 2M</p>
                               </div>
                                <Row className='mt-4 py-3'>
                                    <Col  xs={{span: 24,}}  sm={{span: 24,}} md={{span: 12,}}  >
                                         <Upload
                                            action=""
                                            listType="picture-card"
                                            fileList={fileList}
                                            beforeUpload={beforeUpload}
                                            onPreview={handlePreview}
                                            onChange={handleChangeImg}
                                        >
                                            {fileList.length >= 4 ? null : uploadButton}
                                        </Upload>
                                        <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                                            <Image
                                            alt="example"
                                            style={{
                                                width: '100%',
                                            }}
                                            src={previewImage}
                                            />
                                        </Modal>
                                    </Col>
                                </Row>                             
                            </div>  
                            <div className={`${  current==6? 'paso-6' : 'visibilidadStep'}`}>
                            <div className='pb-2'>
                                     <h6 className="title mb-5">Creando producto.</h6>                                                                         
                                   
                                    <Spin tip="Cargando...">
                                        <Alert
                                        message="Guardando imagenes.."
                                        description="No se desconecte, se está creando el producto..."
                                        type="info"
                                        />
                                    </Spin>
                               </div>
                            </div> 
                            {
                            selectEmpresa?      
                                <div className='controlBtn'>
                                    <Button type="primary" onClick={() => next()}  className={`${  current>=5?   'visibilidadStep' : '' }`} > Siguiente </Button>
                                    <Button  style={{ margin: '0 8px',}} className={`${ (current==0 || current==6) ?  'visibilidadStep' : '' }`}   onClick={() => prev()}> Previo </Button>
                                    <Button htmlType='submit' className={`${ (current==5) ?  '' : 'visibilidadStep' }`}  onClick={() => next()} >Guardar</Button>
                                </div>
                                : 
                                ''
                                }      

                        </Form>                                 
                    </div>                                     
            </Col>
        </Row>   
    </>

  );
}