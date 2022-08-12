const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AIR LIGHT",
    price: 119,
    colors: [
      {
        code: "#9C8D7C",
        img: "./img/bags1.png",
      },
      {
        code: "#632324",
        img: "./img/bags2.png",
      },
    ],
  },
  {
    id: 2,
    title: "GIRLY LOOK",
    price: 149,
    colors: [
      {
        code: "#F85898",
        img: "./img/girl2.png",
      },
      {
        code: "#4D4D4D",
        img: "./img/girl1.png",
      },
    ],
  },
  {
    id: 3,
    title: "HANDBAG",
    price: 109,
    colors: [
      {
        code: "#C53744",
        img: "./img/hand1.png",
      },
      {
        code: "#343A55",
        img: "./img/hand2.png",
      },
    ],
  },
  {
    id: 4,
    title: "VIOLETTZ",
    price: 129,
    colors: [
      {
        code: "#984C54",
        img: "./img/vio2.png",
      },
      {
        code: "#920410",
        img: "./img/vio4.png",
      },
     
    ],
  },
  {
    id: 5,
    title: "SUMMERLOOK",
    price: 99,
    colors: [
      {
        code: "#DBC1A4",
        img: "./img/sum2.png",
      },
      {
        code: "#E7253A",
        img: "./img/sum1.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "rgb(37, 183, 220)";
    });
    size.style.backgroundColor = "rgb(37, 183, 220)";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const payed= document.querySelector(".payButton");
const joins= document.querySelector(".fButton");
const fin=document.querySelector(".fInput");
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
payed.addEventListener("click", () => {
  payment.style.display = "none";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
joins.addEventListener("click", () => {
  fin.value= "";
});