import { createProduct } from '../api/product';
const ProductAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input type='text' class='form-control' id='name' />
                    </div>
                    <div class='form-group'>
                        <label>Avatar</label>
                        <input type='file' class='form-control' id='avatar' />
                    </div>
                    <div class='form-group'>
                        <label>Price</label>
                        <input type='number' class='form-control' id='price' />
                    </div>
                    <div class='form-group'>
                        <label>Status</label>
                        <select class='form-control' name="" id="status">
                            <option value="1">Hien Thi</option>
                            <option value="0"> An </option>
                        </select>
                    </div>
                    <div class='form-group'>
                        <label>Description</label>
                        <textarea class='form-control' name="" id='description' cols="30" rows="10"></textarea>
                    </div>
                    <br>
                    <div class='form-group'>
                        <button type='button' class='btn btn-success'>Tạo mới</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn-success');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const avatar = document.querySelector('#avatar').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').value;
            const description = document.querySelector('#description').value;


            const submitData = { name, avatar, price, status, description };
            console.log(submitData);
            await createProduct(submitData);
            window.location.replace('/products');
        });
    }
};



export default ProductAdd;