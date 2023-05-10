import axios from "axios"
import { getUserDataFromLocalStorage } from "../../Components/Utility/utility";

export const getProfileById= (data) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('userCredential')).token
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/profile/profilebyuser/${data}`,
           {
            headers:{
                "Accept-Language": "en",
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
            }
      })
      console.log(response.data, "<<<<<<<<<<????????");
        dispatch({
            type: 'GET_PROFILE_DETAILS',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}

// export const addProfile= (data) => async (dispatch) => {
//     try{
//         const response = await axios.get(`http://3.233.82.34:8080/api/profile/profilebyuser/${data}`,
//            {
//         headers: {
//           "Accept-Language": "us",
//           "Content-Type": "application/json",
//           'Authorization': `Bearer ${getUserDataFromLocalStorage().token}`
//         },
//       })        ;
//         console.log(response);
//         dispatch({
//             type: 'GET_PROFILE_DETAILS',
//             payload: response.data
//         })
//     }catch(error){

//         throw error
//     }
// }


export const getFollowing = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/follow/following/${data}`)        ;
        dispatch({
            type: 'GET_FOLLOWING',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const getFollower = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/follow/follower/${data}`,
           {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${getUserDataFromLocalStorage().token}`
        },
      })
        dispatch({
            type: 'GET_FOLLOWER',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const getBlockedList= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/getblockedlistprofile/${data}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getBlockedProfile = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/getblockedlistprofile/${data}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const checkFriend = (data) => async (dispatch) => {
  const { ownProfileId , othersProfileId } = data
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/chkfriends/${ownProfileId}/${othersProfileId}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getPrivacyDetail= (data) => async (dispatch) => {
  const othersId = data;
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/profile/privacy/${othersId}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}




export const getFRlist = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/getprofileidwithdetail/${data}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}



export const checkFollowing = (data) => async (dispatch) => {
  const { ownProfileId, othersProfileId} = data
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/follow/followyesno/${ownProfileId}/${othersProfileId}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const startFollowing = (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/friend/api/follow/add`, data);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}


export const updateProfile= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/profile/update`, data);
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}
// ------------- Education api ----------------------------

export const addGraduation= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/graduation/addgraduations`, data);
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}

export const getGraduationList= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/profile/api/graduation/graduation`
        );
        console.log(response);
        dispatch({
          type: "GET_UG_DEGREE",
          payload: response.data,
        });
    }catch(error){
        throw error
    }
}

export const graduationBranch= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/graduation/graduations/BA`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const addPg= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/pg/addpostgraduation`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}
export const getPgList= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/pg/postgraduation`);
        console.log(response);
        dispatch({
            type: 'GET_PG_LIST',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const pgBranch= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/pg/postgraduation`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const addEducation= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/education/add`, data);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}
export const updateEducation= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/education/update`, data);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}

export const getEducationDetail= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/education/educationbyuser/${data}`);
        console.log(response);
        dispatch({
            type: 'GET_SCHOOL_DETAIL',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}

export const getProfileByEducation= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/education/searchby/schooladd`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

// ---------------------- get friends api ---------------------------
export const getSchoolmet= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/education/getschoolfriends`, data);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const getUGfriends= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/education/getugfriends`, data);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}
export const getPGfriends= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/education/getpgfriends`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

// export const = (data) => async (dispatch) => {
//     try{
//         const response = await axios.get(``);
//         console.log(response);
//         dispatch({
//             type: '',
//             payload: response.data
//         })
//     }catch(error){
//         throw error
//     }
// }