import api from './axios';

const prefix = '/students';

export const getStudents = () => api.get(prefix);

export const getStudent = (id) => api.get(`${prefix}/${id}`);

export const deleteStudent = (id) => api.delete(`${prefix}/${id}`);


//phương thức post của axios nhận 2 tham số là andpoint và dữ liệu

export const createStudent = (data) => api.post(prefix, data);


export const updateStudent = (id, data) => api.put(`${prefix}/${id}`, data);