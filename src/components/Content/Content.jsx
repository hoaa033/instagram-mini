import './Content.css';
import News from './News/News';
import Story from './Story/Story';

function Content(){
    return(
        <div className='content'>
            <Story/>
            <News/>
            <News/>
            <News/>
            
        </div>
    )
}

export default Content;