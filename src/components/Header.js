import Nav from './Nav';

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
                            <a class="nav-link" href="/news">Tin Tức</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nổi Bật</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Liên Hệ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hỗ Trợ</a>
                        </li>
                    </ul>
                    <!-- Left links -->
                </div>
                <!-- Collapsible wrapper -->
    
                <!-- Right elements -->
                <div class="d-flex align-items-center">
                    <ul class="navbar-nav me-auto mb-5 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Đăng Nhập</a>
                        </li>
                
                        <li class="nav-item">
                            <a class="nav-link" href="#"> Facebook</a>
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