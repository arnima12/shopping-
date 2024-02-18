
fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(json => {
        const shopDiv = document.getElementById("shop");
        const cartDiv = document.getElementById("cart");

        json.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            const productTitle = document.createElement('h4');
            productTitle.textContent = product.title;
            productDiv.appendChild(productTitle)
            console.log(productDiv)
            const priceDiv = document.createElement('div');
            const productPrice = document.createElement('p');
            productPrice.textContent = "Price: " + '$' + product.price;
            priceDiv.appendChild(productPrice);
            console.log(priceDiv)
            productDiv.appendChild(priceDiv);
            const button = document.createElement('button');
            button.textContent = "Add to Cart";
            button.style.backgroundColor = '#3498db';
            button.style.color = '#ffffff';
            button.style.padding = '8px 16px';
            button.style.margin = '16px 0px'
            button.addEventListener('click', () => {

                const existingCartItem = Array.from(cartDiv.children).find(item => item.textContent === product.title);
                if (existingCartItem) {
                    alert(`Product "${product.title}" already added to cart`);
                } else {
                    alert(`Product "${product.title}" added to cart`);
                    const addToCartDiv = document.createElement('div');
                    addToCartDiv.textContent = product.title;

                    const removeButton = document.createElement('button');
                    removeButton.textContent = "Remove";
                    removeButton.style.backgroundColor = '#3498db';
                    removeButton.style.color = '#ffffff';
                    removeButton.style.padding = '8px 16px';
                    removeButton.style.margin = '0px 16px'
                    // Add event listener to the "Remove" button
                    removeButton.addEventListener('click', () => {
                        cartDiv.removeChild(addToCartDiv);
                    });

                    addToCartDiv.appendChild(removeButton);
                    cartDiv.appendChild(addToCartDiv);
                }


            });
            productDiv.appendChild(button);
            shopDiv.appendChild(productDiv);

        })
    })