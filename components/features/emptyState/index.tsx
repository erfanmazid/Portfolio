import Image from "next/image";

const EmptyState = ({ message = "محتوایی برای نمایش وجود ندارد." }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-20 text-center">
      <Image
        src={"/icon/spider.svg"}
        alt="spider"
        width={170}
        height={180}
        className="md:w-56 lg:w-64 xl:w-72  lg:mt-10"
      />
      <p className="text-gray-300 font-semibold text-lg">{message}</p>
    </div>
  );
};

export default EmptyState;
