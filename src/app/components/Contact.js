"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import emailjs from 'emailjs-com';

const contacts = [
  {
    label: "GitHub",
    value: "github.com/jeffGodonou",
    href: "https://github.com/jeffGodonou",
    icon: <Github className="w-6 h-6" />,
    color: "hover:bg-gray-800 hover:text-white",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeff-godonou-2b7849133",
    href: "https://www.linkedin.com/in/jeff-godonou-2b7849133",
    icon: <Linkedin className="w-6 h-6" />,
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    label: "Email",
    value: "jeffalecgodonou@gmail.com",
    href: "mailto:jeffalecgodonou@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    color: "hover:bg-red-600 hover:text-white",
  },
  {
    label: "Phone",
    value: "+1 438-225-1143",
    href: "tel:+14382251143",
    icon: <Phone className="w-6 h-6" />,
    color: "hover:bg-green-600 hover:text-white",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const [templateParams, setTemplateParams] = useState({
    name: '',
    reply_to: '',
    message: ''
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSendMessage = () => {
    console.log(templateParams);

    emailjs.send('service_sifbatl', 'template_2trhu3n', templateParams, 'H7KVuvjhT3UJK7fHS')
      .then((result) => {
          console.log(result.text);
          alert("Message sent! I'll get back to you soon.");
          setTemplateParams({
            name: '',
            reply_to: '',
            message: '',
        });
      }, (error) => {
          console.log(error.text);
      });
    
  };
  
  return (
    <section id="contact" className="relative px-6 py-20 max-w-5xl mx-auto">
      {/* Gradient background animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl"
      />

      {/* Heading */}
      <div className="relative text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Let’s Build Something Together 💡
        </h2>
        <p className="mt-3 text-lg text-gray-300">
          Whether it’s code, ideas, or opportunities — I’m always open to connect.
        </p>
      </div>

      {/* Contact methods */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center p-6 bg-gray-900/80 border border-gray-700 rounded-2xl cursor-pointer transition ${c.color}`}
            onClick={() => handleCopy(c.value)}
          >
            {c.icon}
            <p className="mt-2 text-sm text-gray-400">{c.label}</p>
            {/* <p className="font-semibold">{c.value}</p> */}
            {copied === c.value && (
              <span className="mt-1 text-xs text-green-400">Copied ✅</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Contact form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-900/70 border border-gray-700 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <h3 className="text-2xl font-bold text-white text-center">
          Or Drop Me a Message ✨
        </h3>
        <div>
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your name"
            value={templateParams.name}
            onInput={(e) => setTemplateParams({ ...templateParams, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your email"
            value={templateParams.reply_to}
            onInput={(e) => setTemplateParams({ ...templateParams, reply_to: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Write something cool..."
            rows={4}
            value={templateParams.message}
            onInput={(e) => setTemplateParams({ ...templateParams, message: e.target.value })}
          />
        </div>
        <motion.button
          type ="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </section>
  );
}
