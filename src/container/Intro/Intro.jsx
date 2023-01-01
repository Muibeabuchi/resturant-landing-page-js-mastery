import { meal } from '../../constants';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import './Intro.css';
import { useRef, useState } from 'react';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef=useRef();

  const handleVideo = () =>{
    setPlayVideo((prevPlayVideo)=> (!prevPlayVideo))

    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  

  return(
  <div className='app__video'>

    <video  
      src={meal}
      ref={vidRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />

    <div className={ playVideo?     'app__video-overlay_remove flex__center':"app__video-overlay flex__center "}>
      <div 
        className="app__video-overlay_circle flex-center"
        onClick={handleVideo}
      >
        {playVideo ? 
          <BsPauseFill fontSize={30} color='#fff'/> : <BsFillPlayFill fontSize={30} color='#fff'/>
        }
      </div>
    </div>

  </div>
  );
};

export default Intro;
