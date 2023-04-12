addEventListener("DOMContentLoaded", (event) => {
    const menuBtn = document.getElementById("mobile-menu");
    const menuBtnClose = document.getElementById("mobile-menu-close");
    const sideBar = document.getElementById("side-bar");
    const siteWrapper = document.querySelector(".site-wrapper");

    const priceOptions = document.querySelectorAll("input[name='pricing-options']");
    const priceValues = document.querySelectorAll(".pricing-column__price");

  menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle('open');
    siteWrapper.classList.toggle("open");
    const newDiv = document.createElement("div");
    newDiv.classList.add('mobile-overlay');
    document.body.appendChild(newDiv);

    if (newDiv) {
      newDiv.addEventListener("click", () => {
        sideBar.classList.remove("open");
        siteWrapper.classList.remove("open");
        document.querySelector(".mobile-overlay").remove();
      });
    }
  });

  menuBtnClose.addEventListener("click", () => {
    sideBar.classList.remove("open");
    siteWrapper.classList.remove("open");
    document.querySelector('.mobile-overlay').remove();
  });


  priceOptions.forEach((elem) => {
    //  if (elem.checked) {
    //    console.log(elem.value + " da dc check");
    //  }

     elem.addEventListener("change", () => {
        const currentPriceVal = elem.innerHTML;
            priceValues.forEach((price) => {
                if (elem.value === 'Yearly') {
                    const priceVal = price.dataset.yearly;
                    price.innerHTML = priceVal + "<small>/ yearly</small>";
                } else {
                    const priceVal = price.dataset.monthly;
                    price.innerHTML = priceVal + "<small>/ monthly</small>";
                }
            });
     });
  });

});

