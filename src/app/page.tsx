import MainAppLayout from "@/components/layouts/MainAppLayout";
import PText from "@/components/shared/PoppinText";
import RText from "@/components/shared/RighteousText";

export default function Home() {
  return (
    <MainAppLayout>
      <RText className="text-6xl font-bold">Welcome to the RCA</RText>
      <PText className="text-2xl">
        The RCA is a community of people who love to ride bikes.
      </PText>
    </MainAppLayout>
  );
}
