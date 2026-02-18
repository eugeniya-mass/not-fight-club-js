(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(c){if(c.ep)return;c.ep=!0;const o=t(c);fetch(c.href,o)}})();const _={account:{name:"",src:"",wins:0,losses:0,health:100,attack:20,critChance:25,critMultiplier:1.5,attackCount:1,blockCount:2},enemy:{name:"",src:"",health:0,attack:0,critChance:0,critMultiplier:0,attackCount:0,blockCount:0},logs:[]},k=[{id:0,src:new URL("/assets/afrodita-BCvHI8Ft.png",import.meta.url).href},{id:1,src:new URL("/assets/apollon-BnWX9W40.png",import.meta.url).href},{id:2,src:new URL("/assets/demetra-DspPf1rC.png",import.meta.url).href},{id:3,src:new URL("/assets/gera-fnodbJ50.png",import.meta.url).href},{id:4,src:new URL("/assets/poseidon-CFYhaa7b.png",import.meta.url).href},{id:5,src:new URL("/assets/zevs-BVq8UqUj.png",import.meta.url).href},{id:6,src:new URL("/assets/herakl-07A-_dSY.png",import.meta.url).href},{id:7,src:new URL("/assets/helios-CWiVLjus.png",import.meta.url).href}],y=[{id:0,name:"Kentavr",health:100,attack:20,critChance:20,critMultiplier:1.5,attackCount:1,blockCount:3,src:new URL("/assets/kentavr-CbgK_27-.png",import.meta.url).href},{id:1,name:"Meduza",health:130,attack:8,critChance:30,critMultiplier:1,attackCount:3,blockCount:2,src:new URL("/assets/meduza-B8TaU7EM.png",import.meta.url).href},{id:2,name:"Ziklop",health:200,attack:5,critChance:50,critMultiplier:2,attackCount:1,blockCount:3,src:new URL("/assets/ziklop-eBGRrmV_.png",import.meta.url).href},{id:3,name:"Lion",health:80,attack:20,critChance:30,critMultiplier:1.5,attackCount:2,blockCount:2,src:new URL("/assets/lion-ogHfXQE2.png",import.meta.url).href}],w=["head","neck","body","belly","legs"],M="gameState";function f(){return JSON.parse(localStorage.getItem(M))||structuredClone(_)}function g(n){localStorage.setItem(M,JSON.stringify(n))}function N(n){const e=k[Math.floor(Math.random()*k.length)],t=y[Math.floor(Math.random()*y.length)],s={..._,account:{name:n,wins:0,losses:0,health:100,attack:20,critChance:25,critMultiplier:1.5,attackCount:1,blockCount:2,src:e.src},enemy:t,logs:[]};return g(s),s}function P(n){let e=f();return e.account.name=n,g(e),e}function L(){const n=f(),e=y[Math.floor(Math.random()*y.length)],t={..._,account:{...n.account,health:100},enemy:e,logs:[]};return g(t),t}function C(n,e,t,s,c){const o=document.getElementById("resultModal"),u=Math.floor(Math.random()*100)+1,d=c?s.account.critChance:s.enemy.critChance,i=c?t:s.enemy,a={isPlayerAttackPhase:c,playerName:t.name,enemyName:s.enemy.name,damage:0,hasCrit:!1,attackZone:n,hasDefense:!1};e.includes(n)&&(a.hasDefense=!0),d>=u?(a.hasCrit=!0,a.damage=i.attack*i.critMultiplier):a.hasDefense||(a.damage=i.attack),c?s.enemy.health-=a.damage:t.health-=a.damage,s.enemy.health<=0||t.health<=0?(s.enemy.health<=0&&(s.account.wins++,o.style.display="block",o.querySelector("h2").textContent=`Win ${t.name}`),t.health<=0&&(s.account.losses++,o.style.display="block",o.querySelector("h2").textContent=`Win ${s.enemy.name}`)):s.logs.push(a),g(s)}function B(n){const e=f();if(e.account.name){window.location.hash="#/home";return}n.innerHTML=`
        <div class="page">
            <div class="login">
                <div class="login__box">
                    <h1>Create your character</h1>
                    <input id="playerName" placeholder="Character name" value="${e.account.name}">
                    <button class="login__btn" id="startBtn">Create</button>
                </div>
            </div>
        </div>
    `,document.getElementById("startBtn").addEventListener("click",()=>{const t=document.getElementById("playerName").value.trim();t?(N(t),window.location.hash="#/home"):alert("Введите имя!")})}const x="/assets/home-BL45Uk7K.png",S="/assets/user-BZrB7oB-.png",U="/assets/setting-DvMGuEO2.png";function b(){return`
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
                        <img src=${U} alt="page settings image" >
                    </li>
                </ul>
            </div>
        </header>
    `}function Z(n){let e=f();if(!e.account.name){window.location.hash="#/login";return}n.innerHTML=`
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
    `;const t=document.getElementById("nameInput"),s=document.getElementById("saveNameBtn");t.addEventListener("input",()=>{const c=t.value.trim();s.disabled=!c||c===e.account.name}),document.getElementById("saveNameBtn").addEventListener("click",()=>{const c=t.value.trim();c?(e=P(c),s.disabled=!0,alert("Имя сохранено!")):alert("Имя не может быть пустым!")})}const z="/assets/atlant-BaX5WXJp.png";function R(n){n.innerHTML=`
        <div class="page">
            <div class="not-found">
                <div class="not-found__box">
                    <img class="not-found__img" src=${z} alt="page not found image" >
                    <h1>Page not found</h1>
                    <button class="not-found__btn" onclick="window.location.hash = '#/login'">назад к персонажу</button>
                </div>
            </div>
        </div>
    `}function T(n){if(!f().account.name){window.location.hash="#/login";return}n.innerHTML=`
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
    `}function A(n){const e=f();if(!e.account.name){window.location.hash="#/login";return}n.innerHTML=`
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
    `;const t=document.getElementById("changeBtn"),s=document.getElementById("avatarModal"),c=document.getElementById("characterList"),o=document.getElementById("closeModal");function u(){c.innerHTML="",k.forEach(i=>{const a=document.createElement("img");a.src=i.src,a.alt=`Character ${i.id}`,i.src===e.account.src?a.classList.add("active"):a.onclick=function(){e.account={...e.account,src:i.src},g(e),s.style.display="none",d()},c.appendChild(a)})}function d(){const i=document.querySelector(".character__left");i&&e.account.src&&(i.style.backgroundImage=`url(${e.account.src})`)}window.onclick=function(i){i.target===s&&(s.style.display="none")},o.onclick=function(){s.style.display="none"},t.onclick=function(){u(),s.style.display="block"}}function E(n,e){return n.sort(()=>Math.random()-.5).slice(0,e)}function D(n){const e=E(w,n.attackCount),t=E(w,n.blockCount);return{attackZones:e,blockZones:t}}const O="/assets/winner-DGjo6-_w.png";function W(n){let e=f();if(!e.account.name){window.location.hash="#/login";return}n.innerHTML=`
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
                    <img src=${O} alt="Image winner" >
                </div>
              </div>
            </div>
        </div>
    `;const t=document.getElementById("battleLog"),s=document.getElementById("resultModal"),c=document.getElementById("closeModal");function o(){const d=t.children.length/2;(e.logs?.slice(d)).forEach((a,v)=>{const m=document.createElement("div"),r=document.createElement("div");r.classList.add("right");const h=a.isPlayerAttackPhase?a.playerName:a.enemyName,l=a.isPlayerAttackPhase?a.enemyName:a.playerName;!a.hasCrit&&!a.hasDefense?m.innerHTML=`
                    <div class="message">
                         <span><span class="red">${h}</span> attacked 
                         <span class="red">${l}</span> to <span class="red">${a.attackZone}</span> and deal 
                         <span class="red">${a.damage}</span> damage.
                    </div>
                `:!a.hasCrit&&a.hasDefense?m.innerHTML=`
                    <div class="message">
                         <span><span class="red">${h}</span> attacked 
                         <span class="red">${l}</span> but was able to block.
                    </div>
                `:m.innerHTML=`
                    <div class="message">
                         <span><span class="red">${h}</span> attacked 
                         <span class="red">${l}</span> to <span class="red">${a.attackZone}</span> but ${l}
                         was very lucky and crid his oppenent for <span class="red">${a.damage}</span> damage.
                    </div>
                `,t.append(m),t.append(r),t.scrollTo({top:t.scrollHeight,behavior:"smooth"})})}u(e.account),o();function u(d){const i=document.getElementById("attackBtn"),a=document.querySelectorAll('#attackZones input[type="radio"]'),v=document.querySelectorAll('#defenseZones input[type="checkbox"]');function m(){const r=[...a].filter(l=>l.checked).length===d.attackCount,h=[...v].filter(l=>l.checked).length===d.blockCount;i.disabled=!(r&&h)}a.forEach(r=>{r.addEventListener("change",()=>{[...a].filter(l=>l.checked).length>d.attackCount&&(r.checked=!1),m()})}),v.forEach(r=>{r.addEventListener("change",()=>{[...v].filter(l=>l.checked).length>d.blockCount&&(r.checked=!1),m()})}),i.addEventListener("click",()=>{const r=document.getElementById("playerHP"),h=document.getElementById("enemyHP"),l=D(e.enemy),I=[...v].filter(p=>p.checked).map(p=>p.value),H=Array.from(a).find(p=>p.checked)?.value;if(C(H,l.blockZones,d,e,!0),h.textContent=e.enemy.health,e.account.health<=0||e.enemy.health<=0){o();return}l.attackZones.forEach(p=>{e.account.health<=0||(C(p,I,d,e,!1),r.textContent=e.account.health)}),o()})}window.onclick=function(d){d.target===s&&(s.style.display="none",e=L(),window.location.hash="#/home")},c.onclick=function(){s.style.display="none",e=L(),window.location.hash="#/home"}}const q={"#/":B,"#/settings":Z,"#/login":B,"#/home":T,"#/avatar":A,"#/battle":W};function $(){const n=document.getElementById("app"),e=window.location.hash||"#/",t=q[e];t?t(n):R(n)}window.addEventListener("hashchange",$);window.addEventListener("DOMContentLoaded",$);
