const mobile_menu_open = () => {
  let mobileMenu = document.getElementById("menu-screen-pop-up-mobile")
  mobileMenu.style = "opacity:1; z-index:1;";
  let headerBody = document.getElementById("web");
  headerBody.style = "opacity: 0; z-index: 0;";
  document.getElementById("menu-mobile").style = "display:none;"
  document.getElementById("menu-mobile-content").style = "display:none;"
}

const close_mobilemenu = () => {
  let mobileMenu = document.getElementById("menu-screen-pop-up-mobile")
  mobileMenu.style = "opacity:0; z-index:0;";
  let headerBody = document.getElementById("web");
  headerBody.style = "opacity:1; z-index:1;";
  document.getElementById("arr11").className = "mobile-arrow down"
  document.getElementById("arr21").className = "mobile-arrow down"
}

var direction = ""
var oldx = 0

mousemovemethod = function (e) {
  
  console.log('oldX = '+oldx);
  console.log('movementX = '+e.movementX);
  console.log('pageX = '+e.pageX);

  if (e.pageX < oldx) {
      direction = "left"
  } else if (e.pageX > oldx) {
      direction = "right"
  }
  
  oldx = e.pageX;  
}

swiper = function (e) {
  console.log("doc direction = "+direction);

  let radio1_checked = document.getElementById("radio1").getAttribute("checked","")==""?true:false;  
  let radio2_checked = document.getElementById("radio2").getAttribute("checked","")==""?true:false;  
  let radio3_checked = document.getElementById("radio3").getAttribute("checked","")==""?true:false;  

  console.log("swiper 1id="+radio1_checked);
  console.log("swiper 2id="+radio2_checked);
  console.log("swiper 3id="+radio3_checked);

  if (radio2_checked) {
    if (direction == "right") {
      document.getElementById("radio1").setAttribute("checked","");
      document.getElementById("radio2").removeAttribute("checked");
      document.getElementById("radio3").removeAttribute("checked");
    } else {
      document.getElementById("radio3").setAttribute("checked","");
      document.getElementById("radio1").removeAttribute("checked");
      document.getElementById("radio2").removeAttribute("checked");
    }
  }
  if (radio1_checked && direction=="left") {
    document.getElementById("radio2").setAttribute("checked","");
    document.getElementById("radio1").removeAttribute("checked");
    document.getElementById("radio3").removeAttribute("checked");
  }

  if (radio3_checked && direction=="right") {
    document.getElementById("radio2").setAttribute("checked","");
    document.getElementById("radio1").removeAttribute("checked");
    document.getElementById("radio3").removeAttribute("checked");
  }

  radio1_checked = document.getElementById("radio1").getAttribute("checked","")==""?true:false;  
  radio2_checked = document.getElementById("radio2").getAttribute("checked","")==""?true:false;  
  radio3_checked = document.getElementById("radio3").getAttribute("checked","")==""?true:false;  

  console.log("swiper 1id="+radio1_checked);
  console.log("swiper 2id="+radio2_checked);
  console.log("swiper 3id="+radio3_checked);
}

swiper2 = function (e) {
  console.log("doc direction = "+direction);

  let radio1_checked = document.getElementById("radio11").getAttribute("checked","")==""?true:false;  
  let radio2_checked = document.getElementById("radio12").getAttribute("checked","")==""?true:false;  
  let radio3_checked = document.getElementById("radio13").getAttribute("checked","")==""?true:false;  

  console.log("swiper 1id="+radio1_checked);
  console.log("swiper 2id="+radio2_checked);
  console.log("swiper 3id="+radio3_checked);

  if (radio2_checked) {
    if (direction == "right") {
      document.getElementById("radio11").setAttribute("checked","");
      document.getElementById("radio12").removeAttribute("checked");
      document.getElementById("radio13").removeAttribute("checked");
      document.getElementById("basic").style = "color: white; background-color: #000000;";
      document.getElementById("pro").style = "";
      document.getElementById("ultimate").style = "";
    } else {
      document.getElementById("radio13").setAttribute("checked","");
      document.getElementById("radio11").removeAttribute("checked");
      document.getElementById("radio12").removeAttribute("checked");
      document.getElementById("ultimate").style = "color: white; background-color: #000000;";
      document.getElementById("pro").style = "";
      document.getElementById("basic").style = "";
    }
  }
  if (radio1_checked && direction=="left") {
    document.getElementById("radio12").setAttribute("checked","");
    document.getElementById("radio11").removeAttribute("checked");
    document.getElementById("radio13").removeAttribute("checked");
    document.getElementById("pro").style = "color: white; background-color: #000000;";
    document.getElementById("basic").style = "";
    document.getElementById("ultimate").style = "";
}

  if (radio3_checked && direction=="right") {
    document.getElementById("radio12").setAttribute("checked","");
    document.getElementById("radio11").removeAttribute("checked");
    document.getElementById("radio13").removeAttribute("checked");
    document.getElementById("pro").style = "color: white; background-color: #000000;";
    document.getElementById("basic").style = "";
    document.getElementById("ultimate").style = "";
  }

  radio1_checked = document.getElementById("radio11").getAttribute("checked","")==""?true:false;  
  radio2_checked = document.getElementById("radio12").getAttribute("checked","")==""?true:false;  
  radio3_checked = document.getElementById("radio13").getAttribute("checked","")==""?true:false;  

  console.log("swiper 1id="+radio1_checked);
  console.log("swiper 2id="+radio2_checked);
  console.log("swiper 3id="+radio3_checked);
}

const changePlan = (e) => {
  if (e=="basic") {
    document.getElementById("basic").style = "color: white; background-color: #000000;";
    document.getElementById("pro").style = "";
    document.getElementById("ultimate").style = "";
    document.getElementById("radio11").setAttribute("checked","");
    document.getElementById("radio12").removeAttribute("checked");
    document.getElementById("radio13").removeAttribute("checked");
  }
  if (e=="pro") {
    document.getElementById("pro").style = "color: white; background-color: #000000;";
    document.getElementById("basic").style = "";
    document.getElementById("ultimate").style = "";
    document.getElementById("radio12").setAttribute("checked","");
    document.getElementById("radio11").removeAttribute("checked");
    document.getElementById("radio13").removeAttribute("checked");
  }
  if (e=="ultimate") {
    document.getElementById("ultimate").style = "color: white; background-color: #000000;";
    document.getElementById("pro").style = "";
    document.getElementById("basic").style = "";
    document.getElementById("radio13").setAttribute("checked","");
    document.getElementById("radio11").removeAttribute("checked");
    document.getElementById("radio12").removeAttribute("checked");
  }
}

const changeVisible = (e) => {
  document.getElementById("frame-body1-mobile-row3").style = "z-index:2;";
}

const closePopup = () => {
  const popover = document.getElementById("book-a-demo");
  popover.hidePopover();
}
const closePopup2 = () => {
  document.getElementById("book-a-demo2").style = "opacity:0";
  document.getElementById("book-a-demo2").close();
}

const bookDemo2 = () => {
  document.getElementById("book-a-demo2").showModal();
}

const bookDemo = () => {
}

const mobile_Arrow = (e,f) => {
  if (document.getElementById(e).className === "mobile-arrow down"){
    document.getElementById(e).className = "mobile-arrow up"
    document.getElementById(f).style = "display:flex;"
  } else {
    document.getElementById(e).className = "mobile-arrow down"
    document.getElementById(f).style = "display:none;"
  }
}

const mobile_ArrowMenu = (e, f, c, d) => {
    //console.log('e='+e);
    //console.log("classname="+document.getElementById(e).className)
    //c=menu, d=body
    
    if (document.getElementById(e).className === "mobile-arrow down"){
        document.getElementById(e).className = "mobile-arrow up"
        document.getElementById(f).className = "screen-item-arrow-up"
        let menuPopup = document.getElementById(c);
        menuPopup.style = "opacity: 1; z-index: 1;";
        let headerBody = document.getElementById(d);
        headerBody.style = "opacity: 0.2; z-index: 0;";
    } else {
        document.getElementById(e).className = "mobile-arrow down"
        document.getElementById(f).className = "screen-item"

        let arrow_ups = document.getElementsByClassName("screen-item-arrow-up");

        let menuPopup = document.getElementById(c);
        menuPopup.style = "opacity: 0; z-index: 0;";
        if (arrow_ups.length == 0) {
          let headerBody = document.getElementById(d);
          headerBody.style = "opacity: 1; z-index: 1;";
        }
    }
}

const focusBlog = () => {
  setTimeout(() => document.getElementById('frame-body1').scrollIntoView(), 0);
}

const mobile_Arrow2 = (e, f) => {
  if (document.getElementById(e).className === "mobile-arrow"){
      let arr_right = document.getElementsByClassName("menu-screen-pop-up-web-frame1-item-arrow-right");
      if (arr_right.length == 0) {
        document.getElementById(e).className = "mobile-arrow right"
        document.getElementById(f).className = "menu-screen-pop-up-web-frame1-item-arrow-right"
      }
  } else {
      document.getElementById(e).className = "mobile-arrow"
      document.getElementById(f).className = "menu-screen-pop-up-web-frame1-item"
  }
}

const changeLang = (e, f) => {
  let lang = document.getElementById('item2');
  document.getElementById(f).innerHTML = lang.innerText;
  document.getElementById(f).setAttribute( "onClick", "javascript: changeLang('"+lang.innerText+"','"+ f+"')");
  lang.innerHTML = lang.innerHTML.replace(lang.innerText,e);
}

window.onscroll = () => {
  if (window.innerWidth > 768)
    if (document.documentElement.scrollTop > 1237) {
      document.getElementById('frame_body2_col').style.color= "#808080";
    } else {
      document.getElementById('frame_body2_col').style.color= "#FFFFFF";
    }
  else {
    if (document.documentElement.scrollTop > 450) {
      document.getElementById('frame_body2_col').style.color= "#808080";
    } else {
      document.getElementById('frame_body2_col').style.color= "#FFFFFF";
    }
  }
}

window.onload = () => {
  document.getElementById("basic").style = "color: white; background-color: #000000;";
  //document.addEventListener('mousemove', mousemovemethod);
  document.getElementById("frame-body1-mobile-row2").addEventListener('pointermove', mousemovemethod);
  document.getElementById("frame-body1-mobile-row2").addEventListener('pointerleave', swiper);

  document.getElementById("frame-body3-row4").addEventListener('pointermove', mousemovemethod);
  document.getElementById("frame-body3-row4").addEventListener('pointerleave', swiper2);

  document.getElementById("try-now").addEventListener("click", function(event){
    //event.preventDefault() ????
    document.getElementById("book-a-demo2").showModal();
    bookDemo2();
  });
  
  let menuPopup = document.getElementById("menu-screen-pop-up-web");
  menuPopup.style = "opacity: 0; z-index: 0;";
  let menuLang = document.getElementById("menu-lang");
  menuLang.style = "opacity: 0; z-index: 0;";
  let mobileMenu = document.getElementById("menu-screen-pop-up-mobile")
  mobileMenu.style = "opacity:0;z-index:0;";

  let slides = document.getElementsByClassName("reviews-slide");
  let slidessize = document.getElementsByClassName("reviews-row3-col2-text3");
  slidessize[0].innerHTML = slides.length;
  let slidesNo = document.getElementsByClassName("reviews-row3-col2-text1");
  slidesNo[0].innerHTML = 1;

  let arrowLeft = document.getElementsByClassName("reviews-row3-col1");
  let arrowRight = document.getElementsByClassName("reviews-row3-col3");

  if (slides.length > 3) {
    let children = arrowRight[0].childNodes;
    arrowRight[0].className = "reviews-row3-col3-active";
    children[0].className = "reviews-row3-col3-arrowRight-active";
  } else {
    arrowRight[0].setAttribute("disabled", "");
  }

  arrowLeft[0].setAttribute("disabled", "");

  for (let i=0; i < slides.length; i++) {
    if (slides[i].className.search("is-selected") > 0) {
      j = i;
    }
  }
  for (let i=0; i < slides.length; i++) {
    if (i>(j+2) && window.innerWidth > 768) {
      slides[i].style = "visibility: hidden;"
    } else if (window.innerWidth < 768 && i > 0) {
      //slides[i].style = "visibility: hidden;"
    }
  }
}

const rightarrow = () => {
  let slides = document.getElementsByClassName("reviews-slide");
  let i = -1, j = slides.length;

  while (i!=j) {
    i++;
    if (slides[i].className.search("is-selected") > 0) {
      j = i;
      console.log("right selected = "+j+" No="+(j+2));
      slides[i].className = slides[i].className.replace(" is-selected","");
      let slidesNo = document.getElementsByClassName("reviews-row3-col2-text1");
      slidesNo[0].innerHTML = j+2;
    }
  }

  for (let i=0; i < slides.length; i++) {
    let slideWidth;
    if (window.innerWidth > 768)
      slideWidth = 0.22 * visualViewport.width;
    else
      slideWidth = 0.5 * visualViewport.width;

    let dX = -(j+1)*slideWidth;
    slides[i].style = "transform: translateX("+dX+"px);";
    console.log("right transform="+(i-1-j));
    //console.log("style="+JSON.stringify(slides[i].style));
    if ((i-j-1)==0) {
      console.log("right is-selected i="+i);
      slides[i].className = slides[i].className + " is-selected";
      if (i == slides.length-1) {
        let arrowright = document.getElementsByClassName("reviews-row3-col3-active");
        if(arrowright.length != 0) {
          let children = arrowright[0].childNodes;
          arrowright[0].setAttribute("disabled", "");    
          arrowright[0].className = "reviews-row3-col3";
          children[0].className = "reviews-row3-col3-arrowRight";
        }
      }
    }
    if ((i-j-1) < 0) {
      let arrowleft = document.getElementsByClassName("reviews-row3-col1");
      //console.log("arrowleft =" + JSON.stringify(arrowleft));
      if(arrowleft.length != 0){
        let children = arrowleft[0].childNodes;
        if (arrowleft[0].hasAttribute("disabled")) {
          arrowleft[0].removeAttribute("disabled");    
        }
        arrowleft[0].className = "reviews-row3-col1-active";
        children[0].className = "reviews-row3-col1-arrowLeft-active";
      }
    }
    if ((i-j-1) < 0 || i-j-1 >= 3){
      console.log("right hidden i="+i);
      slides[i].style = "transform: translateX("+dX+"px); visibility: hidden;";
      //console.log("style="+JSON.stringify(slides[i].style));
    }
  }
}

const leftarrow = () => {
  let slides = document.getElementsByClassName("reviews-slide");
  let i = -1, j = slides.length;
  while (i!=j) {
    i++;
    if (slides[i].className.search("is-selected") > 0) {
      j = i;
      console.log("left selected = "+j+" No="+(j));
      slides[i].className = slides[i].className.replace(" is-selected","");
      let slidesNo = document.getElementsByClassName("reviews-row3-col2-text1");
      slidesNo[0].innerHTML = j;
    }
  }

  for (let i=0; i < slides.length; i++) {
    let slideWidth;
    if (window.innerWidth > 768)
      slideWidth = 0.22 * visualViewport.width;
    else
      slideWidth = 0.5 * visualViewport.width;

    let dX = -(j-1)*slideWidth;
    slides[i].style = "transform: translateX("+dX+"px);";
    console.log("left transform="+(i-j+1));
    //console.log("style="+slides[i].style);
    if ((i-j+1) == 0) {
      console.log("left is-selected i="+i);
      slides[i].className = slides[i].className + " is-selected";
      if (i == 0) {
        let arrowleft = document.getElementsByClassName("reviews-row3-col1-active");
        if (arrowleft.length != 0) {
          let children = arrowleft[0].childNodes;
          arrowleft[0].setAttribute("disabled", "");    
          arrowleft[0].className = "reviews-row3-col1";
          children[0].className = "reviews-row3-col1-arrowLeft";
        }
      }
    }
    if ((i-j+1) < 0) {
      let arrowright = document.getElementsByClassName("reviews-row3-col3");
      if (arrowright.length != 0) {
        let children = arrowright[0].childNodes;
        if (arrowright[0].hasAttribute("disabled")) {
          arrowright[0].removeAttribute("disabled");    
        }
        arrowright[0].className = "reviews-row3-col3-active";
        children[0].className = "reviews-row3-col3-arrowRight-active";
      }
    }
    if ((i+1-j) < 0 || i-j+1 >= 3) {
      console.log("left hidden i="+i);
      slides[i].style = "transform: translateX("+dX+"px); visibility: hidden;";
      //console.log("style="+slides[i].style);
    }    
  }
}