/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import type { InputHTMLAttributes } from "react";
import { Fragment, forwardRef, useRef, useState } from "react";
import {
  Input,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from "../../../shared";
import { cn } from "../../../lib/utils";

const phonePrefix = [
  {
    name: "Afghanistan",
    prefix: "+93",
    country: "af",
  },
  {
    name: "Albania",
    prefix: "+355",
    country: "al",
  },
  {
    name: "Algeria",
    prefix: "+213",
    country: "dz",
  },
  {
    name: "American Samoa",
    prefix: "+1-684",
    country: "as",
  },
  {
    name: "Andorra",
    prefix: "+376",
    country: "ad",
  },
  {
    name: "Angola",
    prefix: "+244",
    country: "ao",
  },
  {
    name: "Anguilla",
    prefix: "+1-264",
    country: "ai",
  },
  {
    name: "Antarctica",
    prefix: "+672",
    country: "aq",
  },
  {
    name: "Antigua and Barbuda",
    prefix: "+1-268",
    country: "ag",
  },
  {
    name: "Argentina",
    prefix: "+54",
    country: "ar",
  },
  {
    name: "Armenia",
    prefix: "+374",
    country: "am",
  },
  {
    name: "Aruba",
    prefix: "+297",
    country: "aw",
  },
  {
    name: "Australia",
    prefix: "+61",
    country: "au",
  },
  {
    name: "Austria",
    prefix: "+43",
    country: "at",
  },
  {
    name: "Azerbaijan",
    prefix: "+994",
    country: "az",
  },
  {
    name: "Bahamas",
    prefix: "+1-242",
    country: "bs",
  },
  {
    name: "Bahrain",
    prefix: "+973",
    country: "bh",
  },
  {
    name: "Bangladesh",
    prefix: "+880",
    country: "bd",
  },
  {
    name: "Barbados",
    prefix: "+1-246",
    country: "bb",
  },
  {
    name: "Belarus",
    prefix: "+375",
    country: "by",
  },
  {
    name: "Belgium",
    prefix: "+32",
    country: "be",
  },
  {
    name: "Belize",
    prefix: "+501",
    country: "bz",
  },
  {
    name: "Benin",
    prefix: "+229",
    country: "bj",
  },
  {
    name: "Bermuda",
    prefix: "+1-441",
    country: "bm",
  },
  {
    name: "Bhutan",
    prefix: "+975",
    country: "bt",
  },
  {
    name: "Bolivia",
    prefix: "+591",
    country: "bo",
  },
  {
    name: "Bosnia and Herzegovina",
    prefix: "+387",
    country: "ba",
  },
  {
    name: "Botswana",
    prefix: "+267",
    country: "bw",
  },
  {
    name: "Brazil",
    prefix: "+55",
    country: "br",
  },
  {
    name: "British Indian Ocean Territory",
    prefix: "+246",
    country: "io",
  },
  {
    name: "British Virgin Islands",
    prefix: "+1-284",
    country: "vg",
  },
  {
    name: "Brunei",
    prefix: "+673",
    country: "bn",
  },
  {
    name: "Bulgaria",
    prefix: "+359",
    country: "bg",
  },
  {
    name: "Burkina Faso",
    prefix: "+226",
    country: "bf",
  },
  {
    name: "Burundi",
    prefix: "+257",
    country: "bi",
  },
  {
    name: "Cambodia",
    prefix: "+855",
    country: "kh",
  },
  {
    name: "Cameroon",
    prefix: "+237",
    country: "cm",
  },
  {
    name: "Canada",
    prefix: "+1",
    country: "ca",
  },
  {
    name: "Cape Verde",
    prefix: "+238",
    country: "cv",
  },
  {
    name: "Cayman Islands",
    prefix: "+1-345",
    country: "ky",
  },
  {
    name: "Central African Republic",
    prefix: "+236",
    country: "cf",
  },
  {
    name: "Chad",
    prefix: "+235",
    country: "td",
  },
  {
    name: "Chile",
    prefix: "+56",
    country: "cl",
  },
  {
    name: "China",
    prefix: "+86",
    country: "cn",
  },
  {
    name: "Christmas Island",
    prefix: "+61",
    country: "cx",
  },
  {
    name: "Cocos Islands",
    prefix: "+61",
    country: "cc",
  },
  {
    name: "Colombia",
    prefix: "+57",
    country: "co",
  },
  {
    name: "Comoros",
    prefix: "+269",
    country: "km",
  },
  {
    name: "Cook Islands",
    prefix: "+682",
    country: "ck",
  },
  {
    name: "Costa Rica",
    prefix: "+506",
    country: "cr",
  },
  {
    name: "Croatia",
    prefix: "+385",
    country: "hr",
  },
  {
    name: "Cuba",
    prefix: "+53",
    country: "cu",
  },
  {
    name: "Curacao",
    prefix: "+599",
    country: "cw",
  },
  {
    name: "Cyprus",
    prefix: "+357",
    country: "cy",
  },
  {
    name: "Czech Republic",
    prefix: "+420",
    country: "cz",
  },
  {
    name: "Democratic Republic of the Congo",
    prefix: "+243",
    country: "cd",
  },
  {
    name: "Denmark",
    prefix: "+45",
    country: "dk",
  },
  {
    name: "Djibouti",
    prefix: "+253",
    country: "dj",
  },
  {
    name: "Dominica",
    prefix: "+1-767",
    country: "dm",
  },
  {
    name: "Dominican Republic",
    prefix: "+1-809, 1-829, 1-849",
    country: "do",
  },
  {
    name: "East Timor",
    prefix: "+670",
    country: "tl",
  },
  {
    name: "Ecuador",
    prefix: "+593",
    country: "ec",
  },
  {
    name: "Egypt",
    prefix: "+20",
    country: "eg",
  },
  {
    name: "El Salvador",
    prefix: "+503",
    country: "sv",
  },
  {
    name: "Equatorial Guinea",
    prefix: "+240",
    country: "gq",
  },
  {
    name: "Eritrea",
    prefix: "+291",
    country: "er",
  },
  {
    name: "Estonia",
    prefix: "+372",
    country: "ee",
  },
  {
    name: "Ethiopia",
    prefix: "+251",
    country: "et",
  },
  {
    name: "Falkland Islands",
    prefix: "+500",
    country: "fk",
  },
  {
    name: "Faroe Islands",
    prefix: "+298",
    country: "fo",
  },
  {
    name: "Fiji",
    prefix: "+679",
    country: "fj",
  },
  {
    name: "Finland",
    prefix: "+358",
    country: "fi",
  },
  {
    name: "France",
    prefix: "+33",
    country: "fr",
  },
  {
    name: "French Polynesia",
    prefix: "+689",
    country: "pf",
  },
  {
    name: "Gabon",
    prefix: "+241",
    country: "ga",
  },
  {
    name: "Gambia",
    prefix: "+220",
    country: "gm",
  },
  {
    name: "Georgia",
    prefix: "+995",
    country: "ge",
  },
  {
    name: "Germany",
    prefix: "+49",
    country: "de",
  },
  {
    name: "Ghana",
    prefix: "+233",
    country: "gh",
  },
  {
    name: "Gibraltar",
    prefix: "+350",
    country: "gi",
  },
  {
    name: "Greece",
    prefix: "+30",
    country: "gr",
  },
  {
    name: "Greenland",
    prefix: "+299",
    country: "gl",
  },
  {
    name: "Grenada",
    prefix: "+1-473",
    country: "gd",
  },
  {
    name: "Guam",
    prefix: "+1-671",
    country: "gu",
  },
  {
    name: "Guatemala",
    prefix: "+502",
    country: "gt",
  },
  {
    name: "Guernsey",
    prefix: "+44-1481",
    country: "gg",
  },
  {
    name: "Guinea",
    prefix: "+224",
    country: "gn",
  },
  {
    name: "Guinea-Bissau",
    prefix: "+245",
    country: "gw",
  },
  {
    name: "Guyana",
    prefix: "+592",
    country: "gy",
  },
  {
    name: "Haiti",
    prefix: "+509",
    country: "ht",
  },
  {
    name: "Honduras",
    prefix: "+504",
    country: "hn",
  },
  {
    name: "Hong Kong",
    prefix: "+852",
    country: "hk",
  },
  {
    name: "Hungary",
    prefix: "+36",
    country: "hu",
  },
  {
    name: "Iceland",
    prefix: "+354",
    country: "is",
  },
  {
    name: "India",
    prefix: "+91",
    country: "in",
  },
  {
    name: "Indonesia",
    prefix: "+62",
    country: "id",
  },
  {
    name: "Iran",
    prefix: "+98",
    country: "ir",
  },
  {
    name: "Iraq",
    prefix: "+964",
    country: "iq",
  },
  {
    name: "Ireland",
    prefix: "+353",
    country: "ie",
  },
  {
    name: "Isle of Man",
    prefix: "+44-1624",
    country: "im",
  },
  {
    name: "Israel",
    prefix: "+972",
    country: "il",
  },
  {
    name: "Italy",
    prefix: "+39",
    country: "it",
  },
  {
    name: "Ivory Coast",
    prefix: "+225",
    country: "ci",
  },
  {
    name: "Jamaica",
    prefix: "+1-876",
    country: "jm",
  },
  {
    name: "Japan",
    prefix: "+81",
    country: "jp",
  },
  {
    name: "Jersey",
    prefix: "+44-1534",
    country: "je",
  },
  {
    name: "Jordan",
    prefix: "+962",
    country: "jo",
  },
  {
    name: "Kazakhstan",
    prefix: "+7",
    country: "kz",
  },
  {
    name: "Kenya",
    prefix: "+254",
    country: "ke",
  },
  {
    name: "Kiribati",
    prefix: "+686",
    country: "ki",
  },
  {
    name: "Kosovo",
    prefix: "+383",
    country: "xk",
  },
  {
    name: "Kuwait",
    prefix: "+965",
    country: "kw",
  },
  {
    name: "Kyrgyzstan",
    prefix: "+996",
    country: "kg",
  },
  {
    name: "Laos",
    prefix: "+856",
    country: "la",
  },
  {
    name: "Latvia",
    prefix: "+371",
    country: "lv",
  },
  {
    name: "Lebanon",
    prefix: "+961",
    country: "lb",
  },
  {
    name: "Lesotho",
    prefix: "+266",
    country: "ls",
  },
  {
    name: "Liberia",
    prefix: "+231",
    country: "lr",
  },
  {
    name: "Libya",
    prefix: "+218",
    country: "ly",
  },
  {
    name: "Liechtenstein",
    prefix: "+423",
    country: "li",
  },
  {
    name: "Lithuania",
    prefix: "+370",
    country: "lt",
  },
  {
    name: "Luxembourg",
    prefix: "+352",
    country: "lu",
  },
  {
    name: "Macao",
    prefix: "+853",
    country: "mo",
  },
  {
    name: "Macedonia",
    prefix: "+389",
    country: "mk",
  },
  {
    name: "Madagascar",
    prefix: "+261",
    country: "mg",
  },
  {
    name: "Malawi",
    prefix: "+265",
    country: "mw",
  },
  {
    name: "Malaysia",
    prefix: "+60",
    country: "my",
  },
  {
    name: "Maldives",
    prefix: "+960",
    country: "mv",
  },
  {
    name: "Mali",
    prefix: "+223",
    country: "ml",
  },
  {
    name: "Malta",
    prefix: "+356",
    country: "mt",
  },
  {
    name: "Marshall Islands",
    prefix: "+692",
    country: "mh",
  },
  {
    name: "Mauritania",
    prefix: "+222",
    country: "mr",
  },
  {
    name: "Mauritius",
    prefix: "+230",
    country: "mu",
  },
  {
    name: "Mayotte",
    prefix: "+262",
    country: "yt",
  },
  {
    name: "Mexico",
    prefix: "+52",
    country: "mx",
  },
  {
    name: "Micronesia",
    prefix: "+691",
    country: "fm",
  },
  {
    name: "Moldova",
    prefix: "+373",
    country: "md",
  },
  {
    name: "Monaco",
    prefix: "+377",
    country: "mc",
  },
  {
    name: "Mongolia",
    prefix: "+976",
    country: "mn",
  },
  {
    name: "Montenegro",
    prefix: "+382",
    country: "me",
  },
  {
    name: "Montserrat",
    prefix: "+1-664",
    country: "ms",
  },
  {
    name: "Morocco",
    prefix: "+212",
    country: "ma",
  },
  {
    name: "Mozambique",
    prefix: "+258",
    country: "mz",
  },
  {
    name: "Myanmar",
    prefix: "+95",
    country: "mm",
  },
  {
    name: "Namibia",
    prefix: "+264",
    country: "na",
  },
  {
    name: "Nauru",
    prefix: "+674",
    country: "nr",
  },
  {
    name: "Nepal",
    prefix: "+977",
    country: "np",
  },
  {
    name: "Netherlands",
    prefix: "+31",
    country: "nl",
  },
  {
    name: "Netherlands Antilles",
    prefix: "+599",
    country: "an",
  },
  {
    name: "New Caledonia",
    prefix: "+687",
    country: "nc",
  },
  {
    name: "New Zealand",
    prefix: "+64",
    country: "nz",
  },
  {
    name: "Nicaragua",
    prefix: "+505",
    country: "ni",
  },
  {
    name: "Niger",
    prefix: "+227",
    country: "ne",
  },
  {
    name: "Nigeria",
    prefix: "+234",
    country: "ng",
  },
  {
    name: "Niue",
    prefix: "+683",
    country: "nu",
  },
  {
    name: "North Korea",
    prefix: "+850",
    country: "kp",
  },
  {
    name: "Northern Mariana Islands",
    prefix: "+1-670",
    country: "mp",
  },
  {
    name: "Norway",
    prefix: "+47",
    country: "no",
  },
  {
    name: "Oman",
    prefix: "+968",
    country: "om",
  },
  {
    name: "Pakistan",
    prefix: "+92",
    country: "pk",
  },
  {
    name: "Palau",
    prefix: "+680",
    country: "pw",
  },
  {
    name: "Palestine",
    prefix: "+970",
    country: "ps",
  },
  {
    name: "Panama",
    prefix: "+507",
    country: "pa",
  },
  {
    name: "Papua New Guinea",
    prefix: "+675",
    country: "pg",
  },
  {
    name: "Paraguay",
    prefix: "+595",
    country: "py",
  },
  {
    name: "Peru",
    prefix: "+51",
    country: "pe",
  },
  {
    name: "Philippines",
    prefix: "+63",
    country: "ph",
  },
  {
    name: "Pitcairn",
    prefix: "+64",
    country: "pn",
  },
  {
    name: "Poland",
    prefix: "+48",
    country: "pl",
  },
  {
    name: "Portugal",
    prefix: "+351",
    country: "pt",
  },
  {
    name: "Puerto Rico",
    prefix: "+1-787, 1-939",
    country: "pr",
  },
  {
    name: "Qatar",
    prefix: "+974",
    country: "qa",
  },
  {
    name: "Republic of the Congo",
    prefix: "+242",
    country: "cg",
  },
  {
    name: "Reunion",
    prefix: "+262",
    country: "re",
  },
  {
    name: "Romania",
    prefix: "+40",
    country: "ro",
  },
  {
    name: "Russia",
    prefix: "+7",
    country: "ru",
  },
  {
    name: "Rwanda",
    prefix: "+250",
    country: "rw",
  },
  {
    name: "Saint Barthelemy",
    prefix: "+590",
    country: "bl",
  },
  {
    name: "Saint Helena",
    prefix: "+290",
    country: "sh",
  },
  {
    name: "Saint Kitts and Nevis",
    prefix: "+1-869",
    country: "kn",
  },
  {
    name: "Saint Lucia",
    prefix: "+1-758",
    country: "lc",
  },
  {
    name: "Saint Martin",
    prefix: "+590",
    country: "mf",
  },
  {
    name: "Saint Pierre and Miquelon",
    prefix: "+508",
    country: "pm",
  },
  {
    name: "Saint Vincent and the Grenadines",
    prefix: "+1-784",
    country: "vc",
  },
  {
    name: "Samoa",
    prefix: "+685",
    country: "ws",
  },
  {
    name: "San Marino",
    prefix: "+378",
    country: "sm",
  },
  {
    name: "Sao Tome and Principe",
    prefix: "+239",
    country: "st",
  },
  {
    name: "Saudi Arabia",
    prefix: "+966",
    country: "sa",
  },
  {
    name: "Senegal",
    prefix: "+221",
    country: "sn",
  },
  {
    name: "Serbia",
    prefix: "+381",
    country: "rs",
  },
  {
    name: "Seychelles",
    prefix: "+248",
    country: "sc",
  },
  {
    name: "Sierra Leone",
    prefix: "+232",
    country: "sl",
  },
  {
    name: "Singapore",
    prefix: "+65",
    country: "sg",
  },
  {
    name: "Sint Maarten",
    prefix: "+1-721",
    country: "sx",
  },
  {
    name: "Slovakia",
    prefix: "+421",
    country: "sk",
  },
  {
    name: "Slovenia",
    prefix: "+386",
    country: "si",
  },
  {
    name: "Solomon Islands",
    prefix: "+677",
    country: "sb",
  },
  {
    name: "Somalia",
    prefix: "+252",
    country: "so",
  },
  {
    name: "South Africa",
    prefix: "+27",
    country: "za",
  },
  {
    name: "South Korea",
    prefix: "+82",
    country: "kr",
  },
  {
    name: "South Sudan",
    prefix: "+211",
    country: "ss",
  },
  {
    name: "Spain",
    prefix: "+34",
    country: "es",
  },
  {
    name: "Sri Lanka",
    prefix: "+94",
    country: "lk",
  },
  {
    name: "Sudan",
    prefix: "+249",
    country: "sd",
  },
  {
    name: "Suriname",
    prefix: "+597",
    country: "sr",
  },
  {
    name: "Svalbard and Jan Mayen",
    prefix: "+47",
    country: "sj",
  },
  {
    name: "Swaziland",
    prefix: "+268",
    country: "sz",
  },
  {
    name: "Sweden",
    prefix: "+46",
    country: "se",
  },
  {
    name: "Switzerland",
    prefix: "+41",
    country: "ch",
  },
  {
    name: "Syria",
    prefix: "+963",
    country: "sy",
  },
  {
    name: "Taiwan",
    prefix: "+886",
    country: "tw",
  },
  {
    name: "Tajikistan",
    prefix: "+992",
    country: "tj",
  },
  {
    name: "Tanzania",
    prefix: "+255",
    country: "tz",
  },
  {
    name: "Thailand",
    prefix: "+66",
    country: "th",
  },
  {
    name: "Togo",
    prefix: "+228",
    country: "tg",
  },
  {
    name: "Tokelau",
    prefix: "+690",
    country: "tk",
  },
  {
    name: "Tonga",
    prefix: "+676",
    country: "to",
  },
  {
    name: "Trinidad and Tobago",
    prefix: "+1-868",
    country: "tt",
  },
  {
    name: "Tunisia",
    prefix: "+216",
    country: "tn",
  },
  {
    name: "Turkey",
    prefix: "+90",
    country: "tr",
  },
  {
    name: "Turkmenistan",
    prefix: "+993",
    country: "tm",
  },
  {
    name: "Turks and Caicos Islands",
    prefix: "+1-649",
    country: "tc",
  },
  {
    name: "Tuvalu",
    prefix: "+688",
    country: "tv",
  },
  {
    name: "U.S. Virgin Islands",
    prefix: "+1-340",
    country: "vi",
  },
  {
    name: "Uganda",
    prefix: "+256",
    country: "ug",
  },
  {
    name: "Ukraine",
    prefix: "+380",
    country: "ua",
  },
  {
    name: "United Arab Emirates",
    prefix: "+971",
    country: "ae",
  },
  {
    name: "United Kingdom",
    prefix: "+44",
    country: "gb",
  },
  {
    name: "United States",
    prefix: "+1",
    country: "us",
  },
  {
    name: "Uruguay",
    prefix: "+598",
    country: "uy",
  },
  {
    name: "Uzbekistan",
    prefix: "+998",
    country: "uz",
  },
  {
    name: "Vanuatu",
    prefix: "+678",
    country: "vu",
  },
  {
    name: "Vatican",
    prefix: "+379",
    country: "va",
  },
  {
    name: "Venezuela",
    prefix: "+58",
    country: "ve",
  },
  {
    name: "Vietnam",
    prefix: "+84",
    country: "vn",
  },
  {
    name: "Wallis and Futuna",
    prefix: "+681",
    country: "wf",
  },
  {
    name: "Western Sahara",
    prefix: "+212",
    country: "eh",
  },
  {
    name: "Yemen",
    prefix: "+967",
    country: "ye",
  },
  {
    name: "Zambia",
    prefix: "+260",
    country: "zm",
  },
  {
    name: "Zimbabwe",
    prefix: "+263",
    country: "zw",
  },
];

export interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
  onInputChange?: (value: string) => void;
  popoverClassName?: string;
  prefix?: undefined;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (props, ref) => {
    const {
      className,
      status,
      readOnly,
      disabled,
      onInputChange,
      onFocus,
      onBlur,
      value,
      popoverClassName,
      ...rest
    } = props;
    const suggestions = ["se", "ie", "de", "dk", "no", "ro", "pl"];
    const [inputValue, setInputValue] = useState("");
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const selectedPrefix = phonePrefix
      .sort((a, b) => b.prefix.localeCompare(a.prefix))
      .find((selectedPrefixInFind) =>
        `+${inputValue}`.startsWith(selectedPrefixInFind.prefix)
      );

    function getStatusStyling(): string {
      if (status === "success") {
        return "0 0 0 1px rgb(132 204 22 / 0.8)";
      }
      if (status === "error") {
        return "0 0 0 1px rgb(220 38 38 / 0.8)";
      }
      return "0 0 0 1px rgb(255 255 255 / 0.8)";
    }
    return (
      <div
        className={cn(
          "items-center transition-all border border-input rounded-md h-9 flex disabled:cursor-not-allowed disabled:opacity-50 hover:ring-1 hover:ring-accent",
          status === "success" &&
            "hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
          status === "error" &&
            "hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
          readOnly && ""
        )}
        ref={ContainerRef}
      >
        <div className="">
          <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild>
              <Button
                aria-expanded={open}
                aria-label="Select phone prefix"
                className="py-1  w-10 px-3 justify-between -mr-2"
                role="combobox"
                variant="ghost"
              >
                <Image
                  alt={`${selectedPrefix?.country || "eu"}-flag`}
                  height={20}
                  loading="lazy"
                  src={`/flags/${selectedPrefix?.country || "eu"}.svg`}
                  width={20}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className={cn("w-[300px] p-0", popoverClassName)}
            >
              <Command>
                <CommandInput className="h-9" placeholder="Search prefix..." />
                <ScrollArea className="h-[300px]">
                  <CommandEmpty>No phone prefix found.</CommandEmpty>
                  {suggestions.length > 0 ? (
                    <CommandGroup heading="Suggested">
                      {suggestions.map((suggestion) => (
                        <Fragment key={suggestion}>
                          {phonePrefix.find(
                            (prefixObject) =>
                              prefixObject.country === suggestion
                          ) && (
                            <CommandItem
                              className="gap-2"
                              key={
                                phonePrefix.find(
                                  (prefixObject) =>
                                    prefixObject.country === suggestion
                                )?.prefix
                              }
                              onSelect={() => {
                                setInputValue(
                                  `${phonePrefix
                                    .find(
                                      (prefixObject) =>
                                        prefixObject.country === suggestion
                                    )
                                    ?.prefix.replace(/[^0-9]/g, "")}`
                                );
                                if (onInputChange) {
                                  onInputChange(
                                    `${phonePrefix
                                      .find(
                                        (prefixObject) =>
                                          prefixObject.country === suggestion
                                      )
                                      ?.prefix.replace(/[^0-9]/g, "")}`
                                  );
                                }
                                setOpen(false);
                              }}
                              value={
                                phonePrefix.find(
                                  (prefixObject) =>
                                    prefixObject.country === suggestion
                                )?.name
                              }
                            >
                              <Image
                                alt={`${phonePrefix.find(
                                  (prefixObject) =>
                                    prefixObject.country === suggestion
                                )?.country}-flag`}
                                height={15}
                                loading="lazy"
                                src={`/flags/${phonePrefix.find(
                                  (prefixObject) =>
                                    prefixObject.country === suggestion
                                )?.country}.svg`}
                                width={15}
                              />
                              {
                                phonePrefix.find(
                                  (prefixObject) =>
                                    prefixObject.country === suggestion
                                )?.name
                              }
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  selectedPrefix ===
                                    phonePrefix.find(
                                      (prefixObject) =>
                                        prefixObject.country === suggestion
                                    )
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          )}
                        </Fragment>
                      ))}
                    </CommandGroup>
                  ) : undefined}
                  <CommandGroup {...{ heading: "All" }}>
                    {phonePrefix
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((prefixInMap) => (
                        <CommandItem
                          className="gap-2"
                          key={prefixInMap.prefix}
                          onSelect={() => {
                            setInputValue(
                              prefixInMap.prefix.replace(/[^0-9]/g, "")
                            );
                            if (onInputChange) {
                              onInputChange(
                                prefixInMap.prefix.replace(/[^0-9]/g, "")
                              );
                            }
                            setOpen(false);
                          }}
                          value={prefixInMap.name}
                        >
                          <Image
                            alt={`${prefixInMap.country}-flag`}
                            height={15}
                            src={`/flags/${prefixInMap.country}.svg`}
                            width={15}
                          />
                          {prefixInMap.name}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              selectedPrefix === prefixInMap
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <Input
          className={cn(
            "flex h-9 w-full rounded-md border-0 px-3 py-1 text-sm shadow-none transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent",
            status === "success" &&
              "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600",
            status === "error" &&
              "text-red-500 placeholder:opacity-80 placeholder:text-red-500",
            className
          )}
          disabled={disabled}
          inputMode="tel"
          noPrefixAnimation
          onBlur={(ev) => {
            if (ContainerRef.current) {
              Object.assign(ContainerRef.current.style, {
                boxShadow: "",
                transform: "translateY(0px)",
              });
            }
            if (onBlur) onBlur(ev);
          }}
          onChange={(ev) => {
            ev.target.value = ev.target.value.replace(/[^0-9]/g, "");
            setInputValue(ev.target.value);
            if (onInputChange) onInputChange(ev.target.value);
          }}
          onFocus={(ev) => {
            if (ContainerRef.current && !readOnly && !disabled) {
              Object.assign(ContainerRef.current.style, {
                boxShadow: getStatusStyling(),
                transform: "translateY(-1px)",
              });
            }
            if (onFocus) onFocus(ev);
          }}
          prefix="+ "
          readOnly={readOnly}
          ref={ref}
          type="text"
          value={value ?? inputValue}
          {...rest}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
