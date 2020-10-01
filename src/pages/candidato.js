import Layout from "../components/Layout";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default function Candidato(props) {
    const classes = useStyles();
    return(
        <Layout>
            <h1>CANDIDATO</h1>
            <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
          <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Antonio Molina Romero" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="ing.amolinar@gmail.com" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhonelinkRingIcon />
          </ListItemIcon>
          <ListItemText primary="55 24944824" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Fes Aragón, UNAM" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Ingeniería en Computación" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>

        </Layout>
    )
}