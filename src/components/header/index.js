import './index.scss';

import homeImg from '../../assets/images/icons/home.png';
import userImg from '../../assets/images/icons/user.png';
import settingsImg from '../../assets/images/icons/setting.png';

export function header() {
    return `
        <header class="header">
            <div class="header__box">
                <div class="header__logo">Not Fight Club</div>
                
                <ul class="header__ul">
                    <li class="header__li" onclick="window.location.hash = '#/home'">
                        <img src=${homeImg} alt="page home image" >
                    </li>
                    <li class="header__li" onclick="window.location.hash = '#/avatar'">
                        <img src=${userImg} alt="page character image" >
                    </li>
                    <li class="header__li" onclick="window.location.hash = '#/settings'">
                        <img src=${settingsImg} alt="page settings image" >
                    </li>
                </ul>
            </div>
        </header>
    `;
}
