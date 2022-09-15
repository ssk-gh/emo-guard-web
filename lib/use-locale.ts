import { useRouter } from "next/router"
import { en } from "../locales/en";
import { ja } from "../locales/ja";

export const useLocale = () => {
    const { locale } = useRouter();
    const message = getMessage(locale);

    return { locale, message };
}

const getMessage = (locale: string) => {
    switch (locale) {
        case 'ja':
            return ja;
        default:
            return en;
    }
}