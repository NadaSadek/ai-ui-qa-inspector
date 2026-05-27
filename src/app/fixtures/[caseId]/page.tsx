import {
  FixtureScreen,
  fixtureIds,
} from "@/components/fixtures/FixtureScreen";

export function generateStaticParams() {
  return fixtureIds.map((caseId) => ({ caseId }));
}

export default async function FixturePage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;

  return <FixtureScreen id={caseId} />;
}