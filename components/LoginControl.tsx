import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
    isActive: (pathname: string) => boolean
};

const LoginControl: React.FC<Props> = (props: Props) => {
    return (
        <div className="right">
            <Link href="/api/auth/signin">
                <a data-active={props.isActive("/signup")}>Log in</a>
            </Link>
            <style jsx>{`
                a {
                    text-decoration: none;
                    color: #000;
                    display: inline-block;
                }
                a + a {
                    margin-left: 1rem;
                }
                .right {
                    margin-left: auto;
                }
                .right a {
                    border: 1px solid black;
                    padding: 0.5rem 1rem;
                    border-radius: 3px;
                }
            `}</style>
        </div>
    );
}

export default LoginControl;