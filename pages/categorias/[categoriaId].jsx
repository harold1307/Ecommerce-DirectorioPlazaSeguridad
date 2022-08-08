import React from 'react'
 import { useRouter } from 'next/router';
import Layout from '../../components/layout';



    export default () => {
        const router = useRouter()
        const { categoriaId }= router.query
       
        

        return (
            <Layout  >
                  <p>{categoriaId}</p>
            </Layout>
            )
    }