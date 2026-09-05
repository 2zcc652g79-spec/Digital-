/**
 * Commercial Bank of Ethiopia - Receipt Interactive Script
 * Handles official CBE Processor Loader delay, PDF download, clipboard copy, and utilities
 */

// ============================================================================
// OFFICIAL CBE PROCESSOR LOADER LOGIC
// Simulates authentic banking verification & processing delay with circulating logo
// ============================================================================
(function initCBELoader() {
  // Parse optional custom delay from URL parameters (e.g. ?delay=3000) or default to 1200ms
  const urlParams = new URLSearchParams(window.location.search);
  const queryDelay = parseInt(urlParams.get('delay'), 10);
  const defaultDelay = (!isNaN(queryDelay) && queryDelay >= 0) ? queryDelay : 1200;

  function dismissLoader() {
    const loader = document.getElementById('cbeLoader');
    if (!loader) return;

    loader.classList.add('cbe-loader-hidden');
    // Hide completely after transition to allow full interaction
    setTimeout(() => {
      loader.style.display = 'none';
    }, 550);
  }

  // Dismiss loader after specified delay
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(dismissLoader, defaultDelay);
    });
  } else {
    setTimeout(dismissLoader, defaultDelay);
  }

  // Instructor Demo Helper: Re-trigger loading screen anytime
  // Call window.simulateCBELoader(2000) from console or via logo click
  window.simulateCBELoader = function (customDelay) {
    const loader = document.getElementById('cbeLoader');
    if (!loader) return;

    const delay = (typeof customDelay === 'number' && customDelay >= 0) ? customDelay : defaultDelay;
    loader.style.display = 'flex';
    // Force DOM reflow to re-trigger transition
    void loader.offsetWidth;
    loader.classList.remove('cbe-loader-hidden');

    setTimeout(dismissLoader, delay);
  };
})();

// Download PDF / Print Handler
function downloadReceiptPDF() {
  window.print();
}

// Copy Reference Number to Clipboard with Toast Notification
function copyReference(refText) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(refText).then(() => {
      showToast("Reference number copied!");
    }).catch(() => {
      fallbackCopy(refText);
    });
  } else {
    fallbackCopy(refText);
  }
}

function fallbackCopy(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    showToast("Reference number copied!");
  } catch (err) {
    showToast("Copy failed, please select and copy manually");
  }
  document.body.removeChild(tempInput);
}

// Show Toast Message
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const toastText = document.getElementById("toastMessage");
  if (!toast || !toastText) return;
  
  toastText.textContent = message;
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}
