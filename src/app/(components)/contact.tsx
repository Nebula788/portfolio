import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Let's Connect
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <CardContent className="p-8 space-y-6">
            <p className="text-center text-slate-300 mb-6">
              I'm always open to new opportunities and collaborations. Let's
              chat about your project!
            </p>

            <div className="space-y-4">
              <Input
                placeholder="Your Name"
                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 hover:border-slate-600"
              />
              <Input
                placeholder="Your Email"
                type="email"
                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 hover:border-slate-600"
              />
              <Input
                placeholder="Subject"
                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 hover:border-slate-600"
              />
              <Textarea
                placeholder="Your Message"
                className="min-h-32 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 hover:border-slate-600"
              />
              <Button className="w-full h-12 bg-linear-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-lg shadow-lg shadow-blue-500/50">
                Send Message
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-700">
              <p className="text-center text-sm text-slate-400 mb-4">
                Or reach out directly:
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:eternalcrystal7@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400 transition"
                >
                  <Mail className="w-4 h-4" />
                  eternalcrystal7@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

export default Contact;
