document.addEventListener("DOMContentLoaded", () => {
    const screens = {
        splash: document.getElementById("splash"),
        login: document.getElementById("login"),
        register: document.getElementById("register"),
        otp: document.getElementById("otp"),
        home: document.getElementById("home"),
        profile: document.getElementById("profile"),
        settings: document.getElementById("settings"),
        notifications: document.getElementById("notifications"),
        help: document.getElementById("help")
    };

    const switchScreen = (screen) => {
        Object.values(screens).forEach((scr) => scr.classList.remove("visible"));
        screens[screen].classList.add("visible");
    };

    // Show splash screen and transition to login
    switchScreen("splash");
    setTimeout(() => switchScreen("login"), 3000);

    // Navigation logic
    document.getElementById("goToRegister").addEventListener("click", (e) => {
        e.preventDefault();
        switchScreen("register");
    });

    document.getElementById("goToLogin").addEventListener("click", (e) => {
        e.preventDefault();
        switchScreen("login");
    });

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        switchScreen("otp");
    });

    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        switchScreen("otp");
    });

    document.getElementById("otpForm").addEventListener("submit", (e) => {
        e.preventDefault();
        switchScreen("home");
    });

    // Home menu navigation
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", (e) => {
            const page = e.target.getAttribute("data-page");
            if (page) {
                switchScreen(page);
            } else if (e.target.id === "logout") {
                switchScreen("login");
            }
        });
    });

    // Back to Home buttons
    document.getElementById("backToHomeFromProfile").addEventListener("click", () => switchScreen("home"));
    document.getElementById("backToHomeFromSettings").addEventListener("click", () => switchScreen("home"));
    document.getElementById("backToHomeFromNotifications").addEventListener("click", () => switchScreen("home"));
    document.getElementById("backToHomeFromHelp").addEventListener("click", () => switchScreen("home"));
});
