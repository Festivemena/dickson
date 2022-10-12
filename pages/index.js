import Mobile from '../components/Mobile/Home/Mobile'
import { auth } from "../firebaseconfig";
import {useAuthState} from 'react-firebase-hooks/auth'
import Signin from '../components/login/signin';
import styles from '../styles/Home.module.css'
 
const style = { 
  wrapper: `flex justify-center  h-full w-full select-none bg-black text-white`,
  content: `max-w-[1400px] flex justify-between`, 
  mobile: `flex justify-center h-full w-full  select-none bg-white text-black` 
}

export default function Home() {
  // const [user, loading, error] = useAuthState(auth);

  // if (!user) { 
  //   return(
  //     <Signin/>
  //   )
  // }

  // if (user) {
    const user = 'Efemena'
    return (
      <div className='font-nunito'>
      <div className={style.mobile}>
        {user ? (
           <Mobile />
        ):(
          <Signin/>
        ) }
         
        </div>  
        </div>
      )
  }

  
// }
