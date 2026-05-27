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
  {
    id: "data-table-unclear-headers",
    screenName: "Invoice table",
    stateName: "Populated table",
    domSnippet: `<section>
  <h1>Invoices</h1>
  <p>Recent billing activity.</p>

  <table>
    <thead>
      <tr>
        <td>Customer</td>
        <td>Status</td>
        <td>Amount</td>
        <td>Date</td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Brightlane Analytics</td>
        <td>Open</td>
        <td>$240</td>
        <td>Today</td>
      </tr>
      <tr>
        <td>Cedarflow</td>
        <td>Paid</td>
        <td>$1,240</td>
        <td>Yesterday</td>
      </tr>
      <tr>
        <td>OrbitDesk</td>
        <td>Failed</td>
        <td>$89</td>
        <td>May 22</td>
      </tr>
    </tbody>
  </table>
</section>`,
    screenshotSrc: "/screenshots/data-table-unclear-headers.png",
  },
  {
    id: "settings-modal-focus-risk",
    screenName: "Settings modal",
    stateName: "Notification preferences open",
    domSnippet: `<section>
  <h1>Account settings</h1>
  <p>Manage notifications and workspace preferences.</p>

  <div class="modal-backdrop">
    <div class="modal-panel">
      <div>
        <h2>Notification preferences</h2>
        <p>Choose which updates you want to receive.</p>
      </div>

      <div class="close-control">×</div>

      <label>
        <input type="checkbox" name="productUpdates" />
        Product updates
      </label>

      <label>
        <input type="checkbox" name="billingReminders" />
        Billing reminders
      </label>

      <label>
        <input type="checkbox" name="weeklySummary" />
        Weekly summary
      </label>

      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </div>
  </div>
</section>`,
    screenshotSrc: "/screenshots/settings-modal-focus-risk.png",
  },
];
