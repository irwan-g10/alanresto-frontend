import api from "../utils/api";

export const getAllFoods = () => api.get('/foods');

export const storeFood = (formData) => {
    return api.post('/foods', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}