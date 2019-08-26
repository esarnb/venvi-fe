
  import React from 'react';
  import Box from '@material-ui/core/Box';
  import ParallaxCarousel from './ParallaxCarousel';
  import './style.css';

  
  const data = [
    {
      id: 1,
      title: '2019 Porsche',
      subtitle: '911 GT3 RS',
      image:
        // eslint-disable-next-line max-len
        'https://di-uploads-pod15.dealerinspire.com/rusnakpasadenaporsche/uploads/2018/12/iris.png',
    },
    {
      id: 2,
      title: '2019 Mercedes',
      subtitle: 'GLA 250',
      image:
        // eslint-disable-next-line max-len
        'https://crls.io/s/evox%2Fcolor_2400_032_png%2FMY2019%2F13164%2F13164_cc2400_032_696.png/feature/n/mercedes-benz-gla.png',
    },
    {
      id: 3,
      title: '2019 Lambo',
      subtitle: 'GLA 250',
      image:
        // eslint-disable-next-line max-len
        'https://i.dlpng.com/static/png/4309176_preview.png',
    },
  ];
  
  const Demo = (props) => (
    <Box width={'100%'} maxWidth={840} mx={'auto'}>
      <ParallaxCarousel data={props.data} />
    </Box>
  )
  
  export default Demo;