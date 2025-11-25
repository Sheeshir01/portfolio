import { motion } from "motion/react";
import { Mail, MapPin, Clock } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left side - Large text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-emerald-400 text-sm uppercase tracking-wider mb-6 block">
                Get in touch
              </span>
              <h2 className="text-white text-5xl lg:text-6xl mb-8 leading-tight">
                Let's create something amazing
              </h2>
              <p className="text-white/60 text-lg mb-12">
                I'm always interested in hearing about new projects and opportunities.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@alexdev.com" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
                  { icon: Clock, label: "Response time", value: "Within 24 hours" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white/40 text-sm mb-1">{item.label}</div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block mt-12"
            >
              <p className="text-white/40 text-sm mb-4">Or find me on</p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/5 rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500/50 h-12 rounded-xl"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500/50 h-12 rounded-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-sm mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={8}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500/50 rounded-xl resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-white text-slate-950 rounded-full py-4 hover:bg-white/90 transition-colors group flex items-center justify-center gap-2"
                >
                  <span>Send message</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-sm"
        >
          <p>© 2024 Alex. All rights reserved.</p>
          <p>Designed & built with passion ✨</p>
        </motion.div>
      </div>
    </section>
  );
}
