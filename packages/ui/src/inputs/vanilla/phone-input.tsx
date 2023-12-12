import type { InputHTMLAttributes } from "react";
import { Fragment, forwardRef, useRef, useState } from "react";
import { Check } from "lucide-react";
import {
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
} from "../../shared";
import { cn } from "../../lib/utils";
import { Input } from "./input";

const phonePrefix = [
  {
    name: "Afghanistan",
    prefix: "+93",
    country: "af",
    flag: "🇦🇫",
  },
  {
    name: "Albania",
    prefix: "+355",
    country: "al",
    flag: "🇦🇱",
  },
  {
    name: "Algeria",
    prefix: "+213",
    country: "dz",
    flag: "🇩🇿",
  },
  {
    name: "American Samoa",
    prefix: "+1-684",
    country: "as",
    flag: "🇦🇸",
  },
  {
    name: "Andorra",
    prefix: "+376",
    country: "ad",
    flag: "🇦🇩",
  },
  {
    name: "Angola",
    prefix: "+244",
    country: "ao",
    flag: "🇦🇴",
  },
  {
    name: "Anguilla",
    prefix: "+1-264",
    country: "ai",
    flag: "🇦🇮",
  },
  {
    name: "Antarctica",
    prefix: "+672",
    country: "aq",
    flag: "🇦🇶",
  },
  {
    name: "Antigua and Barbuda",
    prefix: "+1268",
    country: "ag",
    flag: "🇦🇬",
  },
  {
    name: "Argentina",
    prefix: "+54",
    country: "ar",
    flag: "🇦🇷",
  },
  {
    name: "Armenia",
    prefix: "+374",
    country: "am",
    flag: "🇦🇲",
  },
  {
    name: "Aruba",
    prefix: "+297",
    country: "aw",
    flag: "🇦🇼",
  },
  {
    name: "Australia",
    prefix: "+61",
    country: "au",
    flag: "🇦🇺",
  },
  {
    name: "Austria",
    prefix: "+43",
    country: "at",
    flag: "🇦🇹",
  },
  {
    name: "Azerbaijan",
    prefix: "+994",
    country: "az",
    flag: "🇦🇿",
  },
  {
    name: "Bahamas",
    prefix: "+1-242",
    country: "bs",
    flag: "🇧🇸",
  },
  {
    name: "Bahrain",
    prefix: "+973",
    country: "bh",
    flag: "🇧🇭",
  },
  {
    name: "Bangladesh",
    prefix: "+880",
    country: "bd",
    flag: "🇧🇩",
  },
  {
    name: "Barbados",
    prefix: "+1-246",
    country: "bb",
    flag: "🇧🇧",
  },
  {
    name: "Belarus",
    prefix: "+375",
    country: "by",
    flag: "🇧🇾",
  },
  {
    name: "Belgium",
    prefix: "+32",
    country: "be",
    flag: "🇧🇪",
  },
  {
    name: "Belize",
    prefix: "+501",
    country: "bz",
    flag: "🇧🇿",
  },
  {
    name: "Benin",
    prefix: "+229",
    country: "bj",
    flag: "🇧🇯",
  },
  {
    name: "Bermuda",
    prefix: "+1-441",
    country: "bm",
    flag: "🇧🇲",
  },
  {
    name: "Bhutan",
    prefix: "+975",
    country: "bt",
    flag: "🇧🇹",
  },
  {
    name: "Bolivia",
    prefix: "+591",
    country: "bo",
    flag: "🇧🇴",
  },
  {
    name: "Bosnia and Herzegovina",
    prefix: "+387",
    country: "ba",
    flag: "🇧🇦",
  },
  {
    name: "Botswana",
    prefix: "+267",
    country: "bw",
    flag: "🇧🇼",
  },
  {
    name: "Brazil",
    prefix: "+55",
    country: "br",
    flag: "🇧🇷",
  },
  {
    name: "British Indian Ocean Territory",
    prefix: "+246",
    country: "io",
    flag: "🇮🇴",
  },
  {
    name: "British Virgin Islands",
    prefix: "+1-284",
    country: "vg",
    flag: "🇻🇬",
  },
  {
    name: "Brunei",
    prefix: "+673",
    country: "bn",
    flag: "🇧🇳",
  },
  {
    name: "Bulgaria",
    prefix: "+359",
    country: "bg",
    flag: "🇧🇬",
  },
  {
    name: "Burkina Faso",
    prefix: "+226",
    country: "bf",
    flag: "🇧🇫",
  },
  {
    name: "Burundi",
    prefix: "+257",
    country: "bi",
    flag: "🇧🇮",
  },
  {
    name: "Cambodia",
    prefix: "+855",
    country: "kh",
    flag: "🇰🇭",
  },
  {
    name: "Cameroon",
    prefix: "+237",
    country: "cm",
    flag: "🇨🇲",
  },
  {
    name: "Canada",
    prefix: "+1",
    country: "ca",
    flag: "🇨🇦",
  },
  {
    name: "Cape Verde",
    prefix: "+238",
    country: "cv",
    flag: "🇨🇻",
  },
  {
    name: "Cayman Islands",
    prefix: "+1-345",
    country: "ky",
    flag: "🇰🇾",
  },
  {
    name: "Central African Republic",
    prefix: "+236",
    country: "cf",
    flag: "🇨🇫",
  },
  {
    name: "Chad",
    prefix: "+235",
    country: "td",
    flag: "🇹🇩",
  },
  {
    name: "Chile",
    prefix: "+56",
    country: "cl",
    flag: "🇨🇱",
  },
  {
    name: "China",
    prefix: "+86",
    country: "cn",
    flag: "🇨🇳",
  },
  {
    name: "Christmas Island",
    prefix: "+61",
    country: "cx",
    flag: "🇨🇽",
  },
  {
    name: "Cocos Islands",
    prefix: "+61",
    country: "cc",
    flag: "🇨🇨",
  },
  {
    name: "Colombia",
    prefix: "+57",
    country: "co",
    flag: "🇨🇴",
  },
  {
    name: "Comoros",
    prefix: "+269",
    country: "km",
    flag: "🇰🇲",
  },
  {
    name: "Cook Islands",
    prefix: "+682",
    country: "ck",
    flag: "🇨🇰",
  },
  {
    name: "Costa Rica",
    prefix: "+506",
    country: "cr",
    flag: "🇨🇷",
  },
  {
    name: "Croatia",
    prefix: "+385",
    country: "hr",
    flag: "🇭🇷",
  },
  {
    name: "Cuba",
    prefix: "+53",
    country: "cu",
    flag: "🇨🇺",
  },
  {
    name: "Curacao",
    prefix: "+599",
    country: "cw",
    flag: "🇨🇼",
  },
  {
    name: "Cyprus",
    prefix: "+357",
    country: "cy",
    flag: "🇨🇾",
  },
  {
    name: "Czech Republic",
    prefix: "+420",
    country: "cz",
    flag: "🇨🇿",
  },
  {
    name: "Democratic Republic of the Congo",
    prefix: "+243",
    country: "cd",
    flag: "🇨🇩",
  },
  {
    name: "Denmark",
    prefix: "+45",
    country: "dk",
    flag: "🇩🇰",
  },
  {
    name: "Djibouti",
    prefix: "+253",
    country: "dj",
    flag: "🇩🇯",
  },
  {
    name: "Dominica",
    prefix: "+1-767",
    country: "dm",
    flag: "🇩🇲",
  },
  {
    name: "Dominican Republic",
    prefix: "+1-809, 1-829, 1-849",
    country: "do",
    flag: "🇩🇴",
  },
  {
    name: "East Timor",
    prefix: "+670",
    country: "tl",
    flag: "🇹🇱",
  },
  {
    name: "Ecuador",
    prefix: "+593",
    country: "ec",
    flag: "🇪🇨",
  },
  {
    name: "Egypt",
    prefix: "+20",
    country: "eg",
    flag: "🇪🇬",
  },
  {
    name: "El Salvador",
    prefix: "+503",
    country: "sv",
    flag: "🇸🇻",
  },
  {
    name: "Equatorial Guinea",
    prefix: "+240",
    country: "gq",
    flag: "🇬🇶",
  },
  {
    name: "Eritrea",
    prefix: "+291",
    country: "er",
    flag: "🇪🇷",
  },
  {
    name: "Estonia",
    prefix: "+372",
    country: "ee",
    flag: "🇪🇪",
  },
  {
    name: "Ethiopia",
    prefix: "+251",
    country: "et",
    flag: "🇪🇹",
  },
  {
    name: "Falkland Islands",
    prefix: "+500",
    country: "fk",
    flag: "🇫🇰",
  },
  {
    name: "Faroe Islands",
    prefix: "+298",
    country: "fo",
    flag: "🇫🇴",
  },
  {
    name: "Fiji",
    prefix: "+679",
    country: "fj",
    flag: "🇫🇯",
  },
  {
    name: "Finland",
    prefix: "+358",
    country: "fi",
    flag: "🇫🇮",
  },
  {
    name: "France",
    prefix: "+33",
    country: "fr",
    flag: "🇫🇷",
  },
  {
    name: "French Polynesia",
    prefix: "+689",
    country: "pf",
    flag: "🇵🇫",
  },
  {
    name: "Gabon",
    prefix: "+241",
    country: "ga",
    flag: "🇬🇦",
  },
  {
    name: "Gambia",
    prefix: "+220",
    country: "gm",
    flag: "🇬🇲",
  },
  {
    name: "Georgia",
    prefix: "+995",
    country: "ge",
    flag: "🇬🇪",
  },
  {
    name: "Germany",
    prefix: "+49",
    country: "de",
    flag: "🇩🇪",
  },
  {
    name: "Ghana",
    prefix: "+233",
    country: "gh",
    flag: "🇬🇭",
  },
  {
    name: "Gibraltar",
    prefix: "+350",
    country: "gi",
    flag: "🇬🇮",
  },
  {
    name: "Greece",
    prefix: "+30",
    country: "gr",
    flag: "🇬🇷",
  },
  {
    name: "Greenland",
    prefix: "+299",
    country: "gl",
    flag: "🇬🇱",
  },
  {
    name: "Grenada",
    prefix: "+1473",
    country: "gd",
    flag: "🇬🇩",
  },
  {
    name: "Guam",
    prefix: "+1-671",
    country: "gu",
    flag: "🇬🇺",
  },
  {
    name: "Guatemala",
    prefix: "+502",
    country: "gt",
    flag: "🇬🇹",
  },
  {
    name: "Guernsey",
    prefix: "+44-1481",
    country: "gg",
    flag: "🇬🇬",
  },
  {
    name: "Guinea",
    prefix: "+224",
    country: "gn",
    flag: "🇬🇳",
  },
  {
    name: "Guinea-Bissau",
    prefix: "+245",
    country: "gw",
    flag: "🇬🇼",
  },
  {
    name: "Guyana",
    prefix: "+592",
    country: "gy",
    flag: "🇬🇾",
  },
  {
    name: "Haiti",
    prefix: "+509",
    country: "ht",
    flag: "🇭🇹",
  },
  {
    name: "Honduras",
    prefix: "+504",
    country: "hn",
    flag: "🇭🇳",
  },
  {
    name: "Hong Kong",
    prefix: "+852",
    country: "hk",
    flag: "🇭🇰",
  },
  {
    name: "Hungary",
    prefix: "+36",
    country: "hu",
    flag: "🇭🇺",
  },
  {
    name: "Iceland",
    prefix: "+354",
    country: "is",
    flag: "🇮🇸",
  },
  {
    name: "India",
    prefix: "+91",
    country: "in",
    flag: "🇮🇳",
  },
  {
    name: "Indonesia",
    prefix: "+62",
    country: "id",
    flag: "🇮🇩",
  },
  {
    name: "Iran",
    prefix: "+98",
    country: "ir",
    flag: "🇮🇷",
  },
  {
    name: "Iraq",
    prefix: "+964",
    country: "iq",
    flag: "🇮🇶",
  },
  {
    name: "Ireland",
    prefix: "+353",
    country: "ie",
    flag: "🇮🇪",
  },
  {
    name: "Isle of Man",
    prefix: "+44-1624",
    country: "im",
    flag: "🇮🇲",
  },
  {
    name: "Israel",
    prefix: "+972",
    country: "il",
    flag: "🇮🇱",
  },
  {
    name: "Italy",
    prefix: "+39",
    country: "it",
    flag: "🇮🇹",
  },
  {
    name: "Ivory Coast",
    prefix: "+225",
    country: "ci",
    flag: "🇨🇮",
  },
  {
    name: "Jamaica",
    prefix: "+1-876",
    country: "jm",
    flag: "🇯🇲",
  },
  {
    name: "Japan",
    prefix: "+81",
    country: "jp",
    flag: "🇯🇵",
  },
  {
    name: "Jersey",
    prefix: "+44-1534",
    country: "je",
    flag: "🇯🇪",
  },
  {
    name: "Jordan",
    prefix: "+962",
    country: "jo",
    flag: "🇯🇴",
  },
  {
    name: "Kazakhstan",
    prefix: "+7",
    country: "kz",
    flag: "🇰🇿",
  },
  {
    name: "Kenya",
    prefix: "+254",
    country: "ke",
    flag: "🇰🇪",
  },
  {
    name: "Kiribati",
    prefix: "+686",
    country: "ki",
    flag: "🇰🇮",
  },
  {
    name: "Kosovo",
    prefix: "+383",
    country: "xk",
    flag: "🇽🇰",
  },
  {
    name: "Kuwait",
    prefix: "+965",
    country: "kw",
    flag: "🇰🇼",
  },
  {
    name: "Kyrgyzstan",
    prefix: "+996",
    country: "kg",
    flag: "🇰🇬",
  },
  {
    name: "Laos",
    prefix: "+856",
    country: "la",
    flag: "🇱🇦",
  },
  {
    name: "Latvia",
    prefix: "+371",
    country: "lv",
    flag: "🇱🇻",
  },
  {
    name: "Lebanon",
    prefix: "+961",
    country: "lb",
    flag: "🇱🇧",
  },
  {
    name: "Lesotho",
    prefix: "+266",
    country: "ls",
    flag: "🇱🇸",
  },
  {
    name: "Liberia",
    prefix: "+231",
    country: "lr",
    flag: "🇱🇷",
  },
  {
    name: "Libya",
    prefix: "+218",
    country: "ly",
    flag: "🇱🇾",
  },
  {
    name: "Liechtenstein",
    prefix: "+423",
    country: "li",
    flag: "🇱🇮",
  },
  {
    name: "Lithuania",
    prefix: "+370",
    country: "lt",
    flag: "🇱🇹",
  },
  {
    name: "Luxembourg",
    prefix: "+352",
    country: "lu",
    flag: "🇱🇺",
  },
  {
    name: "Macao",
    prefix: "+853",
    country: "mo",
    flag: "🇲🇴",
  },
  {
    name: "Macedonia",
    prefix: "+389",
    country: "mk",
    flag: "🇲🇰",
  },
  {
    name: "Madagascar",
    prefix: "+261",
    country: "mg",
    flag: "🇲🇬",
  },
  {
    name: "Malawi",
    prefix: "+265",
    country: "mw",
    flag: "🇲🇼",
  },
  {
    name: "Malaysia",
    prefix: "+60",
    country: "my",
    flag: "🇲🇾",
  },
  {
    name: "Maldives",
    prefix: "+960",
    country: "mv",
    flag: "🇲🇻",
  },
  {
    name: "Mali",
    prefix: "+223",
    country: "ml",
    flag: "🇲🇱",
  },
  {
    name: "Malta",
    prefix: "+356",
    country: "mt",
    flag: "🇲🇹",
  },
  {
    name: "Marshall Islands",
    prefix: "+692",
    country: "mh",
    flag: "🇲🇭",
  },
  {
    name: "Mauritania",
    prefix: "+222",
    country: "mr",
    flag: "🇲🇷",
  },
  {
    name: "Mauritius",
    prefix: "+230",
    country: "mu",
    flag: "🇲🇺",
  },
  {
    name: "Mayotte",
    prefix: "+262",
    country: "yt",
    flag: "🇾🇹",
  },
  {
    name: "Mexico",
    prefix: "+52",
    country: "mx",
    flag: "🇲🇽",
  },
  {
    name: "Micronesia",
    prefix: "+691",
    country: "fm",
    flag: "🇫🇲",
  },
  {
    name: "Moldova",
    prefix: "+373",
    country: "md",
    flag: "🇲🇩",
  },
  {
    name: "Monaco",
    prefix: "+377",
    country: "mc",
    flag: "🇲🇨",
  },
  {
    name: "Mongolia",
    prefix: "+976",
    country: "mn",
    flag: "🇲🇳",
  },
  {
    name: "Montenegro",
    prefix: "+382",
    country: "me",
    flag: "🇲🇪",
  },
  {
    name: "Montserrat",
    prefix: "+1664",
    country: "ms",
    flag: "🇲🇸",
  },
  {
    name: "Morocco",
    prefix: "+212",
    country: "ma",
    flag: "🇲🇦",
  },
  {
    name: "Mozambique",
    prefix: "+258",
    country: "mz",
    flag: "🇲🇿",
  },
  {
    name: "Myanmar",
    prefix: "+95",
    country: "mm",
    flag: "🇲🇲",
  },
  {
    name: "Namibia",
    prefix: "+264",
    country: "na",
    flag: "🇳🇦",
  },
  {
    name: "Nauru",
    prefix: "+674",
    country: "nr",
    flag: "🇳🇷",
  },
  {
    name: "Nepal",
    prefix: "+977",
    country: "np",
    flag: "🇳🇵",
  },
  {
    name: "Netherlands",
    prefix: "+31",
    country: "nl",
    flag: "🇳🇱",
  },
  {
    name: "Netherlands Antilles",
    prefix: "+599",
    country: "an",
    flag: "🇦🇳",
  },
  {
    name: "New Caledonia",
    prefix: "+687",
    country: "nc",
    flag: "🇳🇨",
  },
  {
    name: "New Zealand",
    prefix: "+64",
    country: "nz",
    flag: "🇳🇿",
  },
  {
    name: "Nicaragua",
    prefix: "+505",
    country: "ni",
    flag: "🇳🇮",
  },
  {
    name: "Niger",
    prefix: "+227",
    country: "ne",
    flag: "🇳🇪",
  },
  {
    name: "Nigeria",
    prefix: "+234",
    country: "ng",
    flag: "🇳🇬",
  },
  {
    name: "Niue",
    prefix: "+683",
    country: "nu",
    flag: "🇳🇺",
  },
  {
    name: "North Korea",
    prefix: "+850",
    country: "kp",
    flag: "🇰🇵",
  },
  {
    name: "Northern Mariana Islands",
    prefix: "+1-670",
    country: "mp",
    flag: "🇲🇵",
  },
  {
    name: "Norway",
    prefix: "+47",
    country: "no",
    flag: "🇳🇴",
  },
  {
    name: "Oman",
    prefix: "+968",
    country: "om",
    flag: "🇴🇲",
  },
  {
    name: "Pakistan",
    prefix: "+92",
    country: "pk",
    flag: "🇵🇰",
  },
  {
    name: "Palau",
    prefix: "+680",
    country: "pw",
    flag: "🇵🇼",
  },
  {
    name: "Palestine",
    prefix: "+970",
    country: "ps",
    flag: "🇵🇸",
  },
  {
    name: "Panama",
    prefix: "+507",
    country: "pa",
    flag: "🇵🇦",
  },
  {
    name: "Papua New Guinea",
    prefix: "+675",
    country: "pg",
    flag: "🇵🇬",
  },
  {
    name: "Paraguay",
    prefix: "+595",
    country: "py",
    flag: "🇵🇾",
  },
  {
    name: "Peru",
    prefix: "+51",
    country: "pe",
    flag: "🇵🇪",
  },
  {
    name: "Philippines",
    prefix: "+63",
    country: "ph",
    flag: "🇵🇭",
  },
  {
    name: "Pitcairn",
    prefix: "+64",
    country: "pn",
    flag: "🇵🇳",
  },
  {
    name: "Poland",
    prefix: "+48",
    country: "pl",
    flag: "🇵🇱",
  },
  {
    name: "Portugal",
    prefix: "+351",
    country: "pt",
    flag: "🇵🇹",
  },
  {
    name: "Puerto Rico",
    prefix: "+1787",
    country: "pr",
    flag: "🇵🇷",
  },
  {
    name: "Qatar",
    prefix: "+974",
    country: "qa",
    flag: "🇶🇦",
  },
  {
    name: "Republic of the Congo",
    prefix: "+242",
    country: "cg",
    flag: "🇨🇬",
  },
  {
    name: "Reunion",
    prefix: "+262",
    country: "re",
    flag: "🇷🇪",
  },
  {
    name: "Romania",
    prefix: "+40",
    country: "ro",
    flag: "🇷🇴",
  },
  {
    name: "Russia",
    prefix: "+7",
    country: "ru",
    flag: "🇷🇺",
  },
  {
    name: "Rwanda",
    prefix: "+250",
    country: "rw",
    flag: "🇷🇼",
  },
  {
    name: "Saint Barthelemy",
    prefix: "+590",
    country: "bl",
    flag: "🇧🇱",
  },
  {
    name: "Saint Helena",
    prefix: "+290",
    country: "sh",
    flag: "🇸🇭",
  },
  {
    name: "Saint Kitts and Nevis",
    prefix: "+1-869",
    country: "kn",
    flag: "🇰🇳",
  },
  {
    name: "Saint Lucia",
    prefix: "+1-758",
    country: "lc",
    flag: "🇱🇨",
  },
  {
    name: "Saint Martin",
    prefix: "+590",
    country: "mf",
    flag: "🇲🇫",
  },
  {
    name: "Saint Pierre and Miquelon",
    prefix: "+508",
    country: "pm",
    flag: "🇵🇲",
  },
  {
    name: "Saint Vincent and the Grenadines",
    prefix: "+1784",
    country: "vc",
    flag: "🇻🇨",
  },
  {
    name: "Samoa",
    prefix: "+685",
    country: "ws",
    flag: "🇼🇸",
  },
  {
    name: "San Marino",
    prefix: "+378",
    country: "sm",
    flag: "🇸🇲",
  },
  {
    name: "Sao Tome and Principe",
    prefix: "+239",
    country: "st",
    flag: "🇸🇹",
  },
  {
    name: "Saudi Arabia",
    prefix: "+966",
    country: "sa",
    flag: "🇸🇦",
  },
  {
    name: "Senegal",
    prefix: "+221",
    country: "sn",
    flag: "🇸🇳",
  },
  {
    name: "Serbia",
    prefix: "+381",
    country: "rs",
    flag: "🇷🇸",
  },
  {
    name: "Seychelles",
    prefix: "+248",
    country: "sc",
    flag: "🇸🇨",
  },
  {
    name: "Sierra Leone",
    prefix: "+232",
    country: "sl",
    flag: "🇸🇱",
  },
  {
    name: "Singapore",
    prefix: "+65",
    country: "sg",
    flag: "🇸🇬",
  },
  {
    name: "Sint Maarten",
    prefix: "+1721",
    country: "sx",
    flag: "🇸🇽",
  },
  {
    name: "Slovakia",
    prefix: "+421",
    country: "sk",
    flag: "🇸🇰",
  },
  {
    name: "Slovenia",
    prefix: "+386",
    country: "si",
    flag: "🇸🇮",
  },
  {
    name: "Solomon Islands",
    prefix: "+677",
    country: "sb",
    flag: "🇸🇧",
  },
  {
    name: "Somalia",
    prefix: "+252",
    country: "so",
    flag: "🇸🇴",
  },
  {
    name: "South Africa",
    prefix: "+27",
    country: "za",
    flag: "🇿🇦",
  },
  {
    name: "South Korea",
    prefix: "+82",
    country: "kr",
    flag: "🇰🇷",
  },
  {
    name: "South Sudan",
    prefix: "+211",
    country: "ss",
    flag: "🇸🇸",
  },
  {
    name: "Spain",
    prefix: "+34",
    country: "es",
    flag: "🇪🇸",
  },
  {
    name: "Sri Lanka",
    prefix: "+94",
    country: "lk",
    flag: "🇱🇰",
  },
  {
    name: "Sudan",
    prefix: "+249",
    country: "sd",
    flag: "🇸🇩",
  },
  {
    name: "Suriname",
    prefix: "+597",
    country: "sr",
    flag: "🇸🇷",
  },
  {
    name: "Svalbard and Jan Mayen",
    prefix: "+47",
    country: "sj",
    flag: "🇸🇯",
  },
  {
    name: "Swaziland",
    prefix: "+268",
    country: "sz",
    flag: "🇸🇿",
  },
  {
    name: "Sweden",
    prefix: "+46",
    country: "se",
    flag: "🇸🇪",
  },
  {
    name: "Switzerland",
    prefix: "+41",
    country: "ch",
    flag: "🇨🇭",
  },
  {
    name: "Syria",
    prefix: "+963",
    country: "sy",
    flag: "🇸🇾",
  },
  {
    name: "Taiwan",
    prefix: "+886",
    country: "tw",
    flag: "🇹🇼",
  },
  {
    name: "Tajikistan",
    prefix: "+992",
    country: "tj",
    flag: "🇹🇯",
  },
  {
    name: "Tanzania",
    prefix: "+255",
    country: "tz",
    flag: "🇹🇿",
  },
  {
    name: "Thailand",
    prefix: "+66",
    country: "th",
    flag: "🇹🇭",
  },
  {
    name: "Togo",
    prefix: "+228",
    country: "tg",
    flag: "🇹🇬",
  },
  {
    name: "Tokelau",
    prefix: "+690",
    country: "tk",
    flag: "🇹🇰",
  },
  {
    name: "Tonga",
    prefix: "+676",
    country: "to",
    flag: "🇹🇴",
  },
  {
    name: "Trinidad and Tobago",
    prefix: "+1-868",
    country: "tt",
    flag: "🇹🇹",
  },
  {
    name: "Tunisia",
    prefix: "+216",
    country: "tn",
    flag: "🇹🇳",
  },
  {
    name: "Turkey",
    prefix: "+90",
    country: "tr",
    flag: "🇹🇷",
  },
  {
    name: "Turkmenistan",
    prefix: "+993",
    country: "tm",
    flag: "🇹🇲",
  },
  {
    name: "Turks and Caicos Islands",
    prefix: "+1649",
    country: "tc",
    flag: "🇹🇨",
  },
  {
    name: "Tuvalu",
    prefix: "+688",
    country: "tv",
    flag: "🇹🇻",
  },
  {
    name: "U.S. Virgin Islands",
    prefix: "+1340",
    country: "vi",
    flag: "🇻🇮",
  },
  {
    name: "Uganda",
    prefix: "+256",
    country: "ug",
    flag: "🇺🇬",
  },
  {
    name: "Ukraine",
    prefix: "+380",
    country: "ua",
    flag: "🇺🇦",
  },
  {
    name: "United Arab Emirates",
    prefix: "+971",
    country: "ae",
    flag: "🇦🇪",
  },
  {
    name: "United Kingdom",
    prefix: "+44",
    country: "gb",
    flag: "🇬🇧",
  },
  {
    name: "United States",
    prefix: "+1",
    country: "us",
    flag: "🇺🇸",
  },
  {
    name: "Uruguay",
    prefix: "+598",
    country: "uy",
    flag: "🇺🇾",
  },
  {
    name: "Uzbekistan",
    prefix: "+998",
    country: "uz",
    flag: "🇺🇿",
  },
  {
    name: "Vanuatu",
    prefix: "+678",
    country: "vu",
    flag: "🇻🇺",
  },
  {
    name: "Vatican",
    prefix: "+379",
    country: "va",
    flag: "🇻🇦",
  },
  {
    name: "Venezuela",
    prefix: "+58",
    country: "ve",
    flag: "🇻🇪",
  },
  {
    name: "Vietnam",
    prefix: "+84",
    country: "vn",
    flag: "🇻🇳",
  },
  {
    name: "Wallis and Futuna",
    prefix: "+681",
    country: "wf",
    flag: "🇼🇫",
  },
  {
    name: "Western Sahara",
    prefix: "+212",
    country: "eh",
    flag: "🇪🇭",
  },
  {
    name: "Yemen",
    prefix: "+967",
    country: "ye",
    flag: "🇾🇪",
  },
  {
    name: "Zambia",
    prefix: "+260",
    country: "zm",
    flag: "🇿🇲",
  },
  {
    name: "Zimbabwe",
    prefix: "+263",
    country: "zw",
    flag: "🇿🇼",
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
                className="flex justify-center items-center text-lg p-0 w-10"
                role="combobox"
                variant="ghost"
              >
                <span>{selectedPrefix ? selectedPrefix.flag : "🇪🇺"}</span>
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
                              <span>
                                {
                                  phonePrefix.find(
                                    (prefixObject) =>
                                      prefixObject.country === suggestion
                                  )?.flag
                                }
                              </span>
                              {
                                phonePrefix.find(
                                  (prefixObject) =>
                                    prefixObject.country === suggestion
                                )?.name
                              }
                              <Check
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
                          <span>{prefixInMap.flag}</span>
                          {prefixInMap.name}
                          <Check
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
