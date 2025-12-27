document.documentElement.setAttribute("data-theme","light");window.zendeskTranslations={contactSupport:"Contact Support"};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("hamburger-btn"),e=document.getElementById("mobile-drawer"),o=document.querySelectorAll(".infobar-component"),c=document.getElementById("dynamic-link"),m=document.getElementById("dynamic-link-mobile"),b=document.getElementById("query"),d=document.querySelector("input[type='submit'][name='commit']"),g=document.querySelector(".copyright"),S=document.getElementById("gt_float_wrapper"),w=window.location.pathname,u=window.location.pathname.split("/")[2];S&&(S.style.bottom="40px"),t.addEventListener("click",()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),t.classList.add("open")):(e.classList.add("hidden"),t.classList.remove("open"))}),b&&b.classList.add("notranslate"),d&&d.classList.add("notranslate"),g&&(g.innerHTML=`&copy; ${new Date().getFullYear()+" "}`),o&&o.forEach(f=>{const y=f.querySelector(".infobar-dismiss");y&&y.addEventListener("click",()=>{f.classList.add("hidden")})}),c&&m&&(w.includes("/requests/new")?(c.href=`/hc/${u}`,m.href=`/hc/${u}`,c.textContent="Help Center",m.textContent="Help Center"):(c.href=`/hc/${u}/requests/new`,m.href=`/hc/${u}/requests/new`,c.innerHTML=c.dataset.contactText,m.innerHTML=c.dataset.contactText))});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("request_custom_fields_10519906052751"),e=document.getElementById("ingame-warning"),o=document.querySelector('input[type="submit"][name="commit"]');t&&t.addEventListener("change",()=>{t.value==="inquiry_type_cc_in-game_inquiry_"||t.value==="inquiry_type_cc_in-game_txn_"?(o.disabled=!0,e.classList.remove("hidden")):(o.disabled=!1,e.classList.add("hidden"))})});var E,q,B,C,_,M,z,$;const a={"Yalla Live":{primary:((E=window.zendeskThemeSettings)==null?void 0:E.yalla_live.primary)||"#00d8c9",secondary:((q=window.zendeskThemeSettings)==null?void 0:q.yalla_live.secondary)||"#e5fe8f",bannerImage:"",bannerMobile:"",logo:((B=window.zendeskThemeSettings)==null?void 0:B.yalla_live.logo)||""},"Yalla Ludo":{primary:((C=window.zendeskThemeSettings)==null?void 0:C.yalla_ludo.primary)||"#00eac4",secondary:((_=window.zendeskThemeSettings)==null?void 0:_.yalla_ludo.secondary)||"#e5fe8f",bannerImage:"",bannerMobile:"",logo:((M=window.zendeskThemeSettings)==null?void 0:M.yalla_ludo.logo)||""},default:{primary:((z=window.zendeskThemeSettings)==null?void 0:z.default.primary)||"#00eac4",secondary:(($=window.zendeskThemeSettings)==null?void 0:$.default.secondary)||"#e5fe8f",bannerImage:"",bannerMobile:"",logo:""}};function L(t){document.querySelectorAll(".article-btn").forEach(o=>{o.style.borderColor=t.primary,o.style.setProperty("--hover-bg-color",t.primary),o.classList.add("article-btn-themed")})}function v(t){const e=document.querySelector(".custom-breadcrumbs");if(!e){console.warn("Breadcrumbs navigation not found");return}const o=e.querySelectorAll("a");o.length!==0&&o.forEach(c=>{c.style.setProperty("--hover-color",t.primary),c.classList.add("category-themed"),c.classList.add("notranslate")})}function A(){var e;return((e=document.querySelectorAll("ol.breadcrumbs > li")[2])==null?void 0:e.textContent.trim())??""}function P(t){const e=document.getElementById("game-logo"),o=document.getElementById("game-logo-img");e&&o&&t.logo!==""&&(o.src=t.logo,e.style.display="block")}function T(t){const e=document.getElementById("hamburger-btn");e&&(e.style.backgroundColor=t.primary,e.style.borderColor=t.primary)}function Y(t){const e=document.querySelector("[data-hero-section]");if(e&&t.bannerImage&&t.bannerMobile){const c=window.innerWidth<=475?t.bannerMobile:t.bannerImage;c&&(e.style.backgroundImage=`url(${c})`,e.style.backgroundSize="cover",e.style.backgroundPosition="center center",e.style.backgroundRepeat="no-repeat",e.style.backgroundColor="#00009d")}}function D(t){const e=document.querySelector('input[name="commit"][value="Search"]');e&&(e.style.setProperty("background-color",t.primary),e.classList.add("category-themed"))}function O(t){document.querySelectorAll(".subsection-btn").forEach(o=>{o.style.backgroundColor=t.primary,o.style.color="white",o.style.setProperty("--hover-bg-color",t.primary),o.style.setProperty("--hover-opacity","0.9"),o.classList.add("subsection-btn-themed")})}function I(t){const e=document.querySelector(".support-icon-bg");e&&(e.style.backgroundColor=t.primary,e.style.opacity="1",e.style.setProperty("--hover-bg-color",t.primary),e.classList.add("support-icon-themed"))}function Z(t){document.querySelectorAll(".view-more-btn").forEach(o=>{o.style.borderColor=t.primary,o.style.setProperty("--hover-bg-color",t.primary),o.classList.add("view-more-btn-themed")})}function F(t){document.querySelectorAll(".contact-support-btn").forEach(o=>{o.classList.remove("bg-cta/80","hover:bg-cta"),o.style.backgroundColor=t.primary,o.style.opacity="0.8",o.style.setProperty("--hover-bg-color",t.primary),o.classList.add("contact-btn-themed")})}function G(t){document.querySelectorAll(".article-sidebar-btn").forEach(o=>{o.classList.contains("bg-cta")?o.style.backgroundColor=t.primary:(o.style.borderColor=t.primary,o.addEventListener("mouseenter",function(){this.style.backgroundColor=t.primary}),o.addEventListener("mouseleave",function(){this.style.backgroundColor="white"}))})}function j(t,e={}){const o=`.request_custom_fields_${t}`,m=function n(i,r){const l=Object.assign({},i);for(const p of Object.keys(r))r[p]instanceof Object&&p in l?l[p]=n(l[p],r[p]):l[p]=r[p];return l}({placeholder:"Search...",emptyMessage:"No match found"},e),b=document.querySelector(o);if(!b){console.warn(`ZenMultiSelect: Container not found for field ${t}`);return}const d=b.querySelector(".hc-multiselect");if(!d){console.warn(`ZenMultiSelect: .hc-multiselect not found for field ${t}`);return}const g=d.querySelectorAll('.hc-multiselect-menu li[role="menuitemcheckbox"]');if(!g||g.length===0){console.warn(`ZenMultiSelect: No menu items found for field ${t}`);return}const S=Array.from(g).map(n=>{const i=n.querySelector('input[type="checkbox"]'),r=n.querySelector("label");return{value:i?i.value:"",label:r?r.textContent.trim():"",element:n,checkbox:i,index:n.getAttribute("data-index")}}),w=`zmultiselect-style-${t}`;if(!document.getElementById(w)){const n=document.createElement("style");n.id=w,n.innerHTML=`
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
    `,document.head.appendChild(n)}const u=d.querySelector(".hc-multiselect-menu");if(!u){console.warn(`ZenMultiSelect: .hc-multiselect-menu not found for field ${t}`);return}const f=u.querySelector('ul[role="listbox"]');if(!f){console.warn(`ZenMultiSelect: ul[role="listbox"] not found for field ${t}`);return}if(u.querySelector(`.zmultiselect-search-container-${t}`)){console.log(`ZenMultiSelect: Search already added for field ${t}`);return}const y=document.createElement("div");y.className=`zmultiselect-search-container-${t}`;const s=document.createElement("input");s.type="text",s.id=`zmultiselect-search-input-${t}`,s.name=`zmultiselect-search-input-${t}`,s.className=`zmultiselect-search-${t}`,s.placeholder=m.placeholder,s.setAttribute("autocomplete","off"),s.setAttribute("aria-label","Search options"),y.appendChild(s);const h=document.createElement("div");h.className=`zmultiselect-no-results-${t}`,h.textContent=m.emptyMessage,h.style.display="none",u.insertBefore(y,f),u.appendChild(h),console.log(`ZenMultiSelect: Successfully initialized for field ${t}`);function k(n){const i=n.toLowerCase().trim();let r=0;S.forEach(l=>{l.label.toLowerCase().includes(i)||l.value.toLowerCase().includes(i)||i===""?(l.element.classList.remove("zmulti-hidden"),r++):l.element.classList.add("zmulti-hidden")}),r===0?h.style.display="block":h.style.display="none"}s.addEventListener("input",function(){k(this.value)}),s.addEventListener("mousedown",function(n){n.stopPropagation()}),s.addEventListener("click",function(n){n.stopPropagation()}),s.addEventListener("focus",function(n){n.stopPropagation()}),y.addEventListener("mousedown",function(n){n.stopPropagation()}),y.addEventListener("click",function(n){n.stopPropagation()});const H=new MutationObserver(function(n){n.forEach(function(i){i.attributeName==="aria-expanded"&&(d.querySelector(".hc-multiselect-toggle").getAttribute("aria-expanded")==="true"?setTimeout(()=>{s.focus()},100):(s.value="",k("")))})}),x=d.querySelector(".hc-multiselect-toggle");x&&H.observe(x,{attributes:!0,attributeFilter:["aria-expanded"]});const N=function(n){if(!["Escape","ArrowDown","ArrowUp","Enter"].includes(n.key)){n.stopPropagation();return}if(n.stopPropagation(),n.key==="Escape"){const r=d.querySelector(".hc-multiselect-toggle");r&&r.click();return}if(n.key==="ArrowDown"){n.preventDefault();const r=f.querySelector('li[role="menuitemcheckbox"]:not(.zmulti-hidden)');r&&r.focus();return}if(n.key==="Enter"){n.preventDefault();return}};s.addEventListener("keydown",N),S.forEach((n,i)=>{n.element.addEventListener("keydown",function(r){r.key==="ArrowUp"&&Array.from(f.querySelectorAll('li[role="menuitemcheckbox"]:not(.zmulti-hidden)'))[0]===this&&(r.preventDefault(),s.focus())})})}window.zenMultiSelect=j;document.addEventListener("DOMContentLoaded",function(){var o;if(!window.location.pathname.includes("/categories/"))return;const t=(o=document.getElementById("category-title"))==null?void 0:o.textContent.trim();let e=a.default;t==="Yalla Live"?e=a["Yalla Live"]:t==="Yalla Ludo"&&(e=a["Yalla Ludo"]),P(e),Y(e),v(e),D(e),O(e),L(e),Z(e),F(e),I(e)});document.addEventListener("DOMContentLoaded",function(){if(!window.location.pathname.includes("/sections/"))return;const t=A();let e=a.default;const o=document.querySelector("#main-content");if(t==="Yalla Live"){const c=document.getElementById("contact-support-section");c&&c.classList.remove("hidden")}switch(t){case"Yalla Live":e=a["Yalla Live"];break;case"Yalla Ludo":e=a["Yalla Ludo"];break;default:e=a.default}o.style.setProperty("--color-cta",e.primary),o.style.setProperty("--category-theme-primary",e.primary),o.style.setProperty("--category-theme-secondary",e.secondary),D(e),v(e),Y(e),P(e),O(e),L(e),T(e),I(e)});document.addEventListener("DOMContentLoaded",function(){if(!window.location.pathname.includes("/articles/"))return;const t=A();let e=a.default;const o=document.querySelector("#main-content");switch(t){case"Yalla Live":e=a["Yalla Live"];break;case"Yalla Ludo":e=a["Yalla Ludo"];break;default:e=a.default}o.style.setProperty("--color-cta",e.primary),o.style.setProperty("--category-theme-primary",e.primary),o.style.setProperty("--category-theme-secondary",e.secondary),v(e),L(e),T(e),G(e)});
