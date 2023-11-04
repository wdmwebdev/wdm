// Navigation bar effect on scroll
window.addEventListener("scroll", function(){
    const header = document.getElementById("navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Auto slider
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Particles JS Config
var config = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 200,
            },
        },
        color: {
            value: ["#af9a5c", "#af9a5c", "#ffffff", "#af9a5c"],
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 12,
            },
            image: {
                src: "",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 2.5,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.3,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 100,
            color: "#fff",
            opacity: 0.023674428,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.3,
            direction: "random",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 2082.2488,
                rotateY: 3363.6328,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 70,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 100,
                size: 5,
                duration: 8.598243,
                opacity: 0,
                speed: 3,
            },
            repulse: {
                distance: 150,
                duration: 0.8,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};
  
window.onload = function() {
    particlesJS("particle", config);
}

sendBtn.onclick = () => {
    emailjs.send("service_bqf6jal","template_fparuk5",{
        from_name: document.getElementById("email").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    });
    alert("MESSAGGIO INVIATO!!!")
}




