import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ALink from '~/components/features/alink';

function InfoOne ( props ) {
    const { product } = props;

    if ( !product ) {
        return <div></div>
    }

    return (
        <Tabs selectedTabClassName="show" selectedTabPanelClassName="active show">
            <div className="product-details-tab">
                <TabList className="nav nav-pills justify-content-center">
                    <Tab className="nav-item">
                        <span className="nav-link"> Descripción</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link"> Additional information</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Shipping & Returns</span>
                    </Tab>
              
                </TabList>

                <div className="tab-content">
                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Información de producto:</h3>
                            {product.longDescription}
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Information</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                            <h3 className="pt-2">Fabric & care</h3>
                            <ul>
                                <li>Faux suede fabric</li>
                                <li>Gold tone metal hoop handles.</li>
                                <li>RI branding</li>
                                <li>Snake print trim interior </li>
                                <li>Adjustable cross body strap</li>
                                <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                            </ul>

                            <h3>Size</h3>
                            <p>one size</p>
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Delivery & returns</h3>
                            <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <ALink href="#">Delivery information</ALink><br />
                                We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <ALink href="#">Returns information</ALink></p>
                        </div>
                    </TabPanel>

                </div>
            </div>
        </Tabs>
    );
}

export default React.memo( InfoOne );