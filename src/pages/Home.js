const Home = {
    render: () =>
        `
    <!--Main Navigation-->
    <header>
    
      <!-- Navbar -->
      <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-black">
        <!-- Container wrapper -->
      </nav>
      <!-- Navbar -->
    
      <!-- Heading -->
      <div class="p-5 bg-light mb-4">
        <h1 class="">Trang Chủ</h1>
        <!-- Breadcrumb -->
        <nav class="d-flex">
          <h6 class="mb-0">
            <a href="" class="text-reset">Home</a>
            <span>/</span>
            <a href="" class="text-reset">Danh Mục </a>
            <span>/</span>
            <a href="" class="text-reset">Sách Nổi Bật</a>
          </h6>
        </nav>
        <!-- Breadcrumb -->
      </div>
      <!-- Heading -->
      <div class="slide">
        <div id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img data-src="holder.js/900x500/auto/#777:#555/text:First slide"
              src="https://bizweb.dktcdn.net/100/345/647/themes/710110/assets/slider_3.png?1593244016703"
              alt="First slide">
          </div>
          <div class="carousel-item">
            <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide"
              src="https://bizweb.dktcdn.net/100/345/647/themes/710110/assets/slider_2.png?1593244016703"
              alt="Second slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    </header>
    <!--Main Navigation-->
    
    
                    
    `
};

export default Home;