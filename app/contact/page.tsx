"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .required("Message is required"),
});
export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (
    values: { name: string; email: string; message: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    setFormStatus("loading");

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    // 🔹 Replace this with your Formspree endpoint:
    const templateParams = {
      title: "From Portfolio",
      name: values.name,
      message: values.message,
      contact: values.email,
    };

    emailjs
      .send(
        "service_xa9i44e",
        "template_uqo9bzp",
        templateParams,
        "pOGsc1-zFiRTt3V9b"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          resetForm();
          setFormStatus("success");
        },
        (err) => {
          console.log("FAILED...", err);
          setFormStatus("error");
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <main className=" bg-[#0d1117] grid md:grid-cols-2 grid-cols-1 justify-center items-center px-6 py-15">
      <div className="text-left w-full  h-full flex justify-center items-center flex-col">
        <motion.h5
          className="text-4xl font-extrabold text-white mb-5 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s <span className="text-[#00bcd4]">Connect</span>
        </motion.h5>
        <motion.p
          className="text-gray-400 text-center max-w-lg mb-5 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have an opportunity, project idea? I’d love to hear from you — drop me
          a message below.
        </motion.p>
      </div>
      <div className="w-full h-full flex justify-end">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
          validateOnChange={true}
          validateOnBlur={false}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-[500px] bg-[#161b22] border border-[#30363d] rounded-2xl shadow-xl p-8 space-y-3">
              {/* Name */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Name</label>
                <Field
                  name="name"
                  type="text"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-gray-200 focus:outline-none focus:border-[#00bcd4]"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-gray-200 focus:outline-none focus:border-[#00bcd4]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-gray-200 focus:outline-none focus:border-[#00bcd4] resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formStatus === "loading"}
                className="w-full py-3 rounded-lg bg-[#00bcd4] text-black font-semibold hover:bg-[#00acc1] transition"
              >
                {formStatus === "loading"
                  ? "Sending..."
                  : formStatus === "success"
                  ? "Message Sent!"
                  : "Send Message"}
              </button>

              {formStatus === "error" && (
                <p className="text-red-500 text-center mt-2">
                  Something went wrong. Try again.
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}
