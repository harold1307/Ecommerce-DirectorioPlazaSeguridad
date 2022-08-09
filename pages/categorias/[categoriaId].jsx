import React from 'react'
 import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { cargarCategoriasAll } from '~/store/actions/categoriesAllAction';



   const Categorias =  () => {
        const router = useRouter()
        const { categoriaId }= router.query
       
        

        return (
            <Layout  >
                  <p>{categoriaId}</p>
            </Layout>
            )
    }

    export default Categorias