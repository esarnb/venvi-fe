
  import React from 'react';
  import PropTypes from 'prop-types';
  import cx from 'clsx';
  import { makeStyles } from '@material-ui/core/styles';
  import Typography from '@material-ui/core/Typography';
  import ParallaxSlide from '../ParallaxSlide';
  import SimpleArrow from '../SimpleArrow';
  import DotIndicator from '../DotIndicator';
  
  const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    root: {
      // a must if you want to set arrows, indicator as absolute
      position: 'relative',
    },
    slide: {
      perspective: 1000, // create perspective
      overflow: 'hidden',
      // relative is a must if you want to create overlapping layers in children
      position: 'relative',
      paddingTop: spacing(8),
      [breakpoints.up('sm')]: {
        paddingTop: spacing(10),
      },
      [breakpoints.up('md')]: {
        paddingTop: spacing(14),
      },
    },
    imageContainer: {
      display: 'block',
      position: 'relative',
      zIndex: 2,
      paddingBottom: '56.25%',
    },
    image: {
      display: 'block',
      position: 'absolute',
      zIndex: 10,
      width: '57%',
      height: '64%',
      objectFit: 'cover',
      marginLeft: '45%',
      marginTop:'12%',
      borderRadius:'30%',
      [breakpoints.up('sm')]: {
        marginLeft: '4%',
      },
    },
    arrow: {
      display: 'none',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [breakpoints.up('sm')]: {
        display: 'inline-flex',
      },
    },
    arrowLeft: {
      left: 0,
      [breakpoints.up('lg')]: {
        left: -64,
      },
    },
    arrowRight: {
      right: 0,
      [breakpoints.up('lg')]: {
        right: -64,
      },
    },
    text: {
      // shared style for text-top and text-bottom
      fontFamily: 'Saira Stencil One, cursive',
      fontWeight: 900,
      position: 'absolute',
      color: 'white',
      padding: '0 8px',
      transform: 'rotateY(45deg)',
      lineHeight: 1.2,
      [breakpoints.up('sm')]: {
        padding: '0 16px',
      },
      [breakpoints.up('md')]: {
        padding: '0 24px',
      },
    },
    title: {
      top: 30,
      left: '20%',
      height: '60%',
      fontSize: 25,
      zIndex: 1,
      color: 'white',
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)',
      [breakpoints.up('sm')]: {
        top: 40,
        fontSize: 20,
      },
      [breakpoints.up('md')]: {
        top: 89,
        fontSize: 72,
      },
    },
    subtitle: {
      top: 60,
      left: '0%',
      height: '52%',
      fontSize: 56,
      zIndex: 2,
      color: 'white',
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)',
      [breakpoints.up('sm')]: {
        top: 112,
        left: '6%',
        fontSize: 66,
      },
      [breakpoints.up('md')]: {
        top: 150,
        fontSize: 74
      },
    },
    indicatorContainer: {
      textAlign: 'center',
    },
  }));
  
  const ParallaxCarousel = ({ data }) => {
    const classes = useStyles();
    const createStyle = (slideIndex, fineIndex) => {
      const diff = slideIndex - fineIndex;
      if (Math.abs(diff) > 1) return {};
      return {
        transform: `rotateY(${(-diff + 1) * 45}deg)`,
      };
    };
    // eslint-disable-next-line react/prop-types
    const renderElements = ({ index, onChangeIndex }) => (
      <>
        <SimpleArrow
          className={cx(classes.arrow, classes.arrowLeft)}
          direction={'left'}
          disabled={index === 0}
          onClick={() => onChangeIndex(index - 1)}
        />
        <SimpleArrow
          className={cx(classes.arrow, classes.arrowRight)}
          direction={'right'}
          disabled={index === data.length - 1}
          onClick={() => onChangeIndex(index + 1)}
        />
        <div className={classes.indicatorContainer}>
          {data.map(({ id }, i) => (
            <DotIndicator
              key={id}
              active={i === index}
              onClick={() => onChangeIndex(i)}
            />
          ))}
        </div>
      </>
    );
    const renderChildren = ({ injectStyle, fineIndex }) =>
      data.map(({ id, title, subtitle, image }, i) => (
        <div key={id} className={classes.slide}>
          <Typography id="title-text"
            noWrap
            className={cx(classes.text, classes.title)}
            style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
          >
            {title}
          </Typography>
          <Typography id="sub-text"
            noWrap
            className={cx(classes.text, classes.subtitle)}
            style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
          >
            {subtitle}
          </Typography>
          <div className={classes.imageContainer}>
            <img id="slide-pic" className={classes.image} src={image} alt={'slide'} />
          </div>
        </div>
      ));
    return (
      <div className={classes.root}>
        <ParallaxSlide renderElements={renderElements}>
          {renderChildren}
        </ParallaxSlide>
      </div>
    );
  };
  
  ParallaxCarousel.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.string,
      }),
    ),
  };
  ParallaxCarousel.defaultProps = {
    data: [],
  };
  
  export default ParallaxCarousel;