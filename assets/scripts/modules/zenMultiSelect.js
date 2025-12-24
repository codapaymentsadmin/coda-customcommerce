/**
 * ZenMultiSelect - Custom Multi-Select Dropdown with Search
 * A custom multi-select dropdown component with search functionality for Zendesk forms
 * Works with Zendesk's .hc-multiselect structure
 *
 * @param {string} fieldId - The field identifier for the custom field
 * @param {Object} options - Configuration options
 * @param {string} options.placeholder - Placeholder text for search input
 * @param {string} options.emptyMessage - Message shown when no results found
 */
export function zenMultiSelect(fieldId, options = {}) {
  // Selector for the Zendesk custom field container
  const containerSelector = `.request_custom_fields_${fieldId}`;

  /**
   * Deep merge utility function
   */
  const deepMerge = function merge(target, source) {
    const result = Object.assign({}, target);
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object && key in result) {
        result[key] = merge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    }
    return result;
  };

  // Merge user options with defaults
  const config = deepMerge({
    placeholder: "Search...",
    emptyMessage: "No match found"
  }, options);

  // Find the original Zendesk field container
  const originalContainer = document.querySelector(containerSelector);
  if (!originalContainer) {
    console.warn(`ZenMultiSelect: Container not found for field ${fieldId}`);
    return;
  }

  // Find the hc-multiselect element
  const hcMultiselect = originalContainer.querySelector('.hc-multiselect');
  if (!hcMultiselect) {
    console.warn(`ZenMultiSelect: .hc-multiselect not found for field ${fieldId}`);
    return;
  }

  // Get all available options from the menu
  const menuItems = hcMultiselect.querySelectorAll('.hc-multiselect-menu li[role="menuitemcheckbox"]');
  if (!menuItems || menuItems.length === 0) {
    console.warn(`ZenMultiSelect: No menu items found for field ${fieldId}`);
    return;
  }

  // Extract options data
  const allOptions = Array.from(menuItems).map(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const label = item.querySelector('label');
    return {
      value: checkbox ? checkbox.value : '',
      label: label ? label.textContent.trim() : '',
      element: item,
      checkbox: checkbox,
      index: item.getAttribute('data-index')
    };
  });

  // Inject CSS styles
  const styleId = `zmultiselect-style-${fieldId}`;
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.innerHTML = `
      .zmultiselect-search-container-${fieldId} {
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

      .zmultiselect-search-${fieldId} {
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

      .zmultiselect-search-${fieldId}:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
      }

      .zmultiselect-search-${fieldId}::placeholder {
        color: #999;
        opacity: 1;
      }

      .zmultiselect-no-results-${fieldId} {
        padding: 16px;
        text-align: center;
        color: #6b7280;
        font-size: 14px;
        font-style: italic;
      }

      .request_custom_fields_${fieldId} .hc-multiselect-menu {
        padding: 0 !important;
        display: flex;
        flex-direction: column;
      }

      .request_custom_fields_${fieldId} .hc-multiselect-menu ul[role="listbox"] {
        max-height: 180px !important;
        overflow-y: auto !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .request_custom_fields_${fieldId} .hc-multiselect-menu li[role="menuitemcheckbox"] label {
        width: 100%;
        display: flex !important;
        align-items: center;
        padding: 8px 12px !important;
      }

      .request_custom_fields_${fieldId} .hc-multiselect-menu li[role="menuitemcheckbox"].zmulti-hidden {
        display: none !important;
      }

      .request_custom_fields_${fieldId} .hc-multiselect-menu li[role="menuitemcheckbox"]:hover {
        background-color: #f5f5f5 !important;
      }
    `;
    document.head.appendChild(styleElement);
  }

  // Get the menu container
  const menuContainer = hcMultiselect.querySelector('.hc-multiselect-menu');
  if (!menuContainer) {
    console.warn(`ZenMultiSelect: .hc-multiselect-menu not found for field ${fieldId}`);
    return;
  }

  const menuList = menuContainer.querySelector('ul[role="listbox"]');
  if (!menuList) {
    console.warn(`ZenMultiSelect: ul[role="listbox"] not found for field ${fieldId}`);
    return;
  }

  // Check if search is already added (prevent duplicate)
  if (menuContainer.querySelector(`.zmultiselect-search-container-${fieldId}`)) {
    console.log(`ZenMultiSelect: Search already added for field ${fieldId}`);
    return;
  }

  // Create search input container
  const searchContainer = document.createElement('div');
  searchContainer.className = `zmultiselect-search-container-${fieldId}`;

  // Create search input
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = `zmultiselect-search-input-${fieldId}`;
  searchInput.name = `zmultiselect-search-input-${fieldId}`;
  searchInput.className = `zmultiselect-search-${fieldId}`;
  searchInput.placeholder = config.placeholder;
  searchInput.setAttribute('autocomplete', 'off');
  searchInput.setAttribute('aria-label', 'Search options');

  searchContainer.appendChild(searchInput);

  // Create no results message element
  const noResultsMsg = document.createElement('div');
  noResultsMsg.className = `zmultiselect-no-results-${fieldId}`;
  noResultsMsg.textContent = config.emptyMessage;
  noResultsMsg.style.display = 'none';

  // Insert search input at the top of the menu
  menuContainer.insertBefore(searchContainer, menuList);
  menuContainer.appendChild(noResultsMsg);

  console.log(`ZenMultiSelect: Successfully initialized for field ${fieldId}`);

  /**
   * Filter menu items based on search term
   */
  function filterOptions(searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    let visibleCount = 0;

    allOptions.forEach(option => {
      const matches = option.label.toLowerCase().includes(lowerSearchTerm) || option.value.toLowerCase().includes(lowerSearchTerm);

      if (matches || lowerSearchTerm === '') {
        option.element.classList.remove('zmulti-hidden');
        visibleCount++;
      } else {
        option.element.classList.add('zmulti-hidden');
      }
    });

    // Show/hide no results message
    if (visibleCount === 0) {
      noResultsMsg.style.display = 'block';
    } else {
      noResultsMsg.style.display = 'none';
    }
  }

  /**
   * Handle search input
   */
  searchInput.addEventListener('input', function() {
    filterOptions(this.value);
  });

  /**
   * Prevent the menu from closing when interacting with search input
   */
  searchInput.addEventListener('mousedown', function(event) {
    event.stopPropagation();
  });

  searchInput.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  searchInput.addEventListener('focus', function(event) {
    event.stopPropagation();
  });

  // Prevent the search container from closing the menu
  searchContainer.addEventListener('mousedown', function(event) {
    event.stopPropagation();
  });

  searchContainer.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  /**
   * Clear search when menu is opened
   */
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'aria-expanded') {
        const toggle = hcMultiselect.querySelector('.hc-multiselect-toggle');
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          // Menu opened - focus search input
          setTimeout(() => {
            searchInput.focus();
          }, 100);
        } else {
          // Menu closed - clear search
          searchInput.value = '';
          filterOptions('');
        }
      }
    });
  });

  const toggleElement = hcMultiselect.querySelector('.hc-multiselect-toggle');
  if (toggleElement) {
    observer.observe(toggleElement, {
      attributes: true,
      attributeFilter: ['aria-expanded']
    });
  }

  /**
   * Handle keyboard navigation in search input (only for specific navigation keys)
   */
  const handleSearchKeyNavigation = function(event) {
    // Only handle specific navigation keys
    const navigationKeys = ['Escape', 'ArrowDown', 'ArrowUp', 'Enter'];

    if (!navigationKeys.includes(event.key)) {
      // For all other keys (typing keys), stop propagation but allow default
      event.stopPropagation();
      return;
    }

    // Handle navigation keys
    event.stopPropagation();

    if (event.key === 'Escape') {
      const toggle = hcMultiselect.querySelector('.hc-multiselect-toggle');
      if (toggle) {
        toggle.click();
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const firstVisible = menuList.querySelector('li[role="menuitemcheckbox"]:not(.zmulti-hidden)');
      if (firstVisible) {
        firstVisible.focus();
      }
      return;
    }

    if (event.key === 'Enter') {
      // Allow enter to work normally in search (but prevent Zendesk from handling it)
      event.preventDefault();
      return;
    }
  };

  // Add keyboard handler
  searchInput.addEventListener('keydown', handleSearchKeyNavigation);

  /**
   * Allow arrow up from first item to go back to search
   */
  allOptions.forEach((option, index) => {
    option.element.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp') {
        // If this is the first visible item, go back to search
        const visibleItems = Array.from(menuList.querySelectorAll('li[role="menuitemcheckbox"]:not(.zmulti-hidden)'));
        if (visibleItems[0] === this) {
          event.preventDefault();
          searchInput.focus();
        }
      }
    });
  });
}
