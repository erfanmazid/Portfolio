"use client";
import WebNavbar from "../navbar/navbarWeb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import toast from "react-hot-toast";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("لطفاً یک ایمیل معتبر وارد کنید."),
  fullname: z.string().min(3, "نام و نام خانوادگی باید حداقل شامل ۳ حرف باشد."),
  subject: z.string().min(3, "موضوع باید حداقل شامل ۳ حرف باشد."),
  message: z.string().min(3, "پیام باید حداقل شامل ۳ حرف باشد."),
});
type FormValues = z.infer<typeof formSchema>;

function ContactPageContent() {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mrbpgwwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("پیام شما با موفقیت ارسال شد!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("خطایی رخ داده است، لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full flex flex-col p-5 bg-light-black rounded-3xl border-light-gray border-2 relative transition-all duration-300 mt-5 mx-auto md:max-w-[700px] lg:min-w-[900px] xl:mt-0">
      <WebNavbar />
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold sm:text-2xl">فرم تماس</h2>
          <form
            className="w-full flex flex-col gap-5"
            action={"https://formspree.io/f/mrbpgwwg"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-full gap-5 md:grid md:grid-cols-2 ">
              <Input
                label="نام و نام خانوادگی :"
                type="text"
                error={errors.fullname?.message?.toString()}
                {...register("fullname")}
                className="border-gray-300 text-white"
              />
              <Input
                label="ایمیل :"
                type="text"
                error={errors.email?.message?.toString()}
                {...register("email")}
                className="border-gray-300 text-white"
              />
            </div>
            <Input
              label="موضوع :"
              type="text"
              error={errors.subject?.message?.toString()}
              {...register("subject")}
              className="border-gray-300 text-white"
            />
            <div className="flex flex-col w-full gap-1">
              <label className="mb-1 text-sm font-medium text-white">
                پیام :
              </label>
              <textarea
                className={`w-full px-3 py-2 border rounded-lg bg-transparent outline-none transition-all border-gray-300 text-white  ${
                  errors.message
                    ? "border-red-500 focus:ring focus:ring-red-300"
                    : "border-gray-300 focus:ring focus:ring-orenge-yellow"
                }`}
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message?.message?.toString()}
                </p>
              )}
            </div>
            <Button className="bg-primary" disabled={isSubmitting}>
              {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPageContent;
