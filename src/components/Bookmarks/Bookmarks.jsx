import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="w-1/3 bg-[#1111110D] rounded-lg">
            <div className='p-4 rounded-lg bg-[#efedfd]'>
                <h3 className='text-[#6047EC] text-center font-bold text-2xl' >Spent time on read :{readingTime} min</h3>
            </div>
            <h2 className='font-bold text-2xl p-4 m-4'>Bookmarked Blogs: {bookmarks.length}</h2>
            {bookmarks.map(bookmark => <Bookmark key={bookmark.Id} bookmark={bookmark}></Bookmark>)}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;