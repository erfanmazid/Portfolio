import Image from "next/image";
import WebNavbar from "../navbar/navbarWeb";

function HomeContent() {
  return (
    <div className="w-full flex flex-col p-5 bg-light-black rounded-3xl border-light-gray border-2 relative transition-all duration-300 mt-5 mx-auto md:max-w-[700px] lg:max-w-[900px]">
      <WebNavbar />
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold sm:text-2xl">
            درباره من
          </h2>
          <p className="text-gray-300 leading-relaxed">
            دنیای توسعه وب برای من ترکیبی از خلاقیت و حل مسئله است. همیشه در حال
            یادگیریم و هر چالشی رو فرصتی برای بهتر شدن می‌بینم. با{" "}
            <strong>HTML، CSS، JavaScript، TypeScript، React و Next.js</strong>{" "}
            کار می‌کنم و سعی دارم تجربه‌های کاربری روان و جذابی بسازم.
          </p>
          <p className="text-gray-300 leading-relaxed mt-2">
            عاشق اینم که چیزهای جدید کشف کنم، مهارتم رو بهتر کنم و پروژه‌هایی
            بسازم که هم کاربردی باشن و هم قشنگ. مسیرم تازه شروع شده، ولی با هر
            خط کد، یک قدم به جلو برمی‌دارم!
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold sm:text-2xl">
            من چه کار میکنم
          </h2>
          <div className="w-full flex flex-col gap-5 lg:grid lg:grid-cols-2">
            <div className="w-full flex flex-col gap-1 items-center justify-center p-5 bg-dark-black rounded-lg shadow-xl shadow-stone-950 md:flex-row md:gap-5 md:justify-start">
              <Image
                src="/icon/coding.png"
                alt="coding"
                width={40}
                height={40}
              />
              <div className="flex flex-col items-center justify-center gap-1 md:items-start">
                <h3 className="text-white font-semibold mt-1 sm:text-xl">
                  طراحی و توسعه وب
                </h3>
                <p className="text-gray-300 text-center text-sm">
                  ساخت وبسایت‌های سریع، مدرن و کارآمد
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 items-center justify-center p-5 bg-dark-black rounded-lg shadow-xl shadow-stone-950 md:flex-row md:gap-5 md:justify-start">
              <Image src="/icon/ui.png" alt="ui/ux" width={40} height={40} />
              <div className="flex flex-col items-center justify-center gap-1 md:items-start">
                <h3 className="text-white font-semibold mt-1 sm:text-xl">
                  رابط کاربری (UI) و تجربه کاربری (UX)
                </h3>
                <p className="text-gray-300 text-center text-sm lg:text-start">
                  ایجاد طراحی‌های جذاب و کاربردی که استفاده از آن‌ها لذت‌بخش
                  باشد
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 items-center justify-center p-5 bg-dark-black rounded-lg shadow-xl shadow-stone-950 md:flex-row md:gap-5 md:justify-start">
              <Image
                src="/icon/web-page.png"
                alt="profile"
                width={40}
                height={40}
              />
              <div className="flex flex-col items-center justify-center gap-1 md:items-start">
                <h3 className="text-white font-semibold mt-1 sm:text-xl">
                  بهینه‌سازی و بهبود عملکرد
                </h3>
                <p className="text-gray-300 text-center">
                  افزایش سرعت، سئو و تجربه کاربری برای وبسایت‌
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold sm:text-2xl">مهارت ها</h2>
          <ul className="flex gap-6 overflow-x-auto scrollbar-hide pb-3 px-1">
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/html.svg`}
                alt="html"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/css.svg`}
                alt="css"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/js.svg`}
                alt="js"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/ts.svg`}
                alt="ts"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/react.svg`}
                alt="react"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/nextjs.svg`}
                alt="nextjs"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-7 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/postman.svg`}
                alt="postman"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
            <li className="flex items-center justify-center h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-7 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src={`/icon/figma.svg`}
                alt="figma"
                width={120}
                height={120}
                className="md:w-36 md:h-36 lg:w-40 lg:h-40"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
