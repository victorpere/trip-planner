import React, { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import styles from "./HorizontalList.module.css";

type Props = {
  children: JSX.Element[];
};

const HorizontalList = (props: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const crop = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const platter = useRef<HTMLDivElement>(null);
  const [scrollerHeight, setScrollerHeight] = useState<number>(0);
  const [scrollArrowRight, setScrollArrowRight] = useState<number>(0);
  const [scrollArrowLeft, setScrollArrowLeft] = useState<number>(0);

  const scrollClickHandler = (direction: number) => {
    if (content.current) {
      content.current.scrollBy({ left: direction, behavior: "smooth" });
    }
  };

  const setArrowVisibility = () => {
    if (content.current && platter.current) {
      if (
        platter.current.scrollWidth >
        platter.current.offsetWidth + content.current.scrollLeft
      ) {
        setScrollArrowRight(0.5);
      } else {
        setScrollArrowRight(0);
      }

      if (content.current.scrollLeft > 0) {
        setScrollArrowLeft(0.5);
      } else {
        setScrollArrowLeft(0);
      }
    }
  };

  useEffect(() => {
    setArrowVisibility();
  }, [props.children]);

  useEffect(() => {
    if (platter.current) {
      setScrollerHeight(platter.current.offsetHeight);
    }

    if (content.current) {
      let contentRef = content.current;
      contentRef.addEventListener("scroll", setArrowVisibility, {
        passive: true,
      });

      return () => {
        contentRef.removeEventListener("scroll", setArrowVisibility);
      };
    }
  }, []);

  return (
    <div ref={container} className={styles["scroller-container"]}>
      <div
        ref={crop}
        className={styles["scroller-crop"]}
        style={{ height: scrollerHeight }}
      >
        <div ref={content} className={styles["scroller-content"]}>
          <div ref={platter} className={styles["scroller-platter"]}>
            {props.children.map((child, index) => (
              <div key={index} className={styles["scroller-item"]}>
                <div className={styles["scroller-item-view"]}>
                  <div className={styles["scroller-item-content"]}>{child}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${styles["scroller-nav"]} ${styles["scroller-nav-left"]}`}
        style={{ top: scrollerHeight / 2 }}
      >
        <button
          className={styles["scroller-button"]}
          style={{ opacity: scrollArrowLeft }}
          onClick={() => scrollClickHandler(-1)}
        >
          <IoIosArrowDropleftCircle />
        </button>
      </div>
      <div
        className={`${styles["scroller-nav"]} ${styles["scroller-nav-right"]}`}
        style={{ top: scrollerHeight / 2 }}
      >
        <button
          className={styles["scroller-button"]}
          style={{ opacity: scrollArrowRight }}
          onClick={() => scrollClickHandler(1)}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};

export default HorizontalList;
