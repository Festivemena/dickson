import Footer from '../components/Mobile/Home/footer'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'

const style = {
  wrapper: `flex-col justify-center font-nunito h-full w-full select-none `,
  content: ` flex justify-between`,
  mainContent: ` border-r border-l border-[#38444d]`,
}

const profile = () => {
  const user = 'Efemena'
  return (
    <div className={style.wrapper}>
       {user ? (
          <div className={style.content}>
          <div className={style.mainContent}>
            <ProfileHeader />
            <ProfileTweets />
          </div>
        </div>
        ):(
          <Signin/>
        ) }
      
    </div>
  )
}

export default profile
