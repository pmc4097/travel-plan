import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface Props {
    active: boolean;
}

export default function Filter({ active, className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
    return (
        <button
            className={classNames(
                'text-20 border-b-3 p-14',
                {
                    'border-b-main text-main font-semibold': active,
                    'border-b-transparent text-gray500 font-medium': !active
                },
                className)}
            {...props}>
            {children}
        </button>);
}