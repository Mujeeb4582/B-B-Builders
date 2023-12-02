import React from 'react';

const TowerSlider: React.FC = () => {
  return (
    <div className="containerTower1">

      <input type="radio" name="slider" className="d-none" id="s1" checked />
      <input type="radio" name="slider" className="d-none" id="s2" />
      <input type="radio" name="slider" className="d-none" id="s3" />
      <input type="radio" name="slider" className="d-none" id="s4" />
      <input type="radio" name="slider" className="d-none" id="s5" />

      <div className="cards">
        {/* Slide 1 */}
        <label htmlFor="s1" id="slide1">
          <div className="card">
            <div className="image">
              <img src="img/Nike SuperRep Go.jpg" alt="" />
              <div className="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Nike SuperRep Go</span>
              <span className="lorem">
                Lorem ipsum dolor sit amet, sit amet adipiscing elit. Aenean vel ansd . Nullam
                lorem. Nulla eu sodales
              </span>
            </div>
            <a href="/contact" className="btn-contact">
              details
            </a>
          
          </div>
        </label>

        {/* Slide 2 */}
        <label htmlFor="s2" id="slide2">
          <div className="card">
            <div className="image">
              <img src="img/Free run flyknit.jpg" alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Free Run Flyknit</span>
              <span className="lorem">
                Lorem ipsum dolor sit, adipiscing elit. Aenean vel sit ansd . Nullam
                lorem. Nulla eu sodales karma stellus
              </span>
            </div>
            <a href="/contact" className="btn-contact">
              details
            </a>
           
          </div>
        </label>

        {/* Slide 3 */}
        <label htmlFor="s3" id="slide3">
          <div className="card">
            <div className="image">
              <img src="img/Black Toe Union.jpg" alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Black Toe Union</span>
              <span className="lorem">
                Lorem ipsum dolor, sit amet let kar adipiscing. Aenean vel velit sit ansd . Nullam
                lorem. Nulla karma stellus
              </span>
            </div>
            <a href="/contact" className="btn-contact">
              details
            </a>
          
          </div>
        </label>

        {/* Slide 4 */}
        <label htmlFor="s4" id="slide4">
          <div className="card">
            <div className="image">
              <img src="img/Retro High Og.jpg" alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Retro High Og</span>
              <span className="lorem">
                Lorem ipsum dolor sit, sit amet elit. Aenean sit amet sit amet vel velit sit ansd. Nulla eu
                sodales stellus
              </span>
            </div>
            <a href="/contact" className="btn-contact">
              details
            </a>
       
          </div>
        </label>

        {/* Slide 5 */}
        <label htmlFor="s5" id="slide5">
          <div className="card">
            <div className="image">
              <img src="img/Off-White x Air Jordan.jpg" alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Off-White Air Jordan</span>
              <span className="lorem">
                Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd . Nullam
                lorem. Nulla eu sodales stellus
              </span>
            </div>
            <a href="/contact" className="btn-contact">
              details
            </a>
           
          </div>
        </label>
      </div>

    </div>
  );
};

export default TowerSlider;
