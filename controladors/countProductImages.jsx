import axios from "axios";

const countImageInstancia= axios.create({
    baseURL: 'https://directorioseguridad.dte.gt/api/products/img/product/' 
});

function getExt(word) {
    var ext = word.split('.')[1]
    return ext
}

const countImage = async (productoId)=>{  
    const url = `https://directorioseguridad.dte.gt/api/products/img/product/${productoId}/thumbnail`;    
    try{      
      console.log(url);
       const response = await countImageInstancia.get( url );  
       let data = response.data;
       let contents = data.Contents
       return contents 
    }catch(error){
      console.log(error)
    }
}

export default  countImage;