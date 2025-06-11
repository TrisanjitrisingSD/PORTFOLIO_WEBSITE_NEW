import { useState } from "react";

export const CertificateSection = () => {
  const [enlarged, setEnlarged] = useState(null);

  const certificates = [
    {
      title: "Certificate of CYPHER",
      description: (
        <>
          An event of our Techno-Management Fest <strong>SRIJAN</strong> at{" "}
          <strong>JADAVPUR UNIVERSITY</strong>. Our team ranked among the{" "}
          <strong>Top 40</strong> finalists from over{" "}
          <strong>300+ participating teams</strong>.
        </>
      ),
      image: "/certificates/cypher.jpg",
    },
    {
      title: "Certificate of HULT PRIZE",
      description: (
        <>
          A global entrepreneurship program organized by the{" "}
          <strong>Entrepreneurship Cell</strong> of{" "}
          <strong>JADAVPUR UNIVERSITY</strong>, as part of the{" "}
          <strong>HULT PRIZE Foundation</strong>.
        </>
      ),
      image: "/certificates/hult.jpg",
    },
  ];

  const toggleImage = (index) => {
    if (enlarged === index) setEnlarged(null);
    else setEnlarged(index);
  };

  return (
    <section id="certificates" className="py-24 px-4 bg-secondary/20 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md relative cursor-pointer"
              onClick={() => toggleImage(index)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className={`w-full h-auto rounded-lg transition-transform duration-300 ${
                  enlarged === index ? "scale-105 z-50" : ""
                }`}
              />
              <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
              <p className="text-foreground/80 mt-2">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Overlay for enlarged image with download */}
        {enlarged !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
            onClick={() => setEnlarged(null)}
          >
            <img
              src={certificates[enlarged].image}
              alt="Enlarged Certificate"
              className="w-11/12 max-w-3xl rounded-lg shadow-xl border-4 border-primary mb-4"
              onClick={(e) => e.stopPropagation()}
            />
            <a
              href={certificates[enlarged].image}
              download
              className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary/90 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Download Certificate
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
