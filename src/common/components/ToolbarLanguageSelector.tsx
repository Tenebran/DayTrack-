import { Box, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RuFlag from "../img/flag-ru.svg?react";
import EnFlag from "../img/flag-de.svg?react";

export const ToolbarLanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English", nativeName: "English", flag: EnFlag },
    { code: "ru", name: "Russian", nativeName: "Русский", flag: RuFlag },
  ];

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setLanguage(event.target.value);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      value={language}
      onChange={() => handleChange}
      displayEmpty
      renderValue={(selected) => (
        <Box display="flex" alignItems="center" gap={1}>
          {selected === "en" && <EnFlag width={20} height={20} />}
          {selected === "ru" && <RuFlag width={20} height={20} />}
          <span>{selected.toUpperCase()}</span>
        </Box>
      )}
    >
      <MenuItem value="en">
        <Box display="flex" alignItems="center" gap={1}>
          <EnFlag width={20} height={20} />
          English
        </Box>
      </MenuItem>
      <MenuItem value="ru">
        <Box display="flex" alignItems="center" gap={1}>
          <RuFlag width={20} height={20} />
          Русский
        </Box>
      </MenuItem>
    </Select>
  );
};
