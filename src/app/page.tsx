import PText from "@/components/shared/PoppinText";
import RText from "@/components/shared/RighteousText";

export default function Home() {
  return (
    <main className="flex dark:bg-black min-h-screen flex-col items-center justify-between p-24">
      <RText className="text-6xl font-bold">Welcome to the RCA</RText>
      <PText className="text-2xl">The RCA is a community of people who love to ride bikes.</PText>
    </main>
  )
}
