"use client";
import { useEffect } from "react";
import AOS from "aos";

const AOSInitializer = () => {
    useEffect(() => {
        AOS.init({

        });
    }, []);

    return null; // This component doesn't render anything, it just runs AOS
};

export default AOSInitializer;