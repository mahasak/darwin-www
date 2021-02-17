import React, { ReactNode } from "react";
import Link from "next/link";
import { GenericObject, SessionBase } from "next-auth/_utils";

type Props = {
    signout: (data?: { callbackUrl?: string }) => Promise<void>,
    session: SessionBase & GenericObject;
};

const LogoutControl: React.FC<Props> = (props: Props) => {
    return (
        <div className="right">
            <p>
                {props.session.user.name} ({props.session.user.email})
        </p>
            <Link href="/create">
                <button>
                    <a>New post</a>
                </button>
            </Link>
            <button onClick={() => props.signout()}>
                <a>Log out</a>
            </button>
            <style jsx>{`
                a {
                    text-decoration: none;
                    color: #000;
                    display: inline-block;
                }
                p {
                    display: inline-block;
                    font-size: 13px;
                    padding-right: 1rem;
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
                button {
                    border: none;
                }
            `}</style>
        </div>
    )
}

export default LogoutControl;