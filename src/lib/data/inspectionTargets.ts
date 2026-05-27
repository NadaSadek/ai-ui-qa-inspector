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
  {
    id: "pricing-mobile-hierarchy",
    screenName: "Pricing page",
    stateName: "Mobile plan comparison",
    domSnippet: `<section>
  <h1>Choose a plan</h1>
  <p>Upgrade anytime.</p>

  <article class="plan-card">
    <h2>Starter</h2>
    <p>$19</p>
    <p>Good for trying the product</p>
    <button>Select</button>
  </article>

  <article class="plan-card">
    <h2>Pro</h2>
    <span>Popular</span>
    <p>$49</p>
    <p>For growing teams</p>
    <button>Select</button>
  </article>

  <article class="plan-card">
    <h2>Enterprise</h2>
    <p>Custom</p>
    <p>Advanced controls</p>
    <button>Select</button>
  </article>
</section>`,
    screenshotSrc: "/screenshots/pricing-mobile-hierarchy.png",
  },
  {
    id: "empty-table-vague-cta",
    screenName: "Projects table",
    stateName: "Empty state",
    domSnippet: `<section>
  <h1>Projects</h1>
  <p>Track active implementation work.</p>

  <button type="button">Add</button>

  <div class="table">
    <div class="table-header">
      <span>Name</span>
      <span>Owner</span>
      <span>Status</span>
    </div>

    <div class="empty-state">
      <h2>No data</h2>
      <p>Try changing filters or add something.</p>
    </div>
  </div>
</section>`,
    screenshotSrc: "/screenshots/empty-table-vague-cta.png",
  },
  {
    id: "search-filters-poor-labels",
    screenName: "Search filters",
    stateName: "Expanded filter panel",
    domSnippet: `<form aria-label="Customer search filters">
  <label for="query">Search</label>
  <input
    id="query"
    name="query"
    placeholder="Name, email, company"
  />

  <label for="type">Type</label>
  <select id="type" name="type">
    <option value="" disabled>Select</option>
    <option value="customer">Customer</option>
    <option value="trial">Trial</option>
    <option value="enterprise">Enterprise</option>
  </select>

  <label for="from">From</label>
  <input
    id="from"
    name="from"
    placeholder="dd/mm/yyyy"
  />

  <label for="to">To</label>
  <input
    id="to"
    name="to"
    placeholder="dd/mm/yyyy"
  />

  <button type="submit">Apply filters</button>
</form>`,
    screenshotSrc: "/screenshots/search-filters-poor-labels.png",
  },
];
