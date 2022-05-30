import { news } from '../new-data';

const News = {
        render: () =>
            `<div>
        ${news.map((tin) => (
            `<div>
                ${tin.content}
            </div>`
        )).join('')
    }</div>`,

    // render: function () {
    //     let string = '<div>';

    //     for(let i = 0; i < tintuc.length; i++) {
    //         string += '<div>';
    //         string += tintuc[i].content;
    //         string += '</div>';
    //     }

    //     string += '</div>';

    //     return string;
    // }
};

export default News;