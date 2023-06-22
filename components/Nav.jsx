"use client";

import React from 'react';
import Link from 'next/link'; /* To move to the other pages of the app */
import Image from 'next/image'; /* To automatically optimize the images */
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'; /* Handles signup flow simple */

const Nav = () => {
  return (
    <Nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
                src="/assets/images/logo.svg"
                alt="Promptik Logo"
                width={30}
                height={30}
                className="object-contain"
            />
        </Link>
    </Nav>
  )
}

export default Nav;