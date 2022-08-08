import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';
import PostFour from '~/components/features/posts/post-four';

import { fadeIn, blogSlider } from '~/utils/data';

function BlogCollection( props ) {
    const { loading, posts = [] } = props;

    return (
        <div className="widget widget-posts">
            <h4 className="widget-title">
                <span>Latest Blog Posts</span>
            </h4>

            {
                ( loading || posts.length == 0 ) ?
                    <OwlCarousel adClass="owl-simple" options={ blogSlider }>
                        {
                            [ 0, 1 ].map( ( item, index ) =>
                                <div className="skel-pro" key={ index }></div>
                            )
                        }
                    </OwlCarousel>
                    :
                    <OwlCarousel adClass="owl-simple" options={ blogSlider }>
                        {

                            posts.map( ( item, index ) => (
                                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce
                                    key={ index }>
                                    <PostFour post={ item } />
                                </Reveal>
                            ) )
                        }
                    </OwlCarousel>
            }
        </div>
    );
}

export default BlogCollection;