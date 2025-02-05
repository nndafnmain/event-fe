import { RecommendedEvent } from "@/pages/events/RecommendedEvent";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";

export const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <RecommendedEvent />
    </main>
  );
};
