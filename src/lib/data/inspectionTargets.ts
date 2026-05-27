import type { InspectionTarget } from "@/types/qa";

export const inspectionTargets: InspectionTarget[] = [
  {
    id: "checkout-payment-error",
    screenName: "Checkout form",
    stateName: "Payment error state",
    screenshotSrc: "/screenshots/checkout-payment-error.png",
    domSnippet: `<form aria-label="Payment form">
  <input
    id="card-number"
    name="cardNumber"
    placeholder="Card number"
    autocomplete="cc-number"
  />

  <p class="error">Payment failed. Try again.</p>

  <button type="submit">Pay now</button>
</form>`,
  },
  {
    id: "login-unclear-error",
    screenName: "Login form",
    stateName: "Invalid credentials error",
    domSnippet: `<form aria-label="Sign in">
  <h1>Welcome back</h1>
  <p>Sign in to continue.</p>

  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    type="email"
    value="nada@example.com"
  />

  <label for="password">Password</label>
  <input
    id="password"
    name="password"
    type="password"
  />

  <p class="error">Something went wrong.</p>

  <button type="submit">Sign in</button>
</form>`,
    screenshotSrc: "/screenshots/login-unclear-error.png",
  },
  {
    id: "account-menu-non-semantic-trigger",
    screenName: "Account menu",
    stateName: "Dropdown open",
    domSnippet: `<header>
  <nav aria-label="Primary">
    <a href="/dashboard">North Analytics</a>

    <div class="account-trigger">
      <span class="avatar">NS</span>
      <span>Nada Sadek</span>
      <span>⌄</span>
    </div>

    <div class="menu">
      <div>Profile</div>
      <div>Billing</div>
      <div>Sign out</div>
    </div>
  </nav>
</header>`,
    screenshotSrc: "/screenshots/account-menu-non-semantic-trigger.png",
  },
];
