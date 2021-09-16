import * as axios from 'axios';

const instanse = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
}); 

export const userAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },

   follow(userId) {
      return instanse.post(`follow/${userId}`)
   },
   
   unFollow(userId) {
      return instanse.delete(`follow/${userId}`)
   },

   getProfile(userId) {
      return instanse.get(`profile/${userId}`)
   }
};

export const authAPI = {
   me() {
      return instanse.get(`auth/me`)
   }
};
