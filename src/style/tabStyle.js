import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabAppBar:{
      background:"none",
      color:"black",
      boxShadow:"none"
    }
  }));

  export default useStyles;