import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";
import LoginControl from '../components/LoginControl'
import LogoutControl from '../components/LogoutControl'

const Header: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
        router.pathname === pathname;

    const [session, loading] = useSession();

    let left = (
        <div className="left">
            <Link href="/">
                <a className="bold" data-active={isActive("/")}>
                    Feed
        </a>
            </Link>
            <style jsx>{`
        .bold {
          font-weight: bold;
        }
        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }
        .left a[data-active="true"] {
          color: gray;
        }
        a + a {
          margin-left: 1rem;
        }
      `}</style>
        </div>
    );

    let right = null;

    if (loading) {
        left = (
            <div className="left">
                <Link href="/">
                    <a className="bold" data-active={isActive("/")}>
                        Feed
          </a>
                </Link>
                <style jsx>{`
          .bold {
            font-weight: bold;
          }
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }
          .left a[data-active="true"] {
            color: gray;
          }
          a + a {
            margin-left: 1rem;
          }
        `}</style>
            </div>
        );
        right = (
            <div className="right">
                <p>Validating session ...</p>
                <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
            </div>
        );
    }

    if (!session) {
        right = (<LoginControl isActive={isActive} />
        );
    }

    if (session) {
        left = (
            <div className="left">
                <Link href="/">
                    <a className="bold" data-active={isActive("/")}>
                        Feed
          </a>
                </Link>
                <Link href="/drafts">
                    <a data-active={isActive("/drafts")}>My drafts</a>
                </Link>
                <style jsx>{`
          .bold {
            font-weight: bold;
          }
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }
          .left a[data-active="true"] {
            color: gray;
          }
          a + a {
            margin-left: 1rem;
          }
        `}</style>
            </div>
        );
        right = (<LogoutControl signout={signOut} session={session} />
        );
    }

    return (
        <nav>
            {left}
            {right}
            <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
        </nav>
    );
};

export default Header;