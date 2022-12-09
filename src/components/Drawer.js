import React from 'react'
import './drawer.css'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import app from '../fire';
const Drawer = ({close_menu,signOut}) => {
    const object=useSelector((state)=>state.object)
    
    const data = [
        {
            title:'Trending',
            des:['Best Seller','New Release','Shakers and Movers']
        },

        {
            title:'Top Categories For You',
            des:['Mobiles','Computers','Book','Amazon Fashion','See All Categories']
        },
        {
            title:'Program & Feature',
            des:[`Todays Deal's`,'Amazon Pay','Try Prime','#founditonAmazon','Sell on Amazon','Style Feed']
        }
        
    ]
  return (
    <div className='drawer'>
      <div>
        <div className='drawer__header'>
            <div className='drawer__header1'>
                <Link to={`/signin`} onClick={close_menu} className='text-light'>
                    {object.user?object.user.displayName.slice(0.,8):"SignIn"}
                    <PersonIcon/></Link></div>
            <div className='drawer__header2'>
                <h3>Browse</h3>
                <h3>Amazon</h3>
            </div>
        </div>  
      </div>
        
        <div className='drawer__tiles --first'>
            <div className='tiles__title '>Amazon Home</div>
        </div>
        {/* <div className='drawer__tiles '>
            <div className='tiles__title '>Trending</div>
            <div className='tiles__content'>Best Seller</div>
            <div className='tiles__content'>New Release</div>
            <div className='tiles__content'>Movers & Shakers</div>
        </div> */}
      {
        data.map((m)=>{
            return(
                <Link to={`/maintenance/${m.title}`} onClick={close_menu}>
                    <div  className='drawer__tiles'>
                    <div className='tiles__title'>{m.title}</div>
                    {
                        m.des.map((d)=>{
                            return(
                                <div className='tiles__content'>
                                    {d}
                                </div>
                            )
                        })
                    }
                </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default Drawer
