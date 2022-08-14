import React from 'react';
import { useRouter } from 'next/router';
import ALink from '../components/features/alink';
import Layout  from '../components/layout';

function ErrorPage () {
    const router = useRouter();

  const retornar = ()=>{

    router.push('/', undefined, { shallow: true })
  }

    return (
        <Layout>
            <div className="main">
                <nav className="breadcrumb-nav border-0 mb-0">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <ALink href="/">Inicio</ALink>
                            </li>
                            <li className="breadcrumb-item">
                                <ALink href="#">Páginas</ALink>
                            </li>
                            <li className="breadcrumb-item active">404</li>
                        </ol>
                    </div>
                </nav>

                <div className="error-content text-center position-relative" style={ { backgroundImage: `url(images/backgrounds/error-bg.jpg)`, marginBottom: '-1px' } }>
                    <div className="container">
                        <h1 className="error-title">Error 404</h1>

                        <p>Lo sentimos, parece que la página no se encuentra disponible temporalmente o fué eliminada.</p>
                        <a onClick={ (  ) => { retornar( ); } }className="btn btn-outline-primary-2 btn-minwidth-lg">
                            <span>RETORNAR</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default React.memo( ErrorPage );