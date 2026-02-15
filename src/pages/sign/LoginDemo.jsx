import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const LoginDemo = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert("Login Succesfully Done!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="m-5 p-5">
      <button className="bg-primary px-4 text-white " onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginDemo;
