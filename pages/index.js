import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";
import { useSession, signIn, signOut } from "next-auth/react"
import Main from "@/components/home/main";
import FlashDeals from "@/components/home/flashDeals";
import Category from "@/components/home/category";
import { women_accessories, women_dresses, women_shoes } from "@/data/home";
export default function Home({country}) {

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            
          <Category  header="Dresses" products={women_dresses} background="#3C811f"/>
          <Category  header="Shoes / High Heels"  products={women_shoes} background="#5a31f4"/>
          <Category  header="Accessories" products={women_accessories} background="#000"/>
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  // let data = await axios
  //   .get(
  //     `https://api.ipregistry.co/66.165.2.7?key=${process.env.IPREGISTRYKEY}`
  //   )
  //   .then((res) => {
  //     return res.data.location.country;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return {
    props: {
      // country: {name:data.name, flag:data.flag.emojitwo},
      country: {name:'Ireland', flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAOVBMVEX///8Bmkr/eQD/eAD/dQMAmUn///3v/fMAnkgmnF3/9+/7eQDzhy3k5OT5egAEnU3V59nl5uPr3NTr7FI6AAABKklEQVR4nO3QiRGCMBAAwBxvImKA/ou1Cm4G3S1hS4+eoUY79hzn9d6mIUeJOTLUua0lxbK89D2lr+vTp0/fP/WNoz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTpu7fvM223/w369Ol7dF/K3u/25ajRjj3HeeX1fQEzaBKVOmQhkwAAAABJRU5ErkJggg=='},
    },
  };
}
