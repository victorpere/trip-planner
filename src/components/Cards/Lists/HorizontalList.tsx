import React, { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import styles from "./HorizontalList.module.css";
import { ListProps } from "./props.type";

const HorizontalList = (props: ListProps) => {
  const container = useRef<HTMLDivElement>(null);
  const crop = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const platter = useRef<HTMLDivElement>(null);
  const [scrollerHeight, setScrollerHeight] = useState<number>(0);
  const [scrollArrowRightVisible, setScrollArrowRightVisible] =
    useState<boolean>(false);
  const [scrollArrowLeftVisible, setScrollArrowLeftVisible] =
    useState<boolean>(false);

  const scrollClickHandler = (direction: number) => {
    if (content.current) {
      content.current.scrollBy({ left: direction, behavior: "smooth" });
    }
  };

  const setScrollArrowVisibility = () => {
    if (content.current && platter.current) {
      setScrollArrowRightVisible(
        platter.current.scrollWidth >
          platter.current.offsetWidth + content.current.scrollLeft
      );

      setScrollArrowLeftVisible(content.current.scrollLeft > 0);
    }
  };

  useEffect(() => {
    setScrollArrowVisibility();
  }, [props.children]);

  useEffect(() => {
    if (platter.current) {
      setScrollerHeight(platter.current.offsetHeight);
    }

    if (content.current) {
      let contentRef = content.current;
      contentRef.addEventListener("scroll", setScrollArrowVisibility, {
        passive: true,
      });

      return () => {
        contentRef.removeEventListener("scroll", setScrollArrowVisibility);
      };
    }
  }, []);

  return (
    <div ref={container} className={styles["scroller-container"]}>
      <div ref={crop} className={styles["scroller-crop"]}>
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
          className={`${styles["scroller-button"]} ${scrollArrowLeftVisible && styles["visible"]}`}
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
          className={`${styles["scroller-button"]} ${scrollArrowRightVisible && styles["visible"]}`}
          onClick={() => scrollClickHandler(1)}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};

export default HorizontalList;
