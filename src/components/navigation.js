
import Link from "next/link";

import styles from '../../styles/Home.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ContactsIcon from '@material-ui/icons/Contacts';

export default function Navigation() {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <div className={styles.containerBtn}>
                        <Link href="/store">
                        <Button variant="contained" size="medium" color="secondary">
                            <StorefrontIcon />
                            Store
                        </Button>
                        </Link>
                        <Link href="/candidato">
                        <Button variant="contained" size="medium" color="secondary" >
                            <ContactsIcon />
                            Nombre Candidato
                        </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}