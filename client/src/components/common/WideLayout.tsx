import cn from "classnames";
import { PropsWithChildren } from "react";

interface Props {
    className?: string;
}

export default function WideLayout({ className, children }: PropsWithChildren<Props>) {
    return (
        <div className={cn('w-full h-full', className)}>
            {children}
        </div>
    )
}