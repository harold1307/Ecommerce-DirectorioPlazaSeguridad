import React , {useState} from 'react';
import { PlusOutlined,  LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined  } from '@ant-design/icons';
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
  Steps
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
const { Step } = Steps;


export default function CrearProducto() {

<Select
  defaultValue="add"
  style={{
  width: 60,
  }}
>
  <Option value="add">+</Option>
  <Option value="minus">-</Option>
</Select>
const onChange = (value) => {
    console.log('changed', value);
};

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const  ChangeCategoria = (value) => {
    console.log(`selected ${value}`);
  };






  const [valuedc, setValuedc] = useState('');
  const [valuedl, setValuedl] = useState('');

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current>=5? 5 : current + 1);
  }; 

  const prev = () => {
    setCurrent(current<=0? 0 : current - 1);
    
  };
  console.log(current)

 return (
    <>
        <Row className='py-5'>
            <Col xs={{span: 24,offset: 0,}}  sm={{span: 22,offset: 1,}}  md={{span: 20,offset: 2,}}  lg={{span: 18,offset: 3,}}  xl={{span: 18,offset: 3,}}>
                <div className='steps'>
                <Steps current={current} percent={current*(100/5)}>
                        {['Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6'].map((item) => (
                        <Step key={item} title={item} />
                        ))}
                    </Steps>                      
                </div>                          
            </Col>
        </Row>
        <Row className='bg-white my-5 py-5'>
        <Col  xs={{span: 22,offset: 1,}}  sm={{span: 20,offset: 2,}}  md={{span: 20,offset: 2,}}  lg={{span: 14,offset: 5,}}  xl={{span: 14,offset: 5,}} >                
                <div className="text-center">
                        <h1 className="display-4 my-5">Crear Producto</h1>
                </div>


                <div className='formulariocrearEmpresa'>

                    <Form
                        labelCol={{
                        span: 4,
                        }}
                        wrapperCol={{
                        span: 14,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >      

                            <div className={`${  current==0? 'paso-0' : 'visibilidadStep'}`}>
                                <Form.Item layout="inline"  label="Nombre" name="name">
                                        <Input />
                                </Form.Item>  
                                <Form.Item layout="inline" label="Marca" name="tags">
                                    <Input />
                                </Form.Item>  
                                <Form.Item label="Sub-Categoría">                                            
                                    <Select
                                        defaultValue="categoria 0"
                                        style={{
                                            width: 120,
                                        }}
                                        onChange={ChangeCategoria}
                                        >
                                        <Option value="Disponible">categoria 1</Option>
                                        <Option value="Sin Stock">Categoria 2</Option>                                               
                                    </Select>         
                                 </Form.Item>      
                               
                            </div>
                       
                            <div className={`${  current==1? 'paso-1' : 'visibilidadStep'}`}>
                                 
                                <Form.Item label="Precio Regular: ">           
                                        <InputNumber addonBefore="+" addonAfter="$" defaultValue={0} />                  
                                </Form.Item>   
                                <Form.Item label="Precio de oferta">
                                    <InputNumber addonBefore="+" addonAfter="$" defaultValue={0} />
                                </Form.Item>    
                                <Form.Item label="Cantidad disponible">
                                    <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
                                </Form.Item>   
                                <Form.Item label="Disponibilidad">                                            
                                <Select
                                    defaultValue="Sin Stock"
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    >
                                    <Option value="Disponible">Disponible</Option>
                                    <Option value="Sin Stock">Sin Stock</Option>                                               
                                </Select>         
                                </Form.Item>    
                         
                            </div>
                         
                     
                     
                            <div className={`${  current==2? 'paso-2' : 'visibilidadStep'}`}>                            
                                    <Form.Item label="Descripción corta">  
                                    <TextArea
                                        value={valuedc}
                                        onChange={(e) => setValuedc(e.target.value)}
                                        placeholder="Controlled autosize"
                                        autoSize={{
                                        minRows: 3,
                                        maxRows: 5,
                                        }}
                                    />
                                </Form.Item>  
                                <Form.Item label="Descripción larga">  
                                    <TextArea
                                        value={valuedl}
                                        onChange={(e) => setValuedl(e.target.value)}
                                        placeholder="Controlled autosize"
                                        autoSize={{
                                        minRows: 5,
                                        maxRows: 10,
                                        }}
                                    />
                                </Form.Item>  
                            </div>
                           
                            <div className={`${  current==3? 'paso-3' : 'visibilidadStep'}`}>                            
                                <Form.Item label="Imagenes" valuePropName="fileList">
                                    <Upload action="/upload.do" listType="picture-card">
                                        <div>
                                        <PlusOutlined />
                                        <div
                                            style={{
                                            marginTop: 8,
                                            }}
                                        >
                                            Upload
                                        </div>
                                        </div>
                                    </Upload>
                                </Form.Item>
                            </div>
                         
                            <div className={`${  current==4? 'paso-4' : 'visibilidadStep'}`}>                            
                                <Form.Item label="Nombre">
                                    <Input />
                                </Form.Item>  
                                <Form.Item label="Apellido">
                                    <Input />
                                </Form.Item>  
                                <Form.Item label="Teléfono">
                                        <Input />
                                </Form.Item>  
                                <Form.Item label="Correo">
                                    <Input />
                                </Form.Item> 
                            </div>                        
                       

                        <Button type="primary" onClick={() => next()}  className={`${  current==4?   'visibilidadStep' : '' }`} > Siguiente </Button>
                        <Button  style={{ margin: '0 8px',}} className={`${ current==0 ?  'visibilidadStep' : '' }`}   onClick={() => prev()}> Previo </Button>
                        <Button htmlType='submit' className={`${  current==4?  '' : 'visibilidadStep' }`}  >Guardar</Button>
                      
                    </Form>          
                    
                </div>                       
            
        </Col>
        </Row>   
    </>

  );
}