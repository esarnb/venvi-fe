import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import UserProfile from '../components/UserProfile';
import ListCard from '../components/ListCard';


class Profile extends React.Component {
render () {    
  return (
    <div>

        <Container>
        <UserProfile/>
        <ListCard/>
        </Container>
    </div>
  );
}
}

export default Profile;