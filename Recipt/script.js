/**
 * Commercial Bank of Ethiopia - Receipt Interactive Script
 * Handles PDF download, clipboard copy, and editable field updates
 */

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
