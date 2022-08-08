import React from 'react';
import Layout  from '../components/layout';
import Home from '../pages/inicio/inicio';

function index() {
  return (
    
      <Layout>
          <React.StrictMode>
            <Home />
          </React.StrictMode>
      </Layout>
  )
}

export default index