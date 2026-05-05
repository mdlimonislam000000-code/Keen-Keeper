import Banner from "@/components/homepage/Banner";
import Cards from "@/components/homepage/Cards";
import Friends from "@/components/homepage/Friends";
import { Suspense } from "react";
import LoadingPage from "./loading/page";


export default function Home() {
  return (
    <div className="container mx-auto">

      <Banner></Banner>
      <Cards></Cards>
      <Suspense fallback={<LoadingPage></LoadingPage>}>
        <Friends></Friends>
      </Suspense>

    </div>
  );
}
