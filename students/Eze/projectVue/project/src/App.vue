<template>
  <div id="app">
    <Header>
      <Search
              :text="searchText"
              @textChange="(value) => (searchText = value)"
      />
      <button
              type="button"
              class="cart-button"
              id =  "cart-icon-container"
              v-on:click="isCartVisible = !isCartVisible">
      <img id = "cart-icon" src = "./../public/image/cart-icon.png"
            alt = "cartimg">
      </button>
     <Cart
        v-if="isCartVisible"
        :cartGoods="cartGoods"
        @removeFromCart="removeFromCart"
      />
    </Header>
    <Error v-if="isError" />
    <GoodsList
            v-else
            @addToCart="addToCart"
            :filteredGoods="filteredGoods"
            emptyGoodsMessage="Товаров нет"
    />
  </div>
</template>

<script>
  import GoodsList from "./components/GoodsList.vue";
  import Header from "./components/Header.vue";
  import Search from "./components/Search.vue";
  import Cart from "./components/Cart.vue";
  import Error from "./components/Error.vue";
  const API =   "http://localhost:3000";

  export default {
    name: "App",
    components: {
      GoodsList,
      Header,
      Cart,
      Search,
      Error,
    },
    data() {
      return {
        goods: [],
        cartGoods: [],
        searchText: "",
        isCartVisible: false,
        isError: false,
      };
    },
    mounted() {
      this.fetchGoods();
      this.fetchCart();

    },
    methods: {
      fetchGoods() {
        fetch(`${API}/catalog`)
                .then((result) => {
                  return result.json();
                })
                .then((data) => {
                  this.goods = data;
                })
                .catch((err) => {
                  this.isError = true;
                  console.error(err);
                });
      },

      fetchCart() {
        fetch(`${API}/cart`)
                .then((result) => {
                  return result.json();
                })
                .then((data) => {
                  this.cartGoods = data;
                })
                .catch((err) => {
                 
                  console.error(err);
                });
      },


      addToCart(item) {
        
    
      fetch(`${API}/addToCart`, {
         method: "POST",
         body: JSON.stringify({ item }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          if (data.result) {
            const cartItem = this.cartGoods.find(({ id_product }) => id_product === item.id_product);
            if (cartItem !== undefined) {
                cartItem.quantity += 1;
            } else {
                this.cartGoods.push({ ...item, quantity: 1 });
            }
          } else {
            console.error("Can't add item to cart");
          }
        })
        .catch((err) => {
          console.error(err);
        });
                
      },

      removeFromCart(id) {
       fetch(`${API}/removeFromCart`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          if (data.result) {
            const index = this.cartGoods.findIndex(
              ({ id_product }) => id_product === id
            );
            if (index !== -1) {
              this.cartGoods.splice(index, 1);
            }
          } else {
            console.error("Can't remove item from cart");
          }
        })
        .catch((err) => {
          console.error(err);
        });
      },
      handleCartButtonClick() {
        this.isCartVisible = !this.isCartVisible;
      },
    },
    computed: {
      filteredGoods() {
        const regexp = new RegExp(this.searchText, "i");
        return this.goods.filter(({ product_name }) => regexp.test(product_name));
      },
    },
  };
</script>

<style>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: arial;
    position: relative;
    font-size: 16px;

    background-color: #f9fafc;
  }
  #cart-icon-container {
    top: 20px;
    right: 40px;
    cursor: pointer;
    width: 80px;
    height: 80px;
    border-style: none;
    border-radius: 50%;
    padding: 5px;
    vertical-align: middle;
    margin-right: 15px;
    background: #4a642e;
    right:50px;
  

  }

  
  #txt-heading {
    margin-top: 0px;
    background-color: rgba(224, 224, 224, 1);
    height: 37px;
    font-weight: lighter;

  }

  img.cart-item-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: #E0E0E0 1px solid;
    padding: 5px;
    vertical-align: middle;
    margin-right: 15px;
  }

  #product-grid {
    margin: 40px;
    width: 85%;
    text-align: center;
  }


  #product-grid .txt-heading {
    margin-bottom: 7px;
    margin-right: 105px;
  }





  .cart-action {
    cursor: pointer;
  }


  .goods-item {
    width: 200px;
    height: 200px;
    float: left;
    background: #ffffff;
    margin: 30px 30px 0px 0px;
    border: #E0E0E0 1px solid;
    text-align: center;

 }

  .btnAddAction {
    padding: 5px 10px;
    margin: 30px;
    background-color: #efefef;
    border: #E0E0E0 1px solid;
    color: #211a1a;
    text-decoration: none;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    bottom: 5px;
  }
  .goods-list {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>