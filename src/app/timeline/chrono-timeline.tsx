"use client";
import { useApp } from "@/contexts/AppProvider";
import React from "react";
import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { createPortal } from "react-dom";

const ChronoTimeline = () => {
  const { isDarkTheme } = useApp();
  const items: TimelineItemModel[] = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      //   media: {
      //     type: "IMAGE",
      //     source: {
      //       url: "http://someurl/image.jpg",
      //     },
      //   },
    },
  ];

  return (
    <div style={{ width: "100%", height: "600px" }}>
      {/* {createPortal( */}
      <Chrono
        slideShow
        items={[...items, ...items, ...items, ...items, ...items, ...items]}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: isDarkTheme ? "white" : "black",
          secondary: isDarkTheme ? "white" : "black",
          cardBgColor: isDarkTheme ? "black" : "white",
          titleColor: isDarkTheme ? "white" : "black",
          titleColorActive: isDarkTheme ? "black" : "white",
          cardTitleColor: isDarkTheme ? "white" : "black",
        }}
        classNames={{
          cardTitle: "hidden",
          cardSubTitle: "timeDetail",
        }}
      />
      ,
      {/* document.querySelector("html") as Element
      )} */}
    </div>
  );
};

export default ChronoTimeline;
