import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Margherita",
      image:
        "https://placeralplato.com/files/2015/06/pizza-Margarita-640x480.jpg?width=1200&enable=upscale",
      taste: "Pomodoro, flor di latte, albahaca, aceite de oliva extra virgen.",
      price: 500.0,
      alt: "margherita",
    },
    {
      id: 2,
      title: "Marinara",
      image:
        "https://speisekarte.menu/storage/media/contributions/2213801/Pizza-Marinara.jpg",
      taste:
        "Pomodoro, ajo, oregano, parmigiano, aceite de oliva extra virgen.",
      price: 450.0,
      alt: "marinara",
    },
    {
      id: 3,
      title: "Mozzarella",
      image:
        "https://novecentoweb.com/images/made/local/images/main/171124-como-es-la-verdadera-pizza-napolitana_555_370_s_c1.jpg?v=1",
      taste: "Pomodoro, mozzarella, aceitunas, aceite de oliva extra virgen.",
      price: 450.0,
      alt: "mozzarella",
    },
    {
      id: 4,
      title: "Pepperoni",
      image:
        "https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale",
      taste:
        "Pomodoro, fior di latte, pepperoni, parmigiano, aceite de oliva extra virgen.",
      price: 550.0,
      alt: "pepperoni",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Seleccion item a cargar desde products
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //Ver si ya hay en el cart un item con el miso id
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 } //si hay un item con el mismo id se le suma a la cantidad
                : item
            )
          : [...state.cart, { ...item, qty: 1 }], //si no se agrega el item que previamente tomamos de products
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
