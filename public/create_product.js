      const bindProductForm = () => {
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

              performCreate(`/api/productos`, { name, description, code, price, stock, photo_url})
              .then((data) => {
                window.location.href = `/index.html?is_admin=${is_admin()}`;
              });
            }
          });
      }

      const showProductForm = () => {
        fetch('/product_form.hbs')
        .then(response => response.text())
        .then(templateStr => {
          const template = Handlebars.compile(templateStr); // compila la plantilla
          const html = template({}); // genera el html
          document.getElementById("divCreateProduct").innerHTML = html; // inyecta el html
          bindProductForm();
        });
      }

      if(is_admin()){
        showProductForm();
      }


  

     