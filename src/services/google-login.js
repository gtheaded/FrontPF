import { BACK_URL } from "../constantes";
import { updateUserState } from "../redux/action";
import axios from 'axios';



const getUser = async (setUsuario, usuario, dispatch) =>{
 const usuarie = await axios.get(`${BACK_URL}/auth/login/success`, {withCredentials: true,  headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
} })
console.log('<<<<<<<<<<<<<>>>>>>>>>>>user: ', usuarie)
dispatch(updateUserState({
  userName: "google:"+usuarie.data.user.id,
  defaultShippingAddress: usuarie.shipping,
  role: usuarie.role,
  billingAddress: usuarie.billingAddress,
  logged:true
}))
 console.log('<<<<<<<<<<<<<>>>>>>>>>>>user: ', usuarie)
}

export default getUser;


/* const getUser = (setUsuario, usuario, dispatch) => {
  fetch(`${BACK_URL}/auth/login/success`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      throw new Error("authentication has been failed!");
    })
    .then((resObject) => {
      localStorage.setItem("userName", "google:" + resObject.user.id);
      localStorage.setItem("defaultShippingAddress", resObject.shipping);
      localStorage.setItem("role", resObject.role);
      dispatch(updateUserState({
        userName: "google:"+resObject.user.id,
        defaultShippingAddress: resObject.shipping,
        role: resObject.role,
        billingAddress: resObject.billingAddress,
        logged:true
      }))
      setUsuario({
        ...usuario,
        signedIn: true,
        userId: resObject.user.id,
        fullName: resObject.user.displayName,
      });
    })
    .catch((err) => {
      // console.log(err);
    });
};

export default getUser; */
