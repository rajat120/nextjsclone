import Head from 'next/head'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import Largecard from '../Components/Largecard';
import Middlecard from '../Components/Middlecard';
import Smallcard from '../Components/Smallcard';

export default function Home({exportData,carddata}) {
  
  return (
    <div className="">
      <Head>
        <title> airbnb</title>
      </Head>
      
      <Header />
      <Banner/>
<main  className="max-w-7xl mx-auto px-8 sm:px-16">
  <section className="pt-6">
    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

  </section>



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{exportData.map(item=>
(
  <Smallcard key={item.distance} img={item.img} location={item.location} distance={item.distance}/>
)
  )}



</div>
<section>
  <h3 className="mt-5 mb-6">Live Anywhere</h3>
<div className="flex  space-x-4 overflow-scroll scrollbar-hide">
  {carddata.map(item=>(
   <Middlecard key ={item.title} img={item.img} title={item.title} className="rounded-xl"/>
  ))}
</div>
</section>
    <Largecard  img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="whishlists curated by airbnb" buttonText="Get Inspired"/> 
    </main>
    <Footer/>
    </div>
    
  )
  
}

export async function getStaticProps(){
  const exportData= await  fetch("https://links.papareact.com/pyp").then(res=> (res.json())
  );
  const carddata= await fetch("https://links.papareact.com/zp1").then(res=> res.json())
return {
  props:{
    exportData,
    carddata
  }
 
}

}

