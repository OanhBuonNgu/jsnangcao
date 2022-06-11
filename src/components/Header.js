import Nav from './Nav';
import Cart from './Cart';
// import Contact from '../pages/Contact';

const HeaderB = {
    render: () =>
        `
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- Container wrapper -->
            <div class="container-fluid">
                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                  </button>
    
                <!-- Collapsible wrapper -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Navbar brand -->
                    <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo" loading="lazy" />
                    </a>
                    <!-- Left links -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Trang Chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/categories">Danh Mục</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sách Nổi Bật</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contacts">Liên Hệ</a>
                        </li>
                    </ul>
                    <!-- Left links -->
                </div>
                <!-- Collapsible wrapper -->
                
                <!-- Right elements -->
                <div class="flex-1 flex items-center">
                    <div class="relative hidden md:block">
                        <input type="search"
                            class="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                            placeholder="Search">
                        <svg class="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <!-- share -->
                <div class="flex-1 flex justify-center items-center justify-around">
                    <div class="flex uppercase ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20px">
                        <path
                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <a  href="/cart-detail" class="text-black hover:text-black font-medium" >Giỏ Hàng</a>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    
                    <ul class="navbar-nav me-auto mb-5 mb-lg-0">
                        <li class="nav-item">
                            <a  class="nav-link" href="#" style='color: red;' >Đăng Nhập</a>
                        </li>
                
                        <li class="nav-item">
                            <a  class="nav-link" href="#" style='color: red;'> Facebook</a>
                        </li>
                    </ul>
                </div>
                <!-- Right elements -->
            </div>
            <!-- Container wrapper -->
        </nav>
       
        <!-- Navbar -->
        
        `,
};

const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    render: (name = 'WE17101') =>
        `<div>
            <h1>${name}</h1>
            <div>${Nav.render ()}</div>
        </div>`,
    // sau mũi tên là ngoặc tròn -> return kết quả
};


export default HeaderB;