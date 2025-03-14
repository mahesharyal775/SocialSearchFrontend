import { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    "https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc",
    "https://imgs.search.brave.com/sfE17UW78rj21M7IpOm6XMKipV1hqT3lhn8uWFQd91I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/MTEwNDczNC9waG90/by93b21hbi1zaWxo/b3VldHRlLWF0LXN1/bnNldC1vbi1oaWxs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zUHJDSGNsdFM0/VHR4VVhIeFQ5ckxY/ckcxNTRMcGY3MEJO/RFFma3lzUm5RPQ",
    "https://imgs.search.brave.com/6m3xgQN3DlbdTGDHkHgGvbXk5QyaqyaVM6NfkR1Crj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQxLzcxLzkz/LzM2MF9GXzc0MTcx/OTM5NF9DOUJQM1li/aVhTSjdXc3BTREx0/S2RZeFpLS1dsZjBK/ei5qcGc",
  ];

  return (
    <div className="relative w-full">
      <div className="carousel w-full overflow-hidden">
        <div
          className="carousel-inner flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="carousel-item w-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-fit"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}

      <div className={`${slides.length === 1 ? "hidden" : ""}`}>
        <button
          disabled={index === 0} // Disable when on the first image
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          className={`absolute  cursor-pointer top-1/2 left-4 transform -translate-y-1/2  ${index === 0 ? "hidden":"bg-gray-600"} text-white p-2 rounded-full`}
        >
          ❮
        </button>
        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          disabled={index === slides.length - 1}
          className={`absolute cursor-pointer top-1/2 right-4 transform -translate-y-1/2 ${index === slides.length - 1 ? "hidden":"bg-gray-600"}  text-white p-2 rounded-full`}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
