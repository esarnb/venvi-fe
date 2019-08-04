import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import UserProfile from '../components/UserProfile';
import PostCard02 from '../components/ListCard';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import createOverrides from '../components/ListCard/';


const baseTheme = createMuiTheme();


class Profile extends React.Component {
render () {    
  return (
    <div>

        <Container>
        <UserProfile/>
        <ThemeProvider
        theme={{
        ...baseTheme,
        overrides: createOverrides(baseTheme)
        }}
        >
        <PostCard02/>
        </ThemeProvider>
        </Container>
    </div>
  );
}
}

export default Profile;