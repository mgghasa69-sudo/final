// ── MENU DATA ─────────────────────────────────────────────
const MENU = {
  Burgers: [
    { emoji: '🍔', name: 'Classic Smash Burger', desc: 'Double smashed patty, American cheese, pickles & special sauce', price: 189, kcal: 680 },
    { emoji: '🍔', name: 'Bacon BBQ Stack', desc: 'Triple beef, crispy bacon, cheddar, onion rings, BBQ sauce', price: 229, kcal: 820 },
    { emoji: '🍔', name: 'Spicy Crispy Chicken', desc: 'Buttermilk chicken fillet, jalapeños, chipotle mayo, lettuce', price: 199, kcal: 590 },
    { emoji: '🥬', name: 'Mushroom Swiss Burger', desc: 'Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli', price: 209, kcal: 570 },
    { emoji: '🍔', name: 'Signature QB Burger', desc: 'Our iconic burger with QB sauce, double patty, fresh tomato', price: 249, kcal: 750 },
    { emoji: '🍔', name: 'Cheeseburger', desc: 'Simple, classic, always great. Single patty, cheese & ketchup', price: 99, kcal: 390 },
  ],
  Chicken: [
    { emoji: '🍗', name: 'Crispy Fried Chicken', desc: '3-piece golden-fried chicken, seasoned with secret spices', price: 179, kcal: 720 },
    { emoji: '🥩', name: 'Grilled Chicken Platter', desc: 'Herb-marinated grilled breast, steamed veggies & gravy', price: 195, kcal: 480 },
    { emoji: '🍗', name: 'Chicken Strips x5', desc: 'Tender chicken strips with your choice of dipping sauce', price: 149, kcal: 420 },
    { emoji: '🌮', name: 'Chicken Wrap', desc: 'Crispy chicken, lettuce, tomato, ranch in a warm tortilla', price: 165, kcal: 510 },
    { emoji: '🍗', name: 'Spicy Buffalo Wings', desc: '8-piece wings tossed in fiery buffalo sauce', price: 219, kcal: 640 },
    { emoji: '🍗', name: 'Chickenjoy Family Bucket', desc: '8-piece mixed chicken, perfect for sharing', price: 459, kcal: 0 },
  ],
  'Fries & Sides': [
    { emoji: '🍟', name: 'Large Fries', desc: 'Golden crispy fries, lightly salted', price: 79, kcal: 490 },
    { emoji: '🍟', name: 'Medium Fries', desc: 'Classic medium serving of fries', price: 59, kcal: 340 },
    { emoji: '🧀', name: 'Cheese Fries', desc: 'Loaded with creamy nacho cheese sauce', price: 99, kcal: 580 },
    { emoji: '🌭', name: 'Loaded Hotdog', desc: 'Jumbo hotdog, mustard, relish, onions', price: 89, kcal: 420 },
    { emoji: '🥗', name: 'Side Salad', desc: 'Fresh greens, cucumber, tomato & dressing', price: 69, kcal: 120 },
    { emoji: '🧅', name: 'Onion Rings', desc: 'Crispy battered rings, served with ranch', price: 85, kcal: 380 },
  ],
  'Rice Meals': [
    { emoji: '🍚', name: 'Burger Steak + Rice', desc: 'Juicy beef patties with mushroom gravy over steamed rice', price: 155, kcal: 680 },
    { emoji: '🍚', name: 'Chicken + Rice', desc: '1-pc crispy chicken with steamed rice & gravy', price: 139, kcal: 590 },
    { emoji: '🍛', name: 'Beef Tapa + Rice', desc: 'Sweet cured beef tapa with garlic rice & sunny side egg', price: 169, kcal: 720 },
    { emoji: '🍚', name: 'Pork BBQ + Rice', desc: 'Grilled pork skewer, steamed rice & atchara', price: 149, kcal: 650 },
    { emoji: '🍳', name: 'Silog Meal', desc: 'Your choice of protein, garlic rice & egg', price: 129, kcal: 610 },
  ],
  Beverages: [
    { emoji: '🥤', name: 'Large Cola', desc: 'Chilled Coca-Cola, large cup with ice', price: 69, kcal: 200 },
    { emoji: '🥤', name: 'Medium Cola', desc: 'Refreshing medium-sized Coke', price: 55, kcal: 150 },
    { emoji: '🥛', name: 'Chocolate Shake', desc: 'Thick, creamy chocolate milkshake', price: 95, kcal: 420 },
    { emoji: '🍋', name: 'Lemonade Slush', desc: 'Tangy frozen lemonade, sweet & icy', price: 79, kcal: 180 },
    { emoji: '☕', name: 'Hot Coffee', desc: 'Freshly brewed arabica coffee', price: 65, kcal: 5 },
    { emoji: '🧃', name: 'Orange Juice', desc: 'Fresh-squeezed orange juice, 350ml', price: 75, kcal: 140 },
  ],
  Desserts: [
    { emoji: '🍦', name: 'Soft Serve Cone', desc: 'Classic creamy vanilla soft serve', price: 39, kcal: 200 },
    { emoji: '🍫', name: 'Hot Fudge Sundae', desc: 'Vanilla ice cream, rich hot fudge sauce', price: 75, kcal: 390 },
    { emoji: '🥧', name: 'Buko Pie Slice', desc: 'Flaky crust, tender young coconut filling', price: 65, kcal: 310 },
    { emoji: '🍩', name: 'Glazed Donut x2', desc: 'Fluffy yeast donuts with sweet glaze', price: 55, kcal: 480 },
    { emoji: '🎂', name: 'Birthday Cake Slice', desc: 'Vanilla sponge with sprinkles & cream', price: 89, kcal: 440 },
  ],
  'Value Meals': [
    { emoji: '🎁', name: 'QB Value Meal 1', desc: 'Cheeseburger + Small Fries + Medium Cola', price: 149, kcal: 820 },
    { emoji: '🎁', name: 'QB Value Meal 2', desc: 'Chicken Strips + Large Fries + Large Cola', price: 219, kcal: 1050 },
    { emoji: '🎁', name: 'Family Feast', desc: '2 Burgers + 8-pc Chicken + 2 Large Fries + 4 Drinks', price: 799, kcal: 0 },
    { emoji: '🎁', name: 'Solo Meal Deal', desc: 'Smash Burger + Medium Fries + Medium Cola', price: 249, kcal: 960 },
  ],
  Breakfast: [
    { emoji: '🥞', name: 'Pancake Platter', desc: '3 fluffy pancakes, butter & maple syrup', price: 109, kcal: 520 },
    { emoji: '🥚', name: 'Egg McMuffin', desc: 'Egg, Canadian bacon & cheese on toasted muffin', price: 99, kcal: 300 },
    { emoji: '🌯', name: 'Breakfast Burrito', desc: 'Scrambled eggs, sausage, cheese in tortilla', price: 119, kcal: 450 },
    { emoji: '🥣', name: 'Oatmeal Bowl', desc: 'Creamy oats with brown sugar & almonds', price: 79, kcal: 290 },
    { emoji: '☕', name: 'Breakfast Combo', desc: 'Pancakes + Egg + Coffee — start your day right', price: 169, kcal: 700 },
  ],
};

// ── STATE ─────────────────────────────────────────────────
let cart = [];
let currentCategory = 'Burgers';
let dineMode = 'Dine In';
let currentUser = null;
let currentPoints = 0;
let redeemActive = false;
let pointsDiscount = 0;

// ── LOCAL STORAGE HELPERS (replaces broken backend) ───────
const LS_POINTS_KEY = 'qb_guest_points';
const LS_USER_KEY = 'user';

function lsGetPoints() {
  return parseInt(localStorage.getItem(LS_POINTS_KEY) || '0', 10);
}

function lsSetPoints(pts) {
  localStorage.setItem(LS_POINTS_KEY, String(Math.max(0, pts)));
}

function lsGetUser() {
  try {
    return JSON.parse(localStorage.getItem(LS_USER_KEY));
  } catch (e) {
    return null;
  }
}

function lsSetUser(user) {
  localStorage.setItem(LS_USER_KEY, JSON.stringify(user));
}

function lsClearUser() {
  localStorage.removeItem(LS_USER_KEY);
  localStorage.removeItem(LS_POINTS_KEY);
  localStorage.removeItem('isAdmin');
  localStorage.removeItem('adminEmail');
  localStorage.removeItem('role');
}

// ── BOOT ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initUser();
  updateClock();
  setInterval(updateClock, 1000);
  renderMenu();
});

// ── AUTH (localStorage-based, no backend needed) ──────────
async function initUser() {
  const saved = lsGetUser();
  if (saved) {
    currentUser = saved;
    currentPoints = lsGetPoints();
  } else {
    currentUser = null;
    currentPoints = 0;
  }
  renderUserArea();
  updateRedeemButton();
}

function renderUserArea() {
  const area = document.getElementById('user-area');
  if (!area) return;

  if (!currentUser) {
    area.innerHTML = `
        <button class="btn-login-redirect" onclick="window.location.href='login.html'">Sign In</button>
      `;
    return;
  }

  const initials = currentUser.username
    ? currentUser.username.slice(0, 2).toUpperCase()
    : 'QB';

  area.innerHTML = `
      <div class="user-chip">
        <div class="user-avatar">${initials}</div>
        <div class="user-info">
          <div class="user-name">${currentUser.username}</div>
          <div class="user-pts" id="user-pts-display">⭐ ${currentPoints} pts</div>
        </div>
        <button class="topbar-logout-btn" onclick="logout()">Sign Out</button>
      </div>
    `;
}

function fetchPoints() {
  // Points are stored locally — just read from localStorage
  if (!currentUser) return;
  currentPoints = lsGetPoints();
  updatePointsDisplay(currentPoints);
  updateRedeemButton();
}

function updatePointsDisplay(pts) {
  const el = document.getElementById('user-pts-display');
  if (el) el.textContent = `⭐ ${pts ?? currentPoints} pts`;
}

function logout() {
  lsClearUser();
  currentUser = null;
  currentPoints = 0;
  redeemActive = false;
  pointsDiscount = 0;
  renderUserArea();
  updateCartUI();
  showToast('Signed out successfully');
}

// ── POINTS (localStorage-based, no backend needed) ────────
async function addPoints(pointsToAdd) {
  if (!currentUser) return 0;
  currentPoints = lsGetPoints() + pointsToAdd;
  lsSetPoints(currentPoints);
  updatePointsDisplay(currentPoints);
  return currentPoints;
}

async function deductPoints(pointsToDeduct) {
  if (!currentUser) return 0;
  currentPoints = Math.max(0, lsGetPoints() - pointsToDeduct);
  lsSetPoints(currentPoints);
  updatePointsDisplay(currentPoints);
  return currentPoints;
}

// ── REDEEM POINTS ─────────────────────────────────────────
function toggleRedeem() {
  if (!currentUser) {
    showToast('Please sign in to redeem points');
    return;
  }
  if (currentPoints < 50) {
    showToast('You need at least 50 pts to redeem');
    return;
  }

  redeemActive = !redeemActive;

  if (redeemActive) {
    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const total = parseFloat((subtotal * 1.12).toFixed(2));
    const maxByPoints = Math.floor(currentPoints / 50) * 50;
    const maxByTotal = Math.floor(total / 50) * 50;
    const ptsToUse = Math.min(maxByPoints, maxByTotal);

    if (ptsToUse === 0) {
      showToast('Not enough points for current order total');
      redeemActive = false;
      return;
    }

    pointsDiscount = ptsToUse;
    showToast(`⭐ ${ptsToUse} pts redeemed! -₱${ptsToUse} off`);
  } else {
    pointsDiscount = 0;
    showToast('Points redemption removed');
  }

  updateCartUI();
  updateRedeemButton();
}

function updateRedeemButton() {
  const wrap = document.getElementById('redeem-wrap');
  const btn = document.getElementById('redeem-btn');
  const avail = document.getElementById('redeem-pts-available');

  if (!wrap) return;

  if (currentUser && currentPoints >= 50 && cart.length > 0) {
    wrap.style.display = 'block';
  } else {
    wrap.style.display = 'none';
    redeemActive = false;
    pointsDiscount = 0;
  }

  if (avail) avail.textContent = currentPoints;

  if (btn) {
    if (redeemActive) {
      btn.style.background = '#2ECC71';
      btn.style.color = '#1A1A1A';
      btn.textContent = `✓ Points Applied (-₱${pointsDiscount})`;
    } else {
      btn.style.background = '';
      btn.style.color = '';
      btn.innerHTML = `⭐ Redeem Points (<span id="redeem-pts-available">${currentPoints}</span> pts)`;
    }
  }
}

// ── SCREENSAVER ───────────────────────────────────────────
function startSession() {
  document.getElementById('screensaver').style.display = 'none';
}

function setDine(button, type) {
  dineMode = type;
  document.querySelectorAll('.dine-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  showToast(`Switched to ${type}`);
}

function setCategory(element, category) {
  currentCategory = category;
  document.querySelectorAll('.cat-item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');
  document.getElementById('menu-title').innerText = category;
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = MENU[currentCategory] || [];
  items.forEach(item => {
    grid.innerHTML += `
        <div class="item-card" onclick="addToCart('${item.name}', ${item.price})">
          <div class="item-img">
            ${item.emoji}
          </div>
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
            <div class="item-bottom">
              <div class="item-price">₱${item.price.toFixed(2)}</div>
              <button class="add-btn">+</button>
            </div>
          </div>
        </div>
      `;
  });
}

function addToCart(name, price) {
  const exist = cart.find(item => item.name === name);
  if (exist) { exist.quantity++; }
  else { cart.push({ name, price, quantity: 1 }); }
  if (redeemActive) {
    redeemActive = false;
    pointsDiscount = 0;
  }
  updateCartUI();
  showToast(`${name} added!`);
}

function updateCartUI() {
  const itemsContainer = document.getElementById('order-items');
  const emptyView = document.getElementById('empty-order');
  if (!itemsContainer) return;

  if (cart.length === 0) {
    if (emptyView) emptyView.style.display = 'block';
    document.querySelectorAll('.order-item-row').forEach(e => e.remove());
    document.getElementById('checkout-btn').disabled = true;
    updatePrices(0);
    document.getElementById('order-count').innerText = 0;
    updateRedeemButton();
    return;
  }

  if (emptyView) emptyView.style.display = 'none';
  document.querySelectorAll('.order-item-row').forEach(e => e.remove());

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    const row = document.createElement('div');
    row.className = 'order-item-row';
    row.innerHTML = `
        <div>${item.name} x${item.quantity}</div>
        <div>₱${(item.price * item.quantity).toFixed(2)}</div>
      `;
    itemsContainer.appendChild(row);
  });

  updatePrices(subtotal);
  document.getElementById('checkout-btn').disabled = false;
  document.getElementById('order-count').innerText = cart.reduce((a, b) => a + b.quantity, 0);
  updateRedeemButton();
}

function updatePrices(subtotal) {
  const vat = subtotal * 0.12;
  const beforeDiscount = subtotal + vat;
  const total = Math.max(0, beforeDiscount - pointsDiscount);

  document.getElementById('subtotal').innerText = `₱${subtotal.toFixed(2)}`;
  document.getElementById('vat').innerText = `₱${vat.toFixed(2)}`;
  document.getElementById('total').innerText = `₱${total.toFixed(2)}`;

  const discountRow = document.getElementById('points-discount-row');
  const discountAmt = document.getElementById('points-discount-amt');
  if (discountRow && discountAmt) {
    if (pointsDiscount > 0) {
      discountRow.style.display = 'flex';
      discountAmt.textContent = `-₱${pointsDiscount.toFixed(2)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
}

// ── CHECKOUT (no backend — works fully offline) ───────────
async function checkout() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const vat = subtotal * 0.12;
  const beforeDiscount = parseFloat((subtotal + vat).toFixed(2));
  const totalAmount = parseFloat(Math.max(0, beforeDiscount - pointsDiscount).toFixed(2));
  const randomOrderNum = Math.floor(Math.random() * 90) + 10;

  const btn = document.getElementById('checkout-btn');
  btn.disabled = true;
  btn.innerText = 'Placing Order...';

  // Simulate a brief processing delay for realism
  await new Promise(resolve => setTimeout(resolve, 800));

  try {
    // Deduct redeemed points
    if (currentUser && pointsDiscount > 0) {
      await deductPoints(pointsDiscount);
    }

    document.getElementById('modal-num').innerText = randomOrderNum;

    if (currentUser) {
      const earned = Math.floor(totalAmount / 50);
      if (earned > 0) {
        await addPoints(earned);
      }
      fetchPoints();
      document.getElementById('pts-earned-text').innerText = earned > 0 ? `+${earned} pts earned!` : 'Points redeemed this order';
      document.getElementById('pts-total-text').innerText = currentPoints;
      document.getElementById('points-earned').style.display = 'block';
    } else {
      document.getElementById('points-earned').style.display = 'none';
    }

    redeemActive = false;
    pointsDiscount = 0;

    // Reset button before showing modal
    btn.disabled = false;
    btn.innerText = 'Place Order →';

    document.getElementById('modal').classList.add('active');

  } catch (err) {
    console.error('Checkout error:', err);
    showToast('Something went wrong. Please try again.');
    btn.disabled = false;
    btn.innerText = 'Place Order →';
  }
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  clearOrder();
  fetchPoints();
  document.getElementById('screensaver').style.display = 'flex';
}

function clearOrder() {
  cart = [];
  redeemActive = false;
  pointsDiscount = 0;
  updateCartUI();
}

function updateClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  const now = new Date();
  clockEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── RESERVATION (no backend — works fully offline) ────────
let resSelectedGuests = '';

function openReservationModal() {
  if (currentUser) {
    const nameInput = document.getElementById('res-name');
    if (nameInput && !nameInput.value) nameInput.value = currentUser.username;
  }
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('res-date');
  if (dateInput) dateInput.min = today;

  document.getElementById('res-form-view').style.display = 'block';
  document.getElementById('res-success-view').style.display = 'none';

  document.getElementById('reservation-modal').classList.add('active');
}

function closeReservationModal() {
  document.getElementById('reservation-modal').classList.remove('active');
  document.getElementById('res-name').value = '';
  document.getElementById('res-phone').value = '';
  document.getElementById('res-date').value = '';
  document.getElementById('res-time').value = '';
  document.getElementById('res-notes').value = '';
  document.querySelectorAll('.res-guest-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.res-tag').forEach(b => b.classList.remove('active'));
  resSelectedGuests = '';
}

function setResGuests(el, val) {
  document.querySelectorAll('.res-guest-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  resSelectedGuests = val;
}

function toggleResTag(el) {
  el.classList.toggle('active');
}

async function submitReservation() {
  const name = document.getElementById('res-name').value.trim();
  const phone = document.getElementById('res-phone').value.trim();
  const date = document.getElementById('res-date').value;
  const time = document.getElementById('res-time').value;
  const notes = document.getElementById('res-notes').value.trim();
  const occasion = [...document.querySelectorAll('.res-tag.active')].map(t => t.textContent.trim()).join(', ');

  if (!name || !phone || !date || !time || !resSelectedGuests) {
    showToast('Please fill in all required fields & select guests');
    return;
  }

  const confirmBtn = document.querySelector('.res-btn-confirm');
  confirmBtn.textContent = 'SENDING...';
  confirmBtn.disabled = true;

  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 700));

  try {
    // Earn +5 pts for logged-in users
    if (currentUser) {
      await addPoints(5);
      fetchPoints();
    }

    const resNum = 'RES-' + Math.floor(1000 + Math.random() * 9000);
    const d = new Date(date);
    const dStr = d.toLocaleDateString('en-PH', { weekday: 'short', month: 'short', day: 'numeric' });

    document.getElementById('res-confirm-num').textContent = resNum;
    document.getElementById('res-confirm-detail').textContent =
      `${dStr} · ${time} · ${resSelectedGuests} guest${resSelectedGuests === '1' ? '' : 's'}${occasion ? ' · ' + occasion : ''}`;

    document.getElementById('res-form-view').style.display = 'none';
    document.getElementById('res-success-view').style.display = 'block';

    showToast('Reservation confirmed! 🎉');

    // Reset button for next time
    confirmBtn.textContent = 'CONFIRM RESERVATION';
    confirmBtn.disabled = false;

  } catch (err) {
    console.error('Reservation error:', err);
    showToast('Something went wrong. Please try again.');
    confirmBtn.textContent = 'CONFIRM RESERVATION';
    confirmBtn.disabled = false;
  }
}