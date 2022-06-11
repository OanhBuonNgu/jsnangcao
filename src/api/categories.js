import api from './axios';

const prefix = '/categories';

export const getCategories = () => api.get(prefix);

export const getCategorie = (id) => api.get(`${prefix}/${id}`);

export const deleteCategories = (id) => api.delete(`${prefix}/${id}`);


//phương thức post của axios nhận 2 tham số là andpoint và dữ liệu

export const createCategories = (data) => api.post(prefix, data);

export const editCategories = (data, id) => api.put(`${prefix}/${id}`, data);