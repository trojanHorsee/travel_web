let activeCountryData = null;

// =========================================
// 🚀 DOM ELEMENTS
// =========================================
const dashboardPage = document.querySelector(".dashboard-page");
const countryPage = document.querySelector(".country-page");
const galleryPage = document.querySelector(".gallery-page");
const storyPage = document.querySelector(".story-page");
const missionPage = document.querySelector(".mission-page");
const landingPage = document.querySelector(".landing-page");

// landing-page elements
const birthdayCard = document.getElementById("birthday-card");
const passwordInput = document.getElementById("password-input");
const heartsLayer = document.getElementById("hearts-layer");
const letterScreen = document.getElementById("letter-screen");
const loginScreen = document.getElementById("login-screen");
const letter = document.getElementById("letter");

// country-page elements
const countryHeading = document.getElementById("country-heading");
let slideShowImages = [];
for (let i = 0; i < 5; i++) {
    let imgEl = document.getElementById("slide-show__img" + i);
    if(imgEl) slideShowImages.push(imgEl);
}
let currSlideIndex = 0;

// gallery-page elements
const galleryPagePictures = document.getElementById("gallery-page__pictures");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox__img");

// story-page elements
const timeline = document.getElementById("timeline");
const storyPageLightbox = document.getElementById("story-page__lightbox");
const storyPageLightboxBtnWrapper = document.getElementById("story-page__lightbox-btns");
const eventImage = document.getElementById("event-content__img");
let currLightboxSlideIndex = 0;
let currEventImages = [];

// mission-page elements
const missionCards = document.getElementById("mission-cards");

// Bottom Nav & Breadcrumb
const bottomNav = document.getElementById("bottom-nav");
const navItems = document.querySelectorAll(".nav-item");

const breadcrumbMap = document.getElementById("breadcrumb__map");
const breadcrumbArrow0 = document.getElementById("breadcrumb__arrow0");
const breadcrumbCountry = document.getElementById("breadcrumb__country");
const breadcrumbArrow1 = document.getElementById("breadcrumb__arrow1");
const breadcrumbStoryGalleryMission = document.getElementById("breadcrumb__story-gallery-mission");

let pageID = 0;


// =========================================
// ⚡ INITIALIZATION (BOŞ EKRAN ÇÖZÜMÜ)
// =========================================
window.addEventListener('DOMContentLoaded', () => {
    // Eğer HTML'de landing-page gizlenmişse, sistemi direkt menüyle başlat (Geliştirme için)
    if (landingPage && landingPage.classList.contains('hidden')) {
        changePage(0, true);
    }
});


// =========================================
// 📱 NAVIGATION CONTROLLERS
// =========================================
function selectCountry(countryCode) {
    activeCountryData = siteData[countryCode];
    if (activeCountryData) {
        changePage(1);
    }
}

function changePage(id, isBackButton = false) {
    // Ülke seçmeden alttaki sekmelere tıklarsa tatlı bir uyarı ver
    if ((id === 2 || id === 3 || id === 4) && !activeCountryData) {
        alert("Önce menüden bir yolculuk seçmelisin sevgilim 🥰");
        return;
    }

    pageID = id;

    // Geçmişe kaydet (Fiziksel geri tuşu için)
    if (!isBackButton) {
        history.pushState({ pageID: id }, `Page ${id}`, `#page${id}`);
    }

    // Arayüzü güncelle
    updateBreadcrumb(pageID);
    updateBottomNav(pageID);

    // Sayfaları Gizle (Dashboard map-page yerine kullanılıyor)
    if(dashboardPage) dashboardPage.classList.add("hidden");
    const mapPage = document.querySelector(".map-page");
    if(mapPage) mapPage.classList.add("hidden");
    
    countryPage.classList.add("hidden");
    galleryPage.classList.add("hidden");
    storyPage.classList.add("hidden");
    missionPage.classList.add("hidden");
    
    // Verileri temizle
    galleryPagePictures.innerHTML = "";
    missionCards.innerHTML = "";
    timeline.innerHTML = "";

    if (slideShowImages[currSlideIndex]) {
        slideShowImages[currSlideIndex].style.display = "none";
    }
    currSlideIndex = 0;

    // Seçili sayfayı aç
    switch(id) {
        case 0: // Ana Menü
            if(dashboardPage) dashboardPage.classList.remove("hidden");
            if(mapPage) mapPage.classList.remove("hidden"); // Güvenlik amaçlı
            bottomNav.classList.add("hidden"); // Ana menüdeyken alt bar görünmesin
            activeCountryData = null; // Ülke seçimini sıfırla
            break;
        case 1: // Ülke Detay
            countryPage.classList.remove("hidden");
            bottomNav.classList.remove("hidden"); 
            fillCountryPage();
            break;
        case 2: // Galeri
            galleryPage.classList.remove("hidden");
            bottomNav.classList.remove("hidden");
            fillGalleryPage();
            break;
        case 3: // Anılar
            storyPage.classList.remove("hidden");
            bottomNav.classList.remove("hidden");
            fillStoryPage();
            break;
        case 4: // Hayaller
            missionPage.classList.remove("hidden");
            bottomNav.classList.remove("hidden");
            fillMissionPage();
            break;
    }
}

// Fiziksel geri tuşunu yakala
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.pageID !== undefined) {
        changePage(event.state.pageID, true);
    } else {
        changePage(0, true);
    }
});


// =========================================
// 🔄 UI UPDATERS (Breadcrumb & Bottom Nav)
// =========================================
function updateBottomNav(page) {
    navItems.forEach(item => item.classList.remove("active"));
    
    if(page === 0 || page === 1) {
        let navMenu = document.getElementById("nav-menu");
        if(navMenu) navMenu.classList.add("active");
    }
    if(page === 2) {
        let navGal = document.getElementById("nav-gallery");
        if(navGal) navGal.classList.add("active");
    }
    if(page === 3) {
        let navStory = document.getElementById("nav-story");
        if(navStory) navStory.classList.add("active");
    }
    if(page === 4) {
        let navMiss = document.getElementById("nav-mission");
        if(navMiss) navMiss.classList.add("active");
    }
}

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
            if(activeCountryData) {
                breadcrumbCountry.classList.add("breadcrumb__item--active");
                breadcrumbArrow0.classList.remove("hidden");
                breadcrumbCountry.textContent = activeCountryData.name.toUpperCase();
            }
            break;
        case 2:
        case 3:
        case 4:
            if(activeCountryData) {
                breadcrumbStoryGalleryMission.classList.add("breadcrumb__item--active");
                breadcrumbArrow0.classList.remove("hidden");
                breadcrumbArrow1.classList.remove("hidden");
                breadcrumbCountry.textContent = activeCountryData.name.toUpperCase();
                
                if (page === 2) breadcrumbStoryGalleryMission.textContent = "GALERİ";
                else if (page === 3) breadcrumbStoryGalleryMission.textContent = "ANILAR";
                else breadcrumbStoryGalleryMission.textContent = "HAYALLER";
            }
            break;
    }
}


// =========================================
// 💌 LANDING PAGE (BIRTHDAY CARD & LOGIN)
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
    if (heartPathElement) {
        heartPathElement.style.fill = color[0];
        heartPathElement.style.stroke = color[0];
    }

    heartLoveText.textContent = iLoveYouTexts[Math.floor(Math.random() * iLoveYouTexts.length)];
    heartLoveText.style.color = color[1];
    heartLoveText.style.fontSize = widthANDheight * 0.2 + "px";

    heart.appendChild(heartLoveText);
    heartsLayer.appendChild(heart);

    setTimeout(() => heart.remove(), (duration + 1) * 1000);
}

let heartInterval = setInterval(createHeart, 250);

// Doğum günü kartından şifre ekranına geçiş
function showLoginScreen() {
    if(birthdayCard) birthdayCard.classList.add("hidden");
    if(loginScreen) loginScreen.classList.remove("hidden");
}

function checkPassword() {
    return passwordInput.value === "1009";
}

// Şifre doğruysa uzun mektubu atlayıp direkt Menüye (Yolculuk) uçuran fonksiyon
function checkLogin() {
    if (checkPassword()) {
        loginScreen.classList.add("hidden");
        landingPage.style.animation = "landingPageFadeOut 1.5s linear forwards";
        
        setTimeout(() => {
            clearInterval(heartInterval);
            landingPage.classList.add("hidden");
            changePage(0); // 0 = Dashboard (Ana Menü)
        }, 1500);
    } else {
        alert("yanlış şifre bebek");
    }
}


// =========================================
// 📸 SLIDESHOW
// =========================================
function fillCountryPage() {
    if(!activeCountryData) return;
    
    countryHeading.textContent = activeCountryData.name;
    for (let i = 0; i < 5; i++) {
        if(slideShowImages[i]) {
            slideShowImages[i].src = activeCountryData.slideShowItems[i] || "";
        }
    }
    slideShow(currSlideIndex);
}

function slideShow(index) {
    if (slideShowImages[index]) slideShowImages[index].style.display = "block";
}

function slideBtn(move) {
    if (slideShowImages[currSlideIndex]) slideShowImages[currSlideIndex].style.display = "none";
    currSlideIndex = (currSlideIndex + move + 5) % 5;
    slideShow(currSlideIndex);
}


// =========================================
// 🖼️ GALLERY & LIGHTBOX
// =========================================
function fillGalleryPage() {
    if(!activeCountryData) return;
    
    let html = "";
    for (let path of activeCountryData.galleryItems) {
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
// 🎞️ STORY TIMELINE
// =========================================
function fillStoryPage() {
    if(!activeCountryData) return;

    for (let i = 0; i < activeCountryData.storyItems.length; i++) {
        let item = activeCountryData.storyItems[i];
        
        let eventContent = document.createElement("div");
        eventContent.classList.add("event-content");

        let eventDate = document.createElement("p");
        eventDate.classList.add("event-content__date");
        eventDate.textContent = item.date;

        let eventTitle = document.createElement("h3");
        eventTitle.classList.add("event-content__title");
        eventTitle.textContent = item.title;

        let eventText = document.createElement("p");
        eventText.classList.add("event-content__text");
        eventText.textContent = item.text;

        eventContent.appendChild(eventDate);
        eventContent.appendChild(eventTitle);
        eventContent.appendChild(eventText);

        if (item.image && item.image.length > 0) {
            let eventImageText = document.createElement("p");
            eventImageText.classList.add("event-content__imgs-txt");
            eventImageText.textContent = `[ 📸 FOTOĞRAFLAR (${item.image.length}) ]`;
            
            eventImageText.addEventListener("click", function() {
                currEventImages = item.image;
                openStoryPageLightbox();
            });
            eventContent.appendChild(eventImageText);
        }

        let timelineEvent = document.createElement("div");
        timelineEvent.classList.add("timeline__event");
        timelineEvent.classList.add(i % 2 === 0 ? "timeline__event--left" : "timeline__event--right");
        
        timelineEvent.appendChild(eventContent);
        timeline.appendChild(timelineEvent);
    }
}

function openStoryPageLightbox() {
    storyPageLightbox.classList.remove("hidden");
    storyPageLightboxBtnWrapper.classList.toggle("hidden", currEventImages.length <= 1);
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

function lightboxSlideBtn(move) {
    currLightboxSlideIndex = (currLightboxSlideIndex + move + currEventImages.length) % currEventImages.length;
    storyPageSlideShow();
}


// =========================================
// 🎯 MISSIONS
// =========================================
function fillMissionPage() {
    if(!activeCountryData) return;

    for (let i = 0; i < activeCountryData.missionItems.length; i++) {
        let item = activeCountryData.missionItems[i];
        
        let missionCard = document.createElement("div");
        missionCard.classList.add("mission-card", item.status ? "mission-card--true" : "mission-card--false");

        let missionCardMissionText = document.createElement("h3");
        missionCardMissionText.classList.add("mission-card__mission-text");
        missionCardMissionText.textContent = item.mission;

        let missionCardStatus = document.createElement("p");
        missionCardStatus.classList.add("mission-card__status");
        missionCardStatus.textContent = item.status ? "✅ TAMAMLANDI" : "⌛️ YAPILACAK";

        missionCard.appendChild(missionCardMissionText);
        missionCard.appendChild(missionCardStatus);
        missionCards.appendChild(missionCard);
    } 
}