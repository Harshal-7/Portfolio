"use client";
import React, { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toast, ToastDescription, ToastProvider } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendMessage } from "@/actions/sendMessage";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { formSchema } from "@/schema/formSchea";
import { motion } from "framer-motion";

const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const logoRef = useRef(null);
  const bannerRef = useRef(null);
  const text1 = "Any Question ? Or".split(" ");
  const text2 = "Just Want To Say Hi 👋".split(" ");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  gsap.registerPlugin(ScrollTrigger);
  const projectGsap = useRef(null);

  useGSAP(() => {
    gsap.from(projectGsap.current, {
      scrollTrigger: {
        trigger: projectGsap.current,
      },
      y: 10,
      duration: 2,
      opacity: 0,
      ease: "power1.out",
    });
  }, {});

  const handleDownload = () => {
    const resumeFilePath = "/resume.pdf";
    window.open(resumeFilePath, "_blank");
  };

  const handleGmail = () => {
    const gmailAddress = "shindeharshal009@gmail.com";
    const mailtoLink = `mailto:${gmailAddress}?subject=Contact%20Me`;
    window.location.href = mailtoLink;
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const res = await sendMessage(values)
      .then((res) => {
        if (!res.success) {
          toast({
            title: "Failed to send message",
            duration: 3000,
            variant: "destructive",
          });
        }
        toast({
          title: "Your message has been sent.",
          duration: 3000,
          variant: "purple",
        });
      })
      .catch((error) => {
        console.log("Error in data:", error);
      });

    form.reset({ name: "", email: "", message: "" });

    setIsLoading(false);
  };

  return (
    <MaxWidthWrapper className="min-h-screen">
      <div ref={projectGsap}>
        <div className="flex flex-col flex-wrap sm:flex-row md:mt-5">
          <div className="mx-auto mt-10">
            <div className="flex flex-col w-full justify-center items-center gap-10">
              {/* Top side - Form */}
              <div className="flex flex-col w-full justify-end items-center md:items-center mt-4 mb-4">
                <h1
                  className={cn(
                    "text-[65px] text-[#5148fc] text-center sm:text-[80px] lg:text-[100px] font-extrabold",
                    YesevaOne.className
                  )}
                >
                  Get in Touch
                </h1>

                <div className="flex flex-wrap gap-6 justify-center items-center sm:gap-8 p-2 mt-8 lg:mt-10 mb-10 sm:mb-0">
                  <Link
                    href="https://github.com/Harshal-7"
                    target="_blank"
                    className="flex items-center hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src="/github.png"
                      className="h-7 mr-3 rounded-full sm:h-8"
                      alt="github"
                    />
                    Github
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/harshal-shinde-77a862210"
                    target="_blank"
                    className="flex items-center hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src="/linkedin.png"
                      className="h-7 mr-3 sm:h-8"
                      alt="linkdin"
                    />{" "}
                    Linkdin
                  </Link>

                  <Link
                    href="https://twitter.com/hscodez"
                    target="_blank"
                    className="flex items-center hover:scale-110 transition-transform duration-300"
                  >
                    <img src="/x2.png" className="h-7 mr-3 sm:h-8" alt="x" />{" "}
                    Twitter
                  </Link>

                  <Button
                    onClick={handleGmail}
                    formTarget="_blank"
                    variant="link"
                    className="flex items-center hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src="/gmail.svg"
                      className="h-7 mr-3 sm:h-8"
                      alt="gmail"
                    />{" "}
                    Gmail
                  </Button>
                </div>

                <Button
                  onClick={handleDownload}
                  className="w-40 mt-2 sm:mt-8 lg:mt-10 px-3 py-3 font-bold text-center text-white bg-[#5148fc] rounded-lg hover:bg-[#443bff]"
                >
                  See My Resume
                </Button>
              </div>

              {/* Bottom Form  */}
              <div className="min-w-full flex flex-col gap-8">
                <div className="text-xl md:text-3xl mb-2 font-semibold text-center ">
                  <span>
                    {text1.map((el, i) => (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 1.6,
                          delay: i / 8,
                        }}
                        key={i}
                      >
                        {el}{" "}
                      </motion.span>
                    ))}
                  </span>{" "}
                  <br />
                  <span>
                    {text2.map((el, i) => (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 1.6,
                          delay: i / 4,
                        }}
                        key={i}
                      >
                        {el}{" "}
                      </motion.span>
                    ))}
                  </span>{" "}
                  <br />
                </div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 w-2/3 self-center"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Name"
                              className="py-5"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              className="py-5"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder="Message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-[#5148fc]">
                      {isLoading ? (
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#5148fc]"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="font-semibold">Send</div>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default ContactPage;
