import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingScreen = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardingData = [
    {
      title: "Your beauty journey starts here.",
      description: "",
      image: "/assets/images/onboarding1.jpg",
    },
    {
      title: "Explore Our Services",
      description: "Discover a wide range of beauty treatments tailored for you.",
      image: "/assets/images/services.jpg",
    },
    {
      title: "Book Appointments Easily",
      description: "Conveniently schedule your sessions and redefine elegance.",
      image: "/assets/images/booking.png",
    },
  ];

  const handleNext = () => {
    if (currentIndex === onboardingData.length - 1) {
      navigate("/login");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={onboardingData[currentIndex].image}
          alt={onboardingData[currentIndex].title}
          style={styles.image}
        />
        <div style={styles.overlay}>
          <div style={styles.textBox}>
            <h1 style={styles.title}>{onboardingData[currentIndex].title}</h1>
            <p style={styles.description}>
              {onboardingData[currentIndex].description}
            </p>
          </div>
          <div style={styles.pagination}>
            {onboardingData.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.dot,
                  backgroundColor: index === currentIndex ? "#FF69B4" : "#D3D3D3",
                }}
              ></div>
            ))}
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.skipButton} onClick={handleSkip}>
              Skip
            </button>
            <button style={styles.nextButton} onClick={handleNext}>
              {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    margin: 0,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 2,
    padding: "20px",
  },
  textBox: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "30px", // Space between the box and pagination
    maxWidth: "90%",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#ddd",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  dot: {
    width: "12px",
    height: "12px",
    margin: "0 5px",
    borderRadius: "50%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px", // Adjust for spacing from the bottom
  },
  skipButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#FF69B4",
    fontWeight: "bold",
    cursor: "pointer",
  },
  nextButton: {
    backgroundColor: "#FF69B4",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default OnboardingScreen;
