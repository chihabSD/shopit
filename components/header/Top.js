import styles from "./style.module.scss";
import Link from "next/link";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleFill, RiArrowDownFill } from "react-icons/ri";
import { useState } from "react";
import UserMenu from "./UserMenu";
export default function Top({country}) {
  const [loggedin, setLoggedIn] = useState(true);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src={country.flag}
              alt=""
            />
            <span> {country.name} / USD</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>

         <li>
         {loggedin ? (
            <li>
              <div className={styles.flex}>
              <img className={styles.menu__img}
              src="https://res.cloudinary.com/doodo0tre/image/upload/v1680024410/letsChat/anita-austvika-9nbntSgETqQ-unsplash_ancqku.jpg"
              alt=""
            />
                <span>Chihabelddine</span>
                <RiArrowDownFill />
              </div>
            </li>
          ) : (
            <li>
              <div className={styles.flex}>
                <RiAccountPinCircleFill />
                <span>Account</span>
                <RiArrowDownFill />
              </div>
            </li>
          )}
          <UserMenu loggedin={loggedin} />
         </li>
        </ul>
      </div>
    </div>
  );

  //     <div className={styles.top}>
  //       <div className={styles.top__container}>
  //         <div></div>
  //         <ul className={styles.top__list}>
  //           <li>
  //             <img
  //               src="https://res.cloudinary.com/doodo0tre/image/upload/v1680024410/letsChat/anita-austvika-9nbntSgETqQ-unsplash_ancqku.jpg"
  //               alt=""
  //             />
  //             <span>Morocco / usd</span>
  //           </li>
  //           <li>
  //             <MdSecurity />
  //             <span>Buyer proection</span>
  //           </li>
  //           <li>
  //             <span>Customer service</span>
  //           </li>
  //           <li>
  //             <span> Help</span>
  //           </li>

  //           <li>
  //           <BsSuitHeart />
  //             <span>Wish list</span>
  //           </li>

  //         </ul>
  //       </div>
  //     </div>
  //   );
}
