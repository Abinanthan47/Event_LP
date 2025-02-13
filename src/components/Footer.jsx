import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const faqQuestions = [
    "Guru   -  9842974390",
    "Kapil  -  9751607081",
    "Sridhar - 6383722463",
    "Thanveer - 9092206987",

];

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">

                {/* Left Side */}
                <div className="overflow-hidden">
                    <h2 className="text-3xl font-medium">
                        FRACTALS & <span className="">I`VENOR 25</span>
                    </h2>
                    <p className="text-white/80 text-sm font-300 capitalize mt-2">
                        National Level Technical Symposium
                    </p>
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31257.836791140468!2d78.124439!3d11.678134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf065115b5f7d%3A0x1d08f4d05518b24d!2sSona%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1739295801215!5m2!1sen!2sin"
                            width="400"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-100"
                        ></iframe>
                    </div>

                </div>



                {/* Right Side (FAQ Links) */}
                <div className="overflow-hidden">
                    <h3 className="text-lg tracking-wider font-300 text-white">
                        Contact Us
                    </h3>
                    <div className="mt-4">
                        {faqQuestions.map((text, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
                                <span className="text-white font-light font-100">{text}</span>
                                <span className="text-red-500 text-lg">→</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-10 pt-6 overflow-hidden">

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-red-500 text-xl cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/ece_sona_?igsh=NmFmMGsyOHNiOTZ4" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-red-500 text-xl cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/user/sonatech" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-red-500 text-xl cursor-pointer" />
                    </a>
                    <a href="https://in.linkedin.com/in/sonaece-department-78b002326?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-red-500 text-xl cursor-pointer" />
                    </a>
                </div>

                {/* Footer Links */}
                <div className="flex  font-300 space-x-6 text-gray-600 mt-4 md:mt-0 text-sm">
                    <a href="#"> @ Sona College of Technology</a>

                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm mt-4 md:mt-0">© 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
