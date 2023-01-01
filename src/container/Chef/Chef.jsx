import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => {

  return(
  <div className='app__wrapper app__bg section__padding'>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info app__chef-body">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eum?</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsam culpa non rerum deleniti, quae cum odit porro fuga placeat.</p>
      </div>

      <div className="app__chef-sign">
        <p className="p__cormorant">Kevin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="signature" />
      </div>

    </div>

  </div>
  );
};

export default Chef;
