import React, {useState}from 'react'


function Header() {

  const slides = [

    {
        image: "/img/2.png",
        title: "Climate Target Update Tracker",
        description: "We will be tracking governments as they update their Paris Agreement targets, and calling out those who are not planning to do so.",
        buttonText: "LEARN MORE"
    },  
    {
        image: "/img/8.png",
        title: "As the climate crisis worsens, the warming outlook stagnates",
        description: "Read our latest Global Temperature Update",
        buttonText: "FIND OUT MORE"
    },
    
    {
        image: "/img/3.png",
        title: "The CAT guide to a good 2035 climate target",
        description: "Our guide on the four key elements that governments should focus on when developing their climate targets",
        buttonText: "DISCOVER"
    },
    {
        image: "/img/4.png",
        title: "CAT's Data Explorer",
        description: "All data in one place: Explore our new webtool",
        buttonText: "EXPLORE"
    },
    {
        image: "/img/5.png",
        title: "1.5°C benchmarks for light-duty vehicles",
        description: "See our latest light-duty vehicle specific benchmarks for achieving a 1.5°C compatible transport sector",
        buttonText: "FIND OUT MORE"
    },
    {
        image: "/img/9.jpg",
        title: "Credibility of net zero targets",
        description: "View our nuanced and transparent assessments of national net zero targets",
        buttonText: "LEARN MORE"
    },
    {
        image: "/img/7.png",
        title: "Azerbaijan",
        description: "Read our full country assessment and why COP29 host Azerbaijan receives a “Critically insufficient” rating",
        buttonText: "DISCOVER"
    },

];

const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
};

const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
};

  return (
    <div>
    
      <div className="relative flex items-center justify-center h-screen bg-blue-500">
                    <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                        <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full md:mt-0 mt-20">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full md:mt-0 mt-20">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    
                      <div className="absolute inset-0 w-full h-full bg-cover bg-center background-image" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}></div>
                    <div className="text-center text-white px-4 md:px-0 relative z-10 flex flex-col justify-center items-center h-full">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{slides[currentIndex].title}</h1>
                        <p className="text-base md:text-lg lg:text-xl mb-6">{slides[currentIndex].description}</p>
                        <button className="bg-gray-800 text-white py-2 px-4 rounded-full flex items-center justify-center">
                            {slides[currentIndex].buttonText} <i className="fas fa-chevron-right ml-2"></i>
                        </button>
                    </div>
                    <div className="absolute bottom-4 flex space-x-2 z-10">
                        {slides.map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-400'}`}></div>
                        ))}
                    </div>
        </div>

    </div>
  )
}

export default Header