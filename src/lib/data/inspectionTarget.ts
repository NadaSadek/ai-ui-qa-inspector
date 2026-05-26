import type { InspectionTarget } from "@/types/qa";

export const inspectionTarget: InspectionTarget = {
  id: "checkout-payment-error",
  screenName: "Checkout form",
  stateName: "Payment error state",
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
  screenshotSrc: "/screenshots/checkout-payment-error.png",
};
