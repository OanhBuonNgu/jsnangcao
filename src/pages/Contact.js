const ContactBook = {
    render: () => {
        return `
    <body class="antialiased">
        
        <div class="w-96 mx-auto">
        <div class="">
            <div class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg text-center hidden" role="alert" id="msg" >
                        
            </div>
            <h3 class="text-3xl  font-semibold mt-10 text-center ">LIÊN HỆ VỚI CHÚNG TÔI</h3>
            <div class=" mt-5 mb-10 place-items-center">
            <div class="w-full  bg-white ">
                <form class="" id= "add-form">
                <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Họ và tên</label>
                <input id="firstname" type="text" name="firstname" placeholder="Họ và tên"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                    <p class="text-red-500 small italic" id ="message_error1"></p>
                <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" type="email" name="email" placeholder="Email@gmail.com"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                    <p class="text-red-500 small italic" id ="message_error5"></p>
                <label for="address" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Địa chỉ</label>
                <input id="address" type="text" name="address" placeholder="Địa chỉ"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                <label for="phone_number" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Số điện
                    thoại</label>
                <input id="phone_number" type="text" name="phone_number" placeholder="Số điện thoại"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                    <p class="text-red-500 small italic" id ="message_error6"></p>
                <label for="content" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Nội dung</label>
                <textarea id="content" type="text" name="content" placeholder="Nội dung"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    cols="30" rows="5"></textarea>
                <button type="submit"
                    class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                    Gửi Nội dung
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981046052!2d105.74459305097496!3d21.03812778592458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1607409611787!5m2!1sen!2s"
        class="w-full" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
    </body>
</div>
        `;
    },
};

export default ContactBook;