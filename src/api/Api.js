// import axios from "axios"

// const api =  axios.create({
//     baseURL:"http://localhost:5000",
//     withCredentials:true,
//     headers :{
//         "Content-Type" : "multipart/form-data"
//     }
// });

// //creating test api
// export const testApi= () => api.get('/test')


// export const registerUserApi = (data) => api.post('/api/user/register', data);

// // creating login api
// export const loginUserApi =(data)=> api.post('api/user/login',data);

// export const saveContact=(data)=>api.post('/api/contact',data);
// export const rooms=(data)=>api.post('/api/rooms',data);

// export const createBooking = (data) => api.post('/api/bookings/booking', data);
// export const getBookings = () => api.get('/api/bookings/');



// //creating admin api

// export const addServiceApi = (data) => api.post('/api/services', data);

// export const addRoom=(data)=>api.post('api/room/createroom',data);
// export const uploadImage=(data)=>api.post('api/images/upload',data);


import axios from "axios"

const api =  axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
    headers :{
        "Content-Type" : "application/json"
    }
});

//creating test api
export const testApi= () => api.get('/test')


export const registerUserApi = (data) => api.post('/api/user/register', data);

// creating login api
export const loginUserApi =(data)=> api.post('api/user/login',data);

export const saveContact=(data)=>api.post('/api/contact',data);
export const rooms=(data)=>api.post('/api/rooms',data);

export const createBooking = (data) => api.post('/api/bookings/booking', data);
export const getBookings = () => api.get('/api/bookings/');

//creating admin api

export const addServiceApi = (data) => api.post('/api/services', data);
