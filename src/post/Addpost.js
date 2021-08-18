import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(20),
      width: theme.spacing(550),
      height: theme.spacing(60),
      
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={3} />
    
    </div>
  );
}