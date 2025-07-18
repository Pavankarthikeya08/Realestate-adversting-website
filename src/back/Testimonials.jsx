import React from "react";
import { TestimonialsColumn } from "./TestimonialsColumn";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "Using this real estate platform made finding the perfect home effortless. The interface is intuitive, and I could explore properties from the comfort of my home.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "First-time Homebuyer",
  },
  {
    text: "Listing and selling properties has never been this smooth. The dashboard is easy to use, and client communication is seamless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Real Estate Agent",
  },
  {
    text: "Customer support was amazing. They guided me through the entire listing process and helped me attract more qualified leads.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Property Owner",
  },
  {
    text: "Our agency's efficiency skyrocketed after we started using this platform. It simplifies everything from lead tracking to scheduling visits.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Real Estate Broker",
  },
  {
    text: "As a project manager overseeing multiple developments, this platform helped us maintain accurate listings and manage buyer interactions seamlessly.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Real Estate Project Manager",
  },
  {
    text: "I appreciated how easy it was to compare properties and shortlist the best ones. The entire search experience was stress-free.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Prospective Buyer",
  },
  {
    text: "Marketing our properties became so much easier. The analytics and exposure helped boost inquiries and increased our closing rate.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Real Estate Marketing Head",
  },
  {
    text: "They truly understood what we needed as sellers and delivered a solution that brought real results. Our properties sold faster than expected.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Residential Property Seller",
  },
  {
    text: "Since listing on this platform, our rental bookings have soared. It’s user-friendly and attracts serious clients. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Rental Property Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative" id="Testimonials">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
