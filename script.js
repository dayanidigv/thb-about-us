function animated(carousel) {
    let index = 0;
    const images = carousel.children;
    const totalImages = images.length;

    function showNextImage() {
        index = (index + 1) % totalImages;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextImage, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-images');

    carousels.forEach(carousel => {
        animated(carousel);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter-wrapper');

    const animateCounters = (counter) => {
        const targetNumbers = counter.dataset.counter.split(',');
        const textElement = counter.querySelector('.counter-text');

        let count = 0;
        const interval = setInterval(() => {
            if (count < targetNumbers.length) {
                textElement.innerHTML = targetNumbers[count] + "+";
                count++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Adjust timing as needed
    };

    const isInViewport = (elem) => {
        const rect = elem.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        counters.forEach(counter => {
            // Check if the counter is in the viewport and has not been animated yet
            if (isInViewport(counter) && !counter.dataset.animated) {
                animateCounters(counter);
                // Set a flag to indicate that this counter has been animated
                counter.dataset.animated = 'true';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case it's already in view
});


document.addEventListener('DOMContentLoaded', () => {
    const yearButtons = document.querySelectorAll('.year-button');
    const journeyBody = document.querySelector('.journey-body');
    const yearTitle = document.querySelector('.journey-title');
    const journeyMonth = document.querySelector('.journey-month');
    const journeyDescription = document.querySelector('.journey-description');
    const journeyImage = document.getElementById('journey-image');
    const dot = document.getElementById('dot');
    let currentYearIndex = 0;
    let isManual = false;
    let intervalId;

    if (!yearButtons.length || !yearTitle || !journeyImage || !dot) {
        console.error('One or more elements are not found.');
        return;
    }

    const data = {
        "2021": {
            'title':'Telangana Startup connect',
            "description": "We launched the Startup connect in Telangana",
            'month': "DEC",
            "image": "https://s3-alpha-sig.figma.com/img/5c8c/33ef/1afbf20a5bf970de4b0a8df919169998?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WlEEWAkEqMVX2WRnF~nS4KeiaOqEcuPOrIDzvXRx8vHZ7Ps7cc6Q-uf-moaU7wkSwITzqloK0X4j~JQu-QaS7WROheggg8y8NtrkweNKau1MHJQd9gucgU6HV~pNdnwncMeCCe6LRComZVQIu6biq76OmuWuOQ2m1xzxLjRSpcYsfS5INHbdFNRzqGl6IqByNQ9oiofj5Ea68syPs2NuyM~B0-p51ngzTLRozZmz67c9p4kH~XkFCAuqIDq5O7IkoEVD3fRYsEx10EQAXcbVJUzKuBJMgSZxlcGI~~uA-BCtgft8HXDfLP7rHIodjcWvsxfjcnLlEm9FY4jA5mvWOw__"
        },
        "2022": {
            'title':'Bangalore Startup connect',
            "description": "We launched the Startup Connect in Bangalore",
            'month': "NOV",
            "image": "https://s3-alpha-sig.figma.com/img/064a/e4b4/a4b9f55ec1b4bd9416b5453cfb6b8481?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wib7mFpkQrx13KIZ7eUloPSXj~xbMA786S0gArNsBauETYXFsgF5-n1Kahi1cQ-g2dsY~g9UaCDqVhw8OTqesjBRcVNmr7Yi7c6gym8c858lSdHouLl5u9taX80L3Yg56FqBdS9LS73-kzbTrgxywOdqA4~nkVzosp~0v5WZshpNRuS702mxfKeuBXkA1m7chX0jLTdGDv6OaapoTcP0pxIz9B5ex5TX4a-L2hopmq1Xqu7lVw0P8~-KRwSOfdNUwvgjFsgZLwZlj4W4Yt72ygj4uWF2W4MXqFJdxWcMisCrNkGe-XMTybs37sBLEDg0Bwwm9qwF4kZOg6Ph9FVuBg__"
        },
        "2023": {
            'title':'Singapore Raw Stories',
            "description": "We launched the Raw Stories in Singapore",
            'month': "JUL",
            "image": "https://s3-alpha-sig.figma.com/img/2c57/d866/05ec11815bfe1b8df8511a91ac592979?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gB1lqhrOXNUlK8BmI1Sytsz8C75t7aFlJtVSOG5IpasO4ZfEAIDzyBe1BnJ5PxDVcGKcIh5ieeAz7Onbk~Ti2KBrbHVeR7ac1c5cBZiPin7apHmte~Gb53q7ElukUorf31vZClWlyw~migno0mPA6DFqaF8Bzfcdq7Rj3j1Grnznxljx~6sM~Xm3wZrRJ96rkXSXQYugMNIWyNzFvcCCW3oxLca1oqsGDtrXLPrAXXnjsvWXm2IuY5r1lNUrTvvr9wwNEN2BSyO86yAvtQZrnwkALD88PQZFcIg5ac~7HN8dLltUB6w0TmyIpAQo8aEahDlgnoCqpMKBAK6t5BgHwg__"
        },
        "2024": {
            'title':'Dubai Raw Stories',
            "description": "We launched the Raw Stories in Dubai",
            'month': "MAY",
            "image": "https://s3-alpha-sig.figma.com/img/9798/43e0/3042d757703d98d1549f5e1ccbc3a8cc?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKh9jVgi8lZ-gEy1WTse9kNYnVVLMUjRjnc7QN2S3j1a0JL-8A4s289iDegHusDV3WHfEuZplkrvazTuQDEFLCoH7W7l71kBbivi68XKD9X~th53dtamYIW-t51jhZuOHG1MWHJakZoRaV2s1rG-HDy9VLvrrqrW9Br2aTjHWprKGQAOHq7LY42nrRxwGR7MtIsEXKmq80rfdBlNoXCKTVtUK3oP7dVI0fHMznWYF-CB3QOCkj8tHOA9scOR1E8WdQqCLrVq26GCZqD2TZ2VE2JiPmhuTP62dgL7arQDpI9BBMBnCwYSL3Lyx0yivull8pZb2W-Nt1P4EFbcOfsdrw__"
        }
    };

    function updateContent(year) {
        const left = yearButtons[currentYearIndex].offsetLeft;
        const buttonWidth = yearButtons[currentYearIndex].offsetWidth;

        // Fade out current content
        journeyBody.classList.add('fade-out');

        setTimeout(() => {
            // Update content
            yearTitle.textContent = data[year].title;
            journeyDescription.textContent = data[year].description;
            journeyMonth.textContent = data[year].month;
            journeyImage.src = data[year].image;

            // Fade in new content
            journeyBody.classList.remove('fade-out');
            journeyBody.classList.add('fade-in');
        }, 500); // Match this timeout with animation duration

        // Move the red dot under the selected year
        dot.style.transform = `translateX(${left + (buttonWidth / 2) - (dot.offsetWidth / 2)}px)`;

        // Update button active state
        yearButtons.forEach(btn => btn.classList.remove('active'));
        yearButtons[currentYearIndex].classList.add('active');
    }

    function autoCycleYears() {
        intervalId = setInterval(() => {
            if (!isManual) {
                currentYearIndex = (currentYearIndex + 1) % yearButtons.length;
                updateContent(Object.keys(data)[currentYearIndex]);
            }
        }, 3000); // Change every 3 seconds
    }

    yearButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            isManual = true; // Disable auto animation when manually clicked
            clearInterval(intervalId); // Stop auto cycling

            currentYearIndex = index;
            updateContent(button.getAttribute('data-year'));

            setTimeout(() => {
                if (isManual){
                    isManual = false;
                    autoCycleYears(); 
                } // Resume auto animation after some time
            }, 5000); // Wait 5 seconds before resuming auto animation
        });
    });

    autoCycleYears();
});



// gallery-carousel

document.addEventListener('DOMContentLoaded', () => {
    const galleryCarousel = document.querySelector("#gallery-carousel");
    const galleryCarouselItems = galleryCarousel.querySelectorAll('.gallery-carousel-items');
    const galleryImageLength = galleryCarouselItems.length;
    const prevButton = document.querySelector('.icon-tabler-arrow-left').parentElement;
    const nextButton = document.querySelector('.icon-tabler-arrow-right').parentElement;
    let intervalId = null;
    let currentSlideIndex = -1;
    const slideTransition = 'transform 0.5s ease-in-out';
    const slideTransitionDelay = 3000; // 3 seconds delay for auto-slide

    function updateCarouselPosition(index) {
        const slideWidth = galleryCarouselItems[index].offsetWidth;
        const slideMargin = 50; 
        const containerWidth = window.innerWidth;
    
        const slideTotalWidth = slideWidth + slideMargin;
        const centerOffset = (containerWidth / 2) - (slideWidth / 2);
        const transformValue = -(index * slideTotalWidth) + centerOffset;
        galleryCarousel.style.transition = slideTransition;
        galleryCarousel.style.transform = `translateX(${transformValue}px)`;
    
        // console.log(`translateX(${transformValue}px)`);
    
        galleryCarouselItems.forEach((item) => {
            item.classList.remove('active');
        });
        galleryCarouselItems[index].classList.add('active');
    }
    

    function goToNextSlide() {
        if (currentSlideIndex < galleryImageLength - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0;
        }
        updateCarouselPosition(currentSlideIndex);
    }

    goToNextSlide();

    function goToPrevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = galleryImageLength - 1;
        }
        updateCarouselPosition(currentSlideIndex);
    }

    function startAutoSlide() {
        intervalId = setInterval(goToNextSlide, slideTransitionDelay);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        goToPrevSlide();
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        goToNextSlide();
        startAutoSlide();
    });

    // Start auto-sliding
    startAutoSlide();
});


document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faqs .faqs-items');

    faqItems.forEach(item => {
        const button = item.querySelector('button');
        
        button.addEventListener('click', function() {
            // Toggle the 'active' class on the clicked FAQ item
            item.classList.toggle('active');

            // Remove the 'active' class from all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const category = document.querySelector('#footer-talent-development');
    const button = category.querySelector('button');
    button.addEventListener('click', () => {
        category.classList.toggle('active');
    });
});
