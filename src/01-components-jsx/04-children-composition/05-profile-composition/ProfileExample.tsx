import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileFooter from './components/ProfileFooter';
import ProfileHeader from './components/ProfileHeader';

export default function ProfileExample() {
  return (
    <Profile>
      <ProfileHeader>Sarah Williams</ProfileHeader>
      <ProfileDetails>Software Engineer</ProfileDetails>
      <ProfileFooter>Contact Information</ProfileFooter>
    </Profile>
  );
}
