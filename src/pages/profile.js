import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import UserProfile from '../components/UserProfile';


class Profile extends React.Component {

render () {
  return (
    <div>
        <NavBar/>
        <Container>
        <UserProfile/>
        </Container>
    </div>
  );
}
}

export default Profile;