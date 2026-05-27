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
    stateName: "Invalid password error",
    screenshotSrc: "/screenshots/login-unclear-error.png",
    domSnippet: `<form aria-label="Sign in">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" value="nada@example.com" />

  <label for="password">Password</label>
  <input id="password" name="password" type="password" />

  <p class="error">Something went wrong.</p>

  <button type="submit">Sign in</button>
</form>`,
  },
  {
    id: "settings-modal-focus-risk",
    screenName: "Settings modal",
    stateName: "Notification preferences",
    screenshotSrc: "/screenshots/settings-modal-focus-risk.png",
    domSnippet: `<div class="modal">
  <div class="modal-panel">
    <h2>Notification preferences</h2>
    <div class="close-control">×</div>

    <label><input type="checkbox" name="productUpdates" /> Product updates</label>
    <label><input type="checkbox" name="billingReminders" /> Billing reminders</label>
    <label><input type="checkbox" name="weeklySummary" /> Weekly summary</label>

    <button type="button">Cancel</button>
    <button type="submit">Save</button>
  </div>
</div>`,
  },
  {
    id: "pricing-mobile-hierarchy",
    screenName: "Pricing page",
    stateName: "Mobile plan comparison",
    screenshotSrc: "/screenshots/pricing-mobile-hierarchy.png",
    domSnippet: `<section aria-labelledby="pricing-heading">
  <h1 id="pricing-heading">Choose a plan</h1>

  <article class="plan-card">
    <h2>Starter</h2>
    <p>$19</p>
    <button>Select</button>
  </article>

  <article class="plan-card popular">
    <h2>Pro</h2>
    <p>$49</p>
    <span>Popular</span>
    <button>Select</button>
  </article>

  <article class="plan-card">
    <h2>Enterprise</h2>
    <p>Custom</p>
    <button>Select</button>
  </article>
</section>`,
  },
  {
    id: "empty-table-vague-cta",
    screenName: "Projects table",
    stateName: "Empty state",
    screenshotSrc: "/screenshots/empty-table-vague-cta.png",
    domSnippet: `<section aria-labelledby="projects-heading">
  <h1 id="projects-heading">Projects</h1>
  <button>Add</button>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Owner</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <div class="empty-state">
    <h2>No data</h2>
    <p>Try changing filters or add something.</p>
  </div>
</section>`,
  },
  {
    id: "search-filters-poor-labels",
    screenName: "Search filters",
    stateName: "Expanded filter panel",
    screenshotSrc: "/screenshots/search-filters-poor-labels.png",
    domSnippet: `<form aria-label="Customer search filters">
  <label for="query">Search</label>
  <input id="query" name="query" placeholder="Name, email, company" />

  <label for="type">Type</label>
  <select id="type" name="type">
    <option>Select</option>
  </select>

  <label for="from">From</label>
  <input id="from" name="from" placeholder="dd/mm/yyyy" />

  <label for="to">To</label>
  <input id="to" name="to" placeholder="dd/mm/yyyy" />

  <button type="submit">Apply filters</button>
</form>`,
  },
  {
    id: "toast-short-duration",
    screenName: "Save confirmation",
    stateName: "Success toast",
    screenshotSrc: "/screenshots/toast-short-duration.png",
    domSnippet: `<main>
  <form aria-label="Profile settings">
    <label for="display-name">Display name</label>
    <input id="display-name" name="displayName" value="Nada" />
    <button type="submit">Save</button>
  </form>

  <div class="toast success" data-duration="2500">
    <strong>Saved</strong>
    <p>Your changes were saved.</p>
  </div>
</main>`,
  },
  {
    id: "account-menu-non-semantic-trigger",
    screenName: "Account menu",
    stateName: "Dropdown open",
    screenshotSrc: "/screenshots/account-menu-non-semantic-trigger.png",
    domSnippet: `<header>
  <nav aria-label="Primary">
    <a href="/dashboard">Acme Analytics</a>

    <div class="account-trigger" onclick="toggleMenu()">
      <img src="/avatar.png" alt="" />
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
  },
  {
    id: "data-table-unclear-headers",
    screenName: "Data table",
    stateName: "Invoice list",
    screenshotSrc: "/screenshots/data-table-unclear-headers.png",
    domSnippet: `<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Status</td>
      <td>Amount</td>
      <td>Date</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Company 1</td>
      <td>Open</td>
      <td>$240</td>
      <td>Today</td>
    </tr>
    <tr>
      <td>Company 2</td>
      <td>Paid</td>
      <td>$1,240</td>
      <td>Yesterday</td>
    </tr>
    <tr>
      <td>Company 3</td>
      <td>Failed</td>
      <td>$89</td>
      <td>May 22</td>
    </tr>
  </tbody>
</table>`,
  },
  {
    id: "onboarding-stepper-low-contrast",
    screenName: "Onboarding stepper",
    stateName: "Team invite step",
    screenshotSrc: "/screenshots/onboarding-stepper-low-contrast.png",
    domSnippet: `<section aria-labelledby="setup-heading">
  <h1 id="setup-heading">Set up your workspace</h1>

  <ol class="stepper">
    <li class="complete">Account</li>
    <li class="current">Team</li>
    <li>Billing</li>
    <li>Finish</li>
  </ol>

  <h2>Invite your team</h2>
  <p>Add teammates to collaborate on projects.</p>
  <input placeholder="teammate@example.com" />
  <button>Continue</button>
</section>`,
  },
];
