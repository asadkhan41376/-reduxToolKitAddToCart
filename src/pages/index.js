import Card from "@/components/Card";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CartCount } from "@/redux/cartSlice";







export default function Home() {

  const cartCount = useSelector(CartCount)
  return (
  <>
  <nav className=" flex justify-center  py-5">

    <Link href="shopingCart">
    <div className="relative" >
    <FaShoppingCart className="text-[30px]"/>

  <span className="absolute text-[20px] " style={{top:"-10px",right:"-12px"}}>{cartCount}</span>

    </div>
    </Link>

  </nav>
   
    <div className="flex align-middle justify-center">
<Card/>
    </div>
  </>
  );
}
