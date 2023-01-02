import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Cart, Search } from "../../Icons";
import { routes } from "../../../utils/apiRoutes";
import useFetcher from "../../../utils/fetcher";
import Spinner from "../Spinner";

const Navbar = () => {
  const { data, isLoading, error } = useFetcher(
    "navbarCats",
    routes?.navbar?.categories,
    "navCategories"
  );

  const router = useRouter();
  const { locale, asPath } = router;
  const { t } = useTranslation("common");
  if (isLoading || error) return <Spinner />;
  return (
    <>
      <nav className="flex bg-black p-4">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <Image
              src={"/assets/logo.png"}
              alt=""
              width={128}
              height={128}
              // style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
        </div>
        {/* Logo */}
        {/* Search */}
        <form className="relative ltr:ml-8 ltr:mr-3 rtl:mr-8 rtl:ml-3 flex-grow inline-flex items-center">
          <input type="text" className="w-full rounded-sm h-8" />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <Search fontSize={24} />
          </button>
        </form>
        {/* Search */}
        {/* Lang switcher */}
        <div className="text-white inline-flex items-center">
          {locale === "en" ? (
            <a href={"/ar" + asPath}>العربية</a>
          ) : (
            <a href={"/en" + asPath}>English</a>
          )}
        </div>
        {/* Lang switcher */}
        {/* Cart */}
        <div className="relative after:block after:w-[1px] after:h-[10px] after:top-1/2 after:-translate-y-1/2 after:absolute after:left-[0px] rtl:mr-2 ltr:ml-2 after:bg-slate-500 inline-flex items-center ltr:pl-2">
          <span className="absolute top-1 ltr:-right-1 rtl:-left-1 flex items-center justify-center w-3 h-3 rounded-full bg-amber-400 text-xs">
            0
          </span>
          <Cart fill="#fff" />
        </div>
        {/* Cart */}
      </nav>
      <nav className="">
        <ul className="min-w-max bg-mainColor text-base w-full py-2 list-none shadow-lg m-0 bg-clip-padding border-none flex px-2">
          {data?.map((item: any) => (
            <li key={item?.id}>
              <Link
                className="text-sm py-2 px-4 font-bold inline-flex whitespace-nowrap bg-transparent rounded text-gray-700 hover:bg-black hover:text-mainColor transition"
                href={`/categories/${item?.name}`}
              >
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

// Module federation // MonoRepo 'NX' #2
// Atom Pattern #1
// vitest #1
// ZOD
