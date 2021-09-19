import * as axios from 'axios';

const instanse = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "bbe2716a-fdf3-4aa2-aa7d-154ac621832f"
   }
}); 

export const userAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },

   follow(userId) {
      return instanse.post(`follow/${userId}`);
   },
   
   unFollow(userId) {
      return instanse.delete(`follow/${userId}`);
   },

   getProfile(userId) {
      return instanse.get(`profile/${userId}`);
   }
};



export const profileAPI = {
   getProfile(userId) {
      return instanse.get(`profile/${userId}`);
   },

   getStatus(userId) {
      return instanse.get(`profile/status/${userId}`);
   },

   updateStatus(status) {
      return instanse.put(`profile/status`, { status });
   }
};



export const authAPI = {
   me() {
      return instanse.get(`auth/me`);
   },

   login(email, password, rememberMe = false) {
      return instanse.post(`auth/login`, { email, password, rememberMe });
   },

   logout() {
      return instanse.delete(`auth/login`);
   }
};