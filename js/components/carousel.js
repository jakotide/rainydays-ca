const carousel = document.querySelector(".carousel");
// firstImg = carousel.querySelectorAll(".caro-container .wrapper .carousel .product-card")[0];
firstImg = carousel.querySelector(".carousel img");
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevPageY, prevScrollLeft, positionDiffX, positionDiffY;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    if(carousel.scrollLeft == 0) {
      arrowIcons[0].style.display = "none";
    }
    else {
      arrowIcons[0].style.display = "block";
    }
    if(carousel.scrollLeft == scrollWidth) {
      arrowIcons[1].style.display = "none";
    }
    else {
      arrowIcons[1].style.display = "block";
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 12;
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60);
    });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevPageY = e.pageY || e.touches[0].pageY;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiffX = (e.pageX || e.touches[0].pageX) - prevPageX;
  positionDiffY = (e.pageY || e.touches[0].pageY) - prevPageY;
  if (Math.abs(positionDiffX) > Math.abs(positionDiffY)) {
    carousel.scrollLeft = prevScrollLeft - positionDiffX;
  }
  showHideIcons();
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if(!isDragging) return;
  isDragging = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


