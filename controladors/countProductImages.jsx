import axios from "axios";

const countImageInstancia= axios.create({
    baseURL: 'https://directorioseguridad.dte.gt/api/products/img/product/',   
    headers: {
      'Content-Type': 'application/json'
    }
    
});

function getExt(word) {
    var ext = word.split('.')[1]
    return ext
}


const countImage = async (productoId)=>{
    var loadedImages = [];
    console.log('productoId=>', productoId)
   
    try{
       const response = await countImageInstancia.get(`/${productoId}/thumbnail`);  
       let data = response.data;
       let contents = data.Contents
       console.log('folder =>', data  )
   
       return loadedImages
    }catch(error){
      console.log(error)
    }
}


export default  countImage;