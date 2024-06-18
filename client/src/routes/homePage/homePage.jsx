import "./homePage.scss";
import SearchBar from "../../components/searchBar/searchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Discover Your Dream Estate, Explore with Ease
          </h1>
          <p>
            Finding your perfect property should not be a chore. Explore our
            curated selection of exceptional estates with our user-friendly
            search tools. Whether you are seeking a charming farmhouse, a
            luxurious waterfront mansion, or a cozy mountain retreat, we have
            the dream estate waiting for you.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Expertise</h2>
            </div>
            <div className="box">
              <h1>100</h1>
              <h2>Prestigious Awards</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./estate5.jpg" alt="background" />
      </div>
    </div>
  );
};

export default HomePage;
