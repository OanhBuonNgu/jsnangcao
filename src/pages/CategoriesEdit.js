import { editCategories, getCategories } from '../api/categories';
const CategoriesEdit = {
    render: async(id) => {
        const response = await getCategories(id);
        const { data } = response;
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input type='text' class='form-control' id='name' value='${data.name}' />
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

            const submitData = { name, id };
            console.log(submitData);
            await editCategories(submitData, submitBtn.dataset.id);
            window.location.replace('/categories');
        });
    }
};



export default CategoriesEdit;