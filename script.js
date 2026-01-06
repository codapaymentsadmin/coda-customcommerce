document.documentElement.setAttribute("data-theme","light");window.zendeskTranslations={contactSupport:"Contact Support"};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("hamburger-btn"),o=document.getElementById("mobile-drawer"),t=document.querySelectorAll(".infobar-component"),r=document.getElementById("dynamic-link"),c=document.getElementById("dynamic-link-mobile"),y=document.getElementById("query"),l=document.querySelector("input[type='submit'][name='commit']"),d=document.querySelector(".copyright"),f=document.getElementById("gt_float_wrapper"),S=window.location.pathname,p=window.location.pathname.split("/")[2];f&&(f.style.bottom="40px"),e.addEventListener("click",()=>{o.classList.contains("hidden")?(o.classList.remove("hidden"),e.classList.add("open")):(o.classList.add("hidden"),e.classList.remove("open"))}),y&&y.classList.add("notranslate"),l&&l.classList.add("notranslate"),d&&(d.innerHTML=`&copy; ${new Date().getFullYear()+" "}`),t&&t.forEach(h=>{const b=h.querySelector(".infobar-dismiss");b&&b.addEventListener("click",()=>{h.classList.add("hidden")})}),r&&c&&(S.includes("/requests/new")?(r.href=`/hc/${p}`,c.href=`/hc/${p}`,r.textContent="Help Center",c.textContent="Help Center"):(r.href=`/hc/${p}/requests/new`,c.href=`/hc/${p}/requests/new`,r.innerHTML=r.dataset.contactText,c.innerHTML=r.dataset.contactText))});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("request_custom_fields_10519906052751"),o=document.getElementById("ingame-warning"),t=document.querySelector('input[type="submit"][name="commit"]');e&&e.addEventListener("change",()=>{e.value==="inquiry_type_cc_in-game_inquiry_"||e.value==="inquiry_type_cc_in-game_txn_"?(t.disabled=!0,o.classList.remove("hidden")):(t.disabled=!1,o.classList.add("hidden"))})});var L,B,C,q,M,z,_,$,T,A,P,I,F,H,D,N,O,G,Z,W,j,K,U,R,V,Y,J,Q,X,ee,te,oe,ne,re;const m={"eFootball™":{primary:((B=(L=window.zendeskThemeSettings)==null?void 0:L.efootball)==null?void 0:B.primary)||"#1E40AF",secondary:((q=(C=window.zendeskThemeSettings)==null?void 0:C.efootball)==null?void 0:q.secondary)||"#3B82F6",bannerImage:((z=(M=window.zendeskThemeSettings)==null?void 0:M.efootball)==null?void 0:z.bannerImage)||"",bannerMobile:(($=(_=window.zendeskThemeSettings)==null?void 0:_.efootball)==null?void 0:$.bannerMobile)||"",logo:((A=(T=window.zendeskThemeSettings)==null?void 0:T.efootball)==null?void 0:A.logo)||""},"Blockman go":{primary:((I=(P=window.zendeskThemeSettings)==null?void 0:P.blockman)==null?void 0:I.primary)||"#1E40AF",secondary:((H=(F=window.zendeskThemeSettings)==null?void 0:F.blockman)==null?void 0:H.secondary)||"#3B82F6",bannerImage:((N=(D=window.zendeskThemeSettings)==null?void 0:D.blockman)==null?void 0:N.bannerImage)||"",bannerMobile:((G=(O=window.zendeskThemeSettings)==null?void 0:O.blockman)==null?void 0:G.bannerMobile)||"",logo:((W=(Z=window.zendeskThemeSettings)==null?void 0:Z.blockman)==null?void 0:W.logo)||""},"Moba 5v5":{primary:((K=(j=window.zendeskThemeSettings)==null?void 0:j.moba)==null?void 0:K.primary)||"#1E40AF",secondary:((R=(U=window.zendeskThemeSettings)==null?void 0:U.moba)==null?void 0:R.secondary)||"#3B82F6",bannerImage:((Y=(V=window.zendeskThemeSettings)==null?void 0:V.moba)==null?void 0:Y.bannerImage)||"",bannerMobile:((Q=(J=window.zendeskThemeSettings)==null?void 0:J.moba)==null?void 0:Q.bannerMobile)||"",logo:((ee=(X=window.zendeskThemeSettings)==null?void 0:X.moba)==null?void 0:ee.logo)||""},default:{primary:((oe=(te=window.zendeskThemeSettings)==null?void 0:te.default)==null?void 0:oe.primary)||"#000",secondary:((re=(ne=window.zendeskThemeSettings)==null?void 0:ne.default)==null?void 0:re.secondary)||"#fff",bannerImage:"",bannerMobile:"",logo:""}};function k(e){document.querySelectorAll(".article-btn").forEach(t=>{t.style.borderColor=e.primary,t.style.color=e.primary,t.style.setProperty("--hover-bg-color",e.primary),t.classList.add("article-btn-themed")})}function v(e,o=!1){var l;const t=document.querySelector(".custom-breadcrumbs");if(!t){console.warn("Breadcrumbs navigation not found");return}const r=t.querySelectorAll("ol.breadcrumbs > li");if(r.length===0){console.warn("Breadcrumb items not found or not yet rendered");return}o&&r.forEach((d,f)=>{f<2&&d.remove()});const c=t.querySelectorAll("a");console.log("remainingLinks:",c);const y=o?0:2;sessionStorage.setItem("currentGameTitle",((l=c[y])==null?void 0:l.textContent.trim())||""),c.forEach(d=>{d.style.setProperty("--hover-color",e.primary),d.classList.add("category-themed"),d.classList.add("notranslate")})}function se(){var o;return((o=document.querySelectorAll("ol.breadcrumbs > li")[2])==null?void 0:o.textContent.trim())??""}function ye(e){const o=document.getElementById("game-logo"),t=document.getElementById("game-logo-img");o&&t&&e.logo!==""&&(t.src=e.logo,o.style.display="block")}function ce(e){const o=document.getElementById("hamburger-btn");o&&(o.style.backgroundColor=e.primary,o.style.borderColor=e.primary)}function ae(e){const o=document.querySelector("[data-hero-section]");if(o&&e.bannerImage&&e.bannerMobile){const r=window.innerWidth<=475?e.bannerMobile:e.bannerImage;r&&(o.style.backgroundImage=`url(${r})`,o.style.backgroundSize="cover",o.style.backgroundPosition="center center",o.style.backgroundRepeat="no-repeat",o.style.backgroundColor="#00009d")}}function ie(e,o=!0){const t=document.querySelector('input[name="commit"][value="Search"]');t&&(t.style.setProperty("background-color",e.primary),t.classList.add("category-themed"),o?t.style.setProperty("color","white"):t.style.setProperty("color","black"))}function le(e){document.querySelectorAll(".subsection-btn").forEach(t=>{t.style.backgroundColor=e.primary,t.style.color="white",t.style.setProperty("--hover-bg-color",e.primary),t.style.setProperty("--hover-opacity","0.9"),t.classList.add("subsection-btn-themed")})}function de(e){const o=document.querySelector(".support-icon-bg");o&&(o.style.backgroundColor=e.primary,o.style.opacity="1",o.style.setProperty("--hover-bg-color",e.primary),o.classList.add("support-icon-themed"))}function pe(e){document.querySelectorAll(".view-more-btn").forEach(t=>{t.style.borderColor=e.primary,t.style.color=e.primary,t.style.setProperty("--hover-bg-color",e.primary),t.classList.add("view-more-btn-themed")})}function be(e){document.querySelectorAll(".contact-support-btn").forEach(t=>{t.classList.remove("bg-cta/80","hover:bg-cta"),t.style.backgroundColor=e.primary,t.style.opacity="0.8",t.style.color="white",t.style.setProperty("--hover-bg-color",e.primary),t.classList.add("contact-btn-themed")})}function ge(e){document.querySelectorAll(".article-sidebar-btn").forEach(t=>{t.classList.contains("bg-cta")?(t.style.backgroundColor=e.primary,t.style.color="white"):(t.style.borderColor=e.primary,t.style.color=e.primary,t.addEventListener("mouseenter",function(){this.style.backgroundColor=e.primary,this.style.color="white"}),t.addEventListener("mouseleave",function(){this.style.backgroundColor="white",this.style.color=e.primary}))})}function fe(e,o={}){const t=`.request_custom_fields_${e}`,c=function n(i,s){const u=Object.assign({},i);for(const g of Object.keys(s))s[g]instanceof Object&&g in u?u[g]=n(u[g],s[g]):u[g]=s[g];return u}({placeholder:"Search...",emptyMessage:"No match found"},o),y=document.querySelector(t);if(!y){console.warn(`ZenMultiSelect: Container not found for field ${e}`);return}const l=y.querySelector(".hc-multiselect");if(!l){console.warn(`ZenMultiSelect: .hc-multiselect not found for field ${e}`);return}const d=l.querySelectorAll('.hc-multiselect-menu li[role="menuitemcheckbox"]');if(!d||d.length===0){console.warn(`ZenMultiSelect: No menu items found for field ${e}`);return}const f=Array.from(d).map(n=>{const i=n.querySelector('input[type="checkbox"]'),s=n.querySelector("label");return{value:i?i.value:"",label:s?s.textContent.trim():"",element:n,checkbox:i,index:n.getAttribute("data-index")}}),S=`zmultiselect-style-${e}`;if(!document.getElementById(S)){const n=document.createElement("style");n.id=S,n.innerHTML=`
      .zmultiselect-search-container-${e} {
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

      .zmultiselect-search-${e} {
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

      .zmultiselect-search-${e}:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
      }

      .zmultiselect-search-${e}::placeholder {
        color: #999;
        opacity: 1;
      }

      .zmultiselect-no-results-${e} {
        padding: 16px;
        text-align: center;
        color: #6b7280;
        font-size: 14px;
        font-style: italic;
      }

      .request_custom_fields_${e} .hc-multiselect-menu {
        padding: 0 !important;
        display: flex;
        flex-direction: column;
      }

      .request_custom_fields_${e} .hc-multiselect-menu ul[role="listbox"] {
        max-height: 180px !important;
        overflow-y: auto !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .request_custom_fields_${e} .hc-multiselect-menu li[role="menuitemcheckbox"] label {
        width: 100%;
        display: flex !important;
        align-items: center;
        padding: 8px 12px !important;
      }

      .request_custom_fields_${e} .hc-multiselect-menu li[role="menuitemcheckbox"].zmulti-hidden {
        display: none !important;
      }

      .request_custom_fields_${e} .hc-multiselect-menu li[role="menuitemcheckbox"]:hover {
        background-color: #f5f5f5 !important;
      }
    `,document.head.appendChild(n)}const p=l.querySelector(".hc-multiselect-menu");if(!p){console.warn(`ZenMultiSelect: .hc-multiselect-menu not found for field ${e}`);return}const h=p.querySelector('ul[role="listbox"]');if(!h){console.warn(`ZenMultiSelect: ul[role="listbox"] not found for field ${e}`);return}if(p.querySelector(`.zmultiselect-search-container-${e}`)){console.log(`ZenMultiSelect: Search already added for field ${e}`);return}const b=document.createElement("div");b.className=`zmultiselect-search-container-${e}`;const a=document.createElement("input");a.type="text",a.id=`zmultiselect-search-input-${e}`,a.name=`zmultiselect-search-input-${e}`,a.className=`zmultiselect-search-${e}`,a.placeholder=c.placeholder,a.setAttribute("autocomplete","off"),a.setAttribute("aria-label","Search options"),b.appendChild(a);const w=document.createElement("div");w.className=`zmultiselect-no-results-${e}`,w.textContent=c.emptyMessage,w.style.display="none",p.insertBefore(b,h),p.appendChild(w),console.log(`ZenMultiSelect: Successfully initialized for field ${e}`);function x(n){const i=n.toLowerCase().trim();let s=0;f.forEach(u=>{u.label.toLowerCase().includes(i)||u.value.toLowerCase().includes(i)||i===""?(u.element.classList.remove("zmulti-hidden"),s++):u.element.classList.add("zmulti-hidden")}),s===0?w.style.display="block":w.style.display="none"}a.addEventListener("input",function(){x(this.value)}),a.addEventListener("mousedown",function(n){n.stopPropagation()}),a.addEventListener("click",function(n){n.stopPropagation()}),a.addEventListener("focus",function(n){n.stopPropagation()}),b.addEventListener("mousedown",function(n){n.stopPropagation()}),b.addEventListener("click",function(n){n.stopPropagation()});const ue=new MutationObserver(function(n){n.forEach(function(i){i.attributeName==="aria-expanded"&&(l.querySelector(".hc-multiselect-toggle").getAttribute("aria-expanded")==="true"?setTimeout(()=>{a.focus()},100):(a.value="",x("")))})}),E=l.querySelector(".hc-multiselect-toggle");E&&ue.observe(E,{attributes:!0,attributeFilter:["aria-expanded"]});const me=function(n){if(!["Escape","ArrowDown","ArrowUp","Enter"].includes(n.key)){n.stopPropagation();return}if(n.stopPropagation(),n.key==="Escape"){const s=l.querySelector(".hc-multiselect-toggle");s&&s.click();return}if(n.key==="ArrowDown"){n.preventDefault();const s=h.querySelector('li[role="menuitemcheckbox"]:not(.zmulti-hidden)');s&&s.focus();return}if(n.key==="Enter"){n.preventDefault();return}};a.addEventListener("keydown",me),f.forEach((n,i)=>{n.element.addEventListener("keydown",function(s){s.key==="ArrowUp"&&Array.from(h.querySelectorAll('li[role="menuitemcheckbox"]:not(.zmulti-hidden)'))[0]===this&&(s.preventDefault(),a.focus())})})}window.zenMultiSelect=fe;document.addEventListener("DOMContentLoaded",function(){if(!window.location.pathname.includes("/categories/"))return;let e=m.default;ae(e),v(e,!1),ie(e,!1),le(e),k(e),pe(e),be(e),de(e)});document.addEventListener("DOMContentLoaded",function(){if(!window.location.pathname.includes("/sections/"))return;const e=document.getElementById("brand-name"),o=document.getElementById("footer-brand-name"),t=se();let r=m.default;const c=document.querySelector("#main-content");if(t==="eFootball™"){e.textContent="Web Store Help Center",o.textContent="Web Store Help Center";const y=document.getElementById("contact-support-section");y&&y.classList.remove("hidden")}switch(t){case"eFootball™":r=m["eFootball™"];break;case"Blockman Go":r=m["Blockman Go"];break;case"Moba 5v5":r=m["Moba 5v5"];break;default:r=m.default}c.style.setProperty("--color-cta",r.primary),c.style.setProperty("--category-theme-primary",r.primary),c.style.setProperty("--category-theme-secondary",r.secondary),ie(r),v(r,!0),ae(r),ye(r),le(r),k(r),ce(r),de(r)});document.addEventListener("DOMContentLoaded",function(){if(!window.location.pathname.includes("/articles/"))return;const e=se();let o=m.default;const t=document.querySelector("#main-content"),r=document.getElementById("brand-name"),c=document.getElementById("footer-brand-name");switch(e==="eFootball™"&&(r.textContent="Web Store Help Center",c.textContent="Web Store Help Center"),e){case"eFootball™":o=m["eFootball™"];break;case"Blockman Go":o=m["Blockman Go"];break;case"Moba 5v5":o=m["Moba 5v5"];break;default:o=m.default}t.style.setProperty("--color-cta",o.primary),t.style.setProperty("--category-theme-primary",o.primary),t.style.setProperty("--category-theme-secondary",o.secondary),v(o,!0),k(o),ce(o),ge(o)});
