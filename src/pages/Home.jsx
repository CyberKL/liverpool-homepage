import Ad from "../components/common/Ad";
import Navbar from "../components/common/Navbar";
import Headlines from "../components/layout/Headlines";
import Retail from "../components/layout/Retail";
import Fixtures from "../components/layout/Fixtures";
import MoreNews from "../components/layout/MoreNews";
import Women from "../components/layout/Women";
import Community from "../components/layout/Community";
import Trophies from "../components/layout/Trophies";
import Memory from "../components/layout/Memory";
import Footer from "../components/common/Footer";
import SmallNav from "../components/common/SmallNav";
import usePageTitle from "../hooks/usePageTitle";

import ad4 from "../assets/ad4.gif";
import ad from "../assets/ad.gif";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.gif";
import ad3j from "../assets/ad3.jpg";
import boxAd from "../assets/box-ad.gif";

export default function Home() {
  usePageTitle("Liverpool FC — Homepage");

  return (
    <div>
      <div className="flex justify-center bg-gray-100 px-10 py-5">
        <Ad Ad={ad4} Height={"sm:h-[6rem]"} />
      </div>
      <div className="bg-liverRed pt-12">
        <div className="px-20 z-40 sticky top-0 hidden xl:block">
          <Navbar />
        </div>
        <div className="sm:px-28 px-4 z-40 sticky top-0 block xl:hidden">
          <SmallNav />
        </div>
        <div className="space-y-10 bg-white mt-10">
          <div className="bg-liverRed pb-32">
            <Headlines />
          </div>
          <div>
            <Retail />
          </div>
          <div className="grid sm:grid-cols-2 justify-center bg-gray-100 p-16 gap-8">
            <Ad Ad={ad} />
            <Ad Ad={boxAd} />
          </div>
          <div>
            <Fixtures />
          </div>
          <div className="flex justify-center bg-gray-100 sm:p-16">
            <Ad Ad={ad2} />
          </div>
          <div>
            <MoreNews />
          </div>
          <div>
            <div className="grid sm:grid-cols-2 justify-center bg-gray-100 p-16 gap-8">
              <Ad Ad={ad3j} />
              <Ad Ad={ad3} />
            </div>
            <div className="bg-liverRed pb-24 pt-14">
              <Women />
            </div>
            <div className="bg-gray-100 pt-12 pb-24">
              <Community />
            </div>
          </div>
          <div>
            <Memory />
          </div>
          <div className="bg-gray-100">
            <Trophies />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
