import Head from "next/head";
import Navigation from "../components/navigation";
import styles from '../../styles/Home.module.css'

export default function Layout(props) {
    return(
        <div>
            <Head>
                <title>Prueba Técnica</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"></meta>
            </Head>            
            <Navigation />
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}
