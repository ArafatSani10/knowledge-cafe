import PropTypes from 'prop-types';

import { FaBookmark  } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
    let { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href=""> #{hash}</a></span>)
                }
            </p>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className=' text-2xl'> {author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className='ml-2 text-red-600 text-2xl'> <FaBookmark></FaBookmark></button>
                </div>
            </div>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;