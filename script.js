let activeCountryData = null;

// =========================================
// 🚀 PAGES & DOM ELEMENTS
// =========================================
const mapPage = document.querySelector(".map-page");
const countryPage = document.querySelector(".country-page");
const galleryPage = document.querySelector(".gallery-page");
const storyPage = document.querySelector(".story-page");
const missionPage = document.querySelector(".mission-page");
const landingPage = document.querySelector(".landing-page");

// landing-page
const passwordInput = document.getElementById("password-input");
const heartsLayer = document.getElementById("hearts-layer");
const letterScreen = document.getElementById("letter-screen");
const loginScreen = document.getElementById("login-screen");
const letter = document.getElementById("letter");

// country-page
const countryPageBtnReturn = document.getElementById("country-page__btn--return");
const countryHeading = document.getElementById("country-heading");
let slideShowImages = [];
for (let i = 0; i < 5; i++) {
    slideShowImages.push(document.getElementById("slide-show__img" + i));
}
let currSlideIndex = 0;

// gallery-page
const galleryPagePictures = document.getElementById("gallery-page__pictures");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox__img");

// story-page
const timeline = document.getElementById("timeline");
const storyPageLightbox = document.getElementById("story-page__lightbox");
const storyPageLightboxBtnWrapper = document.getElementById("story-page__lightbox-btns");
const storyPageLightboxExitBtn = document.getElementById("story-page__lightbox-btn--x");
const eventImage = document.getElementById("event-content__img");
let currLightboxSlideIndex = 0;
let currEventImages = [];

// mission-page
const missionCards = document.getElementById("mission-cards");

// breadcrumb
const breadcrumbMap = document.getElementById("breadcrumb__map");
const breadcrumbArrow0 = document.getElementById("breadcrumb__arrow0");
const breadcrumbCountry = document.getElementById("breadcrumb__country");
const breadcrumbArrow1 = document.getElementById("breadcrumb__arrow1");
const breadcrumbStoryGalleryMission = document.getElementById("breadcrumb__story-gallery-mission");
let pageID = 0;


// =========================================
// 📱 🆕 NEW NAVIGATION & HISTORY CONTROLLERS
// =========================================

// Mobil menü kartlarına tıklandığında ülkeyi seçen yeni fonksiyon
function selectCountry(countryCode) {
    activeCountryData = siteData[countryCode];
    if (activeCountryData) {
        changePage(1);
    }
}

// Sayfa değiştirme fonksiyonu (History API destekli)
function changePage(id, isBackButton = false) {
    pageID = id;
    
    // Breadcrumb güncelleme
    updateBreadcrumb(pageID);

    // 🚀 Eğer geri tuşuna basılarak gelinmediyse, bu geçişi tarayıcı geçmişine kaydet
    if (!isBackButton) {
        history.pushState({ pageID: id }, `Page ${id}`, `#page${id}`);
    }

    // Tüm sayfaları gizle ve içerikleri sıfırla
    mapPage.classList.add("hidden");
    countryPage.classList.add("hidden");
    galleryPage.classList.add("hidden");
    storyPage.classList.add("hidden");
    missionPage.classList.add("hidden");
    galleryPagePictures.innerHTML = "";
    missionCards.innerHTML = "";
    timeline.innerHTML = "";

    if (slideShowImages[currSlideIndex]) {
        slideShowImages[currSlideIndex].style.display = "none";
    }
    currSlideIndex = 0;

    // İlgili sayfayı görünür yap
    switch(id) {
        case 0: // Ana Menü (Dashboard)
            mapPage.classList.remove("hidden");
            break;
        case 1: // Ülke Detay Slayt Sayfası
            countryPage.classList.remove("hidden");
            fillCountryPage();
            break;
        case 2: // Galeri Duvarı
            galleryPage.classList.remove("hidden");
            fillGalleryPage();
            break;
        case 3: // Kronolojik Anılar (Timeline)
            storyPage.classList.remove("hidden");
            fillStoryPage();
            break;
        case 4: // Hayaller (Mission)
            missionPage.classList.remove("hidden");
            fillMissionPage();
            break;
    }
}

// 📱 Telefonun veya tarayıcının fiziksel GERİ tuşunu yakalayan sihirli dinleyici
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.pageID !== undefined) {
        // Geçmişte kayıtlı state varsa oraya dön (isBackButton = true)
        changePage(event.state.pageID, true);
    } else {
        // Eğer geçmişte state kalmadıysa (ilk giriş anı), varsayılan olarak menüye at
        changePage(0, true);
    }
});


// =========================================
// ❤️ BREADCRUMB CONTROLLER
// =========================================
function updateBreadcrumb(page) {
    breadcrumbMap.classList.remove("breadcrumb__item--active");
    breadcrumbCountry.classList.remove("breadcrumb__item--active");
    breadcrumbStoryGalleryMission.classList.remove("breadcrumb__item--active");

    breadcrumbArrow0.classList.add("hidden");
    breadcrumbArrow1.classList.add("hidden");

    breadcrumbCountry.textContent = "";
    breadcrumbStoryGalleryMission.textContent = "";

    switch (page) {
        case 0:
            breadcrumbMap.classList.add("breadcrumb__item--active");
            break;
        case 1:
            breadcrumbCountry.classList.add("breadcrumb__item--active");
            breadcrumbArrow0.classList.remove("hidden");
            breadcrumbCountry.textContent = activeCountryData.name.toUpperCase();
            break;
        case 2:
        case 3:
        case 4:
            breadcrumbStoryGalleryMission.classList.add("breadcrumb__item--active");
            breadcrumbArrow0.classList.remove("hidden");
            breadcrumbArrow1.classList.remove("hidden");
            breadcrumbCountry.textContent = activeCountryData.name.toUpperCase();

            if (page === 2) {
                breadcrumbStoryGalleryMission.textContent = "GALERİ";
            } else if (page === 3) {
                breadcrumbStoryGalleryMission.textContent = "ANILAR";
            } else {
                breadcrumbStoryGalleryMission.textContent = "HAYALLER";
            }
            break;
    }
}


// =========================================
// 💌 LANDING PAGE & LETTER SYSTEM
// =========================================
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const heartLoveText = document.createElement("span");
    heartLoveText.classList.add("heart__love-txt");

    heart.innerHTML = heartSvg;
    heart.style.left = Math.random() * 100 + "vw";

    const duration = Math.random() * 5 + 8;
    heart.style.animationDuration = duration + "s";

    const widthANDheight = heartSizes[Math.floor(Math.random() * heartSizes.length)];
    heart.style.width = widthANDheight + "px";
    heart.style.height = widthANDheight + "px";

    const color = heartColors[Math.floor(Math.random() * heartColors.length)];
    const heartPathElement = heart.querySelector("path");
    heartPathElement.style.fill = color[0];
    heartPathElement.style.stroke = color[0];

    heartLoveText.textContent = iLoveYouTexts[Math.floor(Math.random() * iLoveYouTexts.length)];
    heartLoveText.style.color = color[1];
    heartLoveText.style.fontSize = widthANDheight * 0.2 + "px";

    heart.appendChild(heartLoveText);
    heartsLayer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, (duration + 1) * 1000);
}

let heartInterval = setInterval(createHeart, 250);

function checkPassword() {
    return passwordInput.value === "1009";
}

function displayLetter() {
    if (checkPassword()) {
        loginScreen.classList.add("hidden");
        letterScreen.classList.remove("hidden");
        letterScreen.style.animation = "letterStageFadeIn 2s linear";

        setTimeout(function() {
            letter.style.animation = "paperScroll 70s linear forwards";
        }, 2500);
        
        setTimeout(function() {
            landingPage.style.animation = "landingPageFadeOut 2.5s linear";
            setTimeout(function() {
                clearInterval(heartInterval);
                letterScreen.classList.add("hidden");
                landingPage.classList.add("hidden");
                mapPage.style.pointerEvents = "auto";
                changePage(0);
            }, 2500);
        }, 70000);
    } else {
        alert("yanlış şifre bebek");
    }
}


// =========================================
// 📸 COUNTRY SLIDESHOW SYSTEM
// =========================================
function fillCountryPage() {
    let slideShowImagePaths = [];
    for (let i = 0; i < 5; i++) {
        slideShowImagePaths.push(activeCountryData.slideShowItems[i]);
    }

    countryHeading.textContent = activeCountryData.name;

    for (let i = 0; i < 5; i++) {
        slideShowImages[i].src = slideShowImagePaths[i];
    }

    slideShow(currSlideIndex);
}

function slideShow(index) {
    if (slideShowImages[index]) {
        slideShowImages[index].style.display = "block";
    }
}

function slideBtn(move) {
    slideShowImages[currSlideIndex].style.display = "none";
    currSlideIndex = (currSlideIndex + move + 5) % 5;
    slideShow(currSlideIndex);
}


// =========================================
// 🖼️ GALLERY SYSTEM (LIGHTBOX)
// =========================================
function fillGalleryPage() {
    let galleryImagePaths = activeCountryData.galleryItems;
    let html = "";
    for (let path of galleryImagePaths) {
        html += `<img class="gallery-page__img" src="${path}" alt="" loading="lazy" onclick="openLightbox('${path}')">`;
    }
    galleryPagePictures.innerHTML = html;
}

function openLightbox(path) {
    lightboxImage.src = path;
    lightbox.classList.remove("hidden");
    document.body.classList.add("no-scroll");
}

function closeLightbox() {
    lightboxImage.src = "";
    lightbox.classList.add("hidden");
    document.body.classList.remove("no-scroll");
}


// =========================================
// 🎞️ TIMELINE STORY SYSTEM
// =========================================
function fillStoryPage() {
    for (let i = 0; i < activeCountryData.storyItems.length; i++) {
        let eventImageText = document.createElement("p");
        eventImageText.classList.add("event-content__imgs-txt");
        eventImageText.textContent = `[    FOTOĞRAFLAR (${activeCountryData.storyItems[i].image.length})    ]`;

        let images = activeCountryData.storyItems[i].image;
        
        eventImageText.addEventListener("click", function() {
            currEventImages = images;
            openStoryPageLightbox();
        });

        let eventText = document.createElement("p");
        eventText.textContent = activeCountryData.storyItems[i].text;
        eventText.classList.add("event-content__text");

        let eventTitle = document.createElement("h3");
        eventTitle.textContent = activeCountryData.storyItems[i].title;
        eventTitle.classList.add("event-content__title");

        let eventDate = document.createElement("p");
        eventDate.textContent = activeCountryData.storyItems[i].date;
        eventDate.classList.add("event-content__date");

        let eventContent = document.createElement("div");
        eventContent.classList.add("event-content");
        eventContent.appendChild(eventDate);
        eventContent.appendChild(eventTitle);
        eventContent.appendChild(eventText);
        if (activeCountryData.storyItems[i].image.length > 0) {
            eventContent.appendChild(eventImageText);
        }

        let timelineEvent = document.createElement("div");
        timelineEvent.classList.add("timeline__event");
        if (i % 2 == 0) {
            timelineEvent.classList.add("timeline__event--left");
        } else {
            timelineEvent.classList.add("timeline__event--right");
        }
        timelineEvent.appendChild(eventContent);
        timeline.appendChild(timelineEvent);
    }
}

function openStoryPageLightbox() {
    storyPageLightbox.classList.remove("hidden");
    if (currEventImages.length === 1) {
        storyPageLightboxBtnWrapper.classList.add("hidden");
    } else {
        storyPageLightboxBtnWrapper.classList.remove("hidden");
    }
    document.body.classList.add("no-scroll");
    storyPageSlideShow();
}

function closeStoryPageLightbox() {
    currLightboxSlideIndex = 0;
    storyPageLightbox.classList.add("hidden");
    document.body.classList.remove("no-scroll");
}

function storyPageSlideShow() {
    eventImage.src = currEventImages[currLightboxSlideIndex];
}

// Anı detay lightbox slayt değiştirme butonu
function lightboxSlideBtn(move) {
    currLightboxSlideIndex = (currLightboxSlideIndex + move + currEventImages.length) % currEventImages.length;
    storyPageSlideShow();
}


// =========================================
// 🎯 MISSION CARDS SYSTEM
// =========================================
function fillMissionPage() {
    for (let i = 0; i < activeCountryData.missionItems.length; i++) {
        let missionCard = document.createElement("div");
        let missionCardMissionText = document.createElement("h3");
        let missionCardStatus = document.createElement("p");

        missionCardMissionText.classList.add("mission-card__mission-text");
        missionCard.classList.add("mission-card");
        missionCardStatus.classList.add("mission-card__status");

        missionCardMissionText.textContent = activeCountryData.missionItems[i].mission;

        if (activeCountryData.missionItems[i].status) {
            missionCard.classList.add("mission-card--true");
            missionCardStatus.textContent = "✅ TAMAMLANDI";
        } else {
            missionCard.classList.add("mission-card--false");
            missionCardStatus.textContent = "⌛️ YAPILACAK";
        }

        missionCard.appendChild(missionCardMissionText);
        missionCard.appendChild(missionCardStatus);
        missionCards.appendChild(missionCard);
    } 
}