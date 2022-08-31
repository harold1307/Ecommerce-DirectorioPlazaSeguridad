import React from 'react';

function PageHeader ( props ) {
    const { title, subTitle, icon } = props;

    return (
        <div className="page-header text-center" style={ { backgroundImage: `url(/images/page-header-bg.jpg)` } } >
            <div className="container">
                <h1 className="page-title">{ title } <i className={`${icon} icon-tienda`}></i><span>{ subTitle }</span></h1>
            </div>
        </div>
    );
}

export default React.memo( PageHeader );