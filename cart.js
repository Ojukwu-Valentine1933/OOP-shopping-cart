document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Retrieve item count and total price from localStorage
  var itemCount = localStorage.getItem("total");
  var totalPrice = localStorage.getItem("quantity");
  var getProductTitle = localStorage.getItem("productname");
  var productColor = localStorage.getItem("productColor");

  console.log("Retrieved itemCount:", itemCount);
  console.log("Retrieved totalPrice:", totalPrice);

  if (itemCount !== null && totalPrice !== null) {
    document.getElementById("product-title").innerText = getProductTitle;
    document.getElementById("itemCountDisplay").innerText = totalPrice;
    document.getElementById(
      "totalPriceDisplay"
    ).innerText = `$ ${itemCount}.00`;

    if (productColor) {
      document.getElementById("color-box-display").style.backgroundColor =
        productColor;
    }
  } else {
    console.log("itemCount or totalPrice is null");
  }

  // Populate the location dropdown
  const getLocation = () => {
    const locations = [
      "Abuja",
      "Asaba",
      "Port Harcourt",
      "Lagos",
      "Imo",
      "Anambra",
    ];
    const locationInput = document.getElementById("location-input");
    const calculateLocationFee = () => {
      const location = locationInput.value;
      let locationFee = 0;
      if (location === "Abuja") {
        locationFee = 10;
      } else if (location === "Asaba") {
        locationFee = 50;
      } else if (location === "Port Harcourt") {
        locationFee = 50;
      } else if (location === "Lagos") {
        locationFee = 20;
      } else if (location === "Imo") {
        locationFee = 35;
      } else if (location === "Anambra") {
        locationFee = 35;
      }
      document.getElementById("display-delivery-fee").innerHTML =`$ ${locationFee}`;
      return locationFee;
    };
    const typingDelay = 500;
    let typingTimeout;
  
    locationInput.addEventListener("input", () => {
      clearTimeout(typingTimeout); // Clear the timeout if the user types again within the delay time
      typingTimeout = setTimeout(() => {
        // Action to take when user is done typing
        calculateLocationFee();
      }, typingDelay);
    });
  };
  
  getLocation();
  
});
