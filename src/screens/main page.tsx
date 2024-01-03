import Footer from "../components/footer";
import NavB from "../components/nav";
import Card from "../components/product card";
import "../index.css";
import CarouselSlider from "../components/carouselSlider";
import SettingBar from "../components/settingBar";

const products = [
  { id: 1, name: "Product 1", price: 10, description: "asjbajdjashdahjdakd" },
  { id: 2, name: "Product 2", price: 20, description: "asjbajdjashdahjdakd" },
  { id: 3, name: "Product 3", price: 30, description: "asjbajdjashdahjdakd" },
  { id: 4, name: "Product 4", price: 40, description: "asjbajdjashdahjdakd" },
  { id: 5, name: "Product 5", price: 50, description: "asjbajdjashdahjdakd" },
];

const HomePage:any = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <NavB />
      </div>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="w-full mx-auto md:h-5/6">
            <CarouselSlider />
          </div>
          <div className=" sm:px-0 justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-900">محصولات</h1>
            <div className=" items-center  mt-6 flex overflow-x-auto w-full">
              {/* Product Cards */}
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
            <SettingBar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
