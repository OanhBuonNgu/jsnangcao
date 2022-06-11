import { getCategorie } from "../api/categories";

const CategoriesDetail = {
    render: async(id) => {
        const response = await getCategorie(id);
        const { data } = response; // const data = response.data;

        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
            </div>`
        );
    }
};

export default CategoriesDetail;