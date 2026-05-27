import { notFound } from "next/navigation";
import { ToastShortDurationFixture } from "./ToastShortDurationFixture";
import { SearchFiltersPoorLabelsFixture } from "./SearchFiltersPoorLabelsFixture";
import { AccountMenuNonSemanticTriggerFixture } from "./AccountMenuNonSemanticTriggerFixture";
import { CheckoutPaymentErrorFixture } from "./CheckoutPaymentErrorFixture";
import { LoginUnclearErrorFixture } from "./LoginUnclearErrorFixture";
import { SettingsModalFocusRiskFixture } from "./SettingsModalFocusRiskFixture";
import { PricingMobileHierarchyFixture } from "./PricingMobileHierarchyFixture";
import { DataTableUnclearHeadersFixture } from "./DataTableUnclearHeadersFixture";
import { OnboardingStepperLowContrastFixture } from "./OnboardingStepperLowContrastFixture";
import { EmptyTableVagueCtaFixture } from "./EmptyTableVagueCtaFixture";

export const fixtureIds = [
  "checkout-payment-error",
  "login-unclear-error",
  "settings-modal-focus-risk",
  "pricing-mobile-hierarchy",
  "empty-table-vague-cta",
  "search-filters-poor-labels",
  "toast-short-duration",
  "account-menu-non-semantic-trigger",
  "data-table-unclear-headers",
  "onboarding-stepper-low-contrast",
] as const;

export type FixtureId = (typeof fixtureIds)[number];

export const FixtureScreen = ({ id }: { id: string }) => {
  switch (id) {
    case "checkout-payment-error":
      return <CheckoutPaymentErrorFixture />;
    case "login-unclear-error":
      return <LoginUnclearErrorFixture />;
    case "settings-modal-focus-risk":
      return <SettingsModalFocusRiskFixture />;
    case "pricing-mobile-hierarchy":
      return <PricingMobileHierarchyFixture />;
    case "empty-table-vague-cta":
      return <EmptyTableVagueCtaFixture />;
    case "search-filters-poor-labels":
      return <SearchFiltersPoorLabelsFixture />;
    case "toast-short-duration":
      return <ToastShortDurationFixture />;
    case "account-menu-non-semantic-trigger":
      return <AccountMenuNonSemanticTriggerFixture />;
    case "data-table-unclear-headers":
      return <DataTableUnclearHeadersFixture />;
    case "onboarding-stepper-low-contrast":
      return <OnboardingStepperLowContrastFixture />;
    default:
      notFound();
  }
};
