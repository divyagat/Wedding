import Category from "./CategoryPage";


function Home() {

    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="src/Components/Componentsimg/image 1.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="src/Components/Componentsimg/image 1.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="src/Components/Componentsimg/image 1.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            {/* Wedding Cards Section */}
            <Category />

            {/* Products Section */}

            {/* About Us Section */}

            {/* Gallery Section */}


        </>

    )
} export default Home;