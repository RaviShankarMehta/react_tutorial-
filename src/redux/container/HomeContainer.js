import Home from "../component/Home";
import { connect } from "react-redux";
import { addToCart } from "../service/action/action";

const mapStateToProps = (state) => ({
    data:state.cardItems
});

const mapDispatchToPorps = (dispatch) => ({
    addToCartHandler:data=>dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToPorps)(Home);
