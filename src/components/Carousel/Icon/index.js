
  /**
   * Current VERSION v1.1
   *
   * vX.Y meaning
   * X = major changes ex. add/remove/rename some props/className,
   *     could affect other components
   * Y = minor changes ex. fix bug or internal logic, won't effect other component
   */
  import React from 'react';
  import cx from 'clsx';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import MuiIcon from '@material-ui/core/Icon';
  
  const injectColor = color => {
    if (
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary' ||
      color === 'action' ||
      color === 'error' ||
      color === ' disabled'
    ) {
      return color;
    }
    return undefined;
  };
  
  const useStyles = makeStyles(({ palette, transitions, spacing }) => {
    const invertedColor = 'white';
    return {
      root: {
        // STANDALONE
        verticalAlign: 'sub',
        '&.-push-left': {
          marginLeft: 1,
        },
        '&.-push-right': {
          marginRight: 1,
        },
        '&.-link': {
          cursor: 'pointer',
          '&:not([class*="-color"])': {
            // color: palette.text.primary,
          },
        //   transition: transitions.create(),
          '&:hover': {
            transform: 'scale(1.2)',
          },
        },
        // colors
        '&.-color-success': {
          color: '#28a745',
        },
        '&.-color-danger': {
          color: 'red',
        },
        '&.-inverted': {
          color: 'invertedColor',
        },
        // icon
        '& .MuiIcon--fa': {
          verticalAlign: 'unset',
          padding: 2,
          '&.svg-inline--fa': {
            width: '1em',
          },
        },
        '& i.MuiIcon--fa': {
          display: 'block',
          '&:before': {
            display: 'block',
            fontSize: 20,
          },
        },
        // -------------------------------
        // sizes
        '&.-size-small': {
          fontSize: 20,
          '& i.MuiIcon--fa:before': {
            fontSize: 16,
          },
        },
        '&.-size-big': {
          fontSize: 28,
          '& i.MuiIcon--fa:before': {
            fontSize: 24,
          },
        },
        '&.-size-large': {
          fontSize: 32,
          '& i.MuiIcon--fa:before': {
            fontSize: 28,
          },
        },
        // background
        '&[class*="-bg"]': {
          width: '1.5em',
          height: '1.5em',
          padding: '0.25em',
        },
        '&.-bg-default': {
          backgroundColor: 'grey',
        },
        '&.-bg-primary': {
          backgroundColor: 'blue',
          color: invertedColor,
        },
        '&.-bg-secondary': {
          backgroundColor: 'blue',
          color: invertedColor,
        },
        '&.-bg-danger': {
          backgroundColor: 'red',
          color: invertedColor,
        },
        '&.-bg-white': {
          backgroundColor: invertedColor,
        },
        '&.-bg-lightPrimary': {
          backgroundColor: 'lightgrey',
        },
        '&.-bg-lightSecondary': {
          backgroundColor: 'grey',
        },
        // shapes
        '&.-shape-square': {
          borderRadius: 0,
        },
        '&.-shape-circular': {
          borderRadius: '50%',
        },
        '&.-shape-round': {
          borderRadius: 4,
        },
  
        // COMBINATION
        '&.-bg-default.-link.-inverted': {
          color: 'blue',
        },
        '&.-link.-inverted:not([class*="-color"])': {
          color: invertedColor,
        },
      },
    };
  });
  
  const Icon = ({
    bgColor,
    className,
    children,
    color,
    fontAwesomeProps,
    icon,
    inverted,
    link,
    push,
    size,
    shape,
    ...props
  }) => {
    const mainIcon = children || icon;
    const classes = useStyles();
    return (
      <MuiIcon
        component={link ? 'a' : 'span'}
        {...props}
        className={cx(
          'MuiIcon-root',
          className,
          classes.root,
          bgColor && `-bg-${bgColor}`,
          color && `-color-${color}`,
          inverted && '-inverted',
          link && '-link',
          push && `-push-${push}`,
          shape && `-shape-${shape}`,
          size && `-size-${size}`,
        )}
        color={injectColor(color)}
      >
        {mainIcon.includes('fa-') ? (
          <i className={cx('MuiIcon--fa', mainIcon)} {...fontAwesomeProps} />
        ) : (
          mainIcon
        )}
      </MuiIcon>
    );
  };
  
  Icon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fontAwesomeProps: PropTypes.shape({}),
    icon: PropTypes.string,
    inverted: PropTypes.bool,
    link: PropTypes.bool,
    size: PropTypes.oneOf(['small', '', 'big', 'large']),
    color: PropTypes.oneOf([
      '',
      'inherit',
      'primary',
      'secondary',
      'action',
      'error',
      'disabled',
      // custom
      'danger',
      'success',
    ]),
    bgColor: PropTypes.oneOf([
      '',
      'default',
      'primary',
      'secondary',
      // custom
      'danger',
      'white',
    ]),
    shape: PropTypes.oneOf(['', 'square', 'circular', 'round']),
    push: PropTypes.oneOf(['', 'left', 'right']),
  };
  Icon.defaultProps = {
    bgColor: '',
    className: '',
    children: null,
    color: '',
    fontAwesomeProps: {},
    icon: '',
    inverted: false,
    link: false,
    push: '',
    size: '',
    shape: '',
  };
  
  export default Icon;
