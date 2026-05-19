
const userAgent = navigator.userAgent;
const isLoggedIn = localStorage.getItem('isloggedin') == 'T';
const url = "https://happierme.app";
//const url ="https://staging.happierme.app"
//const url ="http://localhost:4200"

var _hwApiCfg = typeof window !== "undefined" && window.__HW_API__;
var HW_API_BASE = (_hwApiCfg && _hwApiCfg.apiBase) || "https://www.humanwisdom.info/api";
var HW_IP_LOOKUP_URL = (_hwApiCfg && _hwApiCfg.ipLookup) || "https://ipapi.co/json";
function hwApiUrl(path) {
    var base = String(HW_API_BASE).replace(/\/+$/, "");
    var p = String(path || "").replace(/^\/+/, "");
    return base + "/" + p;
}

(window.dataLayer = window.dataLayer || []),
    gtag("js", new Date()),
    gtag("config", "G-1WBHRGL7VH"),
    (type = "Desktop"),
    /Mobi|Android/i.test(userAgent) ? (type = "Mobile") : /Tablet|iPad|PlayBook/i.test(userAgent) || (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) ? (type = "Tablet") : (type = "Desktop");

function gtag() {
    dataLayer.push(arguments);
}
function logevent(e, t, extra) {
    var p = { screen_name: t };
    if (extra && typeof extra === "object") {
        for (var k in extra) {
            if (Object.prototype.hasOwnProperty.call(extra, k)) p[k] = extra[k];
        }
    }
    gtag("event", e, p);
}

/** Defer full-page navigation so GA4/gtag can send the event before unload (tabs work because they do not navigate). */
function afterLogNavigate(run, delayMs) {
    setTimeout(run, delayMs == null ? 220 : delayMs);
}
/** Topic tiles under .div-8 — GA event name per row id (index.php). */
var TOPICS_HELP_ROW_GA = [
    ["topic-help-mental-wellbeing", "click_mental_wellbeing"],
    ["topic-help-better-relationships", "click_better_relationships"],
    ["topic-help-succeed-at-work", "click_succeed_at_work"],
    ["topic-help-learn-meditation", "click_learn_meditation"],
    ["topic-help-overcome-habits", "click_overcome_habits"],
    ["topic-help-manage-emotions", "click_manage_emotions"],
    ["topic-help-self-awareness", "click_self_awareness"],
    ["topic-help-better-parenting", "click_better_parenting"],
    ["topic-help-teenagers", "click_happierme_for_teenagers"]
];
/** Modal id → same GA names (backup if row click did not log). */
var TOPICS_HELP_MODAL_GA = {
    exampleModal: "click_mental_wellbeing",
    exampleModalbuild: "click_better_relationships",
    exampleModal3: "click_succeed_at_work",
    exampleModal2: "click_learn_meditation",
    exampleModalbreak: "click_overcome_habits",
    exampleModalemotions: "click_manage_emotions",
    exampleModalself: "click_self_awareness",
    exampleModalparent: "click_better_parenting",
    exampleModalteen: "click_happierme_for_teenagers"
};
var _topicsHelpGaLast = "";
var _topicsHelpGaInited = false;
function initTopicsHelpGa() {
    if (_topicsHelpGaInited) return;
    _topicsHelpGaInited = true;
    // Bind on each row by id: capture phase + direct element avoids Text-node targets (no .closest) and document listener order issues.
    TOPICS_HELP_ROW_GA.forEach(function (pair) {
        var row = document.getElementById(pair[0]);
        if (!row) return;
        var evName = pair[1];
        row.addEventListener(
            "click",
            function () {
                _topicsHelpGaLast = evName;
                logevent(evName, "index.php");
            },
            true
        );
    });
    document.addEventListener("shown.bs.modal", function (ev) {
        var el = ev.target;
        if (!el || el.nodeType !== 1 || !el.id) return;
        var name = TOPICS_HELP_MODAL_GA[el.id];
        if (!name || name === _topicsHelpGaLast) return;
        logevent(name, "index.php");
    });
}
function runWhenDomReady(fn) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fn);
    } else {
        fn();
    }
}
runWhenDomReady(initTopicsHelpGa);

(function logHomepageView() {
    if (document.getElementById("happiermeTryForFree")) {
        logevent("homepage_view", "index.php");
    }
})();

setTimeout(() => {
    console.log("Removing preloader...");
    document.getElementById("preloader").remove();
}, 500);

// Function to remove active_nav class from all navigation elements
function removeActiveNavClass(tab) {
 
      let  navElements = [
        'AboutUs', 'blogs', 'organisation', 'work', 'education', 
        'healthcare', 'pricing', 'teenagersHeaderClick', 'partnership'
    ];
     if(tab == 'work' || tab =='education' || tab == 'healthcare'){
      navElements = [
        'AboutUs', 'blogs', 'work', 'education', 
        'healthcare', 'pricing', 'teenagersHeaderClick', 'partnership'
      ];
     }

   
    navElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove("active_nav");
        }
        const mobileEl = document.getElementById(id + "_mobile");
        if (mobileEl) {
            mobileEl.classList.remove("active_nav");
        }
    });
}

// Function to add active_nav class to a specific element
function setActiveNav(elementId) {
    removeActiveNavClass(elementId);
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add("active_nav");
    }
    const mobileEl = document.getElementById(elementId + "_mobile");
    if (mobileEl) {
        mobileEl.classList.add("active_nav");
    }
}

// Function to check if page is fully loaded
function isPageLoaded() {
    return document.readyState === 'complete' && 
           document.body && 
           document.body.scrollHeight > 0 &&
           document.querySelector('.header') !== null;
}

// Function to check if element is ready and visible
function isElementReady(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.height > 0 && rect.width > 0 && element.offsetParent !== null;
}

// Function to wait for page to be fully loaded with longer timeout for first load
function waitForPageLoad(callback, isFirstLoad = false, maxAttempts = 100, attempt = 0) {
    // For first-time page loads, allow more time (10 seconds instead of 5)
    const maxAttemptsForFirstLoad = 100;
    const actualMaxAttempts = isFirstLoad ? maxAttemptsForFirstLoad : maxAttempts;
    
    if (isPageLoaded() || attempt >= actualMaxAttempts) {
        // Use requestAnimationFrame for smoother execution, add 1000ms extra timeout
        requestAnimationFrame(() => {
            setTimeout(callback, 1050);
        });
    } else {
        setTimeout(() => {
            waitForPageLoad(callback, isFirstLoad, actualMaxAttempts, attempt + 1);
        }, 100);
    }
}

// Function to scroll to element with offset for fixed header and focus
function scrollToElement(elementId, offset = null, isFirstLoad = false) {
    const element = document.getElementById(elementId);
    if (!element) {
        // If element doesn't exist yet, wait and retry with 1000ms extra timeout
        if (isFirstLoad) {
            setTimeout(() => scrollToElement(elementId, offset, isFirstLoad), 1300);
        }
        return false;
    }
    
    // Wait for page to be fully loaded before scrolling
    waitForPageLoad(() => {
        // Re-check element exists after page load
        const targetElement = document.getElementById(elementId);
        if (!targetElement) {
            // Retry if element still doesn't exist (for first load) with 1000ms extra timeout
            if (isFirstLoad) {
                setTimeout(() => scrollToElement(elementId, offset, isFirstLoad), 1300);
            }
            return false;
        }
        
        // Wait for element to be ready and visible
        let attempts = 0;
        const checkElementReady = () => {
            if (isElementReady(targetElement) || attempts >= 20) {
                performScroll(targetElement, offset);
            } else {
                attempts++;
                setTimeout(checkElementReady, 100);
            }
        };
        
        checkElementReady();
    }, isFirstLoad);
    
    return true;
}

// Function to perform the actual scroll and focus
function performScroll(targetElement, offset) {
    // Calculate header height dynamically (120px desktop, 70px mobile)
    if (offset === null) {
        const header = document.querySelector('.header');
        offset = header ? header.offsetHeight : 120;
    }
    
    // Get element position relative to viewport
    const elementPosition = targetElement.getBoundingClientRect().top;
    // Calculate scroll position: current scroll + element position - offset (no extra pixels)
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Scroll to element (only once, no double scrolling)
    window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
    });
    
    // Focus the element for accessibility and ensure it's visible (add 1000ms extra timeout)
    setTimeout(() => {
        // Set tabindex if it doesn't have one, then focus
        if (!targetElement.hasAttribute('tabindex')) {
            targetElement.setAttribute('tabindex', '-1');
        }
        // targetElement.focus();
        
        // Verify element is in correct position (only adjust if significantly off, to avoid extra scrolling)
        const currentPosition = targetElement.getBoundingClientRect().top;
        const expectedPosition = offset; // Element should be at offset distance from top
        const positionDifference = Math.abs(currentPosition - expectedPosition);
        
        // Only re-scroll if position is off by more than 10px (to avoid unnecessary extra scrolling)
        if (positionDifference > 10) {
            const newOffsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: Math.max(0, newOffsetPosition),
                behavior: 'smooth'
            });
        }
    }, 1300);
}

// Function to update FAQ tab attributes to Bootstrap 5.3
function updateFAQTabAttributes() {
    // Only target FAQ tabs, not tool tabs
    const faqTabLinks = document.querySelectorAll('.tab_faqs a[data-toggle="tab"]');
    
    faqTabLinks.forEach(link => {
        // Update data-toggle to data-bs-toggle
        link.setAttribute('data-bs-toggle', 'tab');
        link.removeAttribute('data-toggle');
    });
}

// FAQ Tab functionality
function initializeFAQTabs() {
    // Update tab attributes to Bootstrap 5.3 only for FAQ tabs
    updateFAQTabAttributes();
    
    // Get all FAQ tab links (both old and new Bootstrap syntax)
    const faqTabLinks = document.querySelectorAll('.tab_faqs a[data-toggle="tab"], .tab_faqs a[data-bs-toggle="tab"]');
    
    // Add click event listeners to FAQ tabs
    faqTabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all FAQ tabs
            faqTabLinks.forEach(tab => {
                tab.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.parentElement.classList.add('active');
            
            // Get target tab content
            const targetId = this.getAttribute('href');
            const targetContent = document.querySelector(targetId);
            
            // Hide all FAQ tab content
            const allFAQTabContent = document.querySelectorAll('.tc_faqs .tab-pane');
            allFAQTabContent.forEach(content => {
                content.classList.remove('in', 'active', 'show');
            });
            
            // Show target tab content with smooth transition
            if (targetContent) {
                targetContent.classList.add('in', 'active', 'show');
                
                // Convert accordion in this tab if it hasn't been converted yet
                const panelGroups = targetContent.querySelectorAll('.panel-group');
                if (panelGroups.length > 0) {
                    convertAccordionToBootstrap53();
                }
            }
        });
    });
    
    // Set "About HappierMe" as default active tab
    const aboutHappierMeTab = document.querySelector('.tab_faqs a[href="#about_happierme"]');
    if (aboutHappierMeTab) {
        aboutHappierMeTab.parentElement.classList.add('active');
        const aboutContent = document.querySelector('#about_happierme');
        if (aboutContent) {
            aboutContent.classList.add('in', 'active', 'show');
        }
    }
}


// Common Modal Management for Bootstrap 5.3
class ModalManager {
    constructor() {
        this.activeModal = null;
        this.init();
    }

    init() {
        // Initialize global modal event listeners
        this.setupGlobalModalEvents();
    }

    /**
     * Open a modal by ID or element
     * @param {string|HTMLElement} modalTarget - Modal ID or element
     * @param {Object} options - Additional options
     * @param {boolean} options.handleBackdrop - Whether to handle backdrop cleanup
     * @param {boolean} options.handleUI - Whether to handle UI shaking
     * @param {Function} options.onShow - Callback when modal is shown
     * @param {Function} options.onHide - Callback when modal is hidden
     */
    openModal(modalTarget, options = {}) {
        const {
            handleBackdrop = true,
            handleUI = true,
            onShow = null,
            onHide = null
        } = options;

        let modal;
        this.handleUiShakingOnModalOpen();
        if (typeof modalTarget === 'string') {
            modal = document.getElementById(modalTarget);
              
             
        } else if (modalTarget instanceof HTMLElement) {
            modal = modalTarget;
        } else {
            console.error('Invalid modal target:', modalTarget);
            return false;
        }

        if (!modal) {
            console.error('Modal not found:', modalTarget);
            return false;
        }
         
        try {
            // Prevent Bootstrap from adding padding-right to body
            if (handleUI) {
                document.body.style.paddingRight = '0px !important';
            }

            // Create Bootstrap 5.3 modal instance
            const bsModal = new bootstrap.Modal(modal, {
                backdrop: true,
                keyboard: true,
                focus: true
            });
            
            // Store active modal reference
            this.activeModal = modal;

            // Add event listeners
            if (onShow) {
                modal.addEventListener('shown.bs.modal', onShow);
            }
            
            if (onHide) {
                modal.addEventListener('hidden.bs.modal', onHide);
            }

            // Always add cleanup event listener
            modal.addEventListener('hidden.bs.modal', () => {
                this.cleanupModalBackdrop();
                this.activeModal = null;
            });

            // Show the modal
            bsModal.show();

            // Handle UI adjustments
            if (handleUI) {
                this.handleUiShakingOnModalOpen();
            }

            console.log('Modal opened successfully:', modalTarget);
            return true;

        } catch (error) {
            console.error('Error opening modal:', error);
            return false;
        }
    }

    /**
     * Close a modal by ID or element
     * @param {string|HTMLElement} modalTarget - Modal ID or element
     */
    closeModal(modalTarget) {
        let modal;
        
        if (typeof modalTarget === 'string') {
            modal = document.getElementById(modalTarget);
        } else if (modalTarget instanceof HTMLElement) {
            modal = modalTarget;
        } else {
            console.error('Invalid modal target:', modalTarget);
            return false;
        }

        if (!modal) {
            console.error('Modal not found:', modalTarget);
            return false;
        }

        try {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
                console.log('Modal closed successfully via Bootstrap instance:', modalTarget);
            } else {
                // Fallback: create new instance and hide
                const newBsModal = new bootstrap.Modal(modal);
                newBsModal.hide();
                console.log('Modal closed successfully via new Bootstrap instance:', modalTarget);
            }

            // Let Bootstrap handle the cleanup, but we can add a backup cleanup
            setTimeout(() => {
                this.cleanupModalBackdrop();
            }, 100);

            return true;

        } catch (error) {
            console.error('Error closing modal:', error);
            return false;
        }
    }

    /**
     * Close all open modals
     */
    closeAllModals() {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        });
        this.cleanupModalBackdrop();
    }

    /**
     * Check if a modal is currently open
     * @param {string|HTMLElement} modalTarget - Modal ID or element
     * @returns {boolean}
     */
    isModalOpen(modalTarget) {
        let modal;
        
        if (typeof modalTarget === 'string') {
            modal = document.getElementById(modalTarget);
        } else if (modalTarget instanceof HTMLElement) {
            modal = modalTarget;
        } else {
            return false;
        }

        return modal && modal.classList.contains('show');
    }

    /**
     * Get the currently active modal
     * @returns {HTMLElement|null}
     */
    getActiveModal() {
        return this.activeModal;
    }

    /**
     * Handle UI shaking when modal opens
     */
    handleUiShakingOnModalOpen() {
        setTimeout(() => {
            const body = document.getElementById('body');
            if (body) {
                // Prevent Bootstrap from adding padding-right to body
                body.style.paddingRight = '0px !important';
                body.style.overflow = 'hidden';
            }
        }, 50);
    }

    /**
     * Clean up modal backdrop and body classes
     */
    cleanupModalBackdrop() {
        setTimeout(() => {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0px';
        }, 150);
    }

    /**
     * Setup global modal event listeners
     */
    setupGlobalModalEvents() {
        // Handle modal triggers with data-bs-toggle="modal"
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-bs-toggle="modal"]')) {
                const target = e.target.getAttribute('data-bs-target');
                if (target) {
                    e.preventDefault();
                    this.openModal(target);
                }
            }
        });

        // Handle modal close buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-bs-dismiss="modal"]') || e.target.closest('[data-bs-dismiss="modal"]')) {
                const modal = e.target.closest('.modal') || e.target.closest('[data-bs-dismiss="modal"]').closest('.modal');
                if (modal) {
                    e.preventDefault();
                    console.log('Close button clicked, closing modal:', modal.id);
                    this.closeModal(modal);
                }
            }
        });

        // Handle escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    this.closeModal(openModal);
                }
            }
        });

        // Handle backdrop clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    this.closeModal(openModal);
                }
            }
        });
    }

    /**
     * Initialize modals for specific elements
     * @param {string} selector - CSS selector for modal triggers
     */
    initializeModalTriggers(selector) {
        const triggers = document.querySelectorAll(selector);
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const target = trigger.getAttribute('data-bs-target') || trigger.getAttribute('data-target');
                if (target) {
                    this.openModal(target);
                }
            });
        });
    }

    /**
     * Get all modal elements on the page
     * @returns {NodeList}
     */
    getAllModals() {
        return document.querySelectorAll('.modal');
    }

    /**
     * Get all open modals
     * @returns {NodeList}
     */
    getOpenModals() {
        return document.querySelectorAll('.modal.show');
    }

    /**
     * Check if any modal is currently open
     * @returns {boolean}
     */
    hasOpenModals() {
        return this.getOpenModals().length > 0;
    }

    /**
     * Add custom event listener to a modal
     * @param {string|HTMLElement} modalTarget - Modal ID or element
     * @param {string} event - Event name (e.g., 'shown.bs.modal', 'hidden.bs.modal')
     * @param {Function} callback - Event callback function
     */
    addModalEventListener(modalTarget, event, callback) {
        let modal;
        
        if (typeof modalTarget === 'string') {
            modal = document.getElementById(modalTarget);
        } else if (modalTarget instanceof HTMLElement) {
            modal = modalTarget;
        } else {
            console.error('Invalid modal target:', modalTarget);
            return false;
        }

        if (!modal) {
            console.error('Modal not found:', modalTarget);
            return false;
        }

        modal.addEventListener(event, callback);
        return true;
    }

    /**
     * Remove custom event listener from a modal
     * @param {string|HTMLElement} modalTarget - Modal ID or element
     * @param {string} event - Event name
     * @param {Function} callback - Event callback function
     */
    removeModalEventListener(modalTarget, event, callback) {
        let modal;
        
        if (typeof modalTarget === 'string') {
            modal = document.getElementById(modalTarget);
        } else if (modalTarget instanceof HTMLElement) {
            modal = modalTarget;
        } else {
            console.error('Invalid modal target:', modalTarget);
            return false;
        }

        if (!modal) {
            console.error('Modal not found:', modalTarget);
            return false;
        }

        modal.removeEventListener(event, callback);
        return true;
    }
}

// Create global modal manager instance
const modalManager = new ModalManager();

/** index.php tools section uses .tool-tab + inline switchTab(); no Bootstrap nav wiring needed. */
function initializeToolTabs() {}

// Accordion functionality with smooth transitions
function initializeFAQAccordion() {
    // Initialize Bootstrap 5.3 accordion
    const accordionElements = document.querySelectorAll('.accordion');
    
    accordionElements.forEach(accordion => {
        // Initialize Bootstrap 5.3 accordion for each accordion group
        const bsAccordion = new bootstrap.Collapse(accordion, {
            toggle: false
        });
        
        // Add custom event listeners for smooth transitions
        const accordionButtons = accordion.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Get the target collapse element
                const targetId = this.getAttribute('data-bs-target');
                const targetCollapse = document.querySelector(targetId);
                
                if (targetCollapse) {
                    // Close all other accordion items in the same group
                    const parentAccordion = targetCollapse.closest('.accordion');
                    if (parentAccordion) {
                        const otherCollapses = parentAccordion.querySelectorAll('.accordion-collapse.show');
                        otherCollapses.forEach(collapse => {
                            if (collapse !== targetCollapse) {
                                const bsCollapse = new bootstrap.Collapse(collapse, {
                                    toggle: false
                                });
                                bsCollapse.hide();
                            }
                        });
                    }
                }
            });
        });
    });
}

// Function to convert existing accordion to Bootstrap 5.3
function convertAccordionToBootstrap53() {
    const panelGroups = document.querySelectorAll('.panel-group');
    
    panelGroups.forEach((panelGroup, groupIndex) => {
        // Skip if this panel group has already been converted
        if (panelGroup.parentElement.classList.contains('accordion')) {
            return;
        }
        
        // Create new accordion container
        const accordion = document.createElement('div');
        accordion.className = 'accordion';
        accordion.id = `accordion_faq_${groupIndex}_${Date.now()}`;
        
        // Get all panels in this group
        const panels = panelGroup.querySelectorAll('.panel');
        
        panels.forEach((panel, panelIndex) => {
            // Create accordion item
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            
            // Get the existing content
            const panelHeading = panel.querySelector('.panel-heading');
            const panelTitle = panelHeading.querySelector('.panel-title a');
            const panelCollapse = panel.querySelector('.panel-collapse');
            const panelBody = panelCollapse.querySelector('.panel-body');
            
            // Create accordion header
            const accordionHeader = document.createElement('h2');
            accordionHeader.className = 'accordion-header';
            accordionHeader.id = `heading_${panelTitle.getAttribute('href').substring(1)}`;
            
            // Create accordion button
            const accordionButton = document.createElement('button');
            accordionButton.className = panelCollapse.classList.contains('in') ? 'accordion-button' : 'accordion-button collapsed';
            accordionButton.type = 'button';
            accordionButton.setAttribute('data-bs-toggle', 'collapse');
            accordionButton.setAttribute('data-bs-target', panelTitle.getAttribute('href'));
            accordionButton.setAttribute('aria-expanded', panelCollapse.classList.contains('in') ? 'true' : 'false');
            accordionButton.setAttribute('aria-controls', panelTitle.getAttribute('href').substring(1));
            accordionButton.textContent = panelTitle.textContent.trim();
            
            // Create accordion collapse
            const accordionCollapse = document.createElement('div');
            accordionCollapse.id = panelTitle.getAttribute('href').substring(1);
            accordionCollapse.className = panelCollapse.classList.contains('in') ? 'accordion-collapse collapse show' : 'accordion-collapse collapse';
            accordionCollapse.setAttribute('aria-labelledby', `heading_${panelTitle.getAttribute('href').substring(1)}`);
            accordionCollapse.setAttribute('data-bs-parent', `#${accordion.id}`);
            
            // Create accordion body
            const accordionBody = document.createElement('div');
            accordionBody.className = 'accordion-body';
            accordionBody.innerHTML = panelBody.innerHTML;
            
            // Assemble the accordion
            accordionHeader.appendChild(accordionButton);
            accordionCollapse.appendChild(accordionBody);
            accordionItem.appendChild(accordionHeader);
            accordionItem.appendChild(accordionCollapse);
            accordion.appendChild(accordionItem);
            
            // Add HR if it exists after this panel
            const nextElement = panel.nextElementSibling;
            if (nextElement && nextElement.classList.contains('row')) {
                accordion.appendChild(nextElement.cloneNode(true));
            }
        });
        
        // Replace the old panel group with new accordion
        panelGroup.parentNode.replaceChild(accordion, panelGroup);
    });
}

// Legacy function for backward compatibility
function openModelPopup(modal) {
    return modalManager.openModal(modal);
}

// Legacy function for backward compatibility
function handleUiShakingOnModelPopupOpen() {
    modalManager.handleUiShakingOnModalOpen();
}

// Legacy function for backward compatibility
function cleanupModalBackdrop() {
    modalManager.cleanupModalBackdrop();
}

// Test function to demonstrate ModalManager functionality
function testModalManager() {
    console.log('Testing ModalManager functionality...');
    
    // Test opening a modal
    const success = modalManager.openModal('exampleModal', {
        handleUI: true,
        onShow: () => {
            console.log('Modal opened successfully via ModalManager');
            alert('Modal opened successfully via ModalManager!');
        },
        onHide: () => {
            console.log('Modal closed via ModalManager');
        }
    });
    
    if (!success) {
        alert('Failed to open modal. Check console for details.');
    }
    
    // Test checking if modal is open
    setTimeout(() => {
        const isOpen = modalManager.isModalOpen('exampleModal');
        console.log('Modal is open:', isOpen);
    }, 1000);
}

// Test function to test modal closing
function testCloseModal() {
    console.log('Testing modal close functionality...');
    
    // Check if any modal is open
    if (modalManager.hasOpenModals()) {
        const openModals = modalManager.getOpenModals();
        console.log('Found open modals:', openModals);
        
        // Close the first open modal
        if (openModals.length > 0) {
            const modalToClose = openModals[0];
            console.log('Closing modal:', modalToClose.id);
            modalManager.closeModal(modalToClose);
        }
    } else {
        console.log('No open modals found');
        alert('No open modals to close');
    }
}

// Debug function to check modal status
function debugModals() {
    console.log('=== Modal Debug Information ===');
    
    // Check all modals
    const allModals = modalManager.getAllModals();
    console.log('All modals found:', allModals.length);
    allModals.forEach(modal => {
        console.log('Modal ID:', modal.id, 'Classes:', modal.className);
    });
    
    // Check open modals
    const openModals = modalManager.getOpenModals();
    console.log('Open modals:', openModals.length);
    openModals.forEach(modal => {
        console.log('Open modal ID:', modal.id);
    });
    
    // Check close buttons
    const closeButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    console.log('Close buttons found:', closeButtons.length);
    closeButtons.forEach(btn => {
        console.log('Close button:', btn, 'Parent modal:', btn.closest('.modal')?.id);
    });
    
    // Check Bootstrap instances
    allModals.forEach(modal => {
        const bsInstance = bootstrap.Modal.getInstance(modal);
        console.log('Modal', modal.id, 'Bootstrap instance:', bsInstance ? 'Exists' : 'None');
    });
    
    console.log('=== End Debug Information ===');
}

// Test function to force newsletter popup
function testNewsletterPopup() {
    if (NEWSLETTER_CONFIG.debug) {
        console.log('Forcing newsletter popup...');
    }
    
    // Clear session storage to allow popup
    sessionStorage.removeItem('newsLetterOpened');
    
    // Trigger the popup
    modalManager.openModal('product_view', {
        handleUI: true,
        onShow: () => {
            logevent("newsletter_popup", "index.php");
            if (NEWSLETTER_CONFIG.debug) {
                console.log("Newsletter modal shown successfully");
            }
        },
        onHide: () => {
            if (NEWSLETTER_CONFIG.debug) {
                console.log("Newsletter modal hidden");
            }
        }
    });
}

// Newsletter popup configuration
const NEWSLETTER_CONFIG = {
    delayAfterPreloader: 2000, // 5 seconds after preloader finishes
    fallbackDelay: 50000, // 10 seconds as fallback
    checkInterval: 100, // Check interval for preloader status
    debug: true // Enable debug logging
};

// Newsletter popup functionality using ModalManager - Dynamic timing based on preloader
function initializeNewsletterPopup() {
    if (NEWSLETTER_CONFIG.debug) {
        console.log("Checking newsletter popup...");
        console.log("Session storage value:", sessionStorage.getItem('newsLetterOpened'));
    }
    
    if(sessionStorage.getItem('newsLetterOpened') !== 'true'){
        if (NEWSLETTER_CONFIG.debug) {
            console.log("Newsletter popup should open");
        }
        sessionStorage.setItem('newsLetterOpened','true');
        
        // Set up newsletter form handler for modal
        const modalNewsLetterForm = document.getElementById("modal-news-contact-form");
        if (modalNewsLetterForm) {
            modalNewsLetterForm.addEventListener("click", () => {
                logevent("click_subscribe", "index.php");
                const email = document.getElementById("modal-news-email").value;
                const name = document.getElementById("modal-news-name").value;
                const o = { Name: name, EmailID: email };
              
                if (!(email && name && "" != email && "" != name)) {
                    logevent("subscribe_failure", "index.php");
                    alert("All fields must be filled out");
                    return false;
                }
                if(!validateEmail(email)){
                    logevent("subscribe_failure", "index.php");
                    alert("Please enter valid email");
                    return false;
                }
                
                fetch(hwApiUrl("subscribe_newsletter"), { 
                    method: "POST", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify(o) 
                })
                .then((e) => e.json())
                .then((e) => {
                    document.getElementById("modal-news-email").value = "";
                    document.getElementById("modal-news-name").value = "";
                    alert(e?.Message ? e.Message : e);
                    logevent("subscribe_success", "index.php");
                    modalManager.closeModal('product_view');
                })
                .catch((e) => {
                    let content = e['error'] ? e['error']['Message'] : 'An error occurred';
                    console.error("Error:", e);
                    logevent("subscribe_failure", "index.php");
                    alert(content);
                });
            });
        }
        
        // Add event listener for close button - handle multiple close buttons
      const closeBtns = document.querySelectorAll('[id^="closebtn"]');

        closeBtns.forEach(closeBtn => {
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();

                const modal = this.closest('.modal');
                if (modal) {
                    modalManager.closeModal(modal);
                } else {
                    modalManager.closeModal('product_view');
                }
            });
        });
        
        // Trigger the popup using ModalManager
        if (NEWSLETTER_CONFIG.debug) {
            console.log("Triggering newsletter popup...");
        }
        modalManager.openModal('product_view', {
            handleUI: true,
            onShow: () => {
                logevent("newsletter_popup", "index.php");
                if (NEWSLETTER_CONFIG.debug) {
                    console.log("Newsletter modal shown successfully");
                }
            },
            onHide: () => {
                if (NEWSLETTER_CONFIG.debug) {
                    console.log("Newsletter modal hidden");
                }
            }
        }); 
    } else {
        if (NEWSLETTER_CONFIG.debug) {
            console.log("Newsletter popup already shown");
        }
    }
}

// Function to check if preloader is finished and then trigger newsletter popup
function checkPreloaderAndShowNewsletter() {
    const preloader = document.querySelector("#preloader");
    
    if (preloader && preloader.parentNode) {
        // Preloader still exists, wait for it to be removed
        if (NEWSLETTER_CONFIG.debug) {
            console.log("Preloader still active, waiting...");
        }
        setTimeout(checkPreloaderAndShowNewsletter, NEWSLETTER_CONFIG.checkInterval);
    } else {
        // Preloader is gone, wait additional delay then show newsletter
        if (NEWSLETTER_CONFIG.debug) {
            console.log("Preloader finished, waiting additional delay before showing newsletter...");
        }
        setTimeout(initializeNewsletterPopup, NEWSLETTER_CONFIG.delayAfterPreloader);
    }
}

// Enhanced preloader detection with multiple approaches
function setupNewsletterTiming() {
    let newsletterTriggered = false;
    
    // Method 1: Use MutationObserver to watch for preloader removal
    function setupPreloaderObserver() {
        const preloader = document.querySelector("#preloader");
        if (preloader) {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                        mutation.removedNodes.forEach(function(node) {
                            if (node.id === 'preloader' || (node.nodeType === 1 && node.querySelector('#preloader'))) {
                                if (NEWSLETTER_CONFIG.debug) {
                                    console.log("Preloader removed from DOM detected");
                                }
                                if (!newsletterTriggered) {
                                    newsletterTriggered = true;
                                    setTimeout(initializeNewsletterPopup, NEWSLETTER_CONFIG.delayAfterPreloader);
                                }
                                observer.disconnect();
                            }
                        });
                    }
                });
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }
    
    // Method 2: Listen for window load event (when preloader is removed)
    window.addEventListener('load', function() {
        if (!newsletterTriggered) {
            if (NEWSLETTER_CONFIG.debug) {
                console.log("Window loaded, preloader should be finished");
            }
            setTimeout(() => {
                if (!newsletterTriggered) {
                    newsletterTriggered = true;
                    initializeNewsletterPopup();
                }
            }, NEWSLETTER_CONFIG.delayAfterPreloader);
        }
    });
    
    // Method 3: Fallback polling approach
    setTimeout(() => {
        if (!newsletterTriggered) {
            checkPreloaderAndShowNewsletter();
        }
    }, 3000); // Start checking after 3 seconds as fallback
    
    // Initialize the observer
    setupPreloaderObserver();
}

// Initialize newsletter timing system
setupNewsletterTiming();

(function initNewsletterCloseGa() {
    var m = document.getElementById("product_view");
    if (!m) return;
    m.addEventListener("click", function (e) {
        if (e.target.closest("[data-bs-dismiss=\"modal\"]")) {
            logevent("newsletter_close", "index.php");
        }
    });
})();

// Event delegation for "See all posts" and "Find out more" - ensures navigation works even if direct handlers fail
document.addEventListener("click", function (evt) {
    const link = evt.target.closest("a#viewAllBlogs, a#view-all-coaches");
    if (link && link.href) {
        evt.preventDefault();
        evt.stopPropagation();
        if (link.id === "viewAllBlogs") {
            logevent("click_see_all_posts", "index.php");
        } else if (link.id === "view-all-coaches") {
            logevent("click_footer_link", "index.php", { link_name: "view_all_coaches" });
        }
        var dest = link.getAttribute("href") || link.href;
        afterLogNavigate(function () {
            window.location.href = dest;
        });
    }
}, true);

// Function to manually trigger newsletter popup (for testing)
function forceNewsletterPopup() {
    if (NEWSLETTER_CONFIG.debug) {
        console.log("Manually forcing newsletter popup...");
    }
    sessionStorage.removeItem('newsLetterOpened');
    initializeNewsletterPopup();
}

// Function to update newsletter timing configuration
function updateNewsletterConfig(newConfig) {
    Object.assign(NEWSLETTER_CONFIG, newConfig);
    if (NEWSLETTER_CONFIG.debug) {
        console.log("Newsletter configuration updated:", NEWSLETTER_CONFIG);
    }
}

const headerTryForFree = document.getElementById("headerTryForFree");
if (headerTryForFree) {
    headerTryForFree.addEventListener("click", function () {
        logevent("click_tryforfree", "index.php");
    });
}

const loginClick = document.getElementById('loginClick');
if (loginClick) {
    loginClick.addEventListener('click', function (e) {
        if (e.target.closest("a")) e.preventDefault();
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        logevent("click_login", "index.php");
        afterLogNavigate(function () {
            window.location.href = "../pages/splash_options.php";
        });
    });
}



const happiermeTryForFree =  document.getElementById('happiermeTryForFree');
if (happiermeTryForFree) {
    happiermeTryForFree.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        logevent("click_try_happierme_for_free", "index.php");
        afterLogNavigate(function () {
            window.location.href = happiermeTryForFree.getAttribute("href") || "../pages/splash_options.php";
        });
    });
}

const tryhappiermeClick = document.getElementsByClassName('tryhappiermeClick');
if (tryhappiermeClick[0]) {
    tryhappiermeClick[0].addEventListener('click', function (e) {
        var el0 = tryhappiermeClick[0];
        var a = el0.tagName === "A" ? el0 : el0.closest("a") || el0.querySelector("a");
        if (a) e.preventDefault();
        localStorage.setItem('login',true);
        localStorage.setItem('pricing',false);
        var href = (a && a.getAttribute("href")) || "../pages/splash_options.php";
        afterLogNavigate(function () {
            window.location.href = href;
        });
    });
}

const pricingSelectBtn = document.getElementById('PricingSelectBtn');
if (pricingSelectBtn) {
    pricingSelectBtn.addEventListener('click', function (e) {
        var innerA = e.target.closest("a");
        if (innerA) e.preventDefault();
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        logevent("click_start_free_trial", "index.php");
        var href = (innerA && innerA.getAttribute("href")) || "../pages/splash_options.php";
        afterLogNavigate(function () {
            window.location.href = href;
        });
    });
}

const PricingSelectBtn1 = document.getElementById('PricingSelectBtn1');
if (PricingSelectBtn1) {
    PricingSelectBtn1.addEventListener('click', function (e) {
        var innerA = e.target.closest("a");
        if (innerA) e.preventDefault();
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        logevent("click_start_free_trial", "index.php");
        var href = (innerA && innerA.getAttribute("href")) || "../pages/splash_options.php";
        afterLogNavigate(function () {
            window.location.href = href;
        });
    });
}



const OllyChatBtn = document.getElementById('OllyChatBtn');
if (OllyChatBtn) {
    OllyChatBtn.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.setItem('chat-bot',true);
         localStorage.setItem('pricing',false);
        localStorage.setItem('login',false);
        logevent("click_olly_chat", "index.php");
        afterLogNavigate(function () {
            window.location.href = OllyChatBtn.getAttribute("href") || "../pages/splash_options.php";
        });
    });
}

const PricingSelectBtnHomePage = document.getElementById('PricingSelectBtnHomePage');
if (PricingSelectBtnHomePage) {
    PricingSelectBtnHomePage.addEventListener('click', function (e) {
        var innerA = e.target.closest("a");
        if (innerA) e.preventDefault();
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        logevent("click_start_free_trial", "home.php");
        var href = (innerA && innerA.getAttribute("href")) || "../pages/splash_options.php";
        afterLogNavigate(function () {
            window.location.href = href;
        });
    });
}

const discoverSectionPricingClick = document.getElementById('discoverSectionPricingClick');
if (discoverSectionPricingClick) {
    discoverSectionPricingClick.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        localStorage.setItem('login',false);
        window.location.href = "../pages/splash_options.php";
    });
}

const teenagersLogin = document.getElementById('teenagersLogin');
if (teenagersLogin) {
    teenagersLogin.addEventListener('click', function () {
        // window.location.href = url+"/teenagers/onboarding/login";
         window.location.href = url+"/teenagers/intro-carousel";
    });
}

const teenagersPricing = document.getElementById('teenagersPricing');
if (teenagersPricing) {
    teenagersPricing.addEventListener('click', function () {
        localStorage.setItem('pricing',true);
        window.location.href = url+"/teenagers/subscription/start-your-free-trial";
    });
}

const teenagersClick = document.getElementById('teenagersClick');
if (teenagersClick) {
    teenagersClick.addEventListener('click', function () {
        if(localStorage.getItem('pricing')=='true'){
           window.location.href = url+"/teenagers/subscription/start-your-free-trial";
        }
         else if(localStorage.getItem('chat-bot')=='true'){
           window.location.href = url+"/teenagers/chat-bot";
        }
        else if(localStorage.getItem('login')=='true'){
        //    window.location.href = url+"/teenagers/onboarding/login";
              window.location.href = url+"/teenagers/intro-carousel";           
        
        }
        else {
            // window.location.href = url + "/teenagers/onboarding/login";
                        window.location.href = url+"/teenagers/intro-carousel";

        }
    });
}

const teenagerCoverClick = document.getElementById('teenagerCoverClick');
if (teenagerCoverClick) {
    teenagerCoverClick.addEventListener('click', function () {
        //    window.location.href = url+"/teenagers/onboarding/login/";
        window.location.href = url+"/teenagers/intro-carousel";
    });
}

const adultsClick = document.getElementById('adultsClick');
if (adultsClick) {
    adultsClick.addEventListener('click', function () {
        if(localStorage.getItem('pricing')=='true'){
           window.location.href = url+"/adults/subscription/start-your-free-trial";
        }
        else if(localStorage.getItem('chat-bot')=='true'){
           window.location.href = url+"/adults/chat-bot";
        }
        else if(localStorage.getItem('login')=='true'){
            localStorage.setItem('login',false);
            localStorage.setItem('pricing',false);
        //    window.location.href = url+"/adults/onboarding/login";
            window.location.href = url+"/adults/intro/intro-carousel";
        } else {
             localStorage.setItem('login',false);
             localStorage.setItem('pricing',false);
            // window.location.href = url + "/adults/onboarding/login";
              window.location.href = url+"/adults/intro/intro-carousel";

        }
    });
}

var element = document.getElementById("scrollTopArrow");
element && ("Desktop" == type ? element.classList.add("mb15px") : element.classList.add("mb-8rem"));
const requestDemoForWork = document.getElementById("requestDemoForWork");
requestDemoForWork &&
    requestDemoForWork.addEventListener("click", function (e) {
        logevent("click_demo_submit", "work.php");
    }),
    setTimeout(() => {
        var e = document.getElementById("AboutUs");
        e &&
            e.addEventListener(
                "click",
                function (e) {
                    logevent("click_aboutus", "index.php");
                    setActiveNav("AboutUs");
                    localStorage.setItem("activeTab", "aboutUs"), (window.location.href = "../pages/about_us.php");
                },
                !1
            );
        var t = document.getElementById("blogs");
        t &&
            t.addEventListener(
                "click",
                function (e) {
                    logevent("click_blog", "index.php");
                    setActiveNav("blogs");
                    localStorage.setItem("activeTab", "blogs"), (window.location.href = "../blogs/blog_index.php");
                },
                !1
            );
        var n = document.getElementById("organisation");
        n &&
            n.addEventListener("click", function () {
                logevent("click_for_organisations", "index.php");
            }, !1);
        function attachSubnavClick(id, handler) {
            var o = document.getElementById(id);
            o &&
                o.addEventListener(
                    "click",
                    function (e) {
                        handler(e, "desktop");
                    },
                    !1
                );
            var om = document.getElementById(id + "_mobile");
            om &&
                om.addEventListener(
                    "click",
                    function (e) {
                        handler(e, "mobile");
                    },
                    !1
                );
        }
        attachSubnavClick("work", function (e, direction) {
            localStorage.setItem("activeTab", "org-work"),
            logevent("click_workplace", "index.php", { source: "header_nav", direction: direction }),
            setActiveNav("work");
            setActiveNav("organisation");
            (window.location.href = "../pages/work.php");
        });
        attachSubnavClick("education", function (e, direction) {
            localStorage.setItem("activeTab", "org-work"), 
            setActiveNav("education");
            setActiveNav("organisation");
            logevent("click_education", "index.php", { source: "header_nav", direction: direction }),
            (window.location.href = "../pages/education.php");
        });
        attachSubnavClick("healthcare", function (e, direction) {
            localStorage.setItem("activeTab", "org-healthcare"),
            logevent("click_healthcare", "index.php", { source: "header_nav", direction: direction }),
            setActiveNav("organisation");
            (window.location.href = "../pages/healthcare.php");
        });
        var c = document.getElementById("pricing");
        c &&
            c.addEventListener(
                "click",
                function (e) {
                    e.preventDefault();
                    localStorage.setItem("activeTab", "pricing"), 
                    setActiveNav("pricing");
                    logevent("click_pricing", "index.php#div_subscription");
                    
                    // Check if we're already on index.php
                    if (window.location.pathname.includes("index.php") && !window.location.pathname.includes("blogs")) {
                        // Update URL without reload  
                        window.history.pushState(null, null, "#div_subscription");
                        // Scroll to section on same page (header height + 20px extra for better alignment)
                        // Calculate header height dynamically to avoid extra pixels
                        const header = document.querySelector('.header');
                        const headerHeight = header ? header.offsetHeight : 120;
                        setTimeout(() => {
                            scrollToElement("div_subscription", headerHeight + 20, false);
                        }, 100);
                    } else {
                        // Navigate to index.php with hash (this will be a first load)
                        window.location.href = "../index.php#div_subscription";
                    }
                },
                !1
            );
        attachSubnavClick("teenagersHeaderClick", function (e, direction) {
            localStorage.setItem("programType", "11"),
            logevent("click_teenagers", "index.php", { source: "header_nav", direction: direction }),
            setActiveNav("teenagersHeaderClick");
            (window.location.href = "../pages/teenagers.php");
        });
        
        // Handle partnership click
        var p = document.getElementById("partnership");
        p &&
            p.addEventListener("click", function () {
                setActiveNav("partnership");
                logevent("click_partnership", "index.php");
                (window.location.href = "../pages/partnership.php");
            });
            
        var s = window.location.href;
        // Set active state based on current URL
        if (s.includes("blogs")) {
            setActiveNav("blogs");
        } else if (s.includes("work.php")) {
               setActiveNav("organisation");
            setActiveNav("work");
        } else if (s.includes("healthcare.php")) {
               setActiveNav("organisation");
            setActiveNav("healthcare");
        } else if (s.includes("education.php")) {
               setActiveNav("organisation");
            setActiveNav("education");
        } else if (s.includes("index.php#div_subscription") || window.location.hash === "#div_subscription") {
            setActiveNav("pricing");
            // Scroll to subscription section after page loads (header height + 20px extra for better alignment)
            // Calculate header height dynamically to avoid extra pixels
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 120;
            // This is likely a first-time page load, so use longer timeout
            const isFirstLoad = !document.getElementById("div_subscription") || 
                               document.getElementById("div_subscription").offsetHeight === 0;
            scrollToElement("div_subscription", headerHeight + 20, isFirstLoad);
        } else if (s.includes("about")) {
            setActiveNav("AboutUs");
        } else if (s.includes("pages/teenagers.php")) {
            setActiveNav("teenagersHeaderClick");
        } else if (s.includes("partnership.php")) {
            setActiveNav("partnership");
        }
    }, 200),
    "true" == localStorage.getItem("isDownloadHide") && this.closeElement();
var adults = document.getElementById("adults");
adults &&
    adults.addEventListener("click", function () {
        window.location.href = url+"/adults/intro/intro-carousel";
    });
var teenagers = document.getElementById("teenagers");
teenagers &&
    teenagers.addEventListener("click", function () {
        window.location.href = url+"/teenagers/intro-carousel";
    });

var viewAllSucessStories = document.getElementById("viewallsuccessstories");
viewAllSucessStories && viewAllSucessStories.addEventListener("click", function (e) {
    e.preventDefault();
    logevent("click_success_stories_link", "index.php");
    var dest = viewAllSucessStories.getAttribute("href") || url + "/adults/testimonials";
    afterLogNavigate(function () {
        window.location.href = dest;
    });
}) ;   

const requestDemo = document.getElementById("Request-Demo");
function closeElement() {
    localStorage.setItem("isDownloadHide", !0);
    var e = document.getElementById("closeableElement");
    if(e){
        (e.style.display = "none"), e.classList.remove("display_df_none");
    }
    var t = document.getElementById("scrollTopArrow");
    if(t){
        "Desktop" == type ? t.classList.remove("mb15px") : t.classList.remove("mb-8rem");
    }
}

requestDemo &&
    requestDemo.addEventListener("click", () => {
        var page = window.location.href;
        page.includes("work.php") && logevent("click_demo_submit", "work.php"),
            page.includes("healthcare.php") && logevent("click_demo_submit", "healthcare.php"),
            page.includes("education.php") && logevent("click_demo_submit", "education.php");
        const t = document.getElementById("email").value,
            n = document.getElementById("name").value,
            o = document.getElementById("company").value,
            a = document.getElementById("country").value;
        var screen = page.includes("work.php") ? "work.php" : page.includes("healthcare.php") ? "healthcare.php" : "education.php";
        if (!(t && n && o && a && "" != n && "" != t && "" != o && "" != a)) return alert("All fields must be filled out"), !1;
        if(!validateEmail(t)){
            logevent("demo_form_failure", screen, { reason: "invalid_email" });
            return alert("Please enter valid email"), !1;
        }
        const i = { Email_Id: "team@happierme.app", Subject: "Request a demo", Body: `Name : ${n} Company: ${o} Country :${a}  Email :${t}` };
        fetch(hwApiUrl("SendMail"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(i) })
            .then((e) => e.json())
            .then((e) => {
                console.log("Success:", e),
                    (document.getElementById("email").value = ""),
                    (document.getElementById("name").value = ""),
                    (document.getElementById("company").value = ""),
                    (document.getElementById("country").value = ""),
                    logevent("demo_form_success", screen),
                    alert("Form submitted successfully!");
            })
            .catch((e) => {
                console.error("Error:", e),
                    logevent("demo_form_failure", screen, { reason: "server" }),
                    alert("An error occurred. Please try again.");
            });
    });
const nfsnContactForm = document.getElementById("nfsn-contact-form");
nfsnContactForm &&
    nfsnContactForm.addEventListener("click", () => {
        const e = document.getElementById("nfsn-message").value,
            t = document.getElementById("nfsn-email").value,
            n = document.getElementById("nfsn-name").value;
        if (!t || !n || !e || "" == n || "" == t || "" == e) return alert("All fields must be filled out"), !1;
        const o = { Email_Id: "team@happierme.app", Subject: "NFSN-Get in touch", Body: `Name : ${n} Work Email : ${t} Message :${e}` };
        fetch(hwApiUrl("SendMail"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) })
            .then((e) => e.json())
            .then((e) => {
                console.log("Success:", e), (document.getElementById("nfsn-message").value = ""), (document.getElementById("nfsn-email").value = ""), (document.getElementById("nfsn-name").value = ""), alert("Form submitted successfully!");
            })
            .catch((e) => {
                console.error("Error:", e), alert("An error occurred. Please try again.");
            });
    }),
    setTimeout(() => {
        const e = document.getElementById("vid");
        e &&
            e.addEventListener("play", function () {
                logevent("click_play_video", "index.php"), console.log("Video play button was clicked");
            });
        const t = document.getElementById("homeVideo");
        t &&
            t.addEventListener("play", function () {
                logevent("click_video_play", "index.php"), console.log("Video play button was clicked");
            });
        const n = document.getElementById("teenagerVideo");
        n &&
            n.addEventListener("play", function () {
                logevent("click_video_play", "teenagers.php"), console.log("Video play button was clicked");
            });
        var fbn = document.getElementById("fbn-video");
        if (fbn) {
            var lastMuted = fbn.muted;
            fbn.addEventListener("pause", function () {
                if (!fbn.ended) fbn._gaResumeNext = true;
                if (!fbn.ended) logevent("pause_video", "index.php");
            });
            fbn.addEventListener("play", function () {
                if (fbn._gaResumeNext) {
                    logevent("resume_video", "index.php");
                    fbn._gaResumeNext = false;
                } else {
                    logevent("click_play_video", "index.php");
                }
            });
            fbn.addEventListener("ended", function () {
                logevent("complete_video", "index.php");
            });
            fbn.addEventListener("seeked", function () {
                logevent("seek_video", "index.php");
            });
            fbn.addEventListener("volumechange", function () {
                if (fbn.muted !== lastMuted) {
                    lastMuted = fbn.muted;
                    logevent("mute_video_toggle", "index.php", { muted: fbn.muted });
                }
            });
            var fbnWasFs = false;
            document.addEventListener("fullscreenchange", function () {
                var fs = document.fullscreenElement;
                if (fs && fs.id === "fbn-video") {
                    fbnWasFs = true;
                    logevent("on_video_fullscreen", "index.php");
                } else if (!fs && fbnWasFs) {
                    fbnWasFs = false;
                    logevent("off_video_fullscreen", "index.php");
                }
            });
        }
        ["aud1", "aud2"].forEach(function (aid) {
            var aud = document.getElementById(aid);
            if (aud) {
                aud.addEventListener("play", function () {
                    logevent("click_play_audio", "index.php", { audio_id: aid });
                });
            }
        });
        var o = document.getElementById("viewAllBlogs");
        o &&
            o.addEventListener(
                "click",
                function (e) {
                    e.preventDefault();
                    logevent("click_see_all_posts", "index.php");
                    var dest = this.getAttribute("href") || url + "/adults/blogs";
                    afterLogNavigate(function () {
                        window.location.href = dest;
                    });
                },
                !1
            );
        ["feelbetterNow", "feelbetterNow-tab", "pathWay", "pathWay-tab", "journal", "journal-tab", "podcast", "podcast-tab", "community", "community-tab","partnership",
             "HapinessScore", "HapinessScore-tab","adultsWeb","teensWeb","freeTrialMenu","freeTrialNow","openInApp1_1","openInApp1_2","openInApp2_1","openInApp2_2","openInApp3_1","openInApp3_2",
             "continueWeb","exploreAppWeb","ourStory","testimonialFooter","contactUsFooter",
             "partnershipfooter" ,"view-all-coaches","whywecreatedvideo","findoutMore","youtubeIntro","appleStore","googlePlayStore"
            ].forEach((e) => {
            const t = document.getElementById(e);
            t &&
                t.addEventListener("click", function (evt) {
                         if (["findoutMore","view-all-coaches","partnership","partnershipfooter","ourStory","testimonialFooter","contactUsFooter","adultsWeb","teensWeb","appleStore","googlePlayStore","exploreAppWeb"].indexOf(e) >= 0 ||
                             e.startsWith("openInApp")) {
                             evt.preventDefault();
                         }
                         "feelbetterNow" == e || "feelbetterNow-tab" == e ? logevent("click_feel_better_now", "index.php")
                        : "pathWay" == e || "pathWay-tab" == e ? logevent("click_guided_programs", "index.php")
                        : "journal" == e || "journal-tab" == e ? logevent("click_journal", "index.php")
                        : "HapinessScore" == e || "HapinessScore-tab" == e ? logevent("click_wellness_score", "index.php")
                        : "podcast" == e || "podcast-tab" == e ? logevent("click_podcast", "index.php")
                        : "appleStore"== e ? (logevent("click_apple_store_web", "index.php") ,afterLogNavigate(function(){window.location.href="https://apps.apple.com/in/app/happierme-master-your-mind/id1588535567"}))
                        : "googlePlayStore" == e ? (logevent("click_google_play_store_web", "index.php") ,afterLogNavigate(function(){window.location.href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US"}))
                        : "community" == e || "community-tab" == e ? logevent("click_community", "index.php")
                        : "youtubeIntro" == e ? logevent("click_youtube_redirect", "index.php")
                        :  "adultsWeb"==e ? (logevent("click_happierme_for_adults_web", "index.php") , afterLogNavigate(function(){window.location.href="https://happierme.app/adults/intro/intro-carousel"}))
                        : "teensWeb" == e ? (logevent("click_happierme_for_teens_web", "index.php") ,afterLogNavigate(function(){window.location.href="https://happierme.app/teenagers/intro-carousel"}))
                        : "findoutMore" == e ? (logevent("click_find_out_more", "index.php") ,afterLogNavigate(function(){window.location.href="../pages/teenagers.php"}))
                        : "partnership" == e ? (logevent("click_partnership", "index.php") ,afterLogNavigate(function(){window.location.href="../pages/partnership.php"}))
                        : "whywecreatedvideo" == e ? (logevent("whywecreatedvideo", "index.php"))
                        :"partnershipfooter" == e ? (logevent("click_footer_link", "index.php", { link_name: "partnership" }) ,afterLogNavigate(function(){window.location.href="../pages/partnership.php"}))
                         :"view-all-coaches" == e ? (logevent("click_footer_link", "index.php", { link_name: "view_all_coaches" }) ,afterLogNavigate(function(){window.location.href="https://happierme.app/adults/coach"}))
                        : "openInApp1_1" == e || "openInApp1_2" == e ? (logevent("click_open_in_app_web", "index.php") ,afterLogNavigate(function(){window.location.href="https://happierme.app/adults/curated/overcome-stress-anxiety"}))
                        : "openInApp2_1" == e || "openInApp2_2" == e ? (logevent("click_open_in_app_web", "index.php") , afterLogNavigate(function(){window.location.href="https://happierme.app/adults/curated/have-fulfilling-relationships"}))
                        : "openInApp3_1" == e  || "openInApp3_2" == e ? (logevent("click_open_in_app_web", "index.php") , afterLogNavigate(function(){window.location.href="https://happierme.app/adults/curated/wisdom-for-workplace"}))
                        : "exploreAppWeb" == e ? (logevent("click_explore_on_app_web", "index.php") , afterLogNavigate(function(){ window.location.href="https://happierme.app/adults/feel-better-now"}))
                        : "ourStory" == e ? (logevent("click_footer_link", "index.php", { link_name: "our_story" }) ,   afterLogNavigate(function(){window.location.href = "../pages/about_us.php"}))
                        : "testimonialFooter" == e ? (logevent("click_footer_link", "index.php", { link_name: "success_stories" }) , afterLogNavigate(function(){window.location.href = "https://happierme.app/adults/testimonials"}))
                        : "contactUsFooter" == e ? (logevent("click_footer_link", "index.php", { link_name: "contact_us" }) , afterLogNavigate(function(){window.location.href="https://happierme.app/adults/contact-us"})) : ''
                        
                });
        });
    }, 200),
    fetchData();
fetchWebsiteTitle();
var countryCode = "",
    pricingModel = "",
    defaultCurrencySymbol = "";
async function fetchData() {
    localStorage.setItem("programType",9)
    const e = await fetch(HW_IP_LOOKUP_URL);
    if (!e.ok) throw new Error("Network response was not ok " + e.statusText);
    const t = await e.json();
    console.log(t), t.in_eu ? (this.countryCode = "EUR") : (this.countryCode = t.country_code_iso3);
    const n = await fetch(hwApiUrl("CountryRates/" + this.countryCode));
    if (!n.ok) throw new Error("Network response was not ok " + n.statusText);
    {
        const e = await n.json();
        (this.pricingModel = e.filter((e) => e.ProgID == parseInt(localStorage.getItem("programType")))[0]),
            (this.defaultCurrencySymbol = this.pricingModel.ISOCode),
            (this.pricingModel.PerMonthAmountOnAnnual = this.formatToDecimal(this.pricingModel.Annual / 12)),
            console.log(this.pricingModel.PerMonthAmountOnAnnual),
            console.log(this.pricingModel);
        const t = document.getElementById("annualPricingModelHeading"),
            o = document.getElementById("strikeOutAnnualPricingModelHeading"),
            a = document.getElementById("totalAnnualPricingModelHeading"),
            i = document.getElementById("monthlyPricingModelHeading"),
            c = document.getElementById("spanAnnualLabel");
        if (!t || !c || !i || !a) return;
        const pm = this.pricingModel;
        o && (o.textContent = `${pm.CurSymbol + pm.Annual_UpperRate + getIsoCode()}/yr`),
            (t.textContent = `${pm.CurSymbol + pm.Annual + getIsoCode()}/yr`),
            (c.textContent = `${pm.CurSymbol}${pm.PerMonthAmountOnAnnual}/mo`),
            (i.textContent = pm.CurSymbol + pm.Monthly + getIsoCode() + "/mo"),
            (a.textContent = `After your free trial, the yearly subscription is ${t.textContent} and automatically renews each year until cancelled.`);
    }
}
var DEFAULT_WEBSITE_TITLE =
        'Think better.<br><span class="hero-title-accent">Live better.</span>';
var DEFAULT_WEBSITE_SUBTITLE =
        "Self-awareness tools to reduce stress and anxiety, deepen your relationships and build a happier life.<br>(for Adults & Teenagers)";
async function fetchWebsiteTitle() {
    var titleEl = document.getElementById("hw-website-title"),
        subtitleEl = document.getElementById("hw-website-subtitle");
    if (!titleEl && !subtitleEl) return;
    if (titleEl && !titleEl.innerHTML.trim()) titleEl.innerHTML = DEFAULT_WEBSITE_TITLE;
    if (subtitleEl && !subtitleEl.innerHTML.trim())
        subtitleEl.innerHTML = DEFAULT_WEBSITE_SUBTITLE;
    try {
        var res = await fetch(hwApiUrl("GetWebsiteTitle"), {
            headers: { Accept: "application/json" },
        });
        if (res.ok) {
            var data = await res.json();
            var row = Array.isArray(data) && data[0];
            if (row) {
                if (titleEl && row.title) titleEl.innerHTML = row.title;
                if (subtitleEl && row.subtitle) subtitleEl.innerHTML = row.subtitle;
            }
        }
    } catch (err) {}
}
function formatToDecimal(e) {
    return Number.isInteger(e) ? `${e}.00` : e.toFixed(2);
}
function getIsoCode() {
    return "$" == this.pricingModel.CurSymbol ? ` (${this.pricingModel.ISOCode})` : "";
}

// Newsletter form handler for page section (events 1–5 apply to modal popup only; no duplicate GA here)
const pageNewsLetterForm = document.getElementById("page-news-contact-form");
pageNewsLetterForm && pageNewsLetterForm.addEventListener("click", () => {
          const  email = document.getElementById("page-news-email").value;
          const  name = document.getElementById("page-news-name").value;
            const o = { Name: name, EmailID: email };
          
            if (!(email && name && "" != email && "" != name)) return alert("All fields must be filled out"), !1;
            if(!validateEmail(email)){
                return alert("Please enter valid email"), !1;
            }
            fetch(hwApiUrl("subscribe_newsletter"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) })
                .then((e) => e.json())
                .then((e) => {
                    document.getElementById("page-news-email").value = "";
                    document.getElementById("page-news-name").value = "";
                    alert(e?.Message ? e.Message : e);
                })
                .catch((e) => {
                    let content = e['error'] ? e['error']['Message'] : 'An error occurred';
                    console.error("Error:", e), alert(content);
                });
    })


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

/** Index-only: org cards, coaches/blog, blog section view, footer/social (matches webpage event list). */
function initIndexPageGa() {
    var orgMap = { orgCardWorkplace: "click_workplace_card", orgCardEducation: "click_education_card", orgCardHealthcare: "click_healthcare_card" };
    Object.keys(orgMap).forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener("click", function (e) {
            e.preventDefault();
            logevent(orgMap[id], "index.php", { source: "home_card" });
            var href = el.getAttribute("href");
            afterLogNavigate(function () { window.location.href = href; });
        });
    });

    var coachScroll = document.getElementById("coaches-scroll");
    if (coachScroll) {
        coachScroll.addEventListener("click", function (e) {
            var card = e.target.closest("a.coach-card");
            if (!card) return;
            var nameEl = card.querySelector(".coach-name");
            var cn = nameEl ? nameEl.textContent.trim() : "";
            e.preventDefault();
            logevent("click_coach_name", "index.php", { coach_name: cn });
            afterLogNavigate(function () { window.location.href = card.href; });
        });
    }

    var blogScrollEl = document.getElementById("blog-scroll");
    if (blogScrollEl) {
        blogScrollEl.addEventListener("click", function (e) {
            var card = e.target.closest("a.blog-card");
            if (!card) return;
            var tEl = card.querySelector(".blog-title");
            var bt = tEl ? tEl.textContent.trim() : "";
            e.preventDefault();
            logevent("click_blog_card1", "index.php", { blog_title: bt });
            afterLogNavigate(function () { window.location.href = card.href; });
        });
    }

    var coachesMore = document.getElementById("coachesFindOutMore");
    if (coachesMore) {
        coachesMore.addEventListener("click", function (e) {
            e.preventDefault();
            logevent("click_find_out_more", "index.php", { section: "coaches" });
            var h = coachesMore.getAttribute("href");
            afterLogNavigate(function () { window.location.href = h; });
        });
    }

    var blogSec = document.getElementById("exploreBlogSection");
    if (blogSec && "IntersectionObserver" in window) {
        var io = new IntersectionObserver(
            function (ents) {
                ents.forEach(function (ent) {
                    if (ent.isIntersecting) {
                        logevent("view_blog_section", "index.php");
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );
        io.observe(blogSec);
    }

    document.querySelectorAll(".dfooter_social_links a").forEach(function (a) {
        a.addEventListener("click", function () {
            var img = a.querySelector("img");
            var alt = img ? img.getAttribute("alt") || "social" : "social";
            logevent("click_social_icon", "index.php", { network: alt });
        });
    });

    document.querySelectorAll(".dfooter .dfooter_links a[href]").forEach(function (a) {
        if (a.id && ["ourStory", "testimonialFooter", "partnershipfooter", "contactUsFooter"].indexOf(a.id) >= 0) return;
        var href = a.getAttribute("href");
        if (!href || href === "#") return;
        a.addEventListener("click", function () {
            var label = (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80);
            logevent("click_footer_link", "index.php", { link_name: label || href });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initIndexPageGa();
    // Convert existing accordion to Bootstrap 5.3
    convertAccordionToBootstrap53();
    
    // Initialize FAQ functionality
    initializeFAQTabs();
    initializeFAQAccordion();

    const arr = ["mental-wellbeing"];
    arr.forEach(element => {
    const modal = document.getElementById(element);
    if (modal) {
          modal.addEventListener("click", () => {
                modalManager.openModal(modal);
        });
    }
    });
    
    // Initialize modal manager for the page
    modalManager.initializeModalTriggers('[data-bs-toggle="modal"]');
    
    // Add modal hidden event listener for backdrop cleanup
    const modal = document.getElementById('product_view');
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function () {
            modalManager.cleanupModalBackdrop();
        });
    }
    
    // Initialize tool tabs separately
    initializeToolTabs();
    
    // Handle hash navigation on page load
    if (window.location.hash === "#div_subscription") {
        // This is a first-time page load, use longer timeout
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 120;
        scrollToElement("div_subscription", headerHeight + 20, true);
    }
    
    // Handle hash changes (e.g., when clicking pricing link on same page)
    window.addEventListener('hashchange', function() {
        if (window.location.hash === "#div_subscription") {
            // Check if this is a first load or just hash change
            const isFirstLoad = !document.getElementById("div_subscription") || 
                               document.getElementById("div_subscription").offsetHeight === 0;
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 120;
            scrollToElement("div_subscription", headerHeight + 20, isFirstLoad);
        }
    });
    
    // const e = document.getElementById("AnnualType");
    // e?.addEventListener("click", () => {
    //     window.location.href = url+"/adults/subscription/start-your-free-trial";
    // });
    // const t = document.getElementById("teenagers-AnnualType");
    // t?.addEventListener("click", () => {
    //     window.location.href = url+"/teenagers/subscription/start-your-free-trial";
    // });
});

$(document).ready(function(){
  
    $('.popup-btn').on('click', function(){
      $('.video-popup').fadeIn('slow');
      return false;
    });
    
    $('.popup-bg').on('click', function(){
      $('.video-popup').slideUp('slow');
      return false;
    });
    
     $('.close-btn').on('click', function(){
       $('.video-popup').fadeOut('slow');
        return false;
     });
    
    // Convert existing accordion to Bootstrap 5.3
    convertAccordionToBootstrap53();
    
    // Initialize FAQ functionality
    initializeFAQTabs();
    initializeFAQAccordion();
    
    // Initialize tool tabs separately to avoid conflicts
    initializeToolTabs();
    
    // Initialize modal manager for the page
    modalManager.initializeModalTriggers('[data-bs-toggle="modal"]');
    
    // Add modal hidden event listener for backdrop cleanup
    const modal = document.getElementById('product_view');
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function () {
            modalManager.cleanupModalBackdrop();
        });
    }
    
    // Initialize Bootstrap tabs with conflict resolution
    function initializeTabs() {
        console.log('Initializing tabs...');
        
        // Remove any existing event handlers to prevent conflicts
        $('a[data-toggle="tab"]').off('click');
        $('.nav-tabs a').off('click');
        
        // Initialize Bootstrap 5.3 tabs for FAQ tabs only
        $('.tab_faqs a[data-bs-toggle="tab"]').on('click', function (e) {
            e.preventDefault();
            console.log('FAQ Tab clicked:', $(this).attr('href'));
            const target = $(this).attr('href');
            const tab = new bootstrap.Tab(this);
            tab.show();
        });
        
        // Ensure FAQ tabs work on page load
        $('.tab_faqs a').on('click', function (e) {
            e.preventDefault();
            console.log('FAQ Nav tab clicked:', $(this).attr('href'));
            const target = $(this).attr('href');
            const tab = new bootstrap.Tab(this);
            tab.show();
        });
        
        // Initialize FAQ tabs with proper state management
        $('.tab_faqs a[data-toggle="tab"], .tab_faqs a[data-bs-toggle="tab"]').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                console.log('FAQ Tab clicked:', target);
                
                // Update active states for FAQ tabs only
                $('.tab_faqs li').removeClass('active');
                $(this).parent().addClass('active');
                
                // Show the target FAQ tab content
                $('.tc_faqs .tab-pane').removeClass('show active');
                $(target).addClass('show active');
                
                // Trigger Bootstrap 5.3 tab show
                const tab = new bootstrap.Tab(this);
                tab.show();
                
                console.log('FAQ Tab activated:', target);
            });
        });
        
        console.log('FAQ Tabs initialized successfully');
    }
    
    // Initialize tabs immediately
    initializeTabs();
    
    // Re-initialize tabs after a short delay to handle any loading issues
    setTimeout(function() {
        initializeTabs();
    }, 500);
    
    // Add click event listeners for debugging
    $('.tab_faqs a').on('click', function() {
        console.log('FAQ Tab clicked via direct listener:', $(this).attr('href'));
    });
    
    // Newsletter popup test button
    const testNewsPopupBtn = document.getElementById('testNewsPopup');
    if (testNewsPopupBtn) {
        testNewsPopupBtn.addEventListener('click', function() {
            console.log('Manual newsletter popup trigger clicked');
            sessionStorage.removeItem('newsLetterOpened'); // Reset for testing
            
            const newsPopupBtn = document.getElementById('newsPopup');
            if (newsPopupBtn) {
                newsPopupBtn.click();
            } else {
                // Fallback: show modal directly using Bootstrap 5.3
                const modal = document.getElementById('product_view');
                if (modal) {
                    console.log('Showing modal directly...');
                    const bsModal = new bootstrap.Modal(modal);
                    bsModal.show();
                }
            }
        });
    }
    
    // Ensure Bootstrap 5.3 modal functionality works
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-bs-toggle="modal"]')) {
            const target = e.target.getAttribute('data-bs-target');
            if (target) {
                const modal = document.querySelector(target);
                if (modal) {
                    const bsModal = new bootstrap.Modal(modal);
                    bsModal.show();
                }
            }
        }
    });
    
});