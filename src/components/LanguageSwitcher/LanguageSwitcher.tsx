import { DropdownMenu } from "radix-ui";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { FlagSpanish } from "./FlagSpanish";
import { FlagEnglish } from "./FlagEnglish";
import { useNavigate } from "@tanstack/react-router";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    navigate({ to: `/${lang}`, replace: true });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Select Language"
          className="flex items-center gap-1"
        >
          {i18n.language === "en" ? <FlagEnglish /> : <FlagSpanish />}
          <ChevronDownIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[100px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="hover:text-blue-500 cursor-pointer group relative flex gap-2 x h-[25px] select-none items-center rounded-[3px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
            onClick={() => changeLanguage("en")}
          >
            <FlagEnglish />
            English
            {i18n.language === "en" ? <CheckIcon /> : undefined}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="hover:text-blue-500 cursor-pointer group relative flex gap-2 x h-[25px] select-none items-center rounded-[3px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
            onClick={() => changeLanguage("es")}
          >
            <FlagSpanish />
            Español
            {i18n.language === "es" ? <CheckIcon /> : undefined}
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
