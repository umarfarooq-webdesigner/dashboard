import React, { useState, useEffect } from "react";
import "./heroSection.css";
import {
  umarfarooq_profile_pic2,
  umarfarooq_profile_pic3,
} from "../../../assets/images/images_index";

import AnimatedTyping from "../../../components/animatedTyping/AnimatedTyping";

const HeroSection = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightTheme(document.body.classList.contains("light-theme"));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Set initial theme
    setIsLightTheme(document.body.classList.contains("light-theme"));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            <span>Umar Farooq</span>
          </h1>
          <h3>
            <AnimatedTyping
              texts={[
                "Full Stack Developer",
                "Software Engineer",
                "Graphic Designer",
                "UI/UX Designer",
              ]}
            />
          </h3>

          <p>
            Transforming ideas into elegant code and impactful visuals. Blending
            logic and creativity to build high-performance apps and standout
            designs that drive results.
          </p>
          <a href="#projects" className="neon-btn ">
            Learn more
          </a>
        </div>

        <div className="hero-right">
          <div className="code-background">
            <div className="code-snippet">
              <code>
                {/* Line 1 — Short */}
                <span className="code-keyword">let</span>{" "}
                <span className="code-variable">x Software En</span>{" "}
                <span className="code-operator">=</span>{" "}
                <span className="code-number">42</span>
                <span className="code-semicolon">;</span>
                <br />
                {/* Line 2 — Medium */}
                <span className="code-keyword">const</span>{" "}
                <span className="code-variable">greeting</span>{" "}
                <span className="code-operator">=</span>{" "}
                <span className="code-string">"Hello, World!"</span>
                <span className="code-semicolon">;</span>
                <br />
                {/* Line 3 — Long */}
                <span className="code-keyword">function</span>{" "}
                <span className="code-function">greetUser</span>
                <span className="code-paren">(</span>
                <span className="code-param">name</span>
                <span className="code-paren">)</span>{" "}
                <span className="code-brace">{"{"}</span>{" "}
                <span className="code-keyword">return</span>{" "}
                <span className="code-string">
                  `Welcome, ${"{umar}"}, to the `
                </span>
                <span className="code-semicolon">;</span>{" "}
                <span className="code-brace">{""}</span>
                <br />
                {/* Line 4 — Longest */}
                <span className="code-keyword">const</span>{" "}
                <span className="code-variable">developer</span>{" "}
                <span className="code-operator">=</span>{" "}
                <span className="code-brace">{"{"}</span>
                <span className="code-attr">name:</span>{" "}
                <span className="code-string">"Umar Farooq"</span>
                <span className="code-semicolon">,</span>
                <span className="code-attr">role:</span>{" "}
                <span className="code-string">"Fullstack Developer"</span>
                <span className="code-semicolon">,</span>
                <span className="code-attr">skills:</span>{" "}
                <span className="code-brace">[</span>
                <span className="code-string">"React"</span>
                <span className="code-semicolon">,</span>{" "}
                <span className="code-string">"Node.js"</span>
                <span className="code-semicolon">,</span>{" "}
                <span className="code-string">"MongoDB"</span>
                <span className="code-brace">]</span>{" "}
                <span className="code-brace">;</span>
                <br />
              </code>
            </div>
            <img
              src={
                isLightTheme ? umarfarooq_profile_pic3 : umarfarooq_profile_pic2
              }
              alt="Developer"
              className="hero-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
