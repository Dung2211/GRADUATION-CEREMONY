import React from "react";
import "./App.css";

// Component để xử lý hiệu ứng hover ảnh
function ImageHoverContainer({ mainImgSrc, hoverImgSrc, alt }) {
  return (
    <div className="image-container">
      {/* Ảnh chính */}
      <img src={mainImgSrc} alt={alt} className="portrait-img img-main" />
      {/* Ảnh hiện ra khi hover */}
      <img
        src={hoverImgSrc}
        alt={`${alt} - hover`}
        className="portrait-img img-hover"
      />
    </div>
  );
}

function App() {
  // Thay thế các URL dưới đây bằng đường dẫn ảnh của bạn (xem hướng dẫn ở cuối)
  const mainPhotoUrl = "/hn.jpg"; // Ảnh chính
  const hoverPhotoUrl = "/hn1.jpg"; // Ảnh hover

  return (
    <div className="app-container">
      {/* Slide 1: Thẻ mời chính */}
      <div className="slide-container" id="invitation">
        <div className="horizontal-layout">
          {/* Cột trái: Hình ảnh với hiệu ứng hover */}
          <div className="image-side">
            <ImageHoverContainer
              mainImgSrc={mainPhotoUrl}
              hoverImgSrc={hoverPhotoUrl}
              alt="Hong Nguyen Graduation"
            />
          </div>

          {/* Cột phải: Nội dung */}
          <div className="content-side">
            <p className="greeting">Dear: Dochin</p>

            <h1 className="main-title">GRADUATION</h1>
            <div className="ceremony-title">
              <span className="star">✦</span> CEREMONY{" "}
              <span className="star">✦</span>
            </div>

            <p className="for-text">for</p>

            <div className="name-box">
              <h2 className="name">HỒNG NGUYÊN</h2>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <h3>Thời gian</h3>
                <p>
                  Thứ Sáu, ngày 23 tháng 5<br />
                  Lúc 10:00 sáng
                </p>
              </div>
              <div className="info-item">
                <h3>Địa điểm</h3>
                <p>
                  Cung Hội nghị Quốc tế Ariyana Đà Nẵng
                  <br />
                  107 Võ Nguyên Giáp, Đà Nẵng
                </p>
              </div>
            </div>

            <div className="footer">
              <p className="contact-note">"call me if you get lost"</p>
              <p className="phone">0935 433 506</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Lời cảm ơn và Dresscode */}
      <div className="slide-container secondary-slide">
        <div className="secondary-content">
          <i className="fa-solid fa-graduation-cap icon-grad"></i>
          <h2 className="thank-you-title">Trân trọng kính mời</h2>
          <div className="gold-line"></div>
          <p className="thank-you-text">
            Sự hiện diện của bạn là niềm vinh hạnh lớn lao đối với mình trong
            ngày đánh dấu cột mốc quan trọng này. Hãy cùng chia sẻ những khoảnh
            khắc đáng nhớ và những nụ cười rạng rỡ nhất!
          </p>

          <div className="badge-container">
            <div className="badge">
              <span className="badge-title">Dresscode:</span> Tự do / Thanh lịch
            </div>
            <div className="badge">
              <span className="badge-title">RSVP:</span> Trước ngày 20/05
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
