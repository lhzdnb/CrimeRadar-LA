import React, { useEffect, useState } from "react";
import Texty from "rc-texty";
import "./index.css";
import TweenOne from "rc-tween-one";

function Title() {
  const [show, setShow] = useState(true);
  const [animation, setAnimation] = useState({});
  const geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  };

  const getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: "-100%",
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: "-30%", duration: 150 };
    }
    return t;
  };

  const getSplit = (e) => {
    const t = e.split(" ");
    const c = [];
    t.forEach((str, i) => {
      c.push(<span key={`${str}-${i}`}>{str}</span>);
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const moveX = ((clientX - screenWidth / 2) / screenWidth) * 50;
      const moveY = ((clientY - screenHeight / 2) / screenHeight) * 50;

      setAnimation({
        title: {
          translateX: moveX,
          translateY: moveY,
        },
        content: {
          translateX: -moveX,
          translateY: -moveY,
        },
      });
    };

    // 在 4 秒后开始监听鼠标移动
    const timer = setTimeout(() => {
      window.addEventListener("mousemove", handleMouseMove);
    }, 4000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="combined-wrapper">
      {show && (
        <div className="combined">
          <div className="combined-shape">
            <div className="shape-left">
              <TweenOne
                animation={[
                  {
                    x: 200,
                    type: "from",
                    ease: "easeInOutQuint",
                    duration: 600,
                  },
                  {
                    x: -200,
                    ease: "easeInOutQuart",
                    duration: 450,
                    delay: -150,
                  },
                ]}
              />
            </div>
            <div className="shape-right">
              <TweenOne
                animation={[
                  {
                    x: -200,
                    type: "from",
                    ease: "easeInOutQuint",
                    duration: 600,
                  },
                  {
                    x: 200,
                    ease: "easeInOutQuart",
                    duration: 450,
                    delay: -150,
                  },
                ]}
              />
            </div>
          </div>
          <Texty
            className="title"
            type="mask-top"
            delay={400}
            enter={getEnter}
            interval={geInterval}
            component={TweenOne}
            componentProps={{
              animation: [
                { x: 130, type: "set" },
                { x: 100, delay: 500, duration: 450 },
                {
                  ease: "easeOutQuart",
                  duration: 300,
                  x: 0,
                },
                {
                  letterSpacing: 0,
                  delay: -300,
                  scale: 0.9,
                  ease: "easeInOutQuint",
                  duration: 1000,
                },
                {
                  scale: 1,
                  width: "100%",
                  delay: -300,
                  duration: 1000,
                  ease: "easeInOutQuint",
                },
              ],
              onMouseMove: null, // 清除原有的mousemove事件
              style: {
                transform: `translate(${animation.title?.translateX}px, ${animation.title?.translateY}px)`,
              },
            }}
          >
            CrimeRadar - LA
          </Texty>
          <TweenOne
            className="combined-bar"
            animation={{
              delay: 2000,
              width: 0,
              x: 158,
              type: "from",
              ease: "easeInOutExpo",
            }}
          />
          <Texty
            className="content"
            type="bottom"
            split={getSplit}
            delay={2200}
            interval={30}
            componentProps={{
              style: {
                transform: `translate(${animation.content?.translateX}px, ${animation.content?.translateY}px)`,
              },
            }}
          >
            Ensure safety and avoid hazardous areas
          </Texty>
        </div>
      )}
    </div>
  );
}

export default Title;
