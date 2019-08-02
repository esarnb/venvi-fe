import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import "./style.css";

const images1 = [
  {
    url: 'https://images01.oe24.at/Aventador_SVJ-roadster2.jpg/bigStory/374.840.502',
    title: 'Lambo',
    width: '40%',
  },
  {
    url: 'https://www.motorwerks.com/inventoryphotos/4857/wp1ab2ayxkda63292/ip/3.jpg?height=400',
    title: 'Porsche',
    width: '20%',
  },
  {
    url: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/03/21/105807049-1553189463674bugatti.530x298.jpg?v=1553189697',
    title: 'Bugatti',
    width: '40%',
  },
];

const images2 = [
  {
    url: 'https://images01.oe24.at/Aventador_SVJ-roadster2.jpg/bigStory/374.840.502',
    title: 'Lambo',
    width: '36%',
  },
  {
    url: 'https://www.motorwerks.com/inventoryphotos/4857/wp1ab2ayxkda63292/ip/3.jpg?height=400',
    title: 'Porsche',
    width: '40%',
  },
  {
    url: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/03/21/105807049-1553189463674bugatti.530x298.jpg?v=1553189697',
    title: 'Bugatti',
    width: '24%',
  },
];

const images3 = [
  {
    url: 'https://images01.oe24.at/Aventador_SVJ-roadster2.jpg/bigStory/374.840.502',
    title: 'Lambo',
    width: '40%',
  },
  {
    url: 'https://www.motorwerks.com/inventoryphotos/4857/wp1ab2ayxkda63292/ip/3.jpg?height=400',
    title: 'Porsche',
    width: '20%',
  },
  {
    url: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/03/21/105807049-1553189463674bugatti.530x298.jpg?v=1553189697',
    title: 'Bugatti',
    width: '40%',
  },
];


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root} id = "popularSection">
      {images1.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}

      {images2.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
       {images3.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>

  );
}

export default ButtonBases;