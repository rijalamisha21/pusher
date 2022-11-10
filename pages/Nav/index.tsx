import React from 'react'
import Link from "next/link";
import Pusher from '../../assets/Icons/Pusher/pusher';
import Heading from '../../components/Heading';
import ListItem from '../../components/ListItem';
import styles from "../../styles/Home.module.css"
import Button from '../../components/Button';


const index = () => {
  return (
    <div className={styles.wrap_nav}>
    <div className={`${styles.top_nav} container-fluid  p-1`}>
      <div className="container  d-flex justify-content-center align-items-center p-2">
        <div className={`mx-2 ${styles.news_btn}`}>News</div>
        <div className="mx-2">
          We are live Discord.
          <Link href="#" className={styles.link}>
            Join us now
          </Link>
        </div>
      </div>
    </div>
    <div className={`${styles.bottom_nav} d-flex justify-content-between align-items-center  p-3`}>
      <Link href="/" className="logo">
        <div className="d-flex align-items-center">
          <Pusher />
          <Heading type="h1" className={`${styles.heading1} mx-2`}>
            PUSHER
          </Heading>
        </div>
        <div className={styles.buttom_logo}>
          A <span className={styles.message_bird}>MessageBird</span> company
        </div>
      </Link>
      <nav className={`${styles.navbar} navbar-expand-sm`}>
        <ul className={`${styles.unorder_list} d-flex justify-content-between`}>
          <ListItem  />
        </ul>
      </nav>

      <div>
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </div>
      </div>
    </div>
  )
}

export default index
