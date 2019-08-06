
  import React from 'react';
  import Box from '@material-ui/core/Box';
  import ParallaxCarousel from './ParallaxCarousel';
  
  const data = [
    {
      id: 1,
      title: 'Huarache',
      subtitle: 'Gripp',
      image:
        // eslint-disable-next-line max-len
        'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media',
    },
    {
      id: 2,
      title: 'Air Max',
      subtitle: '270 P',
      image:
        // eslint-disable-next-line max-len
        'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media',
    },
    {
      id: 3,
      title: 'Air Max',
      subtitle: 'Deluxe',
      image:
        // eslint-disable-next-line max-len
        'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media',
    },
  ];
  
  const Demo = () => (
    <Box width={'100%'} maxWidth={840} mx={'auto'}>
      <ParallaxCarousel data={data} />
    </Box>
  )
  
  export default Demo;