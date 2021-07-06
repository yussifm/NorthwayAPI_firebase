import { admin} from "../config/firebaseconfig";


const setAdminRole = (data) => {
    return admin.auth().getUserByEmail(data.email).then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true,
        });
    }).then(() => {
        return {
            message: `${data.email} is a admin`,
        
        }
    }).catch(error =>{return error})
}

export {setAdminRole}