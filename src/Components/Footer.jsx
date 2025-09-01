import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";

function FlipkartFooter() {
    return (
        <footer className="bg-neutral-900 text-white text-sm">

            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 border-b border-neutral-700">

                <div>
                    <h3 className="font-semibold mb-3 text-neutral-400">ABOUT</h3>
                    <ul className="space-y-2">
                        {["Contact Us", "About Us", "Careers", "Flipkart Stories", "Press", "Corporate Information"].map((item, i) => (
                            <li key={i} className="hover:underline cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* GROUP COMPANIES */}
                <div>
                    <h3 className="font-semibold mb-3 text-neutral-400">GROUP COMPANIES</h3>
                    <ul className="space-y-2">
                        {["Myntra", "Cleartrip", "Shopsy"].map((item, i) => (
                            <li key={i} className="hover:underline cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* HELP */}
                <div>
                    <h3 className="font-semibold mb-3 text-neutral-400">HELP</h3>
                    <ul className="space-y-2">
                        {["Payments", "Shipping", "Cancellation & Returns", "FAQ"].map((item, i) => (
                            <li key={i} className="hover:underline cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* CONSUMER POLICY */}
                <div>
                    <h3 className="font-semibold mb-3 text-neutral-400">CONSUMER POLICY</h3>
                    <ul className="space-y-2">
                        {[
                            "Cancellation & Returns",
                            "Terms Of Use",
                            "Security",
                            "Privacy",
                            "Sitemap",
                            "Grievance Redressal",
                            "EPR Compliance",
                        ].map((item, i) => (
                            <li key={i} className="hover:underline cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* MAIL US */}
                <div>
                    <h3 className="font-semibold mb-3 text-neutral-400">Mail Us:</h3>
                    <p>
                        Flipkart Internet Private Limited,<br />
                        Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                        Outer Ring Road, Devarabeesanahalli Village,<br />
                        Bengaluru, 560103, Karnataka, India
                    </p>
                    <h3 className="font-semibold mb-2 text-neutral-400">Social:</h3>
                    <div className="flex gap-4 text-lg text-white">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                        <FaInstagram />
                    </div>
                </div>

                {/* REGISTERED OFFICE */}
                <div>
                    <h3 className="font-semibold mb-3 text-neutral-400">Registered Office Address:</h3>
                    <p>
                        Flipkart Internet Private Limited,<br />
                        Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                        Outer Ring Road, Devarabeesanahalli Village,<br />
                        Bengaluru, 560103,<br />
                        Karnataka, India<br />
                        CIN: <span className="text-blue-400">U51109KA2012PTC066107</span><br />
                        Telephone: <span className="text-blue-400">044-45614700 / 044-67415800</span>
                    </p>
                </div>
            </div>


            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-sm text-neutral-300">
                    {/* Registered Address */}


                    {/* Footer Links */}
                    <div className="flex flex-wrap gap-4 justify-start text-yellow-400 text-sm">
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                            🏬 Become a Seller
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                            📢 Advertise
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                            🎁 Gift Cards
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                            💬 Help Center
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400">
                    © 2007-2025 Flipkart.com
                </div>
                    </div>
                </div>

               
               
            </div>
        </footer>
    );
}

export default FlipkartFooter;
