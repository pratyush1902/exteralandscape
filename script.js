/**
 * RAJBUILD INFRA — Interactive Client Experience & Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBeforeAfterSlider();
  initCostEstimator();
  initFaqAccordion();
  initLeadForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. Navbar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileDrawerClose = document.querySelector('.mobile-drawer-close');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  // Sticky header background change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Drawer open / close
  function openDrawer() {
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   2. Interactive Before / After Split Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const rangeInput = document.querySelector('.ba-range-input');
  const beforeImage = document.querySelector('.ba-before');
  const handle = document.querySelector('.ba-slider-handle');

  if (!rangeInput || !beforeImage || !handle) return;

  function updateSlider(value) {
    beforeImage.style.width = `${value}%`;
    handle.style.left = `${value}%`;
  }

  rangeInput.addEventListener('input', (e) => {
    updateSlider(e.target.value);
  });

  // Initial set to 50%
  updateSlider(50);
}

/* ==========================================================================
   3. Interactive Landscape Cost Estimator
   ========================================================================== */
function initCostEstimator() {
  const propOptions = document.querySelectorAll('.prop-opt');
  const areaSlider = document.getElementById('calc-area-range');
  const areaDisplay = document.getElementById('calc-area-val');
  const featureCheckboxes = document.querySelectorAll('.feature-check');
  const priceDisplay = document.getElementById('est-price-total');
  const breakdownType = document.getElementById('est-breakdown-type');
  const breakdownArea = document.getElementById('est-breakdown-area');
  const breakdownFeatures = document.getElementById('est-breakdown-features');
  const whatsappEstimateBtn = document.getElementById('btn-whatsapp-estimate');

  let selectedProperty = 'villa';
  let propertyName = 'Villa / Bungalow Lawn';
  let baseRatePerSqFt = 95; // base INR rate per sq ft for lawn & landscaping

  const propertyRates = {
    villa: { name: 'Villa / Bungalow Lawn', rate: 95 },
    rooftop: { name: 'Rooftop / Terrace Garden', rate: 140 },
    commercial: { name: 'Cafe / Resort / Farmhouse', rate: 85 }
  };

  // Property Selection Click
  propOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      propOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedProperty = opt.getAttribute('data-type');
      propertyName = propertyRates[selectedProperty].name;
      baseRatePerSqFt = propertyRates[selectedProperty].rate;
      calculateEstimate();
    });
  });

  // Slider change
  if (areaSlider) {
    areaSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      if (areaDisplay) areaDisplay.textContent = `${Number(val).toLocaleString('en-IN')} sq. ft.`;
      calculateEstimate();
    });
  }

  // Feature checkboxes
  featureCheckboxes.forEach(cb => {
    cb.addEventListener('change', calculateEstimate);
  });

  function calculateEstimate() {
    if (!areaSlider) return;
    const area = parseInt(areaSlider.value, 10);
    
    // Base Softscape Cost (Grass, soil prep, base planting)
    let totalCost = area * baseRatePerSqFt;
    let selectedAddons = [];

    featureCheckboxes.forEach(cb => {
      if (cb.checked) {
        const featureCost = parseInt(cb.getAttribute('data-rate'), 10);
        const featureType = cb.getAttribute('data-calc-type');
        const featureLabel = cb.getAttribute('data-label');

        selectedAddons.push(featureLabel);

        if (featureType === 'per_sqft') {
          totalCost += area * featureCost;
        } else {
          totalCost += featureCost;
        }
      }
    });

    // Formatting INR range (Ballpark low - high)
    const lowerEstimate = Math.round(totalCost * 0.92);
    const upperEstimate = Math.round(totalCost * 1.08);

    if (priceDisplay) {
      priceDisplay.innerHTML = `₹${lowerEstimate.toLocaleString('en-IN')} <span style="font-size: 1.3rem; font-weight: normal; color: rgba(255,255,255,0.7); font-family: sans-serif;">– ₹${upperEstimate.toLocaleString('en-IN')}*</span>`;
    }

    if (breakdownType) breakdownType.textContent = propertyName;
    if (breakdownArea) breakdownArea.textContent = `${area.toLocaleString('en-IN')} sq. ft.`;
    if (breakdownFeatures) breakdownFeatures.textContent = selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Base Greenery Only';

    // WhatsApp Link setup
    if (whatsappEstimateBtn) {
      const waMsg = `Hello RAJBUILD INFRA, I checked the estimate calculator on your website:%0A` +
        `• Property: ${encodeURIComponent(propertyName)}%0A` +
        `• Area: ${encodeURIComponent(area.toLocaleString('en-IN'))} sq. ft.%0A` +
        `• Features: ${encodeURIComponent(selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Base Greenery')}%0A` +
        `• Estimated Range: ₹${lowerEstimate.toLocaleString('en-IN')} – ₹${upperEstimate.toLocaleString('en-IN')}%0A%0A` +
        `I would like to discuss and book an on-site visit in Patna/nearby.`;

      whatsappEstimateBtn.href = `https://wa.me/919315359040?text=${waMsg}`;
    }
  }

  // Initial Calculation
  calculateEstimate();
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(i => i.classList.remove('active'));

      // If clicked item wasn't open, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. Site Visit Booking Form (Direct WhatsApp Lead Generator)
   ========================================================================== */
function initLeadForm() {
  const bookingForm = document.getElementById('bookingForm');
  if (!bookingForm) return;

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('lead_name').value.trim();
    const phone = document.getElementById('lead_phone').value.trim();
    const location = document.getElementById('lead_location').value.trim();
    const propertyType = document.getElementById('lead_property').value;
    const areaSize = document.getElementById('lead_size').value.trim() || 'Not specified';
    const requirements = document.getElementById('lead_requirements').value.trim() || 'Landscape & Outdoor Development';

    if (!name || !phone || !location) {
      alert('Please fill in your name, phone number, and location.');
      return;
    }

    const waMessage = 
      `*🌿 NEW SITE VISIT REQUEST — RAJBUILD INFRA*%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `👤 *Name:* ${encodeURIComponent(name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
      `📍 *Location:* ${encodeURIComponent(location)}%0A` +
      `🏡 *Property Type:* ${encodeURIComponent(propertyType)}%0A` +
      `📐 *Approx. Area:* ${encodeURIComponent(areaSize)}%0A` +
      `📝 *Requirement:* ${encodeURIComponent(requirements)}%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `_I would like to schedule an initial site visit._`;

    // Open WhatsApp
    window.open(`https://wa.me/919315359040?text=${waMessage}`, '_blank');
  });
}

/* ==========================================================================
   6. Smooth Anchor Scroll
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
