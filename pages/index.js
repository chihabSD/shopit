import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home({country}) {
  const { data: session } = useSession()
  return (
    <div>
      <Header country={country} />
      {session  ? "You are logged in ": "You ar enot logoed"}
      <Footer country={country} />
    </div>
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
