import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { TextInput, Col , Modal, Button } from "react-materialize";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    '&:hover': {
        border: "1px",
        boxShadow: "5px 10px 8px 10px lightgrey",
    }
  },
  media: {
    width: 325,
    paddingTop: '47%', // 16:9
    marginLeft: '5%',
    marginTop: '7%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: yellow[700],
  },
}));

const styles = {
  button:{
    '&:active':{
      backgroundColor: "gold",
    }
  }
}
  

class ListCardProfile extends React.Component {

  state = {
    price: ""
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render () {
  const {image,make,model,price,year} = this.props;
  var name = `${year} ${make} ${model}`;
  const [expanded, setExpanded] = React.useState(false);


  function handleExpandClick() {
    setExpanded(!expanded);
  }
  
  function classes(){
  const classes = useStyles()
  }

  return (
    
    <Card className={classes.card} id="list-card">
      <CardHeader
        action={
          <IconButton aria-label="delete">
            <DeleteSharpIcon onClick={() => this.props.handleDelete(this.props.id)}/>
          </IconButton>
        }
        title= {name}      
        />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton id="edit" aria-label="edit price">
         
            <Modal header="Change Price" fixedFooter trigger={<EditIcon />}
            actions={<Button modal="close" className="reviewButton" onClick={() => this.props.handleEdit(this.props.id,this.state.price)}>Submit</Button>}>
            <Col className="input-field">
            <TextInput name="price" value={this.state.price} onChange={this.handleChange} type="number" label="Price" />   
            </Col>
            </Modal>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Price: {price}</Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
  }
}
export default ListCardProfile;