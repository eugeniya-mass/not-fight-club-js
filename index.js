import {renderLoginPage} from "./src/pages/login";
import {renderSettingsPage} from "./src/pages/settings/index.js";
import {pageNotFound} from "./src/pages/404/index.js";
import {renderHomePage} from "./src/pages/home/index.js";
import {renderAvatarsPage} from "./src/pages/avatar/index.js";
import {renderBattlePage} from "./src/pages/battle/index.js";

const routes = {
    '#/': renderLoginPage,
    '#/settings': renderSettingsPage,
    '#/login': renderLoginPage,
    '#/home': renderHomePage,
    '#/avatar': renderAvatarsPage,
    '#/battle': renderBattlePage
};

function render() {
    const app = document.getElementById('app');
    const hash = window.location.hash || '#/';

    const renderPage = routes[hash];

    if (!renderPage) {
        pageNotFound(app);
    } else {
        renderPage(app);
    }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);