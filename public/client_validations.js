
function validateForm() {
    let name = document.forms["product_form"]["name"].value;
    if (!name) {
      alert("Ingrese el nombre del producto");
      return false;
    }

    let description = document.forms["product_form"]["description"].value;
    if (!description) {
      alert("Ingrese la descripción del producto");
      return false;
    }

    let code = document.forms["product_form"]["code"].value;
    if (!code) {
      alert("Ingrese el código del producto");
      return false;
    }

    let price = document.forms["product_form"]["price"].value;
    if (!price) {
      alert("Ingrese el precio del producto");
      return false;
    }

    let stock = document.forms["product_form"]["stock"].value;
    if (!stock) {
      alert("Ingrese el stock del producto");
      return false;
    }

    let photo_url = document.forms["product_form"]["photo_url"].value;
    if (!photo_url) {
      alert("Ingrese la url de la foto del producto");
      return false;
    }
    
    return true;
  }
  
