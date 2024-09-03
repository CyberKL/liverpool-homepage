import React, { useState, useEffect, useRef } from "react";
import lfcDiary from "../../assets/lfc-diary-010824.webp";
import HeadlinePost from "../common/HeadlinePost";

export default function MoreNews() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const [matches, setMatches] = useState(false);
  const [position, setPosition] = useState("");
  const previousScrollTop = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleWheel = (event) => {
    event.preventDefault(); // Prevent default scrolling
    scrollRef.current.scrollBy({
      top: event.deltaY, // Scroll by the amount of wheel movement
      behavior: "smooth",
    });
    if (position)
    {
      if (scrollRef.current.scrollTop === 0)
        {
          document.documentElement.scrollBy({
            top:event.deltaY,
            behavior: "smooth"
          })
          setPosition("top") 
        } 
      else if (scrollRef.current.scrollTop === 454) 
        {
          document.documentElement.scrollBy({
            top:event.deltaY,
            behavior: "smooth"
          })
          setPosition("bottom")
  
        }
    }
  };

  const handlePageScroll = () => {
    const currentScrollTop = document.documentElement.scrollTop;

    if (
      (position === "top" && currentScrollTop > previousScrollTop.current) ||
      (position === "bottom" && currentScrollTop < previousScrollTop.current)
    ) {
      scrollRef.current.focus(); // Focus the scrollable container
      document.body.style.overflow = "hidden"; // Prevent background scrolling

      document.addEventListener("wheel", handleWheel, { passive: false });
    }

    previousScrollTop.current = currentScrollTop;
  };
  useEffect(() => {
    if (matches && isVisible && scrollRef.current) {
      if (!position) {
        scrollRef.current.focus(); // Focus the scrollable container
        document.body.style.overflow = "hidden"; // Prevent background scrolling

        document.addEventListener("wheel", handleWheel, { passive: false });
      } else {
        document.body.style.overflow = ""; // Restore default overflow
        document.removeEventListener("wheel", handleWheel);
        document.addEventListener("scroll", handlePageScroll);
      }

      return () => {
        document.body.style.overflow = ""; // Restore default overflow
        document.removeEventListener("wheel", handleWheel);
        document.removeEventListener("scroll", handlePageScroll);
      };
    }
  }, [isVisible, position]);

  const handleScroll = () => {
    if (matches && scrollRef.current) {
      const isAtTop = scrollRef.current.scrollTop === 0;
      const isAtBottom =
        scrollRef.current.scrollHeight - scrollRef.current.scrollTop ===
        scrollRef.current.clientHeight;

      if (isAtTop) setPosition("top");
      else if (isAtBottom) setPosition("bottom");
      else setPosition("");
    }
  };

  return (
    <div className="px-4 py-20 sm:px-0" ref={ref}>
      <div className="flex flex-col items-center sm:relative">
        <div className="sm:space-y-8 w-full sm:w-auto">
          <div className="py-2 px-5 bg-black text-sm font-bold text-white dark:bg-white dark:text-black w-fit rounded-3xl">
            <span>MORE NEWS</span>
          </div>
          <div className="hover:bg-black hover:bg-opacity-10 transition ease-in duration-200 sm:w-[70rem] w-full p-3 space-y-10 dark:text-white">
            <div className="w-3/4">
              <h3 className="sm:text-4xl text-2xl text-wrap">
                <span className="text-lg font-bold mr-2">TOUR</span>
                <span>
                  USA diary: Sightseeing, training with a difference and a
                  debate about ironing
                </span>
              </h3>
              <span className="text-xs">16 HOURS AGO</span>
            </div>
            <div>
              <img
                src={lfcDiary}
                alt=""
                className="sm:w-[70rem] sm:h-[70rem] w-full h-[25rem]"
              />
            </div>
          </div>

          <div
            className="border-t border-gray-400 sm:border-0 pt-5 sm:pt-3 sm:absolute sm:top-0 sm:right-0 sm:w-3/12 sm:h-full w-full sm:overflow-x-hidden overflow-x-scroll sm:overflow-y-hidden focus-within:outline-none"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <div className="sm:relative">
              <div className="sm:bg-white sm:dark:bg-gray-900 sm:absolute sm:top-[35rem] flex sm:flex-col w-full">
                <HeadlinePost
                  dark={true}
                  Width="w-[75vw] sm:w-auto"
                  ShowImage={matches}
                />
                <div className="border-l border-gray-400 min-h-full sm:hidden"></div>
                <HeadlinePost
                  dark={true}
                  Width="w-[75vw] sm:w-auto"
                  ShowImage={matches}
                />
                <div className="border-l border-gray-400 min-h-full sm:hidden"></div>
                <HeadlinePost
                  dark={true}
                  Width="w-[75vw] sm:w-auto"
                  ShowImage={matches}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
