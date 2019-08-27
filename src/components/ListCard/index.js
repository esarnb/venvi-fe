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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import { Tooltip } from "antd";
import "./style.css";


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    '&:hover': {
        border: "1px",
        boxShadow: "5px 10px 8px 10px grey",
    }
  },
  media: {
    width: 325,
    paddingTop: '47%', // 16:9
    marginLeft: '2%',
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


export default function ListCard(props) {
  const {image,make,model,price,year,vin,mileage,location,seller,email,phone} = props;
  var name = `${year} ${make} ${model}`
  console.log("name",name)

  var bookmarkData = {
    UserId: props.user,
    ListingId: props.id,
    vin: vin
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} id="list-card">
      <CardHeader 
        title= {name}      
        />
      <CardMedia
        id="card-pic"
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Tooltip placement="bottomLeft" title="Favorites" arrowPointAtCenter>
        <IconButton id="favorite" aria-label="add to favorites">
          <FavoriteIcon id="fav" onClick={()=> props.handleFavorite(bookmarkData)}/>
        </IconButton>
      </Tooltip>
      <Tooltip placement="bottomLeft" title="Expand" arrowPointAtCenter>
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
      </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Price: ${price}</Typography>
          <Typography paragraph>Mileage: {mileage} miles </Typography>
          {location ? <Typography paragraph>Location: {location}</Typography>:null}
          <Typography paragraph>VIN: {vin}</Typography>
          <hr/>
          <Typography paragraph>Seller: {seller} </Typography>
          {phone ? <Typography paragraph>Phone: {phone} </Typography> : null}
          {email ? <Typography paragraph>Email: {email} </Typography> : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export function ListCardProfile(props) {
  const {image,make,model,price,year,vin,mileage,location,seller,email,phone} = props;
  var name = `${year} ${make} ${model}`;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} id="list-card">
      <CardHeader
        action={
        <Tooltip placement="bottomLeft" title="Delete" arrowPointAtCenter>
          <IconButton aria-label="delete">
            <DeleteSharpIcon id="delete-btn" onClick={() => props.handleDelete(props.id)}/>
          </IconButton>
        </Tooltip>
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
      <Tooltip placement="bottomLeft" title="Edit Listing" arrowPointAtCenter>

        <IconButton id="edit" aria-label="edit price">
         
            <Modal header="Edit Listing" fixedFooter trigger={<EditIcon id="edit-btn"/>}
            actions={<Button modal="close" className="reviewButton" id={props.id} onClick={props.handleEdit}>Submit</Button>}>
            <Col className="input-field">
            <TextInput name="price" type="number" label="Price" onChange={props.editchange}/>   
            </Col>
            </Modal>
        </IconButton>
        </Tooltip>

      <Tooltip placement="bottomLeft" title="Expand" arrowPointAtCenter>        
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
      </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Price: ${price}</Typography>
          <Typography paragraph>Mileage: {mileage} miles </Typography>
          {location ? <Typography paragraph>Location: {location}</Typography>:null}
          <Typography paragraph>VIN: {vin}</Typography>
          <hr/>
          <Typography paragraph>Seller: {seller} </Typography>
          {phone ? <Typography paragraph>Phone: {phone} </Typography> : null}
          {email ? <Typography paragraph>Email: {email} </Typography> : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}


export function ListCardBookmark(props) {
  const {image,make,model,price,year,vin,mileage,location,seller,email,phone} = props;
  var name = `${year} ${make} ${model}`;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} id="list-card">
      <CardHeader
        action={
        <Tooltip placement="bottomLeft" title="Unfavorite" arrowPointAtCenter>
          <IconButton aria-label="delete">
            <DeleteSharpIcon id="delete-btn" onClick={() => props.handleDeleteBookmark(props.id)}/>
          </IconButton>
        </Tooltip>
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

      <Tooltip placement="bottomLeft" title="Expand" arrowPointAtCenter>
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
      </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Price: ${price}</Typography>
          <Typography paragraph>Mileage: {mileage} miles </Typography>
          {location ? <Typography paragraph>Location: {location}</Typography>:null}
          <Typography paragraph>VIN: {vin}</Typography>
          <hr/>
          <Typography paragraph>Seller: {seller} </Typography>
          {phone ? <Typography paragraph>Phone: {phone} </Typography> : null}
          {email ? <Typography paragraph>Email: {email} </Typography> : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}
