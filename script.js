document.documentElement.setAttribute("data-theme","light");window.zendeskTranslations={contactSupport:"Contact Support"};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("hamburger-btn"),e=document.getElementById("mobile-drawer"),o=document.querySelectorAll(".infobar-component"),s=document.getElementById("dynamic-link"),p=document.getElementById("dynamic-link-mobile"),b=document.getElementById("query"),m=document.querySelector("input[type='submit'][name='commit']"),h=document.querySelector(".copyright"),g=document.getElementById("gt_float_wrapper"),v=window.location.pathname,d=window.location.pathname.split("/")[2];if(g){let i=function(){const r=document.querySelector(".footer"),y=document.querySelector(".gt_float_switcher");if(!r||!y)return;const S=r.getBoundingClientRect(),k=window.innerHeight,L=y.offsetHeight||50,x=k-40-L;if(S.top<x+L){const n=k-S.top+10;g.style.bottom=n+"px"}else g.style.bottom="40px"};var w=i;g.style.bottom="40px",window.addEventListener("scroll",i),window.addEventListener("resize",i),setTimeout(i,1e3)}t.addEventListener("click",()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),t.classList.add("open")):(e.classList.add("hidden"),t.classList.remove("open"))}),b&&b.classList.add("notranslate"),m&&m.classList.add("notranslate"),h&&(h.innerHTML=`&copy; ${new Date().getFullYear()+" "}`),o&&o.forEach(i=>{const r=i.querySelector(".infobar-dismiss");r&&r.addEventListener("click",()=>{i.classList.add("hidden")})}),s&&p&&(v.includes("/requests/new")?(s.href=`/hc/${d}`,p.href=`/hc/${d}`,s.textContent="Help Center",p.textContent="Help Center"):(s.href=`/hc/${d}/requests/new`,p.href=`/hc/${d}/requests/new`,s.innerHTML=s.dataset.contactText,p.innerHTML=s.dataset.contactText))});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("request_custom_fields_10519906052751"),e=document.getElementById("ingame-warning"),o=document.querySelector('input[type="submit"][name="commit"]');t&&t.addEventListener("change",()=>{t.value==="inquiry_type_cc_in-game_inquiry_"||t.value==="inquiry_type_cc_in-game_txn_"?(o.disabled=!0,e.classList.remove("hidden")):(o.disabled=!1,e.classList.add("hidden"))})});var B,C,_,M,z,$,P,A;const u={"Yalla Live":{primary:((B=window.zendeskThemeSettings)==null?void 0:B.yalla_live.primary)||"#00d8c9",secondary:((C=window.zendeskThemeSettings)==null?void 0:C.yalla_live.secondary)||"#e5fe8f",bannerImage:"",bannerMobile:"",logo:((_=window.zendeskThemeSettings)==null?void 0:_.yalla_live.logo)||""},"Yalla Ludo":{primary:((M=window.zendeskThemeSettings)==null?void 0:M.yalla_ludo.primary)||"#00eac4",secondary:((z=window.zendeskThemeSettings)==null?void 0:z.yalla_ludo.secondary)||"#e5fe8f",bannerImage:"",bannerMobile:"",logo:(($=window.zendeskThemeSettings)==null?void 0:$.yalla_ludo.logo)||""},default:{primary:((P=window.zendeskThemeSettings)==null?void 0:P.default.primary)||"#00eac4",secondary:((A=window.zendeskThemeSettings)==null?void 0:A.default.secondary)||"#e5fe8f",bannerImage:"",bannerMobile:"",logo:""}};function E(t){document.querySelectorAll(".article-btn").forEach(o=>{o.style.borderColor=t.primary,o.style.setProperty("--hover-bg-color",t.primary),o.classList.add("article-btn-themed")})}function q(t){const e=document.querySelector(".custom-breadcrumbs");if(!e){console.warn("Breadcrumbs navigation not found");return}const o=e.querySelectorAll("a");o.length!==0&&o.forEach(s=>{s.style.setProperty("--hover-color",t.primary),s.classList.add("category-themed"),s.classList.add("notranslate")})}function T(){var e;return((e=document.querySelectorAll("ol.breadcrumbs > li")[2])==null?void 0:e.textContent.trim())??""}function Y(t){const e=document.getElementById("game-logo"),o=document.getElementById("game-logo-img");e&&o&&t.logo!==""&&(o.src=t.logo,e.style.display="block")}function H(t){const e=document.getElementById("hamburger-btn");e&&(e.style.backgroundColor=t.primary,e.style.borderColor=t.primary)}function D(t){const e=document.querySelector("[data-hero-section]");if(e&&t.bannerImage&&t.bannerMobile){const s=window.innerWidth<=475?t.bannerMobile:t.bannerImage;s&&(e.style.backgroundImage=`url(${s})`,e.style.backgroundSize="cover",e.style.backgroundPosition="center center",e.style.backgroundRepeat="no-repeat",e.style.backgroundColor="#00009d")}}function O(t,e=!0){const o=document.querySelector('input[name="commit"][value="Search"]');o&&(o.style.setProperty("background-color",t.primary),o.classList.add("category-themed"),e?o.style.setProperty("color","white"):o.style.setProperty("color","black"))}function I(t){document.querySelectorAll(".subsection-btn").forEach(o=>{o.style.backgroundColor=t.primary,o.style.color="white",o.style.setProperty("--hover-bg-color",t.primary),o.style.setProperty("--hover-opacity","0.9"),o.classList.add("subsection-btn-themed")})}function N(t){const e=document.querySelector(".support-icon-bg");e&&(e.style.backgroundColor=t.primary,e.style.opacity="1",e.style.setProperty("--hover-bg-color",t.primary),e.classList.add("support-icon-themed"))}function Z(t){document.querySelectorAll(".view-more-btn").forEach(o=>{o.style.borderColor=t.primary,o.style.setProperty("--hover-bg-color",t.primary),o.classList.add("view-more-btn-themed")})}function F(t){document.querySelectorAll(".contact-support-btn").forEach(o=>{o.classList.remove("bg-cta/80","hover:bg-cta"),o.style.backgroundColor=t.primary,o.style.opacity="0.8",o.style.setProperty("--hover-bg-color",t.primary),o.classList.add("contact-btn-themed")})}function G(t){document.querySelectorAll(".article-sidebar-btn").forEach(o=>{o.classList.contains("bg-cta")?o.style.backgroundColor=t.primary:(o.style.borderColor=t.primary,o.addEventListener("mouseenter",function(){this.style.backgroundColor=t.primary}),o.addEventListener("mouseleave",function(){this.style.backgroundColor="white"}))})}function R(t,e={}){const o=`.request_custom_fields_${t}`,p=function n(l,c){const a=Object.assign({},l);for(const f of Object.keys(c))c[f]instanceof Object&&f in a?a[f]=n(a[f],c[f]):a[f]=c[f];return a}({placeholder:"Search...",emptyMessage:"No match found"},e),b=document.querySelector(o);if(!b){console.warn(`ZenMultiSelect: Container not found for field ${t}`);return}const m=b.querySelector(".hc-multiselect");if(!m){console.warn(`ZenMultiSelect: .hc-multiselect not found for field ${t}`);return}const h=m.querySelectorAll('.hc-multiselect-menu li[role="menuitemcheckbox"]');if(!h||h.length===0){console.warn(`ZenMultiSelect: No menu items found for field ${t}`);return}const g=Array.from(h).map(n=>{const l=n.querySelector('input[type="checkbox"]'),c=n.querySelector("label");return{value:l?l.value:"",label:c?c.textContent.trim():"",element:n,checkbox:l,index:n.getAttribute("data-index")}}),v=`zmultiselect-style-${t}`;if(!document.getElementById(v)){const n=document.createElement("style");n.id=v,n.innerHTML=`
      .zmultiselect-search-container-${t} {
        position: sticky;
        top: 0;
        z-index: 10;
        margin: 0;
        padding: 6px 8px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        display: block !important;
        width: 100%;
      }

      .zmultiselect-search-${t} {
        width: 100%;
        padding: 4px 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 13px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        outline: none;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        box-sizing: border-box;
        display: block;
      }

      .zmultiselect-search-${t}:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
      }

      .zmultiselect-search-${t}::placeholder {
        color: #999;
        opacity: 1;
      }

      .zmultiselect-no-results-${t} {
        padding: 16px;
        text-align: center;
        color: #6b7280;
        font-size: 14px;
        font-style: italic;
      }

      .request_custom_fields_${t} .hc-multiselect-menu {
        padding: 0 !important;
        display: flex;
        flex-direction: column;
      }

      .request_custom_fields_${t} .hc-multiselect-menu ul[role="listbox"] {
        max-height: 180px !important;
        overflow-y: auto !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .request_custom_fields_${t} .hc-multiselect-menu li[role="menuitemcheckbox"] label {
        width: 100%;
        display: flex !important;
        align-items: center;
        padding: 8px 12px !important;
      }

      .request_custom_fields_${t} .hc-multiselect-menu li[role="menuitemcheckbox"].zmulti-hidden {
        display: none !important;
      }

      .request_custom_fields_${t} .hc-multiselect-menu li[role="menuitemcheckbox"]:hover {
        background-color: #f5f5f5 !important;
      }
    `,document.head.appendChild(n)}const d=m.querySelector(".hc-multiselect-menu");if(!d){console.warn(`ZenMultiSelect: .hc-multiselect-menu not found for field ${t}`);return}const w=d.querySelector('ul[role="listbox"]');if(!w){console.warn(`ZenMultiSelect: ul[role="listbox"] not found for field ${t}`);return}if(d.querySelector(`.zmultiselect-search-container-${t}`)){console.log(`ZenMultiSelect: Search already added for field ${t}`);return}const i=document.createElement("div");i.className=`zmultiselect-search-container-${t}`;const r=document.createElement("input");r.type="text",r.id=`zmultiselect-search-input-${t}`,r.name=`zmultiselect-search-input-${t}`,r.className=`zmultiselect-search-${t}`,r.placeholder=p.placeholder,r.setAttribute("autocomplete","off"),r.setAttribute("aria-label","Search options"),i.appendChild(r);const y=document.createElement("div");y.className=`zmultiselect-no-results-${t}`,y.textContent=p.emptyMessage,y.style.display="none",d.insertBefore(i,w),d.appendChild(y),console.log(`ZenMultiSelect: Successfully initialized for field ${t}`);function S(n){const l=n.toLowerCase().trim();let c=0;g.forEach(a=>{a.label.toLowerCase().includes(l)||a.value.toLowerCase().includes(l)||l===""?(a.element.classList.remove("zmulti-hidden"),c++):a.element.classList.add("zmulti-hidden")}),c===0?y.style.display="block":y.style.display="none"}r.addEventListener("input",function(){S(this.value)}),r.addEventListener("mousedown",function(n){n.stopPropagation()}),r.addEventListener("click",function(n){n.stopPropagation()}),r.addEventListener("focus",function(n){n.stopPropagation()}),i.addEventListener("mousedown",function(n){n.stopPropagation()}),i.addEventListener("click",function(n){n.stopPropagation()});const k=new MutationObserver(function(n){n.forEach(function(l){l.attributeName==="aria-expanded"&&(m.querySelector(".hc-multiselect-toggle").getAttribute("aria-expanded")==="true"?setTimeout(()=>{r.focus()},100):(r.value="",S("")))})}),L=m.querySelector(".hc-multiselect-toggle");L&&k.observe(L,{attributes:!0,attributeFilter:["aria-expanded"]});const x=function(n){if(!["Escape","ArrowDown","ArrowUp","Enter"].includes(n.key)){n.stopPropagation();return}if(n.stopPropagation(),n.key==="Escape"){const c=m.querySelector(".hc-multiselect-toggle");c&&c.click();return}if(n.key==="ArrowDown"){n.preventDefault();const c=w.querySelector('li[role="menuitemcheckbox"]:not(.zmulti-hidden)');c&&c.focus();return}if(n.key==="Enter"){n.preventDefault();return}};r.addEventListener("keydown",x),g.forEach((n,l)=>{n.element.addEventListener("keydown",function(c){c.key==="ArrowUp"&&Array.from(w.querySelectorAll('li[role="menuitemcheckbox"]:not(.zmulti-hidden)'))[0]===this&&(c.preventDefault(),r.focus())})})}window.zenMultiSelect=R;document.addEventListener("DOMContentLoaded",function(){var o;if(!window.location.pathname.includes("/categories/"))return;const t=(o=document.getElementById("category-title"))==null?void 0:o.textContent.trim();let e=u.default;t==="Yalla Live"?e=u["Yalla Live"]:t==="Yalla Ludo"&&(e=u["Yalla Ludo"]),Y(e),D(e),q(e),O(e,!1),I(e),E(e),Z(e),F(e),N(e)});document.addEventListener("DOMContentLoaded",function(){if(!window.location.pathname.includes("/sections/"))return;const t=T();let e=u.default;const o=document.querySelector("#main-content");if(t==="Yalla Live"){const s=document.getElementById("contact-support-section");s&&s.classList.remove("hidden")}switch(t){case"Yalla Live":e=u["Yalla Live"];break;case"Yalla Ludo":e=u["Yalla Ludo"];break;default:e=u.default}o.style.setProperty("--color-cta",e.primary),o.style.setProperty("--category-theme-primary",e.primary),o.style.setProperty("--category-theme-secondary",e.secondary),O(e,!1),q(e),D(e),Y(e),I(e),E(e),H(e),N(e)});document.addEventListener("DOMContentLoaded",function(){if(!window.location.pathname.includes("/articles/"))return;const t=T();let e=u.default;const o=document.querySelector("#main-content");switch(t){case"Yalla Live":e=u["Yalla Live"];break;case"Yalla Ludo":e=u["Yalla Ludo"];break;default:e=u.default}o.style.setProperty("--color-cta",e.primary),o.style.setProperty("--category-theme-primary",e.primary),o.style.setProperty("--category-theme-secondary",e.secondary),q(e),E(e),H(e),G(e)});
