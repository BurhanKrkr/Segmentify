$.getJSON("product-list.json", function custom(data) {
  var content = document.getElementById("content");
  var recommendedProducts =
    data["responses"][0][0]["params"]["recommendedProducts"];
  var productshtml = "";
  for (var i = 0; i < 20; i++) {
    var image =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
      ][i]["image"];
    var name =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
      ][i]["name"];
    var price =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
      ][i]["price"];
    var free =
      data["responses"][0][0]["params"]["recommendedProducts"][
        "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
      ][i]["params"]["shippingFee"];
    free = "Ücretsiz Kargo";
    name = name.substring(0, 65) + "...";
    productshtml +=
      "<div class='item'><div class='productSliderItem'>" +
      "<div class='productImageContainer'><img class = 'image' loading='lazy' style='width: 250px; height: 250px; border-bottom: 1px solid #D3D3D3; border-radius: 10px;' src='" +
      image +
      "''/></div>" +
      "<div style='width:250px; height:60px; color:black; margin-top: 10px;'>" +
      name +
      "</div>" +
      "<div style=' width:250px; border-radius:7px; height:40px; background-color: #DCDCDC;'>" +
      "<div class='price'>" +
      formatMoney(price) +
      "TL" +
      "</div>" +
      "</div>" +
      "<div style='height:40px; margin-top:10px;'><i class='fas fa-truck-moving' style='color:green;'></i>  " +
      free +
      "</div>" +
      "<button onclick='pop()' class='order-button'>Sepete Ekle</button>" +
      "</div>" +
      "</div>";
  }
  $("#productSliderContent").html(productshtml);
  $("#productSlider").multislider({
    interval: 500000,
    slideAll: true,
  });
});
