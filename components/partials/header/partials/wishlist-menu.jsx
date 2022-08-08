import React from 'react';
import { connect } from 'react-redux';

import ALink from '../../../features/alink';

function WishlistMenu( props ) {
    //const { wishlist } = props;
    const wishlist = [];

    return (
        <ALink href="/shop/wishlist" className="wishlist-link" title="Wishlist">
            <i className="icon-heart-o"></i>
            <span className="wishlist-count">{ wishlist.length }</span>
            <span className="wishlist-txt">Wishlist</span>
        </ALink>
    );
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.data
    }
}

export default WishlistMenu;