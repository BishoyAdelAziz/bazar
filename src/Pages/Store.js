import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { fst } from "../firebaseconfig";

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductAdd from "../Components/ProductAdd";

function Store() {
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("كل شيء");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(fst, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSection =
      selectedSection === "كل شيء" || product.prSection === selectedSection;
    const matchesSearch = product.prName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSection && matchesSearch;
  });

  // Small Screen
  const [, setIsSmallScreen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth >= 900);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />

      <div className="store">
        <div className="container">
          {/* <div className='options'>
                        <div className='types'>
                            <div>
                                <img src={require('../Images/store/android.png')} alt="android" />
                            </div>
                            <div>
                                <img src={require('../Images/store/apple.png')} alt="apple"/>
                            </div>
                            <div>
                                <img src={require('../Images/store/playstation.png')} alt="playstation" />
                            </div>
                            <div>
                                <img src={require('../Images/store/xbox.png')} alt="xbox" />
                            </div>
                            <div>
                                <img src={require('../Images/store/gaming.png')} alt="gaming" />
                            </div>
                            <div>
                                <img src={require('../Images/store/laptop.png')} alt="laptop" />
                            </div>
                            <div>
                                <img src={require('../Images/store/camera.png')} alt="camera" />
                            </div>
                            <div>
                                <img src={require('../Images/store/smartwatch.png')} alt="smartwatch" />
                            </div>
                        </div>

                        <div className='towns'>
                            <h3>البحث حسب المنطقة</h3>
                            <select>
                                <option>الشمال</option>
                                <option>حيفا</option>
                                <option>الوسط</option>
                                <option>القدس</option>
                                <option>الجنوب</option>
                            </select>
                        </div>
                    </div> */}

          <div className="sections-products">
            <div className="search-add">
              <div className="search">
                <button>
                  <img
                    src={require("../Images/icons/search-white.png")}
                    alt="search"
                  />
                </button>
                <input
                  type="text"
                  placeholder="عن ماذا تبحث؟"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Link to={"/AddProduct"}>
                <div className="add btn">
                  <p>اضف منتجك</p>
                  <img src={require("../Images/icons/plus.png")} alt="plus" />
                </div>
              </Link>
            </div>

            <div className="sectionsList">
              <ul>
                <li onClick={() => handleSectionClick("everything")}>
                  <img
                    src={require("../Images/store/everything.png")}
                    alt="everything"
                  />
                  <h3>كل شيء</h3>
                </li>
                <li onClick={() => handleSectionClick("الكترونيات")}>
                  <img
                    src={require("../Images/store/electronics.png")}
                    alt="electronics"
                  />
                  <h3>الكترونيات</h3>
                </li>
                <li onClick={() => handleSectionClick("اثاث")}>
                  <img
                    src={require("../Images/store/furniture.png")}
                    alt="furniture"
                  />
                  <h3>اثاث</h3>
                </li>
                <li onClick={() => handleSectionClick("مطبخ")}>
                  <img
                    src={require("../Images/store/kitchen.png")}
                    alt="kitchens"
                  />
                  <h3>مطبخ</h3>
                </li>
                <li onClick={() => handleSectionClick("رياضة")}>
                  <img
                    src={require("../Images/store/sport.png")}
                    alt="sports"
                  />
                  <h3>رياضة</h3>
                </li>
                <li onClick={() => handleSectionClick("حيوانات")}>
                  <img
                    src={require("../Images/store/animals.png")}
                    alt="animals"
                  />
                  <h3>حيوانات</h3>
                </li>
                <li onClick={() => handleSectionClick("كتب")}>
                  <img src={require("../Images/store/book.png")} alt="books" />
                  <h3>كتب</h3>
                </li>
                <li onClick={() => handleSectionClick("ملابس")}>
                  <img
                    src={require("../Images/store/clothes.png")}
                    alt="clothes"
                  />
                  <h3>ملابس</h3>
                </li>
                <li onClick={() => handleSectionClick("العاب")}>
                  <img src={require("../Images/store/toys.png")} alt="toys" />
                  <h3>العاب و اطفال</h3>
                </li>
                <li onClick={() => handleSectionClick("دراجات")}>
                  <img
                    src={require("../Images/store/bicylce.png")}
                    alt="bicycles"
                  />
                  <h3>دراجات</h3>
                </li>
                <li onClick={() => handleSectionClick("سيارات")}>
                  <img src={require("../Images/store/car.png")} alt="cars" />
                  <h3>مستلزمات السيارات</h3>
                </li>
                <li onClick={() => handleSectionClick("معدات")}>
                  <img src={require("../Images/store/tools.png")} alt="tools" />
                  <h3>معدات</h3>
                </li>
              </ul>
            </div>

            <div className="products">
              {(selectedSection === "everything" ? products : filteredProducts)
                .length > 0 ? (
                (selectedSection === "everything"
                  ? products
                  : filteredProducts
                ).map((product) => (
                  <ProductAdd
                    key={product.id}
                    name={product.prName}
                    price={product.prPrice}
                    location={product.prLocation || "القدس"}
                    seller={product.prSeller || "اسم البائع هنا"}
                    image={product.prImg1 || "default-image-path"}
                    product={product}
                    section={product.prSection}
                  />
                ))
              ) : (
                <p className="no-products">
                  لا توجد منتجات في قسم <b>ال{selectedSection}</b>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Store;
