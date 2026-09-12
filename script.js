/* =====================================================
   NAVBAR / MENU MOBILE
===================================================== */

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const icon = navToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });
}


/* =====================================================
   MENUTUP MENU SAAT LINK DIKLIK
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (navToggle) {
            const icon = navToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });
});


/* =====================================================
   NAVBAR SAAT SCROLL
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* =====================================================
   NAVIGASI AKTIF SESUAI SECTION
===================================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =====================================================
   ANIMASI SAAT SCROLL
===================================================== */

const animatedElements = document.querySelectorAll("[data-aos]");

if ("IntersectionObserver" in window) {

    const animationObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("aos-animate");
                    animationObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach((element) => {
        animationObserver.observe(element);
    });

} else {

    animatedElements.forEach((element) => {
        element.classList.add("aos-animate");
    });

}


/* =====================================================
   GALERI FOTO / LIGHTBOX
===================================================== */

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (!image) return;

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <button
                class="lightbox-close"
                aria-label="Tutup gambar"
            >
                <i class="fas fa-xmark"></i>
            </button>

            <img
                src="${image.src}"
                alt="${image.alt}"
            >
        `;

        document.body.appendChild(lightbox);

        const closeButton =
            lightbox.querySelector(".lightbox-close");

        if (closeButton) {
            closeButton.addEventListener("click", () => {
                lightbox.remove();
            });
        }

        lightbox.addEventListener("click", (event) => {

            if (event.target === lightbox) {
                lightbox.remove();
            }

        });

    });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement =
            document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   FORM KONTAK
===================================================== */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Terima kasih! Pesan kamu sudah berhasil dikirim."
        );

        contactForm.reset();

    });

          }
