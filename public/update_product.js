
      const get_product_id = () => {
        const params = new URLSearchParams(window.location.search);
        let product_id = 0;
        for (const param of params) {
          if (param[0] == 'product_id') {
            product_id = param[1];
          }
        }
        return product_id;
      }


      const bindProductForm = (prdoduct_id) => {
        let productForm = document.getElementById('product_form');

        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
    
              let name = document.forms["product_form"]["name"].value;
              let description = document.forms["product_form"]["description"].value;
              let code = document.forms["product_form"]["code"].value;
              let price = document.forms["product_form"]["price"].value;
              let stock = document.forms["product_form"]["stock"].value;
              let photo_url = document.forms["product_form"]["photo_url"].value;
    

              performUpdate(`/api/productos/${prdoduct_id}`, { name, description, code, price, stock, photo_url})
              .then((data) => {
                window.location.href = `/index.html?is_admin=${is_admin()}`;
              });
            }
          });
      }

      const showProductForm = (product) => {
        fetch('/product_form.hbs')
        .then(response => response.text())
        .then(templateStr => {
          const template = Handlebars.compile(templateStr); // compila la plantilla
          const html = template({product}); // genera el html
          document.getElementById("divUpdateProduct").innerHTML = html; // inyecta el html
          bindProductForm(product.id);
        });
      }

      const getProductInfo = (id) => {
          performGet(`http://localhost:8080/api/productos/${id}`)
          .then((data) => {
            console.log(data);
            showProductForm(data);
          });
      }
            


      if(is_admin()){
        getProductInfo(get_product_id());
      }


  

     