import { editProduct, getProduct } from '../api/product';
const ProductEdit = {
    render: async(id) => {
        const response = await getProduct(id);
        const { data } = response;
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input type='text' class='form-control' id='name' value='${data.name}' />
                    </div>
                    <div class='form-group'>
                        <label>Avatar</label>
                        <input type='file' class='form-control' id='avatar'   />
                        <img src = '${data.avatar}' />
                    </div>
                    <div class='form-group'>
                        <label>Price</label>
                        <input type='number' class='form-control' id='price' value='${data.price}' />
                    </div>
                    <div class='form-group'>
                        <label>Status</label>
                        <select class='form-control' name="" id="status"  >
                            <option value="1" ${Number(data.status) == 1 ? 'selected' : ''} >Hien Thi</option>
                            <option value="0" ${Number(data.status) == 0 ? 'selected' : ''} > An </option>
                        </select>
                    </div>
                    <div class='form-group'>
                        <label>Description</label>
                        <textarea class='form-control' name="" id='description' cols="30" rows="10" >${data.name}</textarea>
                    </div>
                    <br>
                    <div class='form-group' >
                        <button type='button' data-id = '${data.id}' class='btn btn-primary'>OK</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn-primary');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const avatar = document.querySelector('#avatar').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').value;
            const description = document.querySelector('#description').value;


            const submitData = { name, avatar, price, status, description };
            console.log(submitData);
            await editProduct(submitData, submitBtn.dataset.id);
            window.location.replace('/products');
        });
    }
};



export default ProductEdit;