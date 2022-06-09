import { getProduct } from "../api/product";

const ProductDetail = {
    render: async(id) => {
        const response = await getProduct(id);
        const { data } = response; // const data = response.data;

        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
                <div>Avatar: <img src='${data.avatar}'></div>
                <div>Price: ${Number(data.price).toLocaleString('vi-VN',{style:'currency',currency:'VND'})}</div>
                <div>Status: ${Number(data.status) == 1 ? 'Hien Thi' : 'An'}</div>
                <div>Description: ${data.description}</div>
            </div>`
        );
    }
};

export default ProductDetail;