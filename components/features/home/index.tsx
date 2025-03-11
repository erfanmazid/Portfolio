import Image from "next/image";

function HomeContent() {
  return (
    <div className="w-full flex flex-col p-5 bg-light-black rounded-3xl border-light-gray border-2 relative transition-all duration-300 mt-5">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-bold">درباره من</h2>
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
          <h2 className="text-white text-lg font-bold">من چیکار میکنم</h2>
          <div className="w-full flex flex-col gap-1 items-center justify-center p-5 bg-dark-black rounded-lg shadow-xl shadow-stone-950">
            <Image
              src="/Portfolio/icon/coding.png"
              alt="coding"
              width={40}
              height={40}
            />
            <h3 className="text-white font-semibold mt-1">طراحی و توسعه وب</h3>
            <p className="text-gray-300 text-center text-sm">
              ساخت وبسایت‌های سریع، مدرن و کارآمد
            </p>
          </div>
          <div className="w-full flex flex-col gap-1 items-center justify-center p-5 bg-dark-black rounded-lg shadow-xl shadow-stone-950">
            <Image
              src="/Portfolio/icon/ui.png"
              alt="ui/ux"
              width={40}
              height={40}
            />
            <h3 className="text-white font-semibold mt-1">
              رابط کاربری (UI) و تجربه کاربری (UX)
            </h3>
            <p className="text-gray-300 text-center text-sm">
              ایجاد طراحی‌های جذاب و کاربردی که استفاده از آن‌ها لذت‌بخش باشد
            </p>
          </div>
          <div className="w-full flex flex-col gap-1 items-center justify-center p-5 bg-dark-black rounded-lg shadow-xl shadow-stone-950">
            <Image
              src="/Portfolio/icon/web-page.png"
              alt="profile"
              width={40}
              height={40}
            />
            <h3 className="text-white font-semibold mt-1">
              بهینه‌سازی و بهبود عملکرد
            </h3>
            <p className="text-gray-300 text-center">
              افزایش سرعت، سئو و تجربه کاربری برای وبسایت‌
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold">مهارت ها</h2>
          <ul className="flex gap-6 overflow-x-auto scrollbar-hide pb-3 px-1">
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5">
              <Image
                src={`/Portfolio/icon/html.svg`}
                alt="html"
                width={120}
                height={120}
              />
            </li>
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 ">
              <Image
                src={`/Portfolio/icon/css.svg`}
                alt="css"
                width={120}
                height={120}
              />
            </li>
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 ">
              <Image
                src={`/Portfolio/icon/js.svg`}
                alt="js"
                width={120}
                height={120}
              />
            </li>
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 ">
              <Image
                src={`/Portfolio/icon/ts.svg`}
                alt="ts"
                width={120}
                height={120}
              />
            </li>
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 ">
              <Image
                src={`/Portfolio/icon/react.svg`}
                alt="react"
                width={120}
                height={120}
              />
            </li>
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-5 ">
              <Image
                src={`/Portfolio/icon/nextjs.svg`}
                alt="nextjs"
                width={120}
                height={120}
              />
            </li>
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-7 ">
              <Image
                src={`/Portfolio/icon/postman.svg`}
                alt="postman"
                width={120}
                height={120}
              />
            </li>
            <li className="h-36 w-36 bg-dark-black shadow-md shadow-stone-950 flex-shrink-0 rounded-lg p-7 ">
              <Image
                src={`/Portfolio/icon/figma.svg`}
                alt="figma"
                width={120}
                height={120}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
