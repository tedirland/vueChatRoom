import { ref } from '@vue/reactivity';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error('could not complete the signup :(');
    }
    await res.user.updateProfile({ displayName: displayName });
    error.value = null;

    console.log(res.user);

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signUp };
};

export default useSignup;
