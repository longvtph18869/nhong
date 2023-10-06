import ReactDOM from "react-dom";
const preloader_ = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

export const wowJsAnimation = () => {
  setTimeout(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, 500);
};
export const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
    hamburger = document.querySelector(".hamburger"),
    kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
    pointer = document.querySelector(".cursor-pointer"),
    e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    ReactDOM.findDOMNode(element).addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    ReactDOM.findDOMNode(element).addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }
  if (myCursor.length) {
    if (document.body) {
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        document.body.addEventListener(
          "mouseenter",
          // "a,.kura_tm_topbar .trigger, .cursor-pointer",
          function () {
            let a = document.querySelectorAll("a");
            e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

            for (let i = 0; i < a.length; i++) {
              const element = a[i];
              mouseEvent(element);
            }

            hamburger && mouseEvent(hamburger);
            kura_tm_topbar && mouseEvent(kura_tm_topbar);
            pointer && mouseEvent(pointer);
          }
        ),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
};

export const preloader = () => {
  preloader_();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 3000);
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    ReactDOM.findDOMNode(a).addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};
export const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll(".skillsInner___"),
    triggerBottom = (window.innerHeight / 5) * 5;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top,
      boxElement = box.getElementsByClassName("bar"),
      label = box.getElementsByClassName("label"),
      number = box.getElementsByClassName("number"),
      boxItem = boxElement[0],
      pWidth = box.getAttribute("data-value"),
      pColor = box.getAttribute("data-color");
    if (boxTop < triggerBottom) {
      boxItem.classList.add("open");
      label[0].classList.add("opened");
      number[0].style.right = `${100 - pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.backgroundColor =
        pColor;
    } else {
      boxItem.classList.remove("open");
      label[0].classList.remove("opened");
      number[0].style.right = `${120}%`;
    }
  });
};
// Data image
export const dataImage = () => {
  let d = document.querySelectorAll("[data-img-url");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-img-url"
    )})`;
  }
};

export const scroll_ = () => {
  const sections = document.querySelectorAll(".dizme_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("current");
    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};
export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".dizme_tm_header");
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};

export const scrollTop = () => {
  var bar = document.querySelector(".progressbar");
  var line = document.querySelector(".progressbar .line");
  var documentHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var winScroll = window.scrollY;
  var value = (winScroll / (documentHeight - windowHeight)) * 100;
  var position = value;
  if (winScroll > 100) {
    bar.classList.add("animate");
    line.style.height = position + "%";
  } else {
    bar.classList.remove("animate");
  }
};

export const fatchData = async (url) => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data;
};

export const portfolioHover = () => {
  const dizme_tm_portfolio_animation_wrap = document.querySelectorAll(
      ".dizme_tm_portfolio_animation_wrap"
    ),
    dizme_tm_portfolio_titles = document.querySelector(
      ".dizme_tm_portfolio_titles"
    );
  dizme_tm_portfolio_animation_wrap.forEach((element) => {
    element.addEventListener("mousemove", () => {
      let title = element.getAttribute("data-title"),
        category = element.getAttribute("data-category");
      if (title) {
        dizme_tm_portfolio_titles.classList.add("visible");
        dizme_tm_portfolio_titles.innerHTML =
          title + '<span class="work__cat">' + category + "</span>";
      }
      document.addEventListener("mousemove", (e) => {
        dizme_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
        dizme_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
      });
    });
    element.addEventListener("mouseleave", () => {
      dizme_tm_portfolio_titles.classList.remove("visible");
    });
  });
};
