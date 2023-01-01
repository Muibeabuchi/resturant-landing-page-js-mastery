import {images,data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => {

  return(
    <div className='app__specialmenu section__padding flex__center' id='menu'>

      <div className="app__specialmenu-title">
        <SubHeading title='Menu that fits you palatte' />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialmenu-menu">

        <div className="app__specialmenu-menu_wine">
          <p className='app__specialmenu-menu_heading'>Wine & Beer</p>
          <div className="app__specialmenu-menu_items">
            {data.wines.map((wine,index)=>(
              <MenuItem key={wine.title+index} title={wine.title}
                price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialmenu-menu_img">
          <img src={images.menu} alt="menu image" />
        </div>

        <div className="app__specialmenu-menu_cocktails">
          <p className='app__specialmenu-menu_heading'>Cocktails</p>
          <div className="app__specialmenu-menu_items">
            {data.cocktails.map((cocktail,index)=>(
              <MenuItem key={cocktail.title+index} title={cocktail.title}
              price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>

        
      </div>

    </div>
  )
};

export default SpecialMenu;
