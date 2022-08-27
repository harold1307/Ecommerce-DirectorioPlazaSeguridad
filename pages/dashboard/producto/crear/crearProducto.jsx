import React , {useState} from 'react';
import { useForm } from 'react-hook-form';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { PlusOutlined } from '@ant-design/icons';
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
  Space
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
import { Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

export default function CrearProducto() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


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
  const [valuedc, setValuedc] = useState('');
  const [valuedl, setValuedcl] = useState('');





  return (
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
                >                
                
                    <Form.Item label="Nombre">
                            <Input />
                    </Form.Item>  
                    <Form.Item label="Marca">
                        <Input />
                    </Form.Item>  
                                            
                    <Form.Item label="Tags">
                            <Input />
                    </Form.Item>         
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
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            >
                            <Option value="Disponible">Disponible</Option>
                            <Option value="Sin Stock">Sin Stock</Option>                                               
                        </Select>         
                    </Form.Item>   

                    <Form.Item label="Sub-Categoría">                                            
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            >
                            <Option value="Disponible">categoria 1</Option>
                            <Option value="Sin Stock">Categoria 2</Option>                                               
                        </Select>         
                    </Form.Item>  

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




       
                    <Form.Item >
                    <Button>Guardar</Button>
                    </Form.Item>
                    </Form>          
                 
              </div>                       
        
      </Col>
    </Row>   

  );
}