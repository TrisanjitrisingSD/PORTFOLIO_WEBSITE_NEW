// // import {
// //   Instagram,
// //   Linkedin,
// //   Mail,
// //   MapPin,
// //   Phone,
// //   Send,
// //   Twitch,
// //   Twitter,
// // } from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import { useToast } from "@/hooks/use-toast";
// // import { useState } from "react";

// // export const ContactSection = () => {
// //   const { toast } = useToast();
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     setIsSubmitting(true);

// //     setTimeout(() => {
// //       toast({
// //         title: "Message sent!",
// //         description: "Thank you for your message. I'll get back to you soon.",
// //       });
// //       setIsSubmitting(false);
// //     }, 1500);
// //   };
// //   return (
// //     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
// //       <div className="container mx-auto max-w-5xl">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
// //           Get In <span className="text-primary"> Touch</span>
// //         </h2>

// //         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
// //           Have a project in mind or want to collaborate? Feel free to reach out.
// //           I'm always open to discussing new opportunities.
// //         </p>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //           <div className="space-y-8">
// //             <h3 className="text-2xl font-semibold mb-6">
// //               {" "}
// //               Contact Information
// //             </h3>

// //             <div className="space-y-6 justify-center">
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <Mail className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Email</h4>
// //                   <a
// //                     href="mailto:hello@gmail.com"
// //                     className="text-muted-foreground hover:text-primary transition-colors"
// //                   >
// //                     trisanjitdas7@gmail.com
// //                   </a>
// //                 </div>
// //               </div>
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <Phone className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Phone</h4>
// //                   <a
// //                     href="tel:+91234567890"
// //                     className="text-muted-foreground hover:text-primary transition-colors"
// //                   >
// //                     7029630068
// //                   </a>
// //                 </div>
// //               </div>
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <MapPin className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Location</h4>
// //                   <a className="text-muted-foreground hover:text-primary transition-colors">
// //                     Siliguri,West Bengal, India
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="pt-8">
// //             <h4 className="font-medium mb-4">Connect With Me</h4>
// //              <div className="flex space-x-4 justify-center">
// //               <a href="https://www.linkedin.com/in/trisanjit-das-60482728b/" target="_blank" rel="noopener noreferrer">
// //               <Linkedin />
// //                </a>
// //                <a href="https://www.instagram.com/tris_the_rising_hope" target="_blank" rel="noopener noreferrer">
// //                <Instagram />
// //               </a>
// //               </div>
// //             </div>
// //           </div>
// //           <div
// //             className="bg-card p-8 rounded-lg shadow-xs"
// //             onSubmit={handleSubmit}
// //           >
// //             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

// //             <form className="space-y-6">
// //               <div>
// //                 <label
// //                   htmlFor="name"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   name="name"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
// //                   placeholder="Trisanjit..."
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
// //                   placeholder="trisanjitdas7@gmail.com"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="message"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Message
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
// //                   placeholder="Hello, I'd like to talk about..."
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className={cn(
// //                   "cosmic-button w-full flex items-center justify-center gap-2"
// //                 )}
// //               >
// //                 {isSubmitting ? "Sending..." : "Send Message"}
// //                 <Send size={16} />
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Twitch,
//   Twitter,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

// export const ContactSection = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     const form = e.target;
//     const formData = new FormData(form);
//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       message: formData.get("message"),
//     };

//     try {
//       const response = await fetch("https://backend-f7gr.onrender.com/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         toast({
//           title: "Message sent!",
//           description: "Thank you for your message. I'll get back to you soon.",
//         });
//         form.reset(); // Reset the form after submission
//       } else {
//         throw new Error(result.error || "Failed to send message");
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to send message. Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary"> Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               {" "}
//               Contact Information
//             </h3>

//             <div className="space-y-6 justify-center">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Email</h4>
//                   <a
//                     href="mailto:hello@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     trisanjitdas7@gmail.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Phone</h4>
//                   <a
//                     href="tel:+91234567890"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     7029630068
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Location</h4>
//                   <a className="text-muted-foreground hover:text-primary transition-colors">
//                     Siliguri,West Bengal, India
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8">
//               <h4 className="font-medium mb-4">Connect With Me</h4>
//               <div className="flex space-x-4 justify-center">
//                 <a
//                   href="https://www.linkedin.com/in/trisanjit-das-60482728b/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/tris_the_rising_hope"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Instagram />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="bg-card p-8 rounded-lg shadow-xs">
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="Trisanjit..."
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="trisanjitdas7@gmail.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://backend-f7gr.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mapRef.current && !mapRef.current.contains(event.target)) {
        setShowMap(false);
      }
    };
    if (showMap) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMap]);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:trisanjitdas7@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    trisanjitdas7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917029630068"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    7029630068
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary cursor-pointer" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    onClick={() => setShowMap(true)}
                    className="cursor-pointer text-muted-foreground hover:text-primary transition-colors"
                  >
                    Siliguri, West Bengal, India
                  </a>
                </div>
              </div>

              {showMap && (
                <div
                  ref={mapRef}
                  className="mt-4 w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-primary"
                >
                  <iframe
                    title="Siliguri Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57335.02867932783!2d88.37345276935254!3d26.722212757538447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44147df51c54d%3A0x9166c6309a328e9!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1718151141515!5m2!1sen!2sin&output=embed&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0x202124"
                  ></iframe>
                </div>
              )}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/trisanjit-das-60482728b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/tris_the_rising_hope"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Trisanjit..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="trisanjitdas7@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
