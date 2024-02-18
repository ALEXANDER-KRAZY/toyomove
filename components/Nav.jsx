"use client"; //used whwn using client based functioonalities like hooks
//import react hooks (client based functionalities)
import { useEffect, useState} from 'react';
//import link which will help us navigate through the other pages of our app
import Link from 'next/link';
//import image will automatically optimize the images for us
import Image from 'next/image';
//the following utility functions will help sign in and out follow simple
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';
import React from 'react'

//structure of our navigation bar
//give it marginbottom(mb) and padtop(pd)
//create a first link (href) with (/)root route and show the logo of our app
const Nav = () => {
  const isUserLoggenIn = true;//try using false and the sign out, profile and add prompt buttons will disapper
  //will only appear sign in button
  const [providers, setProviders] = useState(null);//initializing providers 
  const [toggleDropdown, setToggleDropdown] = useState(false);//making it smallscreen to make a dropdown menu

  //now we will set these providers by creating a new useEffect hook that has a callback function which only runs at the start
  useEffect(() => {
    const setProviders = async () => {
      const response =  await getProviders();//gather results

      setProviders(response);
    }
    setProviders();
  }, []
  )
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex- gap-2 flex-center">
        <Image src="/assets/images/logo.svg"
        alt='Toyomove logo'
        width={30}
        height={30}
        className="object-contain"/>{ /* logo name */}
        <p className='logo_text'>Toyomove</p>
      </Link>
      {/**Desktop navigation and it will say on small devices its going to be flex(visible)
       * but usually its going to be hidden
       * and we need to know if a user is logged in or not to determine the buttons we will display by creating a new variable called isuserloggedin
       * if they are we are going to display a div
       * And if they are not we are going to return an empty<></>
       */}
       <div className="sm:flex hidden">
          {isUserLoggenIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-parts-prompt" className="black_btn">Add Parts Prompts</Link>
              <button type="button" onClink={signOut} className="outline_btn">Sign Out</button>

              <Link href="/profile">
                <Image src="/assets/images/logo.svg"
                alt='profile pic'
                width={37}
                height={37}
                className="rounded-full"/>
              </Link>
            </div>
          ): (
            //inside of here we will have a button to sign in
            //and to be able to do that using next-auth we will need acces to Providers which we imported up there and we will now need to initialize them
            //check if we have acess to providers
            //to make a dropown we will need a new usestate
            <>
              {providers &&
                Object.values(providers).map((provider) => (<button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn">
                  Sign In
                </button>))}
            </>
          )}
       </div>
       {/* Mobile Navigation */}
       <div className="sm:hidden flex relative">
        {isUserLoggenIn ? (
          <div className="flex">
            <Image src="/assets/images/logo.svg"
                alt='profile pic'
                width={37}
                height={37}
                className="rounded-full"
                onClick={() => setToggleDropdown((prev) => !prev)}
                />
                {toggleDropdown && (
                  <div className="dropdown">
                    <Link href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}>
                      My Profile
                    </Link>
                    <Link href="/create-parts-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}>
                      Add Parts Prompts
                    </Link>
                    <button
                    type="button"
                    onClick= {() => {
                      setToggleDropdown(false);
                      signOut();}}
                      className="mt-5 w-full blact_btn">
                        Sign Out
                    </button>
                  </div>
                )}
          </div>
        ): (
          <>
          {providers &&
            Object.values(providers).map((provider) => (<button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="black_btn">
              Sign In
            </button>))}
        </>
      )}
       </div>

    </nav>
  )
}

export default Nav
