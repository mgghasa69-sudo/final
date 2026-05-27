# QuickBite — Full-Stack Kiosk Ordering & Reservation System

A robust, high-fidelity full-stack web application designed for managing customer self-service food orders, secure user registrations, table bookings, and staff administration. Built using a modern JavaScript stack with Node.js and Express on the backend, a high-performance Vanilla HTML5/CSS3/JS frontend optimized for in-store kiosk layouts, and backed by a relational PostgreSQL database management system.

---

## Key Features & Visual Layout

> [!TIP]
> **Premium Dark Aesthetics**: The frontend features a state-of-the-art dark mode UI built on top of linear gradient accents (`#ff5e62` to `#ff2a2a` and `#ffb703` to `#fb8500`), glassmorphic panels, and smooth CSS keyframe transition layouts for a truly responsive, premium tactile feel.

*   **Self-Service Ordering Kiosk**: An interactive digital menu allowing users to toggle categories (Burgers, Chicken, Fries, Rice Meals, Beverages, Desserts, Value Meals, Breakfast) and compile orders dynamically in a persistent local cart with automatic VAT (12%) calculation and receipt modal popups.
*   **Clickable Profile & Loyalty Card**: An elegant profile card modal displaying user credentials and their computed **Loyalty Tier** (Bronze 🥉 ➔ Silver 🥈 ➔ Gold 🥇 ➔ Platinum VIP 👑) with an interactive progress bar indicating the exact points needed to reach the next VIP membership tier.
*   **Granular Role-Based Access Control (RBAC)**: Custom client-side and server-side route guards that distinguish between customers and staff. Customers can place bookings and earn points, while staff members use a protected Admin Dashboard to review real-time revenue analytics, update order statuses, and delete bookings.
*   **Dual Offline Resilience Strategy**: Built with a fail-safe client-server state synchronization protocol. If the remote database is offline or connection drops, the entire backend dynamically switches to offline fallback simulation mode (using generated mock receipt numbers, simulated points deductions, and localStorage cached sessions) keeping the frontend operational at all times.

---

## Tech Stack & Architecture

### 🖥️ Frontend
*   **Structure & Logic**: HTML5, Vanilla JavaScript (ES6+ modular workflow)
*   **Styling System**: CSS3 with modern Google Fonts (`Outfit`, `Plus Jakarta Sans`), glassmorphism, responsive grid containers, and custom micro-animations.
*   **State Management**: LocalStorage-backed state synchronization, session trackers, and dynamic receipt modals.

### ⚙️ Backend
*   **Runtime Environment**: Node.js
*   **Web Framework**: Express.js (v5 workflow)
*   **Authentication & Cryptography**: `bcryptjs` for secure password hashing, `cookie-parser` & `jsonwebtoken` (JWT) for secure HTTP-only session cookie management, and CORS protocols for dev-to-prod environment matching.

### 🗄️ Database
*   **Relational Engine**: PostgreSQL (pg pool client connection pooling)
*   **Database Cloud Host**: Supabase DB
*   **Production Handshakes**: Configured with dynamic, environment-based SSL connection parameters (`rejectUnauthorized: false`) optimized for secure serverless execution environments like Vercel.

---

## Core Security & Access Control

### Client-Side Access Guarding
Utilizes active session revalidation checking. If a non-administrative account attempts to gain entry to the `/admin.html` dashboard, their authentication token criteria are evaluated as invalid, neutralizing the unauthorized request and instantly rerouting them back to a safe zone (`/login.html`).

### Server-Side API Middleware Guarding
Protects all transactional and analytical database endpoints. Before any database query executes:
1.  **`verifyToken` Middleware**: Automatically parses HTTP-only cookie payloads, bearer authorization headers, and signed cookies to authenticate user sessions.
2.  **`requireAdmin` Middleware**: Evaluates the decoded session payload role. Any API request lacking `'admin'` status is immediately rejected with a `403 Forbidden` response, safeguarding sensitive database tables from manipulation.

---

## Local Development & Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/mgghasa69-sudo/final.git
    cd final
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    cd backend
    npm install
    cd ..
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file inside the `backend` folder and populate your credentials:
    ```env
    PORT=5000
    DATABASE_URL=your_postgresql_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Run Locally (with live-reload nodemon)**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5000` in your web browser.
