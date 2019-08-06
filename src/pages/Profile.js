import React from 'react';
import Container from '../components/Container';
import UserProfile from '../components/UserProfile';
import ListCard from '../components/ListCard';

//Component
class Profile extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <UserProfile />
          <ListCard />
        </Container>
      </div>
    );
  }
}

export default Profile;