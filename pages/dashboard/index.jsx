import React from 'react';
import AdminLayoud   from '../../admin/adminLayoud';
import TinyLineChart from '../../admin/estadistica/TinyLineChart';
import TinyAreaChart from '../../admin/estadistica/TinyAreaChart';

function index() {
  return (    
      <AdminLayoud>
          <>
              <div className='row my-2'>
                <div className="col-xxl-3 col-md-3 col-sm-12 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">Número de Visitas</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#13c9f2'} />                              
                                        </div>
                                    </div>
                                    <div className="info"><span className="change up text-danger"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-md-3 col-sm-12 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">Favoritos</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck text-center">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#ff63a5'} /> 
                                        </div>
                                    </div>
                                    <div className="info"><span className="change up text-danger"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-md-3 col-sm-12 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">Número de Visitas</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#854fff'} />                               
                                        </div>
                                    </div>
                                    <div className="info"><span className="change down"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-md-3 col-sm-12 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group">
                                    <div className="card-title">
                                        <h6 className="h4">Visitas diarias</h6>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">
                                        <div className="amount">1,945</div>
                                        <div className="nk-ecwg6-ck text-center">                                          
                                            <TinyLineChart width = {250} height={60} color = {'#20c997'} />  
                                        </div>
                                    </div>
                                    <div className="info"><span className="change up"><em className="icon ni ni-arrow-long-up"></em>4.63%</span><span> vs. last week</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-4'>
                <div className="col-xxl-6 col-sm-12 widget-card">
                    <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                            <div className="card-inner">
                                <div className="card-title-group p-3 ml-3">
                                    <div className="card-title">
                                        <h6  className="title">Sales Overview</h6>
                                        <p>In 30 days sales of product subscription. <a href="#">See Details</a></p>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="data-group">                                    
                                        <div className="nk-ecwg6-ck text-center">                                          
                                            <TinyAreaChart width = {550} height={350} color = {'#20c997'} />  
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
              
          </>         
      </AdminLayoud>
  )
}

export default index