import Banner from "@/components/homepage/Banner";
import Cards from "@/components/homepage/Cards";
import Friends from "@/components/homepage/Friends";


export default function Home() {
  return (
    <div className="container mx-auto">
      
      <Banner></Banner>
      <Cards></Cards>
      <Friends></Friends>
    </div>
  );
}
