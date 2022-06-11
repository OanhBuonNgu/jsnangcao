import { createCategories } from '../api/categories';
const CategoriesAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input type='text' class='form-control' id='name' />
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
            const submitData = { name, id };
            console.log(submitData);
            await createCategorie(submitData);
            window.location.replace('/categories');
        });
    }
};



export default CategoriesAdd;