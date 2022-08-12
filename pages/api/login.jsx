import Cors from 'cors';
import initMiddleware from '../../middleware/initMiddleware';
import clienteAxios from '../../configuracion/axios';

const cors = initMiddleware(
  Cors({ 
    methods: ['POST'],
    origin : true,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

export default async function handler(req, res) {
  
  await cors(req, res);
  const credenciales = req.body;
 
    try {               
      const datos = await clienteAxios.post('/login', JSON.stringify(credenciales) );  




      
      res.json({
        credenciales :credenciales, 
        datos:datos

        });
 
    } catch (error) {
      res.json({        
        error: error
      });            
            
    }
    

  
}
