// ── MENU DATA ─────────────────────────────────────────────
const MENU = {
  Burgers: [
    { emoji: '<i class="fa-solid fa-burger"></i>', name: 'Classic Smash Burger', desc: 'Double smashed patty, American cheese, pickles & special sauce', price: 189, kcal: 680, img: 'images/smash_burger.png' },
    { emoji: '<i class="fa-solid fa-burger"></i>', name: 'Bacon BBQ Stack', desc: 'Triple beef, crispy bacon, cheddar, onion rings, BBQ sauce', price: 229, kcal: 820, img: 'images/bbq_burger.png' },
    { emoji: '<i class="fa-solid fa-burger"></i>', name: 'Spicy Crispy Chicken', desc: 'Buttermilk chicken fillet, jalapeños, chipotle mayo, lettuce', price: 199, kcal: 590, img: 'images/chicken_burger.png' },
    { emoji: '<i class="fa-solid fa-burger"></i>', name: 'Mushroom Swiss Burger', desc: 'Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli', price: 209, kcal: 570, img: 'images/mushroom_burger.png' },
    { emoji: '<i class="fa-solid fa-burger"></i>', name: 'Signature QB Burger', desc: 'Our iconic burger with QB sauce, double patty, fresh tomato', price: 249, kcal: 750, img: 'images/qb_burger.png' },
    { emoji: '<i class="fa-solid fa-burger"></i>', name: 'Cheeseburger', desc: 'Simple, classic, always great. Single patty, cheese & ketchup', price: 99, kcal: 390, img: 'images/smash_burger.png' },
  ],
  Chicken: [
    { emoji: '<i class="fa-solid fa-drumstick-bite"></i>', name: 'Crispy Fried Chicken', desc: '3-piece golden-fried chicken, seasoned with secret spices', price: 179, kcal: 720, img: 'images/fried_chicken.png' },
    { emoji: '<i class="fa-solid fa-leaf"></i>', name: 'Grilled Chicken Platter', desc: 'Herb-marinated grilled breast, steamed veggies & gravy', price: 195, kcal: 480, img: 'images/rice_meal.png' },
    { emoji: '<i class="fa-solid fa-drumstick-bite"></i>', name: 'Chicken Strips x5', desc: 'Tender chicken strips with your choice of dipping sauce', price: 149, kcal: 420, img: 'images/fried_chicken.png' },
    { emoji: '<i class="fa-solid fa-drumstick-bite"></i>', name: 'Chicken Wrap', desc: 'Crispy chicken, lettuce, tomato, ranch in a warm tortilla', price: 165, kcal: 510, img: 'images/fried_chicken.png' },
    { emoji: '<i class="fa-solid fa-drumstick-bite"></i>', name: 'Spicy Buffalo Wings', desc: '8-piece wings tossed in fiery buffalo sauce', price: 219, kcal: 640, img: 'images/fried_chicken.png' },
    { emoji: '<i class="fa-solid fa-drumstick-bite"></i>', name: 'Chickenjoy Family Bucket', desc: '8-piece mixed chicken, perfect for sharing', price: 459, kcal: 0, img: 'images/fried_chicken.png' },
  ],
  'Fries & Sides': [
    { emoji: '<i class="fa-solid fa-hotdog"></i>', name: 'Large Fries', desc: 'Golden crispy fries, lightly salted', price: 79, kcal: 490, img: 'images/fries.png' },
    { emoji: '<i class="fa-solid fa-hotdog"></i>', name: 'Medium Fries', desc: 'Classic medium serving of fries', price: 59, kcal: 340, img: 'images/fries.png' },
    { emoji: '<i class="fa-solid fa-cheese"></i>', name: 'Cheese Fries', desc: 'Loaded with creamy nacho cheese sauce', price: 99, kcal: 580, img: 'images/fries.png' },
    { emoji: '<i class="fa-solid fa-hotdog"></i>', name: 'Loaded Hotdog', desc: 'Jumbo hotdog, mustard, relish, onions', price: 89, kcal: 420, img: 'images/hotdog.png' },
    { emoji: '<i class="fa-solid fa-leaf"></i>', name: 'Side Salad', desc: 'Fresh greens, cucumber, tomato & dressing', price: 69, kcal: 120, img: 'images/salad.png' },
    { emoji: '<i class="fa-solid fa-hotdog"></i>', name: 'Onion Rings', desc: 'Crispy battered rings, served with ranch', price: 85, kcal: 380, img: 'images/onion_rings.png' },
  ],
  'Rice Meals': [
    { emoji: '<i class="fa-solid fa-bowl-rice"></i>', name: 'Burger Steak + Rice', desc: 'Juicy beef patties with mushroom gravy over steamed rice', price: 155, kcal: 680, img: 'images/rice_meal.png' },
    { emoji: '<i class="fa-solid fa-bowl-rice"></i>', name: 'Chicken + Rice', desc: '1-pc crispy chicken with steamed rice & gravy', price: 139, kcal: 590, img: 'images/rice_meal.png' },
    { emoji: '<i class="fa-solid fa-bowl-rice"></i>', name: 'Beef Tapa + Rice', desc: 'Sweet cured beef tapa with garlic rice & sunny side egg', price: 169, kcal: 720, img: 'images/rice_meal.png' },
    { emoji: '<i class="fa-solid fa-bowl-rice"></i>', name: 'Pork BBQ + Rice', desc: 'Grilled pork skewer, steamed rice & atchara', price: 149, kcal: 650, img: 'images/rice_meal.png' },
    { emoji: '<i class="fa-solid fa-egg"></i>', name: 'Silog Meal', desc: 'Your choice of protein, garlic rice & egg', price: 129, kcal: 610, img: 'images/rice_meal.png' },
  ],
  Drinks: [
    { emoji: '<i class="fa-solid fa-glass-water"></i>', name: 'Large Cola', desc: 'Chilled Coca-Cola, large cup with ice', price: 69, kcal: 200, img: 'images/cola.png' },
    { emoji: '<i class="fa-solid fa-glass-water"></i>', name: 'Medium Cola', desc: 'Refreshing medium-sized Coke', price: 55, kcal: 150, img: 'images/cola.png' },
    { emoji: '<i class="fa-solid fa-glass-water"></i>', name: 'Chocolate Shake', desc: 'Thick, creamy chocolate milkshake', price: 95, kcal: 420, img: 'images/chocolate_shake.png' },
    { emoji: '<i class="fa-solid fa-glass-water"></i>', name: 'Lemonade Slush', desc: 'Tangy frozen lemonade, sweet & icy', price: 79, kcal: 180, img: 'images/lemonade.png' },
    { emoji: '<i class="fa-solid fa-mug-hot"></i>', name: 'Hot Coffee', desc: 'Freshly brewed arabica coffee', price: 65, kcal: 5, img: 'images/coffee.png' },
    { emoji: '<i class="fa-solid fa-glass-water"></i>', name: 'Orange Juice', desc: 'Fresh-squeezed orange juice, 350ml', price: 75, kcal: 140, img: 'images/lemonade.png' },
  ],
  Desserts: [
    { emoji: '<i class="fa-solid fa-ice-cream"></i>', name: 'Soft Serve Cone', desc: 'Classic creamy vanilla soft serve', price: 39, kcal: 200, img: 'images/chocolate_shake.png' },
    { emoji: '<i class="fa-solid fa-ice-cream"></i>', name: 'Hot Fudge Sundae', desc: 'Vanilla ice cream, rich hot fudge sauce', price: 75, kcal: 390, img: 'images/chocolate_shake.png' },
    { emoji: '<i class="fa-solid fa-cookie"></i>', name: 'Buko Pie Slice', desc: 'Flaky crust, tender young coconut filling', price: 65, kcal: 310, img: 'images/glazed_donut.png' },
    { emoji: '<i class="fa-solid fa-cookie"></i>', name: 'Glazed Donut x2', desc: 'Fluffy yeast donuts with sweet glaze', price: 55, kcal: 480, img: 'images/glazed_donut.png' },
    { emoji: '<i class="fa-solid fa-cake-candles"></i>', name: 'Birthday Cake Slice', desc: 'Vanilla sponge with sprinkles & cream', price: 89, kcal: 440, img: 'images/pancakes.png' },
  ],
  'Value Meals': [
    { emoji: '<i class="fa-solid fa-gift"></i>', name: 'QB Value Meal 1', desc: 'Cheeseburger + Small Fries + Medium Cola', price: 149, kcal: 820, img: 'images/qb_burger.png' },
    { emoji: '<i class="fa-solid fa-gift"></i>', name: 'QB Value Meal 2', desc: 'Chicken Strips + Large Fries + Large Cola', price: 219, kcal: 1050, img: 'images/fried_chicken.png' },
    { emoji: '<i class="fa-solid fa-gift"></i>', name: 'Family Feast', desc: '2 Burgers + 8-pc Chicken + 2 Large Fries + 4 Drinks', price: 799, kcal: 0, img: 'images/bbq_burger.png' },
    { emoji: '<i class="fa-solid fa-gift"></i>', name: 'Solo Meal Deal', desc: 'Smash Burger + Medium Fries + Medium Cola', price: 249, kcal: 960, img: 'images/smash_burger.png' },
  ],
  Breakfast: [
    { emoji: '<i class="fa-solid fa-egg"></i>', name: 'Pancake Platter', desc: '3 fluffy pancakes, butter & maple syrup', price: 109, kcal: 520, img: 'images/pancakes.png' },
    { emoji: '<i class="fa-solid fa-egg"></i>', name: 'Egg McMuffin', desc: 'Egg, Canadian bacon & cheese on toasted muffin', price: 99, kcal: 300, img: 'images/pancakes.png' },
    { emoji: '<i class="fa-solid fa-egg"></i>', name: 'Breakfast Burrito', desc: 'Scrambled eggs, sausage, cheese in tortilla', price: 119, kcal: 450, img: 'images/pancakes.png' },
    { emoji: '<i class="fa-solid fa-egg"></i>', name: 'Oatmeal Bowl', desc: 'Creamy oats with brown sugar & almonds', price: 79, kcal: 290, img: 'images/pancakes.png' },
    { emoji: '<i class="fa-solid fa-mug-hot"></i>', name: 'Breakfast Combo', desc: 'Pancakes + Egg + Coffee — start your day right', price: 169, kcal: 700, img: 'images/pancakes.png' },
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

function saveCart() {
  localStorage.setItem('qb_cart', JSON.stringify(cart));
}

function loadCart() {
  try {
    const saved = localStorage.getItem('qb_cart');
    if (saved) {
      cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (e) {
    console.warn("Failed to load saved cart:", e);
  }
}

// ── BOOT ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initUser();
  loadCart();
  updateClock();
  setInterval(updateClock, 1000);
  renderMenu();
});

// ── AUTH (localStorage-based with Supabase sync) ──────────
async function initUser() {
  const saved = lsGetUser();
  if (saved) {
    currentUser = saved;
    currentPoints = lsGetPoints();
    await fetchPoints();
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

  const showAdmin = (localStorage.getItem("role") === "admin" || localStorage.getItem("isAdmin") === "true");
  const adminBtn = showAdmin 
    ? `<button class="btn-admin-redirect" style="margin-right: 12px; background: var(--primary-gradient); color:#fff; font-family:'Outfit', sans-serif; font-size:0.9rem; font-weight:800; border:none; padding:10px 20px; border-radius:var(--radius-sm); cursor:pointer; box-shadow:0 4px 15px var(--primary-glow); text-transform:uppercase; transition:var(--transition);" onclick="window.location.href='admin.html'">Admin Panel</button>`
    : '';

  area.innerHTML = `
      ${adminBtn}
      <div class="user-chip" onclick="showProfileModal()" style="cursor:pointer" title="Click to view profile card">
        <div class="user-avatar">${initials}</div>
        <div class="user-info">
          <div class="user-name">${currentUser.username}</div>
          <div class="user-pts" id="user-pts-display"><i class="fa-solid fa-star" style="margin-right: 4px;"></i> ${currentPoints} pts</div>
        </div>
        <button class="topbar-logout-btn" onclick="event.stopPropagation(); logout()">Sign Out</button>
      </div>
    `;
}

// ── CUSTOM DYNAMIC PROFILE CARD MODAL ──
function showProfileModal() {
  if (!currentUser) return;

  // Calculate Loyalty Tiers and Progress Bar calculations
  let tier = 'Bronze Member <i class="fa-solid fa-medal" style="color:#cd7f32; margin-left:4px;"></i>';
  let tierColor = '#cd7f32';
  let nextTier = 'Silver Tier';
  let pointsNeeded = 100 - currentPoints;
  let progressPct = (currentPoints / 100) * 100;

  if (currentPoints >= 600) {
    tier = 'Platinum VIP <i class="fa-solid fa-crown" style="color:#e5e4e2; margin-left:4px;"></i>';
    tierColor = '#e5e4e2';
    nextTier = 'Ultimate Legend';
    pointsNeeded = 0;
    progressPct = 100;
  } else if (currentPoints >= 300) {
    tier = 'Gold Tier <i class="fa-solid fa-medal" style="color:#ffd700; margin-left:4px;"></i>';
    tierColor = '#ffd700';
    nextTier = 'Platinum VIP';
    pointsNeeded = 600 - currentPoints;
    progressPct = ((currentPoints - 300) / 300) * 100;
  } else if (currentPoints >= 100) {
    tier = 'Silver Tier <i class="fa-solid fa-medal" style="color:#c0c0c0; margin-left:4px;"></i>';
    tierColor = '#c0c0c0';
    nextTier = 'Gold Tier';
    pointsNeeded = 300 - currentPoints;
    progressPct = ((currentPoints - 100) / 200) * 100;
  }

  progressPct = Math.max(0, Math.min(100, progressPct));

  // Check if modal container exists
  let modal = document.getElementById('profile-modal-dynamic');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'profile-modal-dynamic';
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(9, 10, 15, 0.85);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(modal);
  }

  const initials = currentUser.username ? currentUser.username.slice(0, 2).toUpperCase() : 'QB';

  modal.innerHTML = `
    <div class="profile-card" style="
      background: rgba(22, 23, 30, 0.85);
      border: 1.5px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      width: 90%;
      max-width: 420px;
      padding: 40px 30px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      text-align: center;
      position: relative;
      transform: scale(0.9);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    ">
      <button onclick="closeProfileModal()" style="
        position: absolute;
        top: 20px; right: 20px;
        background: none; border: none;
        color: #94a3b8; font-size: 1.5rem;
        cursor: pointer; transition: color 0.2s;
      " onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a3b8'">✕</button>

      <div style="
        width: 80px; height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ffb703 0%, #fb8500 100%);
        display: flex; align-items: center; justify-content: center;
        font-size: 2.2rem; font-weight: 900; color: #0b0c10;
        margin: 0 auto 20px;
        box-shadow: 0 8px 25px rgba(255, 183, 3, 0.3);
      ">${initials}</div>

      <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.8rem; margin-bottom: 6px; color: #fff;">${currentUser.username}</h2>
      <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 24px;">${currentUser.email || 'kiosk-user@quickbite.com'}</p>

      <div style="
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 20px;
        margin-bottom: 24px;
        text-align: left;
      ">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="color: #94a3b8; font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">Loyalty Status</span>
          <span style="color: ${tierColor}; font-weight: 800; font-size: 0.95rem; text-shadow: 0 0 10px rgba(255,255,255,0.1);">${tier}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="color: #94a3b8; font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">Points Balance</span>
          <span style="color: #ffb703; font-weight: 800; font-size: 1.2rem;"><i class="fa-solid fa-star" style="margin-right: 4px;"></i> ${currentPoints} pts</span>
        </div>

        ${pointsNeeded > 0 ? `
          <div style="margin-top: 16px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #94a3b8; margin-bottom: 6px;">
              <span>Next Reward Status: <strong>${nextTier}</strong></span>
              <span>${pointsNeeded} pts left</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;">
              <div style="width: ${progressPct}%; height: 100%; background: linear-gradient(90deg, #ffb703, #fb8500); border-radius: 4px;"></div>
            </div>
          </div>
        ` : `
          <div style="margin-top: 16px; font-size: 0.85rem; color: #06d6a0; font-weight: 700; text-align: center;">
            <i class="fa-solid fa-crown" style="color: #ffd700; margin-right: 6px;"></i> You have reached maximum Loyalty Status!
          </div>
        `}
      </div>

      <button onclick="closeProfileModal()" style="
        background: linear-gradient(135deg, #ffb703 0%, #fb8500 100%);
        color: #0b0c10;
        border: none;
        border-radius: 12px;
        padding: 14px 28px;
        font-family: 'Outfit', sans-serif;
        font-size: 1.05rem;
        font-weight: 800;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 15px rgba(255, 183, 3, 0.3);
      " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">Done</button>
    </div>
  `;

  // Animate Open
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.querySelector('.profile-card').style.transform = 'scale(1)';
  }, 10);

  // Close on outer click
  modal.onclick = (e) => {
    if (e.target === modal) closeProfileModal();
  };
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal-dynamic');
  if (!modal) return;
  modal.style.opacity = '0';
  modal.querySelector('.profile-card').style.transform = 'scale(0.9)';
  setTimeout(() => {
    modal.remove();
  }, 300);
}

async function fetchPoints() {
  if (!currentUser) return;
  try {
    const response = await fetch(`/points/${currentUser.username}`);
    if (response.ok) {
      const data = await response.json();
      currentPoints = data.points || 0;
      lsSetPoints(currentPoints);
    } else {
      currentPoints = lsGetPoints();
    }
  } catch (e) {
    console.warn("Could not fetch points from backend, falling back to local storage:", e);
    currentPoints = lsGetPoints();
  }
  updatePointsDisplay(currentPoints);
  updateRedeemButton();
}

function updatePointsDisplay(pts) {
  const el = document.getElementById('user-pts-display');
  if (el) el.innerHTML = `<i class="fa-solid fa-star" style="margin-right: 4px;"></i> ${pts ?? currentPoints} pts`;
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

// ── POINTS (Supabase-synchronized with local fallback) ────
async function addPoints(pointsToAdd) {
  if (!currentUser) return 0;
  
  // Update local storage first for instant feedback
  currentPoints = lsGetPoints() + pointsToAdd;
  lsSetPoints(currentPoints);
  updatePointsDisplay(currentPoints);
  
  // Persist to backend Supabase
  try {
    const response = await fetch('/points/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: currentUser.username,
        points: pointsToAdd
      })
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        currentPoints = data.totalPoints;
        lsSetPoints(currentPoints);
        updatePointsDisplay(currentPoints);
      }
    }
  } catch (err) {
    console.error('Failed to sync added points to database:', err);
  }
  
  return currentPoints;
}

async function deductPoints(pointsToDeduct) {
  if (!currentUser) return 0;
  
  // Update local storage first
  currentPoints = Math.max(0, lsGetPoints() - pointsToDeduct);
  lsSetPoints(currentPoints);
  updatePointsDisplay(currentPoints);
  
  // Persist to backend Supabase (negative value)
  try {
    const response = await fetch('/points/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: currentUser.username,
        points: -pointsToDeduct
      })
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        currentPoints = data.totalPoints;
        lsSetPoints(currentPoints);
        updatePointsDisplay(currentPoints);
      }
    }
  } catch (err) {
    console.error('Failed to sync deducted points to database:', err);
  }
  
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
    showToast(`<i class="fa-solid fa-star" style="color:var(--secondary); margin-right:6px"></i> ${ptsToUse} pts redeemed! -₱${ptsToUse} off`);
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
      btn.innerHTML = `<i class="fa-solid fa-star" style="margin-right: 4px;"></i> Redeem Points (<span id="redeem-pts-available">${currentPoints}</span> pts)`;
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
    const mediaContent = item.img 
      ? `<img src="${item.img}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" />` 
      : item.emoji;
    grid.innerHTML += `
        <div class="item-card" onclick="addToCart('${item.name}', ${item.price})">
          <div class="item-img">
            ${mediaContent}
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
  saveCart();
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

// ── CHECKOUT (Supabase-integrated with offline fallback) ──
async function checkout() {
  if (!currentUser) {
    showToast('Please sign in first to place your order! Redirecting...');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const vat = subtotal * 0.12;
  const beforeDiscount = parseFloat((subtotal + vat).toFixed(2));
  const totalAmount = parseFloat(Math.max(0, beforeDiscount - pointsDiscount).toFixed(2));

  const btn = document.getElementById('checkout-btn');
  btn.disabled = true;
  btn.innerText = 'Placing Order...';

  try {
    let orderId = Math.floor(Math.random() * 90000) + 10000;

    // Send order to backend database
    try {
      const response = await fetch('/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: currentUser ? currentUser.username : 'Guest',
          customer_email: currentUser ? (currentUser.email || '') : '',
          items: cart,
          total: totalAmount,
          notes: '',
          order_type: dineMode ? dineMode.toLowerCase() : 'dine-in'
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.order && data.order.id) {
          orderId = data.order.id;
        }
      } else {
        console.warn('Backend order placement returned non-ok response, using offline fallback');
      }
    } catch (apiErr) {
      console.error('Failed to place order on backend, using offline fallback:', apiErr);
    }

    // Deduct redeemed points
    if (currentUser && pointsDiscount > 0) {
      await deductPoints(pointsDiscount);
    }

    let displayNum = orderId;
    const refContainer = document.getElementById('modal-ref');

    if (typeof orderId === 'string' && orderId.includes('-')) {
      // It's a UUID — generate a clean 3-digit kiosk order number
      let hash = 0;
      for (let i = 0; i < orderId.length; i++) {
        hash = orderId.charCodeAt(i) + ((hash << 5) - hash);
      }
      displayNum = 'QB-' + (Math.abs(hash % 900) + 100);

      if (refContainer) {
        refContainer.innerText = `ID: ${orderId}`;
        refContainer.style.display = 'block';
      }
    } else {
      if (refContainer) {
        refContainer.style.display = 'none';
      }
    }

    document.getElementById('modal-num').innerText = displayNum;

    if (currentUser) {
      const earned = Math.floor(totalAmount / 50);
      if (earned > 0) {
        await addPoints(earned);
      }
      await fetchPoints();
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
  saveCart();
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
  toast.innerHTML = msg;
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

  try {
    // Send reservation to backend database
    try {
      const response = await fetch('/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          date,
          time,
          guests: resSelectedGuests,
          occasion,
          notes
        })
      });
      if (!response.ok) {
        console.warn('Backend reservation returned non-ok status');
      }
    } catch (apiErr) {
      console.error('Failed to submit reservation to backend:', apiErr);
    }

    // Earn +5 pts for logged-in users
    if (currentUser) {
      await addPoints(5);
      await fetchPoints();
    }

    const resNum = 'RES-' + Math.floor(1000 + Math.random() * 9000);
    const d = new Date(date);
    const dStr = d.toLocaleDateString('en-PH', { weekday: 'short', month: 'short', day: 'numeric' });

    document.getElementById('res-confirm-num').textContent = resNum;
    document.getElementById('res-confirm-detail').textContent =
      `${dStr} · ${time} · ${resSelectedGuests} guest${resSelectedGuests === '1' ? '' : 's'}${occasion ? ' · ' + occasion : ''}`;

    document.getElementById('res-form-view').style.display = 'none';
    document.getElementById('res-success-view').style.display = 'block';

    showToast('Reservation confirmed! <i class="fa-solid fa-circle-check" style="color:var(--green); margin-left:6px"></i>');

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