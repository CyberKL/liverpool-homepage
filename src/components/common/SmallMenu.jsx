import React from "react";
import { Link } from "react-router-dom";

export default function SmallMenu({ Section, setSubMenuVisible }) {

    const data = {
        News: {
          NEWS: [
            ["All News", "/news"],
            ["Men", ""],
            ["Women", ""],
            ["Academy", ""],
            ["Club", ""],
            ["Media Watch", ""],
            ["Tickets", ""],
          ],
        },
        "Fixtures & Teams": {
          MENS: [
            ["Fixtures", ""],
            ["Results", ""],
            ["Tables", ""],
            ["Match Centre", ""],
            ["Players & Staff", ""],
            ["Stats", ""],
          ],
          WOMENS: [
            ["Fixtures", ""],
            ["Results", ""],
            ["Tables", ""],
            ["Match Centre", ""],
            ["Players & Staff", ""],
            ["Helens Stadium", ""],
          ],
          ACADEMY: [
            ["Players & Staff", ""],
            ["U18s Fixtures", ""],
            ["U18s Results", ""],
            ["U21s Fixtures", ""],
            ["U21s Results", ""],
          ],
        },
        "Tickets & Booking": {
          TICKETS: [
            ["Tickets Availability", ""],
            ["How To Buy Tickets", ""],
            ["Away Travel", ""],
            ["Accessibility", ""],
          ],
          "LFC WOMEN TICKETS": [
            ["LFC Women Season Tickets", ""],
            ["LFC Women Tickets Availability", ""],
          ],
          BOOKING: [
            ["Match Hospitality", ""],
            ["Meetings & Events", ""],
            ["Stadium Tours", ""],
            ["Concerts", ""],
            ["LFC Events", ""],
            ["Official Match Breaks Hospitality", ""],
          ],
        },
        Shop: {
          SHOP: [
            ["Online Store", ""],
            ["Club Store", ""],
            ["Soccer Schools", ""],
            ["Membership", ""],
            ["E-Academy", ""],
            ["Anfield Forever", ""],
            ["Programme & Magazine", ""],
            ["Wholesale Partners", ""],
          ],
          MENS: [
            ["Men's Home Kit", ""],
            ["Men's Away Kit", ""],
            ["Men's Third Kit", ""],
          ],
          SALE: [
            ["Men's Fashion", ""],
            ["Women's Fashion", ""],
            ["Kid's Fashion", ""],
          ],
        },
        Video: {
          VIDEO: [
            ["LFCTV GO", ""],
            ["Matches", ""],
            ["Players", ""],
            ["Browse", ""],
            ["Playlists", ""],
            ["Live", ""],
          ],
        },
        More: {
          ANFIELD: [
            ["Match Day", ""],
            ["Local Residents", ""],
            ["Champions Wall", ""],
            ["Disabled Supporters Association", ""],
            ["Supporter Liaison Officer", ""],
            ["Official Supporters Clubs", ""],
          ],
          CLUB: [
            ["Hillsborough", ""],
            ["Heysel", ""],
            ["Corporate Information", ""],
            ["Brand Protection", ""],
            ["Jobs at LFC", ""],
            ["The Red Way", ""],
            ["Red Together", ""],
            ["Anti-Slavery", ""],
            ["Partners", ""],
            ["Sustainability", ""],
            ["Club Charter", ""],
            ["Foundation", ""],
            ["Fan Engagement", ""],
            ["Club History", ""],
            ["Honours", ""],
          ],
          FANS: [
            ["MyLFC", ""],
            ["Safeguarding", ""],
            ["LFC Apps", ""],
            ["Competitions", ""],
            ["Message Boards", ""],
            ["Membership", ""],
            ["LFC Gaming", ""],
          ],
        },
      };


  return (
    <div className="mt-[15px]">
        <button className="uppercase flex items-center font-bold text-sm py-[15px] text-gray-600" onClick={() => setSubMenuVisible(false)}>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 rotate-180"><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
            back
        </button>
        <div className="mt-5">
            {Object.entries(data[Section]).map(([key, value], index) => (
                <div
                className={`space-y-5 ${index == 0 ? '' : 'border-t border-gray-300' } py-5`}
                key={key}
                >
                <p className="font-bold text-sm">{key}</p>
                <ul className="space-y-2">
                    {value.map((element) => (
                    <li className="" key={element[0]}>
                        <Link to={element[1]}>{element[0]}</Link>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
    </div>
  );
}
