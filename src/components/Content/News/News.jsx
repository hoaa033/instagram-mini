import './News.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Picker from 'emoji-picker-react';
import 'bootstrap/dist/css/bootstrap.min.css';


function News() {

    const [favourite, setFavourite] = useState(false)

    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

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
            <div className='news__img'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://hoakhomax.com/wp-content/uploads/2017/08/IMG_1311-e1521199420684.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tourdulichchauau.net/view/at_%E2%80%98%E2%80%99bua-yeu%E2%80%99%E2%80%99-mang-ten-nang-hoa-lavender-phap_66eb504e9b45099439c41637e7c76586.jpg"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://mslavender.com/wp-content/uploads/2018/09/l%E1%BB%8D-hoa-lavender-4.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='news__icons'>
                <div >
                    <button className='news__icons__item'
                        onClick={() => {
                            setFavourite(!favourite)
                        }}
                    >{favourite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
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
            <div className='news__status'>

                <p><a href="#">user_account</a> Status_description</p>
                <p className='news__published'>4 HOURS AGO</p>
            </div>
            <form className='news__comment'>
                <button onClick={() => {<Picker onEmojiClick={onEmojiClick} />}}>
                    <InsertEmoticonIcon />
                    </button>
                <form >
                    <input type="text" placeholder='Add a comment...' />
                </form>
                <button><SendIcon /></button>
            </form>

        </div>
    )
}

export default News;