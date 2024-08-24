import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import * as Icon from "../Icon";

type CalloutType = "info" | "warn" | "danger" | "normal";

interface CalloutProps extends PropsWithChildren {
    type?: CalloutType;
    title?: string;
}

type IconType = {
    [key: string]: {
        icon: () => JSX.Element;
        boxClass: string;
    };
};

const metadata: IconType = {
    info: {
        icon: Icon.Warn,
        boxClass: "text-informative-foreground bg-informative",
    },
    danger: {
        icon: Icon.Danger,
        boxClass: "text-destructive-foreground bg-destructive",
    },
    warn: {
        icon: Icon.Info,
        boxClass: "text-warning-foreground bg-warning",
    },

    normal: {
        icon: Icon.Normal,
        boxClass: "text-secondary-foreground bg-secondary",
    },
};

//커스텀 인용(콜아웃) 컴포넌트
export const Callout = (props: CalloutProps) => {
    const type = props.type || "normal";
    const metaObj = metadata[type];
    const Icon = metaObj.icon;
    const boxClass = metaObj.boxClass;

    return (
        <div
            className={cn(
                "my-6 flex items-center gap-3 rounded-md px-5 py-4",
                boxClass,
            )}
        >
            {type !== "normal" && (
                <div>
                    <Icon />
                </div>
            )}
            <div className="callout-contents flex-1">
                {props.title && (
                    <span className="font-bold">{props.title}</span>
                )}
                {props.children}
            </div>
        </div>
    );
};
