


      const get_cart_id = () => {
        const params = new URLSearchParams(window.location.search);
        let cart_id = 0;
        for (const param of params) {
          if (param[0] == 'cart_id') {
            cart_id = param[1];
          }
        }
        return cart_id;
      }
  


   

      const showCart = (cartId) => {
        console.log("cartId:", cartId);
        
        fetch(`/api/carrito/${cartId}/productos`)
        .then(response => response.json())
        .then(products => {
            // fetch template from server
            fetch('/cart.hbs')
                .then(response => response.text())
                .then(templateStr => {
                const template = Handlebars.compile(templateStr); // compila la plantilla
                const html = template({products}); // genera el html
                document.getElementById("divCart").innerHTML = html; // inyecta el html
                });
        });     
        
      }

      const deleteProductFromCart = (productId) => {
        const cartId = get_cart_id();
        performDelete(`/api/carrito/${cartId}/productos/${productId}`)
        .then((data) => {
            showCart(cartId);
        });
      }

      const deleteCart = () => {
        const cartId = get_cart_id();
        performDelete(`/api/carrito/${cartId}`)
        .then((data) => {
            window.location.href = `/index.html?is_admin=${is_admin()}`;
        });
    }


    const volverAListadoProductos = () => {
        window.location.href = `/index.html?is_admin=${is_admin()}&cart_id=${get_cart_id()}`;
    }


      showCart(get_cart_id());

      
      
      

  

     