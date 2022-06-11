import { getCategories, deleteCategories } from "../api/categories";
import reRender from '../helpers/reRender';

const Categories = {
        render: async() => { // đã đóng ngoặc nhọn phải có return ở trong
                const response = await getCategories();
                // const data = response.data;
                const { data } = response;
                return `
                <a  href="/categories/add">
                    <button class='btn btn-success '>Thêm</button>
                </a>
                <div style = 'margin-top:50px;margin-bottom:100px;' class = "  flex justify-between flex-wrap ">
                
            ${  data.map((categories) => (
                    `<div style = 'margin-bottom:40px;'>
                        <div>ID: ${categories.id}</div>
                        <div>Name: ${categories.name}</div>
                        <div>
                            <a href="/categories/${categories.id}">
                                <button class='btn btn-info'>Chi Tiết</button>
                            </a>
                            <a href="/categories/edit/${categories.id}">
                                <button class='btn btn-primary'>Sửa</button>
                            </a>
                            <button
                                class='btn btn-danger'
                                data-id="${categories.id}"
                                data-name="${categories.name}"
                            >Xoa</button>
                        </div>
                    </div>
                    
                    
                    `
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
                await deleteCategories(btnId);
                // window.location.reload();
                await reRender('#content', Categories);
            });

        });
    }
};
export default Categories;