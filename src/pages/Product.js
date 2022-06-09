import { getProducts, deleteProduct } from "../api/product";
import reRender from '../helpers/reRender';

const Product = {
        render: async() => { // đã đóng ngoặc nhọn phải có return ở trong
                const response = await getProducts();
                // const data = response.data;
                const { data } = response;
                return `<div>
                <a href="/products/add">
                    <button class='btn btn-success'>Them</button>
                </a>
            ${  data.map((product) => (
                    `<div>
                        <div>ID: ${product.id}</div>
                        <div>Name: ${product.name}</div>
                        <div>Price: ${Number(product.price).toLocaleString('vi-VN',{style:'currency',currency:'VND'})}</div>
                        <div>Status: ${Number(product.status) == 1 ? 'Hien Thi' : 'An' }</div>
                        <div>
                            <a href="/products/${product.id}">
                                <button class='btn btn-info'>Chi tiet</button>
                            </a>
                            <a href="/products/edit/${product.id}">
                                <button class='btn btn-primary'>Sua</button>
                            </a>
                            <button
                                class='btn btn-danger'
                                data-id="${product.id}"
                                data-name="${product.name}"
                            >Xoa</button>
                        </div>
                    </div>`
                )).join('')
            }
        </div>`
    },
    afterRender: () => {
        // Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xoá
        // 1. Tìm toàn bộ nút xoá và thêm sự kiện click cho nó
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                // Tìm xem chúng ta muốn xoá thằng nào
                // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
                const btnId = btn.dataset.id;
                // Thực hiện xoá
                await deleteProduct(btnId);
                // window.location.reload();
                await reRender('#content', Product);
            });

        });
    }
};
export default Product;