import React from 'react'
import Header from '../../component/Header';
import MainCarousel from '../../component/Carousel/MainCarousel';
import CategoryCarousel from '../../component/Carousel/CategoryCarousel';
import SecoundCarousel from '../../component/Carousel/SecoundCarousel';
import DisCoverCard from '../../component/Cards/InFiniteCards/DisCoverCard';
import TopBard from '../../component/Cards/InFiniteCards/TopBard';
import AddCarousel from '../../component/Carousel/AddCarousel';
import PickUpCards from '../../component/Cards/PickUpCards';
import HotsaleCard from '../HotsaleCard';
import UptoOffer from '../UptoOffer';
import Recentlyviewed from '../Recentlyviewed';
import AddBanner from '../AddBanner';
import Fashion from '../Fashion';
import SecoundAdd from '../SecoundAdd';
import LatesDressCollections from '../LatesDressCollections';
import TopElectronicsBrands from '../TopElectronicsBrands';
import BestSale from '../BestSale';
import Footer from '../../component/Footer';
import Region from '../Region';
// import DiscoverNew from '../../component/DiscoverNew';
// import TopBards from '../../component/TopBards';

const Home = (props) => {
    const data = [
        // "https://img.freepik.com/free-vector/simple-geometric-seo-sessions-facebook-profile-cover_23-2149509971.jpg?w=1060&t=st=1700902676~exp=1700903276~hmac=03865644a8911aee500e261e3cb184df361a021fb507e206177982206a3ff4be",
        // "public/assets/Carousel/c2/Component 14.png",
        // "public/assets/Carousel/c2/Component 8.png",
        // "public/assets/Carousel/c2/Component 9.png",
        "https://t3.ftcdn.net/jpg/06/36/44/26/360_F_636442646_II8z4yhYbPoea8P6HoimUblo6ZQXzUXY.jpg",
        "https://blog.daraz.lk/wp-content/uploads/2021/05/laptop-banner.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/008/174/590/small/fashion-advertising-web-banner-illustration-vector.jpg"
        
    ];
    const Corousel = [
        "https://t3.ftcdn.net/jpg/06/36/44/26/360_F_636442646_II8z4yhYbPoea8P6HoimUblo6ZQXzUXY.jpg",
        "https://blog.daraz.lk/wp-content/uploads/2021/05/laptop-banner.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/008/174/590/small/fashion-advertising-web-banner-illustration-vector.jpg"
        // "public/assets/Carousel/c2/Component 12 (1).png",
        // "public/assets/Carousel/c2/Component 13.png",
        // "public/assets/Carousel/c2/Component 12 (1).png",
        // "public/assets/Carousel/c2/Component 12 (1).png",
        // "public/assets/Carousel/c2/Component 13.png",

    ];


    return (
        <>

            <section>
                <Header />
                <MainCarousel data={data} />
            </section>

            <section className="category-section w-full h-full grid grid-cols-12 gap-4 max-md:grid-cols-2 p-4 max-md:p-0 place-content-center">
                <div className="max-md:col-span-12 max-lg:col-span-5 md:col-span-5 text-black">
                    <div className="flex items-center justify-between p-16 pt-0 pb-0">
                        <h3 className="text-list text-lg font-semibold">Categories</h3>
                        <p className="text-list">View All</p>
                    </div>
                    <CategoryCarousel />
                </div>
                <div className="max-md:col-span-12 max-lg:col-span-7 md:col-span-7 mt-[4.6rem] max-md:mt-0 w-full">
                    <SecoundCarousel data={Corousel} />
                </div>
            </section>


            <section className='w-full h-full grid grid-cols-12 md:grid-cols-2  place-content-center md:px-5 gap-3'>
                <div className='max-sm:col-span-12 max-md:col-span-6 max-lg:col-span-6 max-xl:col-span-6'>
                    <DisCoverCard />
                </div>

                <div className='max-sm:col-span-12 max-md:col-span-6 max-lg:col-span-6 max-xl:col-span-6'>
                    <TopBard />
                </div>
            </section>


            <section className=''>
                <AddCarousel />
            </section>

            <section>
                <PickUpCards />
            </section>

            <section>
                <HotsaleCard />
            </section>
            <section className=''>
                <UptoOffer/>
            </section>
            <section className=''>
                <Recentlyviewed/>
            </section>
            <section>
                <AddBanner/>
            </section>
            <section>
                <Fashion/>
            </section>
            <div>
                <SecoundAdd/>
            </div>
            <section>
                <LatesDressCollections/>
            </section>
            {/* <section>
                <TopElectronicsBrands/>
            </section> */}
            {/* <section>
                <BestSale/>
            </section> */}
            <section>
                <Region/>
            </section>
            <footer>
                <Footer/>
            </footer>





        </>
    )
}

export default Home
