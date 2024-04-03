import Products from "../Products/Products";
import "./Main.css";

const Main = () => {

    return (
        <div className="content">
            <h1 style={{ padding: "0 2rem" }}>Hot Products</h1>
            <Products/>
            <hr style={{margin: "0 2rem"}}/>
        </div>
    )
};

export default Main;