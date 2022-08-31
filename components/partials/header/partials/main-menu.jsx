import { useRouter } from 'next/router';
import ALink from '../../../features/alink';

function MainMenu() {
    const router = useRouter();
    let path = router.asPath;
    let query = router.query;

    function showAllDemos( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }
    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ `megamenu-container ${ path === '/' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/" >Inicio</ALink>
                </li>
                <li className={ ( path.indexOf( "productos" ) > -1 && query.type == 'todos' ) ? "active" : '' }>
                        <ALink href="/productos/todos" scroll={ false }>Productos</ALink>                    
                </li> 
                <li className={ `megamenu-container ${ path === '/empresas' ? "active" : '' }` } id="menu-home">
                       <ALink href="/empresas/list">Empresas</ALink>
                </li>              
                <li className={ `megamenu-container ${ path === '/publicarme' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/publicarme" >Publicarme</ALink>
                </li>
                <li className={ `megamenu-container ${ path === '/login' ? 'active' : '' }` } id="menu-home">
                       <ALink href="/login">Sesión</ALink>
                </li>                   
                 <li className={ `megamenu-container ${ path === '/dashboard' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/dashboard" >Dashboard</ALink>
                </li>       
              
                
            </ul>
        </nav>
    );
}

export default MainMenu;