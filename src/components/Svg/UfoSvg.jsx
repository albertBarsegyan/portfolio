import gsap, { TimelineMax, Power3, Elastic } from 'gsap';
import React, { useRef, useEffect } from 'react';
import { st0, st1, st2, st3, st4 } from './svgStyle.css';

gsap.registerPlugin(TimelineMax);

const UfoSvg = () => {
  const alienFaceRef = useRef(null);
  const mainRef = useRef(null);
  const ufo = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const forthRef = useRef(null);

  function animation() {
    // Under ufo animation
    const underUfo = new TimelineMax({
      repeat: -1,
      repeatDelay: 0.5,
      duration: 1,
      yoyo: true,
    });
    underUfo.to(firstRef.current, { autoAlpha: 1 });
    underUfo.to(secondRef.current, { autoAlpha: 1 });
    underUfo.to(thirdRef.current, { autoAlpha: 1 });
    underUfo.to(forthRef.current, { autoAlpha: 1 });

    // Ufo animation
    gsap.to(ufo.current, {
      x: -20,
      y: -5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.4,
      ease: Elastic.easeOut(1, 0.3),
    });
    gsap.to(alienFaceRef.current, {
      x: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.4,
      ease: Power3.easeOut(1, 0.3),
    });
    gsap.to(mainRef.current, { autoAlpha: 0, delay: 5 });
  }
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-8">
          <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 800.4 657.3"
            style={{ enableBackground: 'new 0 0 800.4 657.3' }}
            xmlSpace="preserve"
            ref={mainRef}
          >
            <g ref={alienFaceRef}>
              <path
                className={st2}
                d="M376.6,102.3c2.1-2.5,10.1,0.4,14.5,5.5c2.1,2.5,5.6,7.9,3.7,11.2c-1.3,2.3-4.9,2.6-7.2,2.2
		C379.2,119.5,373.8,105.5,376.6,102.3z"
              />
              <path
                className={st2}
                d="M404.9,109.5c2.2-3.9,5.4-5.6,6.8-6.4c2.2-1.2,6.8-3.6,10.1-1.3c1.3,1,2.2,2.6,2.4,4.3
		c0.3,2.8-1.5,4.9-3.3,6.8c-3.8,4.3-8.3,5.6-9.7,6c-2.7,0.7-6.5,1.6-8.1-0.4C401.2,116,404.4,110.5,404.9,109.5z"
              />
              <path
                className={st2}
                d="M369.7,100.1c-1.4-9.5-3.4-23.3,4.8-35.1c1.2-1.7,9.1-12.6,22.6-13.8c16.3-1.4,26.8,12.6,28.3,14.6
		c8.5,11.7,7.2,25.1,6.4,34.2c-0.4,5.1-2.4,27.7-19.4,40.3c-4.3,3.3-8.4,6.3-13.8,6C383.3,145.7,372.4,118.6,369.7,100.1z"
              />
              <path
                className={st3}
                d="M390.2,131c0.7,0.8,4.1,4.1,9.4,4.3c6.1,0.1,9.9-4.2,10.5-4.9"
              />
            </g>
            <g ref={ufo}>
              <ellipse className={st0} cx="124.6" cy="217" rx="14" ry="11.7" />
              <ellipse
                className={st0}
                cx="186.4"
                cy="223.6"
                rx="17.3"
                ry="12.2"
              />
              <ellipse
                className={st0}
                cx="247.7"
                cy="228.7"
                rx="17.3"
                ry="12.2"
              />
              <ellipse
                className={st0}
                cx="307.5"
                cy="233"
                rx="17.3"
                ry="12.2"
              />
              <ellipse
                className={st0}
                cx="364.8"
                cy="233.4"
                rx="17.3"
                ry="12.2"
              />
              <ellipse
                className={st0}
                cx="421.5"
                cy="233"
                rx="17.2"
                ry="12.2"
              />
              <ellipse className={st0} cx="478" cy="233" rx="17.2" ry="12.2" />
              <ellipse
                className={st0}
                cx="533.1"
                cy="229.1"
                rx="17.2"
                ry="12.2"
              />
              <ellipse
                className={st0}
                cx="582.8"
                cy="224.4"
                rx="17.2"
                ry="12.2"
              />
              <ellipse
                className={st0}
                cx="633.7"
                cy="220.8"
                rx="17.2"
                ry="12.2"
              />
              <ellipse
                className={st0}
                cx="683.8"
                cy="218.9"
                rx="17.2"
                ry="12.2"
              />

              <ellipse
                transform="matrix(0.8183 -0.5748 0.5748 0.8183 -101.3487 112.1421)"
                className={st1}
                cx="126.7"
                cy="216.4"
                rx="2.6"
                ry="5.8"
              />

              <ellipse
                transform="matrix(0.7573 -0.6531 0.6531 0.7573 -100.3555 175.904)"
                className={st1}
                cx="186.5"
                cy="223"
                rx="2.5"
                ry="5.3"
              />

              <ellipse
                transform="matrix(0.7573 -0.6531 0.6531 0.7573 -89.0377 217.1859)"
                className={st1}
                cx="247.7"
                cy="228.4"
                rx="2.5"
                ry="5.5"
              />

              <ellipse
                transform="matrix(0.7573 -0.6531 0.6531 0.7573 -77.6961 257.4329)"
                className={st1}
                cx="307.5"
                cy="233.2"
                rx="2.5"
                ry="5.5"
              />

              <ellipse
                transform="matrix(0.7573 -0.6531 0.6531 0.7573 -63.5474 294.7498)"
                className={st1}
                cx="364.8"
                cy="232.9"
                rx="2.5"
                ry="5.5"
              />

              <ellipse
                transform="matrix(0.7573 -0.6531 0.6531 0.7573 -50.0291 331.8788)"
                className={st1}
                cx="421.5"
                cy="233.2"
                rx="2.5"
                ry="5.5"
              />

              <ellipse
                transform="matrix(0.6839 -0.7295 0.7295 0.6839 -18.8028 422.3415)"
                className={st1}
                cx="478"
                cy="232.9"
                rx="2.7"
                ry="5.9"
              />
              <ellipse
                transform="matrix(0.733 -0.6802 0.6802 0.733 3.2954 456.1882)"
                className={st1}
                cx="582.8"
                cy="223.9"
                rx="3.2"
                ry="7.1"
              />
              <ellipse
                transform="matrix(0.7573 -0.6531 0.6531 0.7573 9.968 467.3093)"
                className={st1}
                cx="633.7"
                cy="220.2"
                rx="2.5"
                ry="5.5"
              />
              <path
                className={st0}
                d="M404.4,153.8c46.1,0,90-3.5,129.5-9.9c0.5-0.1,0.9-0.7,0.9-1.2c-6.9-61.5-62.6-109.6-130.5-109.6
			c-67.7,0-123.5,48-130.5,109.6c-0.1,0.5,0.3,1.1,0.9,1.2C314.4,150.4,358.3,153.8,404.4,153.8z"
              />
              <line
                className={st0}
                x1="273.4"
                y1="170.2"
                x2="284.4"
                y2="145.5"
              />
              <path
                className={st0}
                d="M539.7,170.9c-4.4-8.6-8.8-17-13.2-25.6"
              />
              <path className={st0} d="M324,177.2" />
              <path className={st0} d="M479,175.7" />
              <path
                className={st0}
                d="M272.6,170.7c0,0.2,0,0.4-0.1,0.7c34.7,5.5,81.1,9,131.9,9c52.7,0,100.6-3.7,135.7-9.6"
              />
              <path className={st0} d="M307.5,174.5" />
              <path
                className={st0}
                d="M56.8,225.8c24.5,4.3,56.6,9.4,94.7,13.7c37.9,4.2,66.5,5.9,93.6,7.3c0,0,65.8,3.7,132.4,3.9
			c147.2,0.5,349.9-18.9,367.8-20.5"
              />
              <path
                className={st0}
                d="M56.8,225.8c9.6-9,20.8-13.3,32-17.7c29-10.5,58-19.2,87.8-26.1c14.2-3.3,21.4-4.9,30.5-6.4
			c26.9-4.3,49.5-4.7,65.4-4.2"
              />
              <path
                className={st0}
                d="M539.7,170.9c8.9,1.1,20.3,2.7,33.4,4.8c15.6,2.5,27.1,4.7,38.8,6.8c24.8,4.7,37.2,7,47.9,10
			c20.5,5.5,35.5,11.6,40.4,13.5c12.9,5.3,28.9,12.8,46.6,23.5"
              />
              <path
                className={st0}
                d="M56.7,225c30.2,12,67.2,24.8,110.2,35.7c43.8,11.1,78.9,16.3,97.6,18.6c49.5,6.4,86.1,6.6,138,6.8
			c32.4,0.1,54.5,0.2,85.2-2.2c12.4-1,45.3-3.8,96.4-13.3c41.3-7.7,96.3-20,161.2-40.6"
              />

              <ellipse
                transform="matrix(0.7333 -0.6799 0.6799 0.7333 -14.4001 423.8786)"
                className={st1}
                cx="533.1"
                cy="230.3"
                rx="2.9"
                ry="6.2"
              />

              <ellipse
                transform="matrix(0.7573 -0.6531 0.6531 0.7573 23.4387 499.5165)"
                className={st1}
                cx="683.8"
                cy="218.2"
                rx="2.5"
                ry="5.5"
              />
              <path
                className={st0}
                d="M293,281.5c2.3,6.3,4.6,12.6,6.9,18.9c6.1,0.7,12.3,1.3,18.6,2c60.2,5.7,117.8,6,172.3,2.1
			c3.7-0.3,7.2-0.7,10.9-1.1c4-7.3,8-14.5,11.8-21.8"
              />
              <path
                className={st0}
                d="M329,303.2c-3.3,6.2-5.7,11.3-7.2,14.5c-7.5,16.4-9.6,24.6-16.4,29.1c-0.4,0.2-2.7,1.7-5.5,4
			c-4.9,3.9-7.9,6.3-7.4,8.1c0.6,2.6,7.9,2.8,11.8,2.8c6.7,0.1,10.1,0.2,12.1-2c1.4-1.5,1.1-2.6,5.1-15.1c0,0,0-0.1,0.1-0.3
			c1.5-4.7,7.8-15.9,23.8-40"
              />
              <path
                className={st0}
                d="M462.6,306.8c1.7,2.8,4.6,7.3,8.1,12.8c2.3,3.7,4.7,7.4,6.9,11.2c5.1,8.7,5.7,10.8,9,13.5
			c2.3,1.8,3.2,1.8,6.3,4.4c3.4,2.8,6.7,5.9,6.2,7.9c-0.8,3-9.5,2.8-18.1,2.6c-7.5-0.2-14.2-0.4-14.8-3c-0.5-1.8,1.8-4.7,4.1-6
			c2.2-1.4,4.3-1,4.6-2c0.4-1.4-2.7-3.7-3.6-4.4c-1.3-1.1-1.5-1.4-11.7-15.8c-3.4-4.8-9-12.8-15.1-21.3"
              />
            </g>
            <g className="underUfo">
              <ellipse
                ref={forthRef}
                className={st4}
                cx="396.2"
                cy="489.4"
                rx="148.1"
                ry="15.3"
              />
              <ellipse
                ref={thirdRef}
                className={st4}
                cx="396.2"
                cy="441.3"
                rx="118.8"
                ry="12.9"
              />
              <ellipse
                ref={secondRef}
                className={st4}
                cx="396.2"
                cy="399.4"
                rx="88.7"
                ry="12.9"
              />
              <ellipse
                className={st4}
                ref={firstRef}
                cx="396.2"
                cy="367.7"
                rx="68.7"
                ry="11.6"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default UfoSvg;
