import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullname, email, subject, message } = await req.json();

    // چک کردن مقدار ورودی‌ها
    if (!fullname || !email || !subject || !message) {
      return NextResponse.json(
        { error: "تمام فیلدها الزامی هستند." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
      subject: `تماس از طرف ${fullname} - ${subject}`,
      text: `فرستنده: ${email}\n\n${message}`,
    };

    // ارسال ایمیل
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "ایمیل با موفقیت ارسال شد." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ خطای ارسال ایمیل:", error);
    return NextResponse.json({ error: `خطای سرور: ${error}` }, { status: 500 });
  }
}
