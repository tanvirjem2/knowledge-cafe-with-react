import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { title, cover, author_Img, author, posted_date, reading_time, hashtags } = blog

    return (
        <div className='mt-4'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='flex items-center justify-between mt-8 mb-4'>
                <div className='flex items-center gap-6'>
                    <div>
                        <img className='w-[60px]' src={author_Img} alt="" />
                    </div>
                    <div>
                        <p className='font-bold'>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mb-4'>{title}</h1>
            <p className='mb-7'>{hashtags.map((hashtag, idx) => <span key={idx}><a href="">#{hashtag} </a></span>)}</p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='underline text-[#6047EC] mb-16'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;