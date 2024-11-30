import { Box, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RuFlag from "../img/flag-ru.svg?react";
import EnFlag from "../img/united-kingdom-flag.svg?react";
import ARFlag from "../img/flag-for-flag-united-arab-emirates.svg?react";
import DEFlag from "../img/flag-de.svg?react";
import ESFlag from "../img/flag-for-flag-spain.svg?react";
import ITFlag from "../img/flag-for-flag-italy.svg?react";
import FRFlag from "../img/flag-for-flag-france.svg?react";
import ZHFlag from "../img/flag-for-flag-china.svg?react";
import KOFlag from "../img/flag-kp.svg?react";
import PLFlag from "../img/flag-for-flag-poland.svg?react";
import NLFlag from "../img/flag-for-flag-netherlands.svg?react";
import SVFlag from "../img/flag-for-flag-sweden.svg?react";
import TRFlag from "../img/turkey.svg?react";
import PTFlag from "../img/portugal.svg?react";
import JAFlag from "../img/flag-for-japan.svg?react";

export const ToolbarLanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") ?? "en",
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const languages = [
    {
      code: "en",
      name: "english",
      nativeName: t("languageSelector.english"),
      flag: <EnFlag width={20} height={20} />,
    },
    {
      code: "ru",
      name: "russian",
      nativeName: t("languageSelector.russian"),
      flag: <RuFlag width={20} height={20} />,
    },
    {
      code: "de",
      name: "german",
      nativeName: t("languageSelector.german"),
      flag: <DEFlag width={20} height={20} />,
    },
    {
      code: "zh",
      name: "chinese",
      nativeName: t("languageSelector.chinese"),
      flag: <ZHFlag width={20} height={20} />,
    },
    {
      code: "ko",
      name: "korean",
      nativeName: t("languageSelector.korean"),
      flag: <KOFlag width={20} height={20} />,
    },
    {
      code: "fr",
      name: "french",
      nativeName: t("languageSelector.french"),
      flag: <FRFlag width={20} height={20} />,
    },
    {
      code: "ja",
      name: "japanese",
      nativeName: t("languageSelector.japanese"),
      flag: <JAFlag width={20} height={20} />,
    },
    {
      code: "nl",
      name: "dutch",
      nativeName: t("languageSelector.dutch"),
      flag: <NLFlag width={20} height={20} />,
    },
    {
      code: "sv",
      name: "swedish",
      nativeName: t("languageSelector.swedish"),
      flag: <SVFlag width={20} height={20} />,
    },
    {
      code: "es",
      name: "spanish",
      nativeName: t("languageSelector.spanish"),
      flag: <ESFlag width={20} height={20} />,
    },
    {
      code: "it",
      name: "italian",
      nativeName: t("languageSelector.italian"),
      flag: <ITFlag width={20} height={20} />,
    },
    {
      code: "pl",
      name: "polish",
      nativeName: t("languageSelector.polish"),
      flag: <PLFlag width={20} height={20} />,
    },
    {
      code: "tr",
      name: "turkish",
      nativeName: t("languageSelector.turkish"),
      flag: <TRFlag width={20} height={20} />,
    },
    {
      code: "ar",
      name: "arabic",
      nativeName: t("languageSelector.arabic"),
      flag: <ARFlag width={20} height={20} />,
    },
    {
      code: "pt",
      name: "portuguese",
      nativeName: t("languageSelector.portuguese"),
      flag: <PTFlag width={20} height={20} />,
    },
  ];

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setLanguage(event.target.value);
  };

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language])

  console.log(language);

  const changeLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };

  return (
    <Select
      value={language}
      onChange={(lang) => changeLanguage(lang.target.value)}
      displayEmpty
      renderValue={(selected) => (
        <Box display="flex" alignItems="center" gap={1}>
          {languages.find((lang) => lang.code === selected).flag}
          <span>{selected.toUpperCase()}</span>
        </Box>
      )}
    >
      {languages.map((lan) => {
        return (
          <MenuItem value={lan.code} key={lan.code}>
            <Box display="flex" alignItems="center" gap={1}>
              {lan.flag}
              {t(`languageSelector.${lan.name}`)}
            </Box>
          </MenuItem>
        );
      })}

      {/* <MenuItem value="ru">
        <Box display="flex" alignItems="center" gap={1}>
          <RuFlag width={20} height={20} />
          Русский
        </Box>
      </MenuItem> */}
    </Select>
  );
};
