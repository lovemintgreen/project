//首頁彈窗廣告
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

setTimeout(function() {
  modal.style.display = "block";
}, 2000);


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





var Inf = document.getElementById("sectionInf");
console.log(Inf);

function notic() {
    Inf.innerHTML = "本賣場由蝦皮代開發票<br>台灣合法公司登記<br>公司抬頭：小吉企業社<br>統一編號：92305182<br>請大家放心購買!!"
}
function sizeInf() {
    Inf.innerHTML = "<table><tr><th>M</th><td>衣長</td><td>70</td><td>肩寬</td><td>47</td><td>胸圍</td><td>104</td><td>袖長</td><td>20</td></tr><tr><th>XL</th><td>衣長</td><td>74</td><td>肩寬</td><td>50</td><td>胸圍</td><td>110</td><td>袖長</td><td>22</td></tr><tr><th>XL</th><td>衣長</td><td>76</td><td>肩寬</td><td>53</td><td>胸圍</td><td>116</td><td>袖長</td><td>24</td></tr></table>"
}


// 定義變數名稱
let decreaseButton = document.getElementById('decreaseQuantity');
let increaseButton = document.getElementById('increaseQuantity');
let quantityInput = document.getElementById('productQuantity');
let addToCartButton = document.getElementById('addToCartBtn');

// 事件監聽器
decreaseButton.addEventListener('click', function () {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

increaseButton.addEventListener('click', function () {
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
});

addToCartButton.addEventListener('click', function () {
    let productQuantity = parseInt(quantityInput.value); // 獲取當前輸入的數量
    addToCartBtn(productQuantity);
});

// 模擬的加入購物車函數
function addToCartBtn(quantity) {
    console.log(`Added ${quantity} items to the cart.`);
}

// 購物車
document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("addToCartBtn");
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    const closeCartBtn = document.getElementById("closeCartBtn");

    // 這裡不再獲取尺寸，會在添加到購物車時獲取最新的尺寸
    var productName = document.getElementById("productName").innerHTML;
    var productPrice = document.getElementById("price").innerHTML;

    // 提取產品名稱及價格
    const product = {
        name: productName,
        price: parseInt(productPrice),
    };

    // Function to open the cart modal
    function openCartModal() {
        cartModal.style.display = "block";
    }

    // Function to close the cart modal
    closeCartBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Close the modal if user clicks outside of it
    window.addEventListener("click", (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = "none";
        }
    });

    // Function to add a product to the cart
    function addToCart() {
        const listItem = document.createElement("li");
        const productSize = document.getElementById("size").value; // 獲取最新的尺寸

        listItem.quantity = parseInt(quantityInput.value); // 使用輸入的數量

        const itemText = document.createElement("span");
        itemText.innerHTML = `${product.name}<br>尺寸:${productSize}<br>價格:${product.price.toFixed(0)}`;

        const quantitySpan = document.createElement("span");
        quantitySpan.classList.add("quantity");
        quantitySpan.textContent = `數量: ${listItem.quantity}`;
        
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("cart-item-buttons");

        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.addEventListener("click", () => {
            updateQuantity(listItem, 1);
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "-";
        removeButton.addEventListener("click", () => {
            updateQuantity(listItem, -1);
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("remove");
        deleteButton.textContent = "移除";
        deleteButton.addEventListener("click", () => {
            cartItems.removeChild(listItem);
        });

        buttonsDiv.appendChild(addButton);
        buttonsDiv.appendChild(removeButton);
        buttonsDiv.appendChild(deleteButton);
        listItem.appendChild(itemText);
        listItem.appendChild(quantitySpan);
        listItem.appendChild(buttonsDiv);

        cartItems.appendChild(listItem);
        openCartModal();
    }

    // Function to update the quantity of a product in the cart
    function updateQuantity(listItem, amount) {
        listItem.quantity += amount;

        if (listItem.quantity < 1) {
            cartItems.removeChild(listItem);
        } else {
            let newPrice = product.price * listItem.quantity;
            listItem.querySelector("span").innerHTML = `${product.name}<br>尺寸:${document.getElementById("size").value}<br>價格:${newPrice.toFixed(0)}`; // 更新尺寸
            listItem.querySelector(".quantity").textContent = `數量: ${listItem.quantity}`;
        }
    }

    // Add product to cart on button click
    addToCartBtn.addEventListener("click", addToCart);

    window.openCartModal = openCartModal;
});
