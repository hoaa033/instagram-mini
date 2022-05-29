import './News.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';


function News() {

    const [favourite, setFavourite] = useState(false)

    let liked = 0;


    return (
        <div id='news'>
            <div className='news__user'>
                <div className='news__user-img'>
                    <img src="https://via.placeholder.com/40" alt="img" />
                    <div className="news__user__account"><p>user__account</p></div>
                </div>
                <div className='news__user__icon'>
                    <button><MoreHorizIcon /></button>
                </div>
            </div>
            <div>
                <img className='news__img' src="https://via.placeholder.com/500x600" alt="img" />
            </div>
            <div className='news__icons'>
                <div >
                    <button className='news__icons__item'
                        onClick={() => {
                            setFavourite(!favourite)
                        }}
                    >{favourite ? <FavoriteIcon style={{ color: 'red' }} />  : <FavoriteBorderIcon />}
                    </button>

                    <button className='news__icons__item'> <ChatBubbleOutlineIcon /></button>
                    <button className='news__icons__item'><SendIcon /></button>

                </div>
                <div>
                    <button className='news__icons__item'> <BookmarkBorderIcon /></button>
                </div>
            </div>
            <div className='news__liked'>
                <button>{favourite ? liked + 1 : liked} likes</button>
            </div>

        </div>
    )
}

export default News;