"use client";
import React, { useState } from "react";
import styles from "./Slider.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface SliderProps {
    images: StaticImageData[];
    height?: string | number;
}

const Slider: React.FC<SliderProps> = ({ images, height = "400px" }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + images.length) % images.length);
    const next = () => setCurrent((current + 1) % images.length);

    return (
        <div className={styles.slider} style={{ height }}>
            <div className={styles.navWrapperLeft}>
                <button className={styles.nav} onClick={prev} aria-label="Previous">
                    <MdArrowBack />
                </button>
            </div>
            <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((img, idx) => (
                    <div className={styles.slide} key={idx}>
                        <Image
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className={styles.image}
                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.navWrapperRight}>
                <button className={styles.nav} onClick={next} aria-label="Next">
                    <MdArrowForward />
                </button>
            </div>
            <div className={styles.dots}>
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${styles.dot} ${current === idx ? styles.active : ""}`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
