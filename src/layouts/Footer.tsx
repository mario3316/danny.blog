import GithubIcon from "@/components/icons/GithubIcon";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center text-center mb-16 mt-20 gap-4 print:hidden">
            <div className="flex justify-center items-center gap-4 ">
                <Link href="mailto:wlshgktm@gmail.com" target="_blank">
                    <Mail className="hover:stroke-blue-500" />
                </Link>
                <Link href="https://github.com/mario3316" target="_blank">
                    <GithubIcon
                        className="fill-current hover:fill-blue-500 dark:fill-white"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/jinho-park-dev"
                    target="_blank"
                >
                    <Linkedin
                        width={24}
                        className="stroke-current hover:stroke-blue-500 dark:fill-white hidden md:block"
                    />
                </Link>
            </div>
            <div>
                <span className="font-semibold">Jinho Park</span> © 2024
            </div>
        </footer>
    );
}
