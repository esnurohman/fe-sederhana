import Link from "next/link";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  link: string;
}

const Button = (props: Props) => {
  const { children, type, link } = props;
  return (
    <Link href={link || "/"}>
      <button
        className="px-4 py-2 text-black transition-all rounded-lg shadow-md hover:font-semibold font-base bg-slate-500 hover:bg-slate-400 hover:text-slate-900 hover:translate-x-1 hover:translate-y-1 hover:shadow-xl hover:border-2 border-slate-700 active:ring-2 bg-opacity-5"
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
