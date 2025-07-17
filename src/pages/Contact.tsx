import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        
        <motion.h1
          className="text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in{" "}
          <span className="relative inline-block">
            Touch
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.path
                d="M1 5.5C47.6667 2.16667 154.4 -2.3 199 6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-primary"
              />
            </motion.svg>
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Let's connect and create something amazing together!
        </motion.p>
        <div className="space-y-6">
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.7 }}
>
<Card>
<CardContent className="p-6">
<a
        href="tel:+911234567890"
        className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-200"
>
<svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
<path
            fill="#34A853"
            d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.15.38 2.39.59 3.64.59a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.21 2.49.59 3.64a1 1 0 0 1-.24 1.05l-2.23 2.1z"
          />
</svg>
<span className="text-xl">+91 7765063799</span>
</a>
</CardContent>
</Card>
</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <a
                  href="mailto:kumar.anubhav1654@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 32 32"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ea4335"
                      d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                    />
                    <path
                      fill="#00ac47"
                      d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                      transform="translate(53.0001 32.0007) rotate(180)"
                    />
                    <path
                      fill="#ffba00"
                      d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652...
                        ...fill continues from official path..."
                    />
                    <path
                      fill="#4285f4"
                      d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                    />
                    <path
                      fill="#c52528"
                      d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812...
                        ...rest of envelope flaps"
                    />
                  </svg>
 
                  <span className="text-xl">kumar.anubhav1654@gmail.com</span>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <a
                  href="https://github.com/kumaranubhav1654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      className="dark:fill-white fill-black"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                    />
                  </svg>
                  <span className="text-xl">GitHub</span>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <a
                  href="https://www.linkedin.com/in/kumar-anubhav-ka1654/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      fill="#0A66C2"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    />
                  </svg>
                  <span className="text-xl">LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
