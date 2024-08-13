$(document).ready(function() {
    
    AOS.init();

    // WOW Animation 
    new WOW().init();

    //Logo Change with Bg
    $(window).on('scroll', function() {
        // Get the current scroll position
        var scrollPosition = $(this).scrollTop();

        // Loop through each section
        $('section, footer').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();

            // Check if the section is in the viewport
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Determine the section's background color
                var sectionColor = $(this).hasClass('dark-bg') ? 'dark-bg' : 'light-bg';

                // Update the logo based on the section's color
                if (sectionColor === 'dark-bg') {
                    $('#logo img').attr('src', 'assets/img/logo/logo-b.png');
                    $('header').addClass('dark-hamburger');
                    $('.social').addClass('dark-social');
                } else {
                    $('#logo img').attr('src', 'assets/img/logo/logo-w.png');
                    $('header').removeClass('dark-hamburger');
                    $('.social').removeClass('dark-social');
                }
            }
        });
    });

    // Dropdown Menu
    $("ul#menu li.dropdown").hover(function() {
        $("ul#menu li.dropdown .sub-menu").addClass("active")
    });

    // Hamburger sidebar
    $(".header .header__content .hamburger input").click(function() {
        $("ul#menu").toggleClass("show")
    });
    
    

    // Text Slider 
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;
    
    // Set the initial styles for the first word
    if(words.length){
      console.log(`L:56 `,words);
      words[currentWord].style.opacity = 1;
    }
    
    // Loop through all words to split them into letters
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }
    
    // Function to change words and apply the gradient background styles
    function changeWord() {

      if(!words.length) return;

      var cw = wordArray[currentWord];
      var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    
      // Set the gradient background and hide the text with clipping for the current word
      for (var i = 0; i < cw.length; i++) {
        cw[i].style.background = 'var(--theme-gradient-left-right)';
        cw[i].style.color = 'transparent';
        cw[i].style.webkitBackgroundClip = 'text';
        cw[i].style.webkitTextFillColor = 'transparent';
        animateLetterOut(cw, i);
      }
    
      // Set the gradient background for the new word and make it visible
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        nw[i].style.background = 'var(--theme-gradient-left-right)';
        nw[i].style.color = 'transparent';
        nw[i].style.webkitBackgroundClip = 'text';
        nw[i].style.webkitTextFillColor = 'transparent';
        animateLetterIn(nw, i);
      }
    
      // Increment the current word index
      currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }
    
    // Function to animate letters out
    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i * 80);
    }
    
    // Function to animate letters in
    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340 + (i * 80));
    }
    
    // Function to split words into letters
    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
    
      wordArray.push(letters);
    }
    
    // Call the changeWord function to start the animation
    changeWord();
    
    // Set an interval to change the word every 4000ms (4 seconds)
    setInterval(changeWord, 4000);


    // Pricing Hover
    $(".pricing .plan.one").hover(function() {
        $(".pricing .plan.one").addClass("active");
        $(".pricing .plan.two").removeClass("active");
        $(".pricing .plan.three").removeClass("active");
    });
    $(".pricing .plan.two").hover(function() {
        $(".pricing .plan.two").addClass("active");
        $(".pricing .plan.one").removeClass("active");
        $(".pricing .plan.three").removeClass("active");
    });
    $(".pricing .plan.three").hover(function() {
        $(".pricing .plan.three").addClass("active");
        $(".pricing .plan.one").removeClass("active");
        $(".pricing .plan.two").removeClass("active");
    });

    // Pricing Slider
    $(document).ready(function() {
        $('.pricing__box--slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            speed: 300,
            infinite: true,
            autoplaySpeed: 2000,
            autoplay: true,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });

    // Pin Slider
    $(document).ready(function() {
        $('.section_pin--slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            speed: 300,
            infinite: true,
            autoplaySpeed: 2000,
            autoplay: true
        });
    });


    // Testimonial Slider
    $('.homepage__testimonials__slider').slick({
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                centerPadding: '150px',
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    //Left - Right Slider
    new Swiper('.swiper-container.slider1', {
        infinite: true,
        loop: true,
        slidesPerView: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        ease: 'linear',
        spaceBetween: 10
    });
    new Swiper('.swiper-container.slider2', {
        infinite: true,
        loop: true,
        slidesPerView: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        ease: 'linear',
        spaceBetween: 10
    });
    


    // custom cursor
    const cursor = document.querySelector("#cursor");
    const cursorBorder = document.querySelector("#cursor-border");
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };
    
    document.addEventListener("mousemove", (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;
    
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    requestAnimationFrame(function loop() {
      const easting = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
    
      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(loop);
    });
    
    document.querySelectorAll("[data-cursor]").forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        if (item.dataset.cursor === "pointer") {
          cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
          cursorBorder.style.setProperty("--size", "30px");
        }
        if (item.dataset.cursor === "pointer2") {
          cursorBorder.style.backgroundColor = "white";
          cursorBorder.style.mixBlendMode = "difference";
          cursorBorder.style.setProperty("--size", "80px");
        }
        if (item.dataset.cursor === "pointer-black") {
          cursor.style.backgroundColor = "black";
          cursorBorder.style.boxShadow = "0 0 0 1px black";
          cursorBorder.style.mixBlendMode = "unset";
          cursorBorder.style.setProperty("--size", "50px");
        }
        if (item.dataset.cursor === "pointer-white") {
          cursor.style.backgroundColor = "white";
          cursorBorder.style.boxShadow = "0 0 0 1px white";
          cursorBorder.style.mixBlendMode = "unset";
          cursorBorder.style.setProperty("--size", "50px");
        }
      });
      item.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
      });
    });

    // window.addEventListener('load', AOS.refresh());
});


