import { ref } from '@vue/reactivity';
import { projectAuth } from '../firebase/config';

const user = ref(projectAuth.currentUser);

//Method provided by firebase that runs a callback function each time the auth state changes
projectAuth.onAuthStateChanged(_user => {
  console.log('User state change. Current user is:', _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
