import React from "react";
import Link from "next/link";

export default function Menu({ Section }) {
    const data = {
        "News": {"NEWS": ["All News", 'Men', 'Women', 'Academy', 'Club', 'Media Watch', 'Tickets']},
        "Fixtures & Teams":  {"MENS": ["Fixtures", 'Results', 'Tables', 'Match Centre', 'Players & Staff', 'Stats'], "WOMENS": ['Fixtures', 'Results', 'Tables', 'Match Centre', 'Players & Staff', 'Helens Stadium'], "ACADEMY": ['Players & Staff', 'U18s Fixtures', 'U18s Results', 'U21s Fixtures', 'U21s Results']},
        "Tickets & Booking": {"TICKETS": ['Tickets Availability', 'How To Buy Tickets', 'Away Travel', 'Accessibility'], "LFC WOMEN TICKETS": ['LFC Women Season Tickets', 'LFC Women Tickets Availability'], "BOOKING": ['Match Hospitality', 'Meetings & Events', 'Stadium Tours', 'Concerts', 'LFC Events', 'Official Match Breaks Hospitality']},
        "Shop": {"SHOP": ["Online Store", "Club Store", "Soccer Schools", "Membership", "E-Academy", "Anfield Forever", "Programme & Magazine", "Wholesale Partners"], "MENS": ["Men's Home Kit", "Men's Away Kit", "Men's Third Kit"], "SALE": ["Men's Fashion", "Women's Fashion", "Kid's Fashion"]},
        "Video": {"VIDEO": ['LFCTV GO', 'Matches', 'Players', 'Browse', 'Playlists', 'Live']},
        "More": {"ANFIELD": ['Match Day', 'Local Residents', 'Champions Wall', 'Disabled Supporters Association', 'Supporter Liaison Officer', 'Official Supporters Clubs'], "CLUB": ["Hillsborough", "Heysel", "Corporate Information", "Brand Protection", "Jobs at LFC", "The Red Way", "Red Together", "Anti-Slavery", "Partners", "Sustainability", "Club Charter", "Foundation", "Fan Engagement", "Club History", "Honours"], "FANS": ['MyLFC', 'Safeguarding', 'LFC Apps', 'Competitions', 'Message Boards', 'Membership', 'LFC Gaming']}
    }

  return (
    <div className="bg-white space-y-4 pt-6">
      <div>
        <div className="flex py-3 px-10">
          <div className={`py-3 grid w-full gap-x-56 text-nowrap ${Section === 'Shop' ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {Object.entries(data[Section]).map(([key, value]) => (
                    <div className={`space-y-5 ${key === 'SALE' ? 'col-start-2 -mt-32' : ''}`}>
                        <p className="font-bold text-sm">{key}</p>
                        <ul className="space-y-2">
                            {value.map(element => (
                                    <li>{element}</li>
                            ))}
                        </ul>
                    </div>
            ))}
          </div>
          <div className="ml-auto flex justify-end gap-5 w-full">
            {Section === "Shop" && (
              <div className="space-y-8 w-[21rem]">
                <div>
                  <img src="app.webp" alt="" className="" />
                </div>
                <div className="flex items-center gap-1">
                  <span>DOWNLOAD THE STORE APP</span>
                  <img src="arrow.svg" alt="" className="h-3" />
                </div>
                <hr />
              </div>
            )}
            <div className="bg-liverRed text-white space-y-8 py-6 px-4 w-min h-min" >
              <div className="space-y-5">
                <h2 className="font-bold text-nowrap text-sm">
                  JOIN MYLFC, YOUR FREE, OFFICIAL LFC ACCOUNT
                </h2>
                <p className="text-wrap text-lg leading-6">
                  Unlock new, exciting and exclusive benefits including videos,
                  match commentary, emagazine and more, all in one place.
                </p>
              </div>
              <div>
                <button className="flex items-center px-5 pb-4 bg-black w-full h-16 hover:bg-opacity-60">
                  REGISTER NOW
                  <img src="arrow.svg" alt="" className="filter invert h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {Section === "Shop" && (
          <div className="space-y-5 px-10">
            <p className="font-bold text-sm">WOMENS</p>
            <ul className="space-y-2">
              <li>Women's Home Kit</li>
              <li>Women's Away Kit</li>
              <li>Women's Third Kit</li>
            </ul>
          </div>
        )}
      </div>
      <hr />
      <div className="flex px-6 py-3">
        <div>
          <ul className="flex gap-3 text-sm">
            <li className="font-bold">HELP</li>
            <li>Help & FAQs</li>
            <li>Contact</li>
            <li>A - Z</li>
          </ul>
        </div>
        <div className="ml-auto flex gap-3">
        <Link href={''}>
            <img src="facebook.svg" alt="Facebook" className='h-8' />
        </Link>
        <Link href={''}>
            <img src="linkedin.svg" alt="LinkedIn" className='h-8' />
        </Link>
        <Link href={''}>
            <img src="tiktok.svg" alt="TikTok" className='h-8' />
        </Link>
        <Link href={''}>
            <img src="instagram.svg" alt="Instagram" className='h-8' />
        </Link>
        <Link href={''}>
            <img src="x.svg" alt="X" className='h-8' />
        </Link>
        <Link href={''}>
            <img src="youtube.svg" alt="YouTube" className='h-8' />
        </Link>
        <Link href={''}>
            <img src="onefootball.svg" alt="OneFootball" className='h-8' />
        </Link>
        </div>
      </div>
    </div>
  );
}
