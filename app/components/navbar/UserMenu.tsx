"use client";

import { useCallback, useState } from "react";
import{ AiOutlineMenu } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";

const UserMenu = () => {
  const router = useRouter();

    //control our hambergur outline menu 
    const [isOpen, setIsOpen] = useState(false);//we set the default state to false so as to open it dynamically
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
        onClick={() => router.push("/unishop")}
        className="
        font-bold
        flex
        flex-row
        hover:text-gray-500
        cursor-pointer
        text-sm
        ">
          Unishop
          <div className="cursor-pointer">
          <BiCart color="orange" size={38}/>
        </div>
        </div>
    <div
    //when the aioutline is clicked it will trigger the toggleopen which will now be set to true dynamically
    onClick={toggleOpen}
    className="
    p-4
    md:py-1
    md:px-2
    border-[1px]
    border-neutral-200
    flex
    flex-row
    items-center
    gap-3
    rounded-full
    cursor-pointer
    hover:shadow-md
    transition
    "
    >
    <AiOutlineMenu />
    {isOpen &&(
    <>
    <MenuItem
    onClick={toggleOpen}
    label="Login"
    />
    <MenuItem
    onClick={toggleOpen}
    label="Signup"
    />
    </>
    )}
    </div>
    </div>
    </div>
)
}
export default UserMenu
