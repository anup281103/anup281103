import axios from "axios";

export const getProducts = () => {
  return axios.get("/api/products");
};

export const createProduct = (product) => {
  return axios.post("/api/products", product);
};

export const updateProduct = (id, product) => {
  return axios.put(`/api/products/${id}`, product);
};

export const deleteProduct = (id) => {
  return axios.delete(`/api/products/${id}`);
};

src / reducers / productReducer.js;

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "CREATE_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
