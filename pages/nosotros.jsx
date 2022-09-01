import React from 'react'
import Layout from '../components/layout';
import PageHeader from '~/components/features/page-header';
import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import { homeData, mainSlider5, mainSlider9 } from '~/utils/data';

const nosotros =()=>{
  return (
    <Layout> 
    <PageHeader title={ 'Sobre Nosotros'} />
      <nav className="breadcrumb-nav">
          <div className="container">
             <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <ALink href="/">Inicio</ALink>
                </li>            
                  <li className="breadcrumb-item active">
                     Nosotros
                  </li>                      
             </ol>
          </div>
      </nav>
      <div className="page-content">   

          <div className="container__nosotros">
              <div className="about__area-title-right-image"></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 lg-mb-30">
                    <div className="about__area-left mr-70" >
                      <div className="about__area-left-image">
                        <img src="/images/about/sobre-1.jpg" alt="" />
                        <div className="about__area-left-image-small-img">
                          <img src="/images/about/sobre-2.jpg" alt="" />
                        </div>
                        <div className="about__area-left-image-content">
                          <p><span  className="counter">23</span>+</p>
                          <p>Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="about__area-title-right" >	<span  className="subtitle-one">Sobre la compañia</span>
                      <span className="subtitle-two">01</span>
                      <h2 className="mb-25 title-decoration mb-3">¿Quienes Somos?</h2>
                      <p className="mb-40">Somos una plataforma de negocios, que enlaza a las personas en busca de soluciones confiables de seguridad, con los profesionales y las empresas que pueden proveerlas con los mejores estándares de calidad y confiabilidad.</p>
                      <p>Nuestro equipo de trabajo está integrado por un grupo selecto de profesionales expertos en marketing estratégico, imagen pública, tecnologías avanzadas y de seguridad integral, que se encargan de desarrollar esquemas innovadores de negocios en el sector.</p>
                      <div className="row align-items-center mb-40">
                        <div className="col-sm-6 pr-10">                                           
                          <div className="about__area-title-right-author-text my-5">
                            <div className='title'>César</div>
                            <p>CEO Fundador</p>
                          </div>                        
                        </div>                       
                      </div>	
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="container__nosotros solution__area" >
          <div className="solution__area-right"></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 lg-mb-50">
                  <div className="solution__area-left">
                    <span className="subtitle-one">Normativa ética</span>
                    <span className="subtitle-two">02</span>
                    <h2 className="mb-25">Nuestros Principios</h2>
                    <p className="mb-40">Los principios corporativos, creencias y valores que rígen como guía e inspiran nuestra organización:</p>
                      <ul className="list ml-4">
                          <li> <i className="icon-check-circle-o pr-2 fz-22"></i>Negociaciones exitosas</li>
                          <li> <i className="icon-check-circle-o pr-2 fz-22"></i>Cumplimiento de expectativas</li>
                          <li> <i className="icon-check-circle-o pr-2 fz-22"></i>Honestidad siempre</li>
                          <li> <i className="icon-check-circle-o pr-2 fz-22"></i>Innovación inteligente</li>
                          <li> <i className="icon-check-circle-o pr-2 fz-22"></i>Efectividad en el servicio</li>
                          <li> <i className="icon-check-circle-o pr-2 fz-22"></i>Tecnologías amigables</li>
                          <li> <i className="icon-check-circle-o pr-2 fz-22"></i>Confidencialidad de la información</li>
                      </ul>   
                  </div>
                </div>              
              </div>
            </div>
          </div>  

          <div className="container__nosotros">
            <div className="row">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className='card-bg-color'>
                          <h2 className="display-4">Misión</h2>
                          <p>Ser una conexión efectiva entre los clientes que desean adquirir soluciones de seguridad, y los profesionales, las empresas o las instituciones que pueden proveerla con los mejores estándares de calidad y confiabilidad posibles.</p>
                        </div>                                    
                    </div>
                    <div className="col-lg-6">
                      <div className='card-bg-color'>
                        <h2 className="display-4">Visión</h2>
                        <p>roveer información útil, innovadora y fácil de comprender, de los productos y servicios que se ofrecen en el mercado de la seguridad, para que los usuarios la encuentren fácilmente y se contacten con sus proveedores de forma ágil.</p>
                      </div>  
                    </div>
                </div>
                <div className="mb-5"></div>
          </div>

          <div className="about-testimonials bg-light-2 pt-6 pb-6 position-relative" style={ { marginBottom: '-1px' } }>
                  <div className="container">
                      <h2 className="title text-center mb-3">¿Qué dicen de nosotros?</h2>

                      <OwlCarousel adClass="owl-simple owl-testimonials-photo" options={ mainSlider5 } >
                          <blockquote className="testimonial text-center">
                              <img src="images/testimonials/user-1.jpg" alt="user" />
                              <p>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna. <br />In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”</p>
                              <cite>
                                  Jenson Gregory
                                  <span>Customer</span>
                              </cite>
                          </blockquote>

                          <blockquote className="testimonial text-center">
                              <img src="images/testimonials/user-2.jpg" alt="user" />
                              <p>“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”</p>

                              <cite>
                                  Victoria Ventura
                                  <span>Customer</span>
                              </cite>
                          </blockquote>
                      </OwlCarousel>
                  </div>
          </div>

          <div className="container container__box my-5">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="brands-text text-center mx-auto mb-6">
                                <h2 className="title">Patrocinadores</h2>                               
                            </div>
                            <div className="brands-display">
                                <div className="row justify-content-center">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
          </div>     
      </div>
    
    </Layout>
  )
}


export default nosotros;