import { Container, Content, Header, Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useState } from "react";
import NavB from "../components/nav";
import Footer from "../components/footer";
import Card from "../components/product card";

const AboutScreen: React.FC = () => {
  const styles = {
    marginBottom: 10,
  };
  const products = [
    { id: 1, name: "Product 1", price: 10, description: "asjbajdjashdahjdakd" },
    { id: 2, name: "Product 2", price: 20, description: "asjbajdjashdahjdakd" },
    { id: 3, name: "Product 3", price: 30, description: "asjbajdjashdahjdakd" },
    { id: 4, name: "Product 4", price: 40, description: "asjbajdjashdahjdakd" },
    { id: 5, name: "Product 5", price: 50, description: "asjbajdjashdahjdakd" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target && event.target.value) {
      setSearchTerm(event.target.value);
      console.log(searchTerm);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="">
        <Container>
          <Header>
            <NavB />
          </Header>
          <div>
            <Content classPrefix="" className="relative items-center lg:m-10 my-5">
              <InputGroup inside style={styles} className="flex items-center content-center m-4">
                <Input
                  placeholder="Search products..."
                  onChange={() => handleSearch(event)}
                />
                <InputGroup.Button>
                  <SearchIcon />
                </InputGroup.Button>
              </InputGroup>
                <h1 className="m-2 text-3xl font-bold text-gray-900">محصولات</h1>
              <div className="justify-center items-center border-4 border-solid border-violet-200 shadow-xl rounded-lg m-2">
                <div className=" items-center  mt-6 flex overflow-x-auto w-full">
                  {/* Product Cards */}
                  {filteredProducts.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
                </div>
              </div>
              <div className="mt-20">
                <h1>توضیحات</h1>
                <p className="m-2 text-3xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corporis aliquid? Assumenda sunt repellendus nisi veritatis qui est distinctio adipisci iste, delectus libero doloribus animi eius debitis fuga omnis consequuntur.
                </p>
              </div>
            </Content>
          
          </div>
          <Footer>
            {" "}
            <Footer />
          </Footer>
        </Container>
      </div>
    </>
  );
};

export default AboutScreen;
