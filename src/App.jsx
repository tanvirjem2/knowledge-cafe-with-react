import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  // State 1

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log('click');
    console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  // State 2

  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>
      <hr className='mb-6' />
      <div className='flex container mx-auto gap-6'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div >
    </>
  )
}

export default App
