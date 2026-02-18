(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(c){if(c.ep)return;c.ep=!0;const o=a(c);fetch(c.href,o)}})();const _={account:{name:"",src:"",wins:0,losses:0,health:100,attack:20,critChance:25,critMultiplier:1.5,attackCount:1,blockCount:2},enemy:{name:"",src:"",health:0,attack:0,critChance:0,critMultiplier:0,attackCount:0,blockCount:0},logs:[]},k=[{id:0,src:"/src/assets/images/avatars/afrodita.png"},{id:1,src:"/src/assets/images/avatars/apollon.png"},{id:2,src:"/src/assets/images/avatars/demetra.png"},{id:3,src:"/src/assets/images/avatars/gera.png"},{id:4,src:"/src/assets/images/avatars/poseidon.png"},{id:5,src:"/src/assets/images/avatars/zevs.png"},{id:6,src:"/src/assets/images/avatars/herakl.png"},{id:7,src:"/src/assets/images/avatars/helios.png"}],y=[{id:0,name:"Kentavr",health:100,attack:20,critChance:20,critMultiplier:1.5,attackCount:1,blockCount:3,src:"/src/assets/images/enemies/kentavr.png"},{id:1,name:"Meduza",health:130,attack:8,critChance:30,critMultiplier:1,attackCount:3,blockCount:2,src:"/src/assets/images/enemies/meduza.png"},{id:2,name:"Ziklop",health:200,attack:5,critChance:50,critMultiplier:2,attackCount:1,blockCount:3,src:"/src/assets/images/enemies/ziklop.png"},{id:3,name:"Lion",health:80,attack:20,critChance:30,critMultiplier:1.5,attackCount:2,blockCount:2,src:"/src/assets/images/enemies/lion.png"}],w=["head","neck","body","belly","legs"],E="gameState";function g(){return JSON.parse(localStorage.getItem(E))||structuredClone(_)}function f(n){localStorage.setItem(E,JSON.stringify(n))}function H(n){const e=k[Math.floor(Math.random()*k.length)],a=y[Math.floor(Math.random()*y.length)],s={..._,account:{name:n,wins:0,losses:0,health:100,attack:20,critChance:25,critMultiplier:1.5,attackCount:1,blockCount:2,src:e.src},enemy:a,logs:[]};return f(s),s}function P(n){let e=g();return e.account.name=n,f(e),e}function C(){const n=g(),e=y[Math.floor(Math.random()*y.length)],a={..._,account:{...n.account,health:100},enemy:e,logs:[]};return f(a),a}function L(n,e,a,s,c){const o=document.getElementById("resultModal"),u=Math.floor(Math.random()*100)+1,d=c?s.account.critChance:s.enemy.critChance,i=c?a:s.enemy,t={isPlayerAttackPhase:c,playerName:a.name,enemyName:s.enemy.name,damage:0,hasCrit:!1,attackZone:n,hasDefense:!1};e.includes(n)&&(t.hasDefense=!0),d>=u?(t.hasCrit=!0,t.damage=i.attack*i.critMultiplier):t.hasDefense||(t.damage=i.attack),c?s.enemy.health-=t.damage:a.health-=t.damage,s.enemy.health<=0||a.health<=0?(s.enemy.health<=0&&(s.account.wins++,o.style.display="block",o.querySelector("h2").textContent=`Win ${a.name}`),a.health<=0&&(s.account.losses++,o.style.display="block",o.querySelector("h2").textContent=`Win ${s.enemy.name}`)):s.logs.push(t),f(s)}function B(n){const e=g();if(e.account.name){window.location.hash="#/home";return}n.innerHTML=`
        <div class="page">
            <div class="login">
                <div class="login__box">
                    <h1>Create your character</h1>
                    <input id="playerName" placeholder="Character name" value="${e.account.name}">
                    <button class="login__btn" id="startBtn">Create</button>
                </div>
            </div>
        </div>
    `,document.getElementById("startBtn").addEventListener("click",()=>{const a=document.getElementById("playerName").value.trim();a?(H(a),window.location.hash="#/home"):alert("Введите имя!")})}const x="/not-fight-club-js/assets/home-BL45Uk7K.png",S="/not-fight-club-js/assets/user-BZrB7oB-.png",Z="/not-fight-club-js/assets/setting-DvMGuEO2.png";function b(){return`
        <header class="header">
            <div class="header__box">
                <div class="header__logo">Not Fight Club</div>
                
                <ul class="header__ul">
                    <li class="header__li" onclick="window.location.hash = '#/home'">
                        <img src=${x} alt="page home image" >
                    </li>
                    <li class="header__li" onclick="window.location.hash = '#/avatar'">
                        <img src=${S} alt="page character image" >
                    </li>
                    <li class="header__li" onclick="window.location.hash = '#/settings'">
                        <img src=${Z} alt="page settings image" >
                    </li>
                </ul>
            </div>
        </header>
    `}function z(n){let e=g();if(!e.account.name){window.location.hash="#/login";return}n.innerHTML=`
        ${b()}
        
        <div class="page">
            <div class="settings">
                <div class="settings__box">

                    <main>
                        <h1>Настройки</h1>
                        
                        <div class="settings__row">
                            <label for="nameInput">Имя игрока:</label>
                            <input id="nameInput" type="text" value="${e.account.name}">
                            <button class="settings__btn" id="saveNameBtn" disabled>Сохранить</button>
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
    `;const a=document.getElementById("nameInput"),s=document.getElementById("saveNameBtn");a.addEventListener("input",()=>{const c=a.value.trim();s.disabled=!c||c===e.account.name}),document.getElementById("saveNameBtn").addEventListener("click",()=>{const c=a.value.trim();c?(e=P(c),s.disabled=!0,alert("Имя сохранено!")):alert("Имя не может быть пустым!")})}const T="/not-fight-club-js/assets/atlant-BaX5WXJp.png";function O(n){n.innerHTML=`
        <div class="page">
            <div class="not-found">
                <div class="not-found__box">
                    <img class="not-found__img" src=${T} alt="page not found image" >
                    <h1>Page not found</h1>
                    <button class="not-found__btn" onclick="window.location.hash = '#/login'">назад к персонажу</button>
                </div>
            </div>
        </div>
    `}function A(n){if(!g().account.name){window.location.hash="#/login";return}n.innerHTML=`
        ${b()}
        
        <div class="page">
            <div class="home">
                <div class="home__box">
                    <main>
                        <button class="home__btn-fight" onclick="window.location.hash = '#/battle'">fight !!!</button>
                    </main>
                </div>
            </div>
        </div>
    `}function D(n){const e=g();if(!e.account.name){window.location.hash="#/login";return}n.innerHTML=`
        ${b()}
        
        <div class="page">
            <div class="character">
                <div class="character__box">
                
                    <div class="character__left" style="background-image: url(${e.account.src})">
                      <div class="change">
                        <button class="change__btn" id="changeBtn">change</button>
                      </div>
                    </div>
                    
                    <div class="character__right stats">
                        <div class="stats__row">
                            <div class="stats__title">Name: </div>
                            <div class="stats__desc">${e.account.name}</div>
                        </div>
                        
                        <div class="stats__row">
                            <div class="stats__title">Wins: </div>
                            <div class="stats__desc">${e.account.wins}</div>
                        </div>
                        
                        <div class="stats__row">
                            <div class="stats__title">Loses: </div>
                            <div class="stats__desc">${e.account.losses}</div>
                        </div>
                       
                   
                    </div>
                </div>
            </div>
            
            <div id="avatarModal" class="modal">
              <div class="modal-content">
                <span id="closeModal" class="close">&times;</span>
                <h2>Выберите персонажа</h2>
                <div id="characterList" class="character-list"></div>
              </div>
            </div>
        </div>
    `;const a=document.getElementById("changeBtn"),s=document.getElementById("avatarModal"),c=document.getElementById("characterList"),o=document.getElementById("closeModal");function u(){c.innerHTML="",k.forEach(i=>{const t=document.createElement("img");t.src=i.src,t.alt=`Character ${i.id}`,i.src===e.account.src?t.classList.add("active"):t.onclick=function(){e.account={...e.account,src:i.src},f(e),s.style.display="none",d()},c.appendChild(t)})}function d(){const i=document.querySelector(".character__left");i&&e.account.src&&(i.style.backgroundImage=`url(${e.account.src})`)}window.onclick=function(i){i.target===s&&(s.style.display="none")},o.onclick=function(){s.style.display="none"},a.onclick=function(){u(),s.style.display="block"}}function M(n,e){return n.sort(()=>Math.random()-.5).slice(0,e)}function j(n){const e=M(w,n.attackCount),a=M(w,n.blockCount);return{attackZones:e,blockZones:a}}const q="/not-fight-club-js/assets/winner-DGjo6-_w.png";function W(n){let e=g();if(!e.account.name){window.location.hash="#/login";return}n.innerHTML=`
        ${b()}
        
        <div class="page">
            <div class="battle">
                <div class="battle__box">

                    <main>
                        <div class="battle__row">
                            <div class="battle__player">
                                <div class="battle__name">${e.account.name}</div>
                                <img src="${e.account.src}" alt="player image" class="character" width="230px">
                                <div>HP: <span id="playerHP"> ${e.account.health} </span></div>   
                            </div>
                            
                            <div class="zones" id="zones">
                                <h3>Please pick 1 Attack zone and 2 Defence zones</h3> 
                                <div class="zones__box"> 
                                    <div class="zones__attack">
                                        <h4>1 Attack zone</h4> 
                                        <div id="attackZones"> 
                                            <label for="attachHead"> <span class=""></span> 
                                                <input type="radio" name="attach" value="head" id="attachHead"> <span>head</span>
                                            </label>
                                            
                                            <label for="attachNeck"> <span class=""></span> 
                                                <input type="radio" name="attach" value="neck" id="attachNeck"><span>neck</span> 
                                            </label> 
                                            
                                            <label for="attachBody"> <span class=""></span>
                                                <input type="radio" name="attach" value="body" id="attachBody"> <span>body</span> 
                                            </label> 
                                            
                                            <label for="attachBelly"> <span class=""></span>
                                                <input type="radio" name="attach" value="belly" id="attachBelly"> <span>belly</span> 
                                            </label>
                                             
                                             <label for="attachLegs"> <span class=""></span> 
                                                <input type="radio" name="attach" value="legs" id="attachLegs"> <span>legs</span> 
                                            </label> 
                                        </div> 
                                    </div> 
                                    
                                    <div class="zones__defense"> 
                                    
                                    <h4>2 Defence zones</h4> 
                                    
                                    <div id="defenseZones"> 
                                   
                                        <label for="defenseHead"> <span class=""></span>
                                            <input type="checkbox" name="defense" value="head" id="defenseHead"> <span>head</span>
                                        </label>
                                      
                                        <label for="defenseNeck"> 
                                            <span class=""></span> <input type="checkbox" name="defense" value="neck" id="defenseNeck"> <span>neck</span> 
                                        </label>
                                         
                                        <label for="defenseBody"> <span class=""></span> 
                                            <input type="checkbox" name="defense" value="body" id="defenseBody"> <span>body</span> 
                                        </label> 
                                        
                                        <label for="defenseBelly"> <span class=""></span> 
                                            <input type="checkbox" name="defense" value="belly" id="defenseBelly"> <span>belly</span> 
                                        </label> 
                                        
                                        <label for="defenseLegs"> <span class=""></span> 
                                            <input type="checkbox" name="defense" value="legs" id="defenseLegs"> <span>legs</span> 
                                        </label> 
                                    
                                    </div>
                                </div> 
                            </div> 
                        
                            <div class="zones__btn">
                                <button id="attackBtn" disabled>Attach !!!</button> 
                            </div> 
                        </div>
                            
                            <div class="battle__enemies">
                            <div class="battle__name">${e.enemy.name}</div>
                            <img src="${e.enemy.src}" alt="player image" class="character" width="230px">
                            <div>HP: <span id="enemyHP">${e.enemy.health}</span>
                            </div>
                          
                        </div>
                        </div>
                    </main>
                    
                    <footer>
                      <div class="battle__logs" id="battleLog"></div>   
                    </footer>
                </div>
            </div>
            
            <div id="resultModal" class="modal">
              <div class="modal-content">
                <span id="closeModal" class="close">&times;</span>
                <h2>Win </h2>
                
                <div class="modal__img">
                    <img src=${q} alt="Image winner" >
                </div>
              </div>
            </div>
        </div>
    `;const a=document.getElementById("battleLog"),s=document.getElementById("resultModal"),c=document.getElementById("closeModal");function o(){const d=a.children.length/2;(e.logs?.slice(d)).forEach((t,v)=>{const m=document.createElement("div"),r=document.createElement("div");r.classList.add("right");const h=t.isPlayerAttackPhase?t.playerName:t.enemyName,l=t.isPlayerAttackPhase?t.enemyName:t.playerName;!t.hasCrit&&!t.hasDefense?m.innerHTML=`
                    <div class="message">
                         <span><span class="red">${h}</span> attacked 
                         <span class="red">${l}</span> to <span class="red">${t.attackZone}</span> and deal 
                         <span class="red">${t.damage}</span> damage.
                    </div>
                `:!t.hasCrit&&t.hasDefense?m.innerHTML=`
                    <div class="message">
                         <span><span class="red">${h}</span> attacked 
                         <span class="red">${l}</span> but was able to block.
                    </div>
                `:m.innerHTML=`
                    <div class="message">
                         <span><span class="red">${h}</span> attacked 
                         <span class="red">${l}</span> to <span class="red">${t.attackZone}</span> but ${l}
                         was very lucky and crid his oppenent for <span class="red">${t.damage}</span> damage.
                    </div>
                `,a.append(m),a.append(r),a.scrollTo({top:a.scrollHeight,behavior:"smooth"})})}u(e.account),o();function u(d){const i=document.getElementById("attackBtn"),t=document.querySelectorAll('#attackZones input[type="radio"]'),v=document.querySelectorAll('#defenseZones input[type="checkbox"]');function m(){const r=[...t].filter(l=>l.checked).length===d.attackCount,h=[...v].filter(l=>l.checked).length===d.blockCount;i.disabled=!(r&&h)}t.forEach(r=>{r.addEventListener("change",()=>{[...t].filter(l=>l.checked).length>d.attackCount&&(r.checked=!1),m()})}),v.forEach(r=>{r.addEventListener("change",()=>{[...v].filter(l=>l.checked).length>d.blockCount&&(r.checked=!1),m()})}),i.addEventListener("click",()=>{const r=document.getElementById("playerHP"),h=document.getElementById("enemyHP"),l=j(e.enemy),I=[...v].filter(p=>p.checked).map(p=>p.value),N=Array.from(t).find(p=>p.checked)?.value;if(L(N,l.blockZones,d,e,!0),h.textContent=e.enemy.health,e.account.health<=0||e.enemy.health<=0){o();return}l.attackZones.forEach(p=>{e.account.health<=0||(L(p,I,d,e,!1),r.textContent=e.account.health)}),o()})}window.onclick=function(d){d.target===s&&(s.style.display="none",e=C(),window.location.hash="#/home")},c.onclick=function(){s.style.display="none",e=C(),window.location.hash="#/home"}}const G={"#/":B,"#/settings":z,"#/login":B,"#/home":A,"#/avatar":D,"#/battle":W};function $(){const n=document.getElementById("app"),e=window.location.hash||"#/",a=G[e];a?a(n):O(n)}window.addEventListener("hashchange",$);window.addEventListener("DOMContentLoaded",$);
