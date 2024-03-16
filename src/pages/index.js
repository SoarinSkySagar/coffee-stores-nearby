import { Inter } from "next/font/google";
import Banner from "@/components/banner";
import Image from "next/image";
import Card from "@/components/card";
import coffeeStoresData from "../../public/data/coffee-stores.json"
import { fetchRestaurants } from "@/lib/restaurants";

export async function getStaticProps(context) {

  const results = await fetchRestaurants()

  return {
    props: {coffeeStores: results}
  }
}

export default function Home(props) {

  const handleOnBannerButtonClick = ()=> {
    console.log("Button clicked!")
  }

  return (
    <div>
      <main className="p-32 h-screen">
        
        <div className="flex flex-col mb-32">
          <Banner buttonText="View restaurants nearby" handleOnClick={handleOnBannerButtonClick}/>
          <Image src="/static/hero-image.png" alt="hero image" width={800} height={600} className="absolute mt-0 right-40"/>
        </div>
        
        {props.coffeeStores.length === 0 ? <p className="text-5xl text-blue-700 font-semibold ml-6 mb-6">No coffee stores found</p> : <h2 className="text-5xl text-blue-700 font-semibold ml-6 mb-6">Kolkata Restaurants</h2>}
        <div className="flex flex-wrap">
          {props.coffeeStores.map((store) => (
            <Card key={store.fsq_id} name={store.name} image={store.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} href={`/restaurant/${store.fsq_id}`} />
          ))}
        </div>
      </main>
    </div>
  );
}
