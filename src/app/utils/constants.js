'use client'
export const DATEPICKER_DATE_FORMAT = "yyyy-mm-dd";
export const DATEPICKER_DATE_RANGE_FORMAT = "YYYY-MM-DD";
export const SERVER_DATETIME_FORMAT = "YYYY-MM-DD hh:mm";
export const DEFAULT_DATETIME_FORMAT = "MMM DD YYYY hh:mm A";
export const DEFAULT_TIME_FORMAT = "hh:mm A";
export const FLAT_TIME_FORMAT = "YYYY-MM-DDTHH:mm";
export const DEFAULT_TIMELINE_DATE_LABEL_FORMAT = "MMM DD YYYY";
export const DATE_FORMAT = "YYYY-MM-DD";
export const DATE_DISPLAY_FORMAT = "MMM DD YYYY";
export const CALENDER_CURRENT_MONTH = "current_month";
export const CALENDER_LAST_MONTH = "last_month";
export const CALENDER_NEXT_MONTH = "next_month";

export const CALENDER_MONTH_MODE = "month_mode";
export const CALENDER_DAY_MODE = "day_mode";

export const MULTIPLE_EMAIL_DELIMITER = ";";

export const MAXIMUM_EVENT_ITEM_TILE_DISPLAY = 2;

export const CHART_STROKE_MAXIMUM = 380;

//Cookie
export const tokenCookieLifeTime = 1; // Days
export const refreshCookieLifeTime = 1; // Days

//Form limits
export const MIN_PASSWORD = 3;
export const MAX_PASSWORD = 30;
export const MAX_MOBILE = 10;

// Key Constants
export const tokenKey = "token";
export const visionKey = "tempVision";
export const refreshKey = "refresh";

export const visitorKey = "visitor";

export const adminRole = "admin";
export const ownerRole = "owner";
export const staffRole = "staff";
export const memberRole = "member";
export const freePlan = "free";
export const paidPlan = "paid";
export const enterprisePlan = "enterprise";

const searchFilter = "searchFilter";
const optionFilter = "optionFilter";
const dateRangeFilter = "dateRangeFilter";

export const FilterType = {
    search: searchFilter,
    option: optionFilter,
    dateRange: dateRangeFilter,
};
export const DATE_RANGE_FILTER_GAP = 7;

// Conversation Limits
export const MaxConversationPeekLength = 22;
// Class names with respect to userObserver
export const Desktop = "desktop";
export const Tablet = "tablet";
export const Mobile = "mobile";
export const Roles = [
    "UI/UX Developer",
    "Fronend Developer",
    "Backend Developer",
    "QA Engineer",
    "Product Manager",
];
export const TimeZonesA = [
    "Europe/Andorra",
    "Asia/Dubai",
    "Asia/Kabul",
    "Europe/Tirane",
    "Asia/Yerevan",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville",
    "Antarctica/Mawson",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Cordoba",
    "America/Argentina/Salta",
    "America/Argentina/Jujuy",
    "America/Argentina/Tucuman",
    "America/Argentina/Catamarca",
    "America/Argentina/La_Rioja",
    "America/Argentina/San_Juan",
    "America/Argentina/Mendoza",
    "America/Argentina/San_Luis",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Ushuaia",
    "Pacific/Pago_Pago",
    "Europe/Vienna",
    "Australia/Lord_Howe",
    "Antarctica/Macquarie",
    "Australia/Hobart",
    "Australia/Currie",
    "Australia/Melbourne",
    "Australia/Sydney",
    "Australia/Broken_Hill",
    "Australia/Brisbane",
    "Australia/Lindeman",
    "Australia/Adelaide",
    "Australia/Darwin",
    "Australia/Perth",
    "Australia/Eucla",
    "Asia/Baku",
    "America/Barbados",
    "Asia/Dhaka",
    "Europe/Brussels",
    "Europe/Sofia",
    "Atlantic/Bermuda",
    "Asia/Brunei",
    "America/La_Paz",
    "America/Noronha",
    "America/Belem",
    "America/Fortaleza",
    "America/Recife",
    "America/Araguaina",
    "America/Maceio",
    "America/Bahia",
    "America/Sao_Paulo",
    "America/Campo_Grande",
    "America/Cuiaba",
    "America/Santarem",
    "America/Porto_Velho",
    "America/Boa_Vista",
    "America/Manaus",
    "America/Eirunepe",
    "America/Rio_Branco",
    "America/Nassau",
    "Asia/Thimphu",
    "Europe/Minsk",
    "America/Belize",
    "America/St_Johns",
    "America/Halifax",
    "America/Glace_Bay",
    "America/Moncton",
    "America/Goose_Bay",
    "America/Blanc-Sablon",
    "America/Toronto",
    "America/Nipigon",
    "America/Thunder_Bay",
    "America/Iqaluit",
    "America/Pangnirtung",
    "America/Atikokan",
    "America/Winnipeg",
    "America/Rainy_River",
    "America/Resolute",
    "America/Rankin_Inlet",
    "America/Regina",
    "America/Swift_Current",
    "America/Edmonton",
    "America/Cambridge_Bay",
    "America/Yellowknife",
    "America/Inuvik",
    "America/Creston",
    "America/Dawson_Creek",
    "America/Fort_Nelson",
    "America/Vancouver",
    "America/Whitehorse",
    "America/Dawson",
    "Indian/Cocos",
    "Europe/Zurich",
    "Africa/Abidjan",
    "Pacific/Rarotonga",
    "America/Santiago",
    "America/Punta_Arenas",
    "Pacific/Easter",
    "Asia/Shanghai",
    "Asia/Urumqi",
    "America/Bogota",
    "America/Costa_Rica",
    "America/Havana",
    "Atlantic/Cape_Verde",
    "America/Curacao",
    "Indian/Christmas",
    "Asia/Nicosia",
    "Asia/Famagusta",
    "Europe/Prague",
    "Europe/Berlin",
    "Europe/Copenhagen",
    "America/Santo_Domingo",
    "Africa/Algiers",
    "America/Guayaquil",
    "Pacific/Galapagos",
    "Europe/Tallinn",
    "Africa/Cairo",
    "Africa/El_Aaiun",
    "Europe/Madrid",
    "Africa/Ceuta",
    "Atlantic/Canary",
    "Europe/Helsinki",
    "Pacific/Fiji",
    "Atlantic/Stanley",
    "Pacific/Chuuk",
    "Pacific/Pohnpei",
    "Pacific/Kosrae",
    "Atlantic/Faroe",
    "Europe/Paris",
    "Europe/London",
    "Asia/Tbilisi",
    "America/Cayenne",
    "Africa/Accra",
    "Europe/Gibraltar",
    "America/Godthab",
    "America/Danmarkshavn",
    "America/Scoresbysund",
    "America/Thule",
    "Europe/Athens",
    "Atlantic/South_Georgia",
    "America/Guatemala",
    "Pacific/Guam",
    "Africa/Bissau",
    "America/Guyana",
    "Asia/Hong_Kong",
    "America/Tegucigalpa",
    "America/Port-au-Prince",
    "Europe/Budapest",
    "Asia/Jakarta",
    "Asia/Pontianak",
    "Asia/Makassar",
    "Asia/Jayapura",
    "Europe/Dublin",
    "Asia/Jerusalem",
    "Asia/Kolkata",
    "Asia/Calcutta",
    "Indian/Chagos",
    "Asia/Baghdad",
    "Asia/Tehran",
    "Atlantic/Reykjavik",
    "Europe/Rome",
    "America/Jamaica",
    "Asia/Amman",
    "Asia/Tokyo",
    "Africa/Nairobi",
    "Asia/Bishkek",
    "Pacific/Tarawa",
    "Pacific/Enderbury",
    "Pacific/Kiritimati",
    "Asia/Pyongyang",
    "Asia/Seoul",
    "Asia/Almaty",
    "Asia/Qyzylorda",
    "Asia/Qostanay",
    "Asia/Aqtobe",
    "Asia/Aqtau",
    "Asia/Atyrau",
    "Asia/Oral",
    "Asia/Beirut",
    "Asia/Colombo",
    "Africa/Monrovia",
    "Europe/Vilnius",
    "Europe/Luxembourg",
    "Europe/Riga",
    "Africa/Tripoli",
    "Africa/Casablanca",
    "Europe/Monaco",
    "Europe/Chisinau",
    "Pacific/Majuro",
    "Pacific/Kwajalein",
    "Asia/Yangon",
    "Asia/Ulaanbaatar",
    "Asia/Hovd",
    "Asia/Choibalsan",
    "Asia/Macau",
    "America/Martinique",
    "Europe/Malta",
    "Indian/Mauritius",
    "Indian/Maldives",
    "America/Mexico_City",
    "America/Cancun",
    "America/Merida",
    "America/Monterrey",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Chihuahua",
    "America/Ojinaga",
    "America/Hermosillo",
    "America/Tijuana",
    "America/Bahia_Banderas",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Africa/Maputo",
    "Africa/Windhoek",
    "Pacific/Noumea",
    "Pacific/Norfolk",
    "Africa/Lagos",
    "America/Managua",
    "Europe/Amsterdam",
    "Europe/Oslo",
    "Asia/Kathmandu",
    "Pacific/Nauru",
    "Pacific/Niue",
    "Pacific/Auckland",
    "Pacific/Chatham",
    "America/Panama",
    "America/Lima",
    "Pacific/Tahiti",
    "Pacific/Marquesas",
    "Pacific/Gambier",
    "Pacific/Port_Moresby",
    "Pacific/Bougainville",
    "Asia/Manila",
    "Asia/Karachi",
    "Europe/Warsaw",
    "America/Miquelon",
    "Pacific/Pitcairn",
    "America/Puerto_Rico",
    "Asia/Gaza",
    "Asia/Hebron",
    "Europe/Lisbon",
    "Atlantic/Madeira",
    "Atlantic/Azores",
    "Pacific/Palau",
    "America/Asuncion",
    "Asia/Qatar",
    "Indian/Reunion",
    "Europe/Bucharest",
    "Europe/Belgrade",
    "Europe/Kaliningrad",
    "Europe/Moscow",
    "Europe/Simferopol",
    "Europe/Kirov",
    "Europe/Astrakhan",
    "Europe/Volgograd",
    "Europe/Saratov",
    "Europe/Ulyanovsk",
    "Europe/Samara",
    "Asia/Yekaterinburg",
    "Asia/Omsk",
    "Asia/Novosibirsk",
    "Asia/Barnaul",
    "Asia/Tomsk",
    "Asia/Novokuznetsk",
    "Asia/Krasnoyarsk",
    "Asia/Irkutsk",
    "Asia/Chita",
    "Asia/Yakutsk",
    "Asia/Khandyga",
    "Asia/Vladivostok",
    "Asia/Ust-Nera",
    "Asia/Magadan",
    "Asia/Sakhalin",
    "Asia/Srednekolymsk",
    "Asia/Kamchatka",
    "Asia/Anadyr",
    "Asia/Riyadh",
    "Pacific/Guadalcanal",
    "Indian/Mahe",
    "Africa/Khartoum",
    "Europe/Stockholm",
    "Asia/Singapore",
    "America/Paramaribo",
    "Africa/Juba",
    "Africa/Sao_Tome",
    "America/El_Salvador",
    "Asia/Damascus",
    "America/Grand_Turk",
    "Africa/Ndjamena",
    "Indian/Kerguelen",
    "Asia/Bangkok",
    "Asia/Dushanbe",
    "Pacific/Fakaofo",
    "Asia/Dili",
    "Asia/Ashgabat",
    "Africa/Tunis",
    "Pacific/Tongatapu",
    "Europe/Istanbul",
    "America/Port_of_Spain",
    "Pacific/Funafuti",
    "Asia/Taipei",
    "Europe/Kiev",
    "Europe/Uzhgorod",
    "Europe/Zaporozhye",
    "Pacific/Wake",
    "America/New_York",
    "America/Detroit",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Indiana/Indianapolis",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Vevay",
    "America/Chicago",
    "America/Indiana/Tell_City",
    "America/Indiana/Knox",
    "America/Menominee",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/North_Dakota/Beulah",
    "America/Denver",
    "America/Boise",
    "America/Phoenix",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Juneau",
    "America/Sitka",
    "America/Metlakatla",
    "America/Yakutat",
    "America/Nome",
    "America/Adak",
    "Pacific/Honolulu",
    "America/Montevideo",
    "Asia/Samarkand",
    "Asia/Tashkent",
    "America/Caracas",
    "Asia/Ho_Chi_Minh",
    "Pacific/Efate",
    "Pacific/Wallis",
    "Pacific/Apia",
    "Africa/Johannesburg",
];

export const TeleCode = [
    {
        name: "Afghanistan",
        dial_code: "+93",
        emoji: "🇦🇫",
        code: "AF",
    },
    {
        name: "Aland Islands",
        dial_code: "+358",
        emoji: "🇦🇽",
        code: "AX",
    },
    {
        name: "Albania",
        dial_code: "+355",
        emoji: "🇦🇱",
        code: "AL",
    },
    {
        name: "Algeria",
        dial_code: "+213",
        emoji: "🇩🇿",
        code: "DZ",
    },
    {
        name: "AmericanSamoa",
        dial_code: "+1684",
        emoji: "🇦🇸",
        code: "AS",
    },
    {
        name: "Andorra",
        dial_code: "+376",
        emoji: "🇦🇩",
        code: "AD",
    },
    {
        name: "Angola",
        dial_code: "+244",
        emoji: "🇦🇴",
        code: "AO",
    },
    {
        name: "Anguilla",
        dial_code: "+1264",
        emoji: "🇦🇮",
        code: "AI",
    },
    {
        name: "Antarctica",
        dial_code: "+672",
        emoji: "🇦🇶",
        code: "AQ",
    },
    {
        name: "Antigua and Barbuda",
        dial_code: "+1268",
        emoji: "🇦🇬",
        code: "AG",
    },
    {
        name: "Argentina",
        dial_code: "+54",
        emoji: "🇦🇷",
        code: "AR",
    },
    {
        name: "Armenia",
        dial_code: "+374",
        emoji: "🇦🇲",
        code: "AM",
    },
    {
        name: "Aruba",
        dial_code: "+297",
        emoji: "🇦🇼",
        code: "AW",
    },
    {
        name: "Australia",
        dial_code: "+61",
        emoji: "🇦🇺",
        code: "AU",
    },
    {
        name: "Austria",
        dial_code: "+43",
        emoji: "🇦🇹",
        code: "AT",
    },
    {
        name: "Azerbaijan",
        dial_code: "+994",
        emoji: "🇦🇿",
        code: "AZ",
    },
    {
        name: "Bahamas",
        dial_code: "+1242",
        emoji: "🇧🇸",
        code: "BS",
    },
    {
        name: "Bahrain",
        dial_code: "+973",
        emoji: "🇧🇭",
        code: "BH",
    },
    {
        name: "Bangladesh",
        dial_code: "+880",
        emoji: "🇧🇩",
        code: "BD",
    },
    {
        name: "Barbados",
        dial_code: "+1246",
        emoji: "🇧🇧",
        code: "BB",
    },
    {
        name: "Belarus",
        dial_code: "+375",
        emoji: "🇧🇾",
        code: "BY",
    },
    {
        name: "Belgium",
        dial_code: "+32",
        emoji: "🇧🇪",
        code: "BE",
    },
    {
        name: "Belize",
        dial_code: "+501",
        emoji: "🇧🇿",
        code: "BZ",
    },
    {
        name: "Benin",
        dial_code: "+229",
        emoji: "🇧🇯",
        code: "BJ",
    },
    {
        name: "Bermuda",
        dial_code: "+1441",
        emoji: "🇧🇲",
        code: "BM",
    },
    {
        name: "Bhutan",
        dial_code: "+975",
        emoji: "🇧🇹",
        code: "BT",
    },
    {
        name: "Bolivia, Plurinational State of",
        dial_code: "+591",
        emoji: "🇧🇴",
        code: "BO",
    },
    {
        name: "Bosnia and Herzegovina",
        dial_code: "+387",
        emoji: "🇧🇦",
        code: "BA",
    },
    {
        name: "Botswana",
        dial_code: "+267",
        emoji: "🇧🇼",
        code: "BW",
    },
    {
        name: "Brazil",
        dial_code: "+55",
        emoji: "🇧🇷",
        code: "BR",
    },
    {
        name: "British Indian Ocean Territory",
        dial_code: "+246",
        emoji: "🇮🇴",
        code: "IO",
    },
    {
        name: "Brunei Darussalam",
        dial_code: "+673",
        emoji: "🇧🇳",
        code: "BN",
    },
    {
        name: "Bulgaria",
        dial_code: "+359",
        emoji: "🇧🇬",
        code: "BG",
    },
    {
        name: "Burkina Faso",
        dial_code: "+226",
        emoji: "🇧🇫",
        code: "BF",
    },
    {
        name: "Burundi",
        dial_code: "+257",
        emoji: "🇧🇮",
        code: "BI",
    },
    {
        name: "Cambodia",
        dial_code: "+855",
        emoji: "🇰🇭",
        code: "KH",
    },
    {
        name: "Cameroon",
        dial_code: "+237",
        emoji: "🇨🇲",
        code: "CM",
    },
    {
        name: "Canada",
        dial_code: "+1",
        emoji: "🇨🇦",
        code: "CA",
    },
    {
        name: "Cape Verde",
        dial_code: "+238",
        emoji: "🇨🇻",
        code: "CV",
    },
    {
        name: "Cayman Islands",
        dial_code: "+345",
        emoji: "🇰🇾",
        code: "KY",
    },
    {
        name: "Central African Republic",
        dial_code: "+236",
        emoji: "🇨🇫",
        code: "CF",
    },
    {
        name: "Chad",
        dial_code: "+235",
        emoji: "🇹🇩",
        code: "TD",
    },
    {
        name: "Chile",
        dial_code: "+56",
        emoji: "🇨🇱",
        code: "CL",
    },
    {
        name: "China",
        dial_code: "+86",
        emoji: "🇨🇳",
        code: "CN",
    },
    {
        name: "Christmas Island",
        dial_code: "+61",
        emoji: "🇨🇽",
        code: "CX",
    },
    {
        name: "Cocos (Keeling) Islands",
        dial_code: "+61",
        emoji: "🇨🇨",
        code: "CC",
    },
    {
        name: "Colombia",
        dial_code: "+57",
        emoji: "🇨🇴",
        code: "CO",
    },
    {
        name: "Comoros",
        dial_code: "+269",
        emoji: "🇰🇲",
        code: "KM",
    },
    {
        name: "Congo",
        dial_code: "+242",
        emoji: "🇨🇬",
        code: "CG",
    },
    {
        name: "Congo, The Democratic Republic of the Congo",
        dial_code: "+243",
        emoji: "🇨🇩",
        code: "CD",
    },
    {
        name: "Cook Islands",
        dial_code: "+682",
        emoji: "🇨🇰",
        code: "CK",
    },
    {
        name: "Costa Rica",
        dial_code: "+506",
        emoji: "🇨🇷",
        code: "CR",
    },
    {
        name: "Cote d'Ivoire",
        dial_code: "+225",
        emoji: "🇨🇮",
        code: "CI",
    },
    {
        name: "Croatia",
        dial_code: "+385",
        emoji: "🇭🇷",
        code: "HR",
    },
    {
        name: "Cuba",
        dial_code: "+53",
        emoji: "🇨🇺",
        code: "CU",
    },
    {
        name: "Cyprus",
        dial_code: "+357",
        emoji: "🇨🇾",
        code: "CY",
    },
    {
        name: "Czech Republic",
        dial_code: "+420",
        emoji: "🇨🇿",
        code: "CZ",
    },
    {
        name: "Denmark",
        dial_code: "+45",
        emoji: "🇩🇰",
        code: "DK",
    },
    {
        name: "Djibouti",
        dial_code: "+253",
        emoji: "🇩🇯",
        code: "DJ",
    },
    {
        name: "Dominica",
        dial_code: "+1767",
        emoji: "🇩🇲",
        code: "DM",
    },
    {
        name: "Dominican Republic",
        dial_code: "+1849",
        emoji: "🇩🇴",
        code: "DO",
    },
    {
        name: "Ecuador",
        dial_code: "+593",
        emoji: "🇪🇨",
        code: "EC",
    },
    {
        name: "Egypt",
        dial_code: "+20",
        emoji: "🇪🇬",
        code: "EG",
    },
    {
        name: "El Salvador",
        dial_code: "+503",
        emoji: "🇸🇻",
        code: "SV",
    },
    {
        name: "Equatorial Guinea",
        dial_code: "+240",
        emoji: "🇬🇶",
        code: "GQ",
    },
    {
        name: "Eritrea",
        dial_code: "+291",
        emoji: "🇪🇷",
        code: "ER",
    },
    {
        name: "Estonia",
        dial_code: "+372",
        emoji: "🇪🇪",
        code: "EE",
    },
    {
        name: "Ethiopia",
        dial_code: "+251",
        emoji: "🇪🇹",
        code: "ET",
    },
    {
        name: "Falkland Islands (Malvinas)",
        dial_code: "+500",
        emoji: "🇫🇰",
        code: "FK",
    },
    {
        name: "Faroe Islands",
        dial_code: "+298",
        emoji: "🇫🇴",
        code: "FO",
    },
    {
        name: "Fiji",
        dial_code: "+679",
        emoji: "🇫🇯",
        code: "FJ",
    },
    {
        name: "Finland",
        dial_code: "+358",
        emoji: "🇫🇮",
        code: "FI",
    },
    {
        name: "France",
        dial_code: "+33",
        emoji: "🇫🇷",
        code: "FR",
    },
    {
        name: "French Guiana",
        dial_code: "+594",
        emoji: "🇬🇫",
        code: "GF",
    },
    {
        name: "French Polynesia",
        dial_code: "+689",
        emoji: "🇵🇫",
        code: "PF",
    },
    {
        name: "Gabon",
        dial_code: "+241",
        emoji: "🇬🇦",
        code: "GA",
    },
    {
        name: "Gambia",
        dial_code: "+220",
        emoji: "🇬🇲",
        code: "GM",
    },
    {
        name: "Georgia",
        dial_code: "+995",
        emoji: "🇬🇪",
        code: "GE",
    },
    {
        name: "Germany",
        dial_code: "+49",
        emoji: "🇩🇪",
        code: "DE",
    },
    {
        name: "Ghana",
        dial_code: "+233",
        emoji: "🇬🇭",
        code: "GH",
    },
    {
        name: "Gibraltar",
        dial_code: "+350",
        emoji: "🇬🇮",
        code: "GI",
    },
    {
        name: "Greece",
        dial_code: "+30",
        emoji: "🇬🇷",
        code: "GR",
    },
    {
        name: "Greenland",
        dial_code: "+299",
        emoji: "🇬🇱",
        code: "GL",
    },
    {
        name: "Grenada",
        dial_code: "+1473",
        emoji: "🇬🇩",
        code: "GD",
    },
    {
        name: "Guadeloupe",
        dial_code: "+590",
        emoji: "🇬🇵",
        code: "GP",
    },
    {
        name: "Guam",
        dial_code: "+1671",
        emoji: "🇬🇺",
        code: "GU",
    },
    {
        name: "Guatemala",
        dial_code: "+502",
        emoji: "🇬🇹",
        code: "GT",
    },
    {
        name: "Guernsey",
        dial_code: "+44",
        emoji: "🇬🇬",
        code: "GG",
    },
    {
        name: "Guinea",
        dial_code: "+224",
        emoji: "🇬🇳",
        code: "GN",
    },
    {
        name: "Guinea-Bissau",
        dial_code: "+245",
        emoji: "🇬🇼",
        code: "GW",
    },
    {
        name: "Guyana",
        dial_code: "+595",
        emoji: "🇬🇾",
        code: "GY",
    },
    {
        name: "Haiti",
        dial_code: "+509",
        emoji: "🇭🇹",
        code: "HT",
    },
    {
        name: "Holy See (Vatican City State)",
        dial_code: "+379",
        emoji: "🇻🇦",
        code: "VA",
    },
    {
        name: "Honduras",
        dial_code: "+504",
        emoji: "🇭🇳",
        code: "HN",
    },
    {
        name: "Hong Kong",
        dial_code: "+852",
        emoji: "🇭🇰",
        code: "HK",
    },
    {
        name: "Hungary",
        dial_code: "+36",
        emoji: "🇭🇺",
        code: "HU",
    },
    {
        name: "Iceland",
        dial_code: "+354",
        emoji: "🇮🇸",
        code: "IS",
    },
    {
        name: "India",
        dial_code: "+91",
        emoji: "🇮🇳",
        code: "IN",
    },
    {
        name: "Indonesia",
        dial_code: "+62",
        emoji: "🇮🇩",
        code: "ID",
    },
    {
        name: "Iran, Islamic Republic of Persian Gulf",
        dial_code: "+98",
        emoji: "🇮🇷",
        code: "IR",
    },
    {
        name: "Iraq",
        dial_code: "+964",
        emoji: "🇮🇷",
        code: "IQ",
    },
    {
        name: "Ireland",
        dial_code: "+353",
        emoji: "🇮🇪",
        code: "IE",
    },
    {
        name: "Isle of Man",
        dial_code: "+44",
        emoji: "🇮🇲",
        code: "IM",
    },
    {
        name: "Israel",
        dial_code: "+972",
        emoji: "🇮🇱",
        code: "IL",
    },
    {
        name: "Italy",
        dial_code: "+39",
        emoji: "🇮🇹",
        code: "IT",
    },
    {
        name: "Jamaica",
        dial_code: "+1876",
        emoji: "🇯🇲",
        code: "JM",
    },
    {
        name: "Japan",
        dial_code: "+81",
        emoji: "🇯🇵",
        code: "JP",
    },
    {
        name: "Jersey",
        dial_code: "+44",
        emoji: "🇯🇪",
        code: "JE",
    },
    {
        name: "Jordan",
        dial_code: "+962",
        emoji: "🇯🇴",
        code: "JO",
    },
    {
        name: "Kazakhstan",
        dial_code: "+77",
        emoji: "🇰🇿",
        code: "KZ",
    },
    {
        name: "Kenya",
        dial_code: "+254",
        emoji: "🇰🇪",
        code: "KE",
    },
    {
        name: "Kiribati",
        dial_code: "+686",
        emoji: "🇰🇮",
        code: "KI",
    },
    {
        name: "Korea, Democratic People's Republic of Korea",
        dial_code: "+850",
        emoji: "🇰🇵",
        code: "KP",
    },
    {
        name: "Korea, Republic of South Korea",
        dial_code: "+82",
        emoji: "🇰🇷",
        code: "KR",
    },
    {
        name: "Kuwait",
        dial_code: "+965",
        emoji: "🇰🇼",
        code: "KW",
    },
    {
        name: "Kyrgyzstan",
        dial_code: "+996",
        emoji: "🇰🇬",
        code: "KG",
    },
    {
        name: "Laos",
        dial_code: "+856",
        emoji: "🇱🇦",
        code: "LA",
    },
    {
        name: "Latvia",
        dial_code: "+371",
        emoji: "🇱🇻",
        code: "LV",
    },
    {
        name: "Lebanon",
        dial_code: "+961",
        emoji: "🇱🇧",
        code: "LB",
    },
    {
        name: "Lesotho",
        dial_code: "+266",
        emoji: "🇱🇸",
        code: "LS",
    },
    {
        name: "Liberia",
        dial_code: "+231",
        emoji: "🇱🇷",
        code: "LR",
    },
    {
        name: "Libyan Arab Jamahiriya",
        dial_code: "+218",
        emoji: "🇱🇾",
        code: "LY",
    },
    {
        name: "Liechtenstein",
        dial_code: "+423",
        emoji: "🇱🇮",
        code: "LI",
    },
    {
        name: "Lithuania",
        dial_code: "+370",
        emoji: "🇱🇹",
        code: "LT",
    },
    {
        name: "Luxembourg",
        dial_code: "+352",
        emoji: "🇱🇺",
        code: "LU",
    },
    {
        name: "Macao",
        dial_code: "+853",
        emoji: "🇲🇴",
        code: "MO",
    },
    {
        name: "Macedonia",
        dial_code: "+389",
        emoji: "🇲🇰",
        code: "MK",
    },
    {
        name: "Madagascar",
        dial_code: "+261",
        emoji: "🇲🇬",
        code: "MG",
    },
    {
        name: "Malawi",
        dial_code: "+265",
        emoji: "🇲🇼",
        code: "MW",
    },
    {
        name: "Malaysia",
        dial_code: "+60",
        emoji: "🇲🇾",
        code: "MY",
    },
    {
        name: "Maldives",
        dial_code: "+960",
        emoji: "🇲🇻",
        code: "MV",
    },
    {
        name: "Mali",
        dial_code: "+223",
        emoji: "🇲🇱",
        code: "ML",
    },
    {
        name: "Malta",
        dial_code: "+356",
        emoji: "🇲🇹",
        code: "MT",
    },
    {
        name: "Marshall Islands",
        dial_code: "+692",
        emoji: "🇲🇭",
        code: "MH",
    },
    {
        name: "Martinique",
        dial_code: "+596",
        emoji: "🇲🇶",
        code: "MQ",
    },
    {
        name: "Mauritania",
        dial_code: "+222",
        emoji: "🇲🇷",
        code: "MR",
    },
    {
        name: "Mauritius",
        dial_code: "+230",
        emoji: "🇲🇺",
        code: "MU",
    },
    {
        name: "Mayotte",
        dial_code: "+262",
        emoji: "🇾🇹",
        code: "YT",
    },
    {
        name: "Mexico",
        dial_code: "+52",
        emoji: "🇲🇽",
        code: "MX",
    },
    {
        name: "Micronesia, Federated States of Micronesia",
        dial_code: "+691",
        emoji: "🇫🇲",
        code: "FM",
    },
    {
        name: "Moldova",
        dial_code: "+373",
        emoji: "🇲🇩",
        code: "MD",
    },
    {
        name: "Monaco",
        dial_code: "+377",
        emoji: "🇲🇨",
        code: "MC",
    },
    {
        name: "Mongolia",
        dial_code: "+976",
        emoji: "🇲🇳",
        code: "MN",
    },
    {
        name: "Montenegro",
        dial_code: "+382",
        emoji: "🇲🇪",
        code: "ME",
    },
    {
        name: "Montserrat",
        dial_code: "+1664",
        emoji: "🇲🇸",
        code: "MS",
    },
    {
        name: "Morocco",
        dial_code: "+212",
        emoji: "🇲🇦",
        code: "MA",
    },
    {
        name: "Mozambique",
        dial_code: "+258",
        emoji: "🇲🇿",
        code: "MZ",
    },
    {
        name: "Myanmar",
        dial_code: "+95",
        emoji: "🇲🇲",
        code: "MM",
    },
    {
        name: "Namibia",
        emoji: "🇳🇦",
        dial_code: "+264",
        code: "NA",
    },
    {
        name: "Nauru",
        dial_code: "+674",
        emoji: "🇳🇷",
        code: "NR",
    },
    {
        name: "Nepal",
        dial_code: "+977",
        emoji: "🇳🇵",
        code: "NP",
    },
    {
        name: "Netherlands",
        dial_code: "+31",
        emoji: "🇳🇱",
        code: "NL",
    },
    {
        name: "Netherlands Antilles",
        dial_code: "+599",
        emoji: "🇧🇶",
        code: "AN",
    },
    {
        name: "New Caledonia",
        dial_code: "+687",
        emoji: "🇳🇨",
        code: "NC",
    },
    {
        name: "New Zealand",
        dial_code: "+64",
        emoji: "🇳🇿",
        code: "NZ",
    },
    {
        name: "Nicaragua",
        dial_code: "+505",
        emoji: "🇳🇮",
        code: "NI",
    },
    {
        name: "Niger",
        dial_code: "+227",
        emoji: "🇳🇪",
        code: "NE",
    },
    {
        name: "Nigeria",
        dial_code: "+234",
        emoji: "🇳🇬",
        code: "NG",
    },
    {
        name: "Niue",
        dial_code: "+683",
        emoji: "🇳🇺",
        code: "NU",
    },
    {
        name: "Norfolk Island",
        dial_code: "+672",
        emoji: "🇳🇫",
        code: "NF",
    },
    {
        name: "Northern Mariana Islands",
        dial_code: "+1670",
        emoji: "🇲🇵",
        code: "MP",
    },
    {
        name: "Norway",
        dial_code: "+47",
        emoji: "🇳🇴",
        code: "NO",
    },
    {
        name: "Oman",
        dial_code: "+968",
        emoji: "🇴🇲",
        code: "OM",
    },
    {
        name: "Pakistan",
        dial_code: "+92",
        emoji: "🇵🇰",
        code: "PK",
    },
    {
        name: "Palau",
        dial_code: "+680",
        emoji: "🇵🇼",
        code: "PW",
    },
    {
        name: "Palestinian Territory, Occupied",
        dial_code: "+970",
        emoji: "🇵🇸",
        code: "PS",
    },
    {
        name: "Panama",
        dial_code: "+507",
        emoji: "🇵🇦",
        code: "PA",
    },
    {
        name: "Papua New Guinea",
        dial_code: "+675",
        emoji: "🇵🇬",
        code: "PG",
    },
    {
        name: "Paraguay",
        dial_code: "+595",
        emoji: "🇵🇾",
        code: "PY",
    },
    {
        name: "Peru",
        dial_code: "+51",
        emoji: "🇵🇪",
        code: "PE",
    },
    {
        name: "Philippines",
        dial_code: "+63",
        emoji: "🇵🇭",
        code: "PH",
    },
    {
        name: "Pitcairn",
        dial_code: "+872",
        emoji: "🇵🇳",
        code: "PN",
    },
    {
        name: "Poland",
        dial_code: "+48",
        emoji: "🇵🇱",
        code: "PL",
    },
    {
        name: "Portugal",
        dial_code: "+351",
        emoji: "🇵🇹",
        code: "PT",
    },
    {
        name: "Puerto Rico",
        dial_code: "+1939",
        emoji: "🇵🇷",
        code: "PR",
    },
    {
        name: "Qatar",
        dial_code: "+974",
        emoji: "🇶🇦",
        code: "QA",
    },
    {
        name: "Romania",
        dial_code: "+40",
        emoji: "🇷🇴",
        code: "RO",
    },
    {
        name: "Russia",
        dial_code: "+7",
        emoji: "🇷🇺",
        code: "RU",
    },
    {
        name: "Rwanda",
        dial_code: "+250",
        emoji: "🇷🇼",
        code: "RW",
    },
    {
        name: "Reunion",
        dial_code: "+262",
        emoji: "🇷🇪",
        code: "RE",
    },
    {
        name: "Saint Barthelemy",
        dial_code: "+590",
        emoji: "🇧🇱",
        code: "BL",
    },
    {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        dial_code: "+290",
        emoji: "🇸🇭",
        code: "SH",
    },
    {
        name: "Saint Kitts and Nevis",
        dial_code: "+1869",
        emoji: "🇰🇳",
        code: "KN",
    },
    {
        name: "Saint Lucia",
        dial_code: "+1758",
        emoji: "🇱🇨",
        code: "LC",
    },
    {
        name: "Saint Martin",
        dial_code: "+590",
        emoji: "🇲🇫",
        code: "MF",
    },
    {
        name: "Saint Pierre and Miquelon",
        dial_code: "+508",
        emoji: "🇵🇲",
        code: "PM",
    },
    {
        name: "Saint Vincent and the Grenadines",
        dial_code: "+1784",
        emoji: "🇻🇨",
        code: "VC",
    },
    {
        name: "Samoa",
        dial_code: "+685",
        emoji: "🇼🇸",
        code: "WS",
    },
    {
        name: "San Marino",
        dial_code: "+378",
        emoji: "🇸🇲",
        code: "SM",
    },
    {
        name: "Sao Tome and Principe",
        dial_code: "+239",
        emoji: "🇸🇹",
        code: "ST",
    },
    {
        name: "Saudi Arabia",
        dial_code: "+966",
        emoji: "🇸🇦",
        code: "SA",
    },
    {
        name: "Senegal",
        dial_code: "+221",
        emoji: "🇸🇳",
        code: "SN",
    },
    {
        name: "Serbia",
        dial_code: "+381",
        emoji: "🇷🇸",
        code: "RS",
    },
    {
        name: "Seychelles",
        dial_code: "+248",
        emoji: "🇸🇨",
        code: "SC",
    },
    {
        name: "Sierra Leone",
        dial_code: "+232",
        emoji: "🇸🇱",
        code: "SL",
    },
    {
        name: "Singapore",
        dial_code: "+65",
        emoji: "🇸🇬",
        code: "SG",
    },
    {
        name: "Slovakia",
        dial_code: "+421",
        emoji: "🇸🇰",
        code: "SK",
    },
    {
        name: "Slovenia",
        dial_code: "+386",
        emoji: "🇸🇮",
        code: "SI",
    },
    {
        name: "Solomon Islands",
        dial_code: "+677",
        emoji: "🇸🇧",
        code: "SB",
    },
    {
        name: "Somalia",
        dial_code: "+252",
        emoji: "🇸🇴",
        code: "SO",
    },
    {
        name: "South Africa",
        dial_code: "+27",
        emoji: "🇿🇦",
        code: "ZA",
    },
    {
        name: "South Sudan",
        dial_code: "+211",
        emoji: "🇸🇸",
        code: "SS",
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        dial_code: "+500",
        emoji: "🇬🇸",
        code: "GS",
    },
    {
        name: "Spain",
        dial_code: "+34",
        emoji: "🇪🇸",
        code: "ES",
    },
    {
        name: "Sri Lanka",
        dial_code: "+94",
        emoji: "🇱🇰",
        code: "LK",
    },
    {
        name: "Sudan",
        dial_code: "+249",
        emoji: "🇸🇩",
        code: "SD",
    },
    {
        name: "Suriname",
        dial_code: "+597",
        emoji: "🇸🇷",
        code: "SR",
    },
    {
        name: "Svalbard and Jan Mayen",
        dial_code: "+47",
        emoji: "🇸🇯",
        code: "SJ",
    },
    {
        name: "Swaziland",
        dial_code: "+268",
        emoji: "🇸🇿",
        code: "SZ",
    },
    {
        name: "Sweden",
        dial_code: "+46",
        emoji: "🇸🇪",
        code: "SE",
    },
    {
        name: "Switzerland",
        dial_code: "+41",
        emoji: "🇨🇭",
        code: "CH",
    },
    {
        name: "Syrian Arab Republic",
        dial_code: "+963",
        emoji: "🇸🇾",
        code: "SY",
    },
    {
        name: "Taiwan",
        dial_code: "+886",
        emoji: "🇹🇼",
        code: "TW",
    },
    {
        name: "Tajikistan",
        dial_code: "+992",
        emoji: "🇹🇯",
        code: "TJ",
    },
    {
        name: "Tanzania, United Republic of Tanzania",
        dial_code: "+255",
        emoji: "🇹🇿",
        code: "TZ",
    },
    {
        name: "Thailand",
        dial_code: "+66",
        emoji: "🇹🇭",
        code: "TH",
    },
    {
        name: "Timor-Leste",
        dial_code: "+670",
        emoji: "🇹🇱",
        code: "TL",
    },
    {
        name: "Togo",
        dial_code: "+228",
        emoji: "🇹🇬",
        code: "TG",
    },
    {
        name: "Tokelau",
        dial_code: "+690",
        emoji: "🇹🇰",
        code: "TK",
    },
    {
        name: "Tonga",
        dial_code: "+676",
        emoji: "🇹🇴",
        code: "TO",
    },
    {
        name: "Trinidad and Tobago",
        dial_code: "+1868",
        emoji: "🇹🇹",
        code: "TT",
    },
    {
        name: "Tunisia",
        dial_code: "+216",
        emoji: "🇹🇳",
        code: "TN",
    },
    {
        name: "Turkey",
        dial_code: "+90",
        emoji: "🇹🇷",
        code: "TR",
    },
    {
        name: "Turkmenistan",
        dial_code: "+993",
        emoji: "🇹🇲",
        code: "TM",
    },
    {
        name: "Turks and Caicos Islands",
        dial_code: "+1649",
        emoji: "🇹🇨",
        code: "TC",
    },
    {
        name: "Tuvalu",
        dial_code: "+688",
        emoji: "🇹🇻",
        code: "TV",
    },
    {
        name: "Uganda",
        dial_code: "+256",
        emoji: "🇺🇬",
        code: "UG",
    },
    {
        name: "Ukraine",
        dial_code: "+380",
        emoji: "🇺🇦",
        code: "UA",
    },
    {
        name: "United Arab Emirates",
        dial_code: "+971",
        emoji: "🇦🇪",
        code: "AE",
    },
    {
        name: "United Kingdom",
        dial_code: "+44",
        emoji: "🇬🇧",
        code: "GB",
    },
    {
        name: "United States",
        dial_code: "+1",
        emoji: "🇺🇸",
        code: "US",
    },
    {
        name: "Uruguay",
        dial_code: "+598",
        emoji: "🇺🇾",
        code: "UY",
    },
    {
        name: "Uzbekistan",
        dial_code: "+998",
        emoji: "🇺🇿",
        code: "UZ",
    },
    {
        name: "Vanuatu",
        dial_code: "+678",
        emoji: "🇻🇺",
        code: "VU",
    },
    {
        name: "Venezuela, Bolivarian Republic of Venezuela",
        dial_code: "+58",
        emoji: "🇻🇪",
        code: "VE",
    },
    {
        name: "Vietnam",
        dial_code: "+84",
        emoji: "🇻🇳",
        code: "VN",
    },
    {
        name: "Virgin Islands, British",
        dial_code: "+1284",
        emoji: "🇻🇬",
        code: "VG",
    },
    {
        name: "Virgin Islands, U.S.",
        dial_code: "+1340",
        emoji: "🇻🇮",
        code: "VI",
    },
    {
        name: "Wallis and Futuna",
        dial_code: "+681",
        emoji: "🇼🇫",
        code: "WF",
    },
    {
        name: "Yemen",
        dial_code: "+967",
        emoji: "🇾🇪",
        code: "YE",
    },
    {
        name: "Zambia",
        dial_code: "+260",
        emoji: "🇿🇲",
        code: "ZM",
    },
    {
        name: "Zimbabwe",
        dial_code: "+263",
        emoji: "🇿🇼",
        code: "ZW",
    },
];

export const COUNTRY_CODE = [
    "+998",
    "+996",
    "+995",
    "+994",
    "+993",
    "+992",
    "+98",
    "+977",
    "+976",
    "+975",
    "+974",
    "+973",
    "+972",
    "+971",
    "+970",
    "+968",
    "+967",
    "+966",
    "+965",
    "+964",
    "+963",
    "+962",
    "+961",
    "+960",
    "+95",
    "+94",
    "+93",
    "+92",
    "+91",
    "+90",
    "+886",
    "+880",
    "+872",
    "+86",
    "+856",
    "+855",
    "+853",
    "+852",
    "+850",
    "+84",
    "+82",
    "+81",
    "+77",
    "+7",
    "+692",
    "+691",
    "+690",
    "+689",
    "+688",
    "+687",
    "+686",
    "+685",
    "+683",
    "+682",
    "+681",
    "+680",
    "+679",
    "+678",
    "+677",
    "+676",
    "+675",
    "+674",
    "+673",
    "+672",
    "+670",
    "+66",
    "+65",
    "+64",
    "+63",
    "+62",
    "+61",
    "+60",
    "+599",
    "+598",
    "+597",
    "+596",
    "+595",
    "+594",
    "+593",
    "+591",
    "+590",
    "+58",
    "+57",
    "+56",
    "+55",
    "+54",
    "+53",
    "+52",
    "+51",
    "+509",
    "+508",
    "+507",
    "+506",
    "+505",
    "+504",
    "+503",
    "+502",
    "+501",
    "+500",
    "+49",
    "+48",
    "+47",
    "+46",
    "+45",
    "+44",
    "+43",
    "+423",
    "+421",
    "+420",
    "+41",
    "+40",
    "+39",
    "+389",
    "+387",
    "+386",
    "+385",
    "+382",
    "+381",
    "+380",
    "+379",
    "+378",
    "+377",
    "+376",
    "+375",
    "+374",
    "+373",
    "+372",
    "+371",
    "+370",
    "+36",
    "+359",
    "+358",
    "+357",
    "+356",
    "+355",
    "+354",
    "+353",
    "+352",
    "+351",
    "+350",
    "+345",
    "+34",
    "+33",
    "+32",
    "+31",
    "+30",
    "+299",
    "+298",
    "+297",
    "+291",
    "+290",
    "+27",
    "+269",
    "+268",
    "+267",
    "+266",
    "+265",
    "+264",
    "+263",
    "+262",
    "+261",
    "+260",
    "+258",
    "+257",
    "+256",
    "+255",
    "+254",
    "+253",
    "+252",
    "+251",
    "+250",
    "+249",
    "+248",
    "+246",
    "+245",
    "+244",
    "+243",
    "+242",
    "+241",
    "+240",
    "+239",
    "+238",
    "+237",
    "+236",
    "+235",
    "+234",
    "+233",
    "+232",
    "+231",
    "+230",
    "+229",
    "+228",
    "+227",
    "+226",
    "+225",
    "+224",
    "+223",
    "+222",
    "+221",
    "+220",
    "+218",
    "+216",
    "+213",
    "+212",
    "+211",
    "+20",
    "+1939",
    "+1876",
    "+1869",
    "+1868",
    "+1849",
    "+1784",
    "+1767",
    "+1758",
    "+1684",
    "+1671",
    "+1670",
    "+1664",
    "+1649",
    "+1473",
    "+1441",
    "+1340",
    "+1284",
    "+1268",
    "+1264",
    "+1246",
    "+1242",
    "+1"
]

//Models ID
export const COMMUNICATION_EMAIL_REPLAY_MODEL = "communication_model_1";
export const COMMUNICATION_EMAIL_PREVIEW_MODEL = "communication_model_2";
export const CLIENT_PAGE_CREATE_NEW_CLIENT_MODEL = "crate_new_client";
export const WHATSAPP_ENQUIRY_PAGE_CONVERT_TO_CLIENT_MODEL = "WHATSAPP_ENQUIRY_PAGE_CONVERT_TO_CLIENT_MODEL";
export const WHATSAPP_ENQUIRY_PAGE_DETAILS = "WHATSAPP_ENQUIRY_PAGE_DETAILS";
export const PROFILE_PAGE_TRANSFER_MODAL = "PROFILE_PAGE_TRANSFER_MODAL";
export const CLIENT_PAGE_EXPORT_MODEL = "CLIENT_PAGE_EXPORT_MODEL";
export const CLIENT_PAGE_WHATSAPP_CAMPAIGN_MODEL = "CLIENT_PAGE_WHATSAPP_CAMPAIGN_MODEL";
export const LEAD_PAGE_EXPORT_MODEL = "LEAD_PAGE_EXPORT_MODEL";
export const CLIENT_PAGE_EDIT_CLIENT_MODEL = "CLIENT_PAGE_EDIT_CLIENT_MODEL";
export const CLIENT_DETAIL_PAGE_EDIT_CLIENT_MODEL =
    "CLIENT_DETAIL_PAGE_EDIT_CLIENT_MODEL";
export const DOCUMENT_PAGE_UPLOAD_MODEL = "document_upload_model";
export const CLIENT_PAGE_BOOK_APPOINTMENT_MODEL =
    "CLIENT_PAGE_BOOK_APPOINTMENT_MODEL";
export const DOCUMENT_PAGE_RENAME_MODEL = "document_rename_model";
export const DOCUMENT_PAGE_DELETE_MODEL = "document_delete_model";
export const DOCUMENT_PAGE_SEND_MODEL = "document_send_model";
export const EFORM_ALL_ASSIGNED_PAGE_SEND_INVITE_MODEL =
    "EMAIL_PAGE_SEND_INVITE_MODEL";
export const EFORM_ALL_ASSIGNED_PAGE_INSIGHTS_MODEL =
    "EFORM_ALL_ASSIGNED_PAGE_INSIGHTS_MODEL";
export const EFORM_ALL_ASSIGNED_PAGE_DELETE_MODEL =
    "EFORM_ALL_ASSIGNED_PAGE_DELETE_MODEL";
export const EFORM_ASSIGN_PAGE_REVOKE_MODEL = "EFORM_ASSIGN_PAGE_REVOKE_MODEL";
export const EFORM_ALL_ASSIGNED_PAGE_ASSIGN_MODEL =
    "EFORM_ALL_ASSIGNED_PAGE_ASSIGN_MODEL";
export const EFORM_BUILDER_PAGE_CREATE_MODEL =
    "EFORM_BUILDER_PAGE_CREATE_MODEL";
export const EFORM_LIST_PAGE_PREVIEW_MODEL = "EFORM_LIST_PAGE_PREVIEW_MODEL";
export const CUSTOM_FIELDS_PAGE_CREATE_MODEL =
    "CUSTOM_FIELDS_PAGE_CREATE_MODEL";
export const GROUPS_CREATE_MODEL = "GROUPS_CREATE_MODEL";
export const GROUPS_DETAIL_MODEL = "GROUPS_DETAIL_MODEL";
export const ORGANIZATION_INVITE_MODEL = "ORGANIZATION_INVITE_MODEL";
export const ORGANIZATION_EDIT_MODEL = "ORGANIZATION_EDIT_MODEL";
export const OUT_OF_OFFICE_MODEL = "OUT_OF_OFFCIE_MODEL";
export const PRIVATE_LAYOUT_INVITE_MODEL = "PRIVATE_LAYOUT_INVITE_MODEL";
export const LEAD_STATUS_COLOR_SELECTION_MODEL =
    "LEAD_STATUS_COLOR_SELECTION_MODEL";
export const LEAD_STATUS_DElETE_MODEL = "LEAD_STATUS_DElETE_MODEL";
export const CLIENT_DETAILS_PAGE_EMAIL_MODEL =
    "CLIENT_DETAILS_PAGE_EMAIL_MODEL";
export const CLIENT_DETAILS_PAGE_NEW_TASK_MODEL =
    "CLIENT_DETAILS_PAGE_NEW_TASK_MODEL";
export const TASK_DETAILS_PAGE_NEW_TASK_MODEL =
    "TASK_DETAILS_PAGE_NEW_TASK_MODEL";

export const WHATSAPP_CHAT_TEMPLATE_CONFIRMATION_MODEL = "WHATSAPP_CHAT_CONFIGURATION_MODEL";
export const INTEGRATION_WHATSAPP_CHAT_CONFIGURATION_MODEL = "INTEGRATION_WHATSAPP_CHAT_CONFIGURATION_MODEL";
export const WHATSAPP_CHAT_DELETE_MODEL = "WHATSAPP_CHAT_DELETE_MODEL";
export const TASK_PAGE_EDIT_TASK_MODEL = "TASK_PAGE_EDIT_TASK_MODEL";
export const NOTE_DETAILS_PAGE_NEW_NOTE_MODEL =
    "NOTE_DETAILS_PAGE_NEW_NOTE_MODEL";
export const CLIENT_DETAILS_PAGE_UPDATE_MODEL =
    "CLIENT_DETAILS_PAGE_UPDATE_MODEL";
export const CLIENT_DETAILS_TASK_DELETE_CONFIRMATION_MODEL =
    "CLIENT_DETAILS_TASK_DELETE_CONFIRMATION_MODEL";
export const PRICING_PAGE_NO_OF_PASSES_MODEL =
    "PRICING_PAGE_NO_OF_PASSES_MODEL";
export const PRICING_PAGE_CALCULATED_AMOUNT_MODEL =
    "PRICING_PAGE_CALCULATED_AMOUNT_MODEL";
export const SUBSCRIPTION_PAGE_CALCULATED_AMOUNT_MODEL =
    "SUBSCRIPTION_PAGE_CALCULATED_AMOUNT_MODEL";
export const TASK_PAGE_TASK_DELETE_CONFIRMATION_MODEL =
    "TASK_PAGE_TASK_DELETE_CONFIRMATION_MODEL";
export const CALENDAR_PAGE_TASK_DELETE_CONFIRMATION_MODEL =
    "CALENDAR_PAGE_TASK_DELETE_CONFIRMATION_MODEL";
export const SMALL_CALENDAR_PAGE_TASK_DELETE_CONFIRMATION_MODEL =
    "SMALL_CALENDAR_PAGE_TASK_DELETE_CONFIRMATION_MODEL";
export const NOTE_PAGE_NOTE_DELETE_CONFIRMATION_MODEL =
    "NOTE_PAGE_NOTE_DELETE_CONFIRMATION_MODEL";

export const BIG_CALENDAR_ITEM_VIEW_MODEL = "BIG_CALENDAR_ITEM_VIEW_MODEL";
export const APPOINTMENT_PAGE_DETAIL_MODEL = "APPOINTMENT_PAGE_DETAIL_MODEL";
export const SMALL_CALENDAR_ITEM_VIEW_MODEL = "SMALL_CALENDAR_ITEM_VIEW_MODEL";

export const BIG_CALENDAR_TASK_DETAILS_EDIT_MODEL =
    "BIG_CALENDAR_TASK_DETAILS_EDIT_MODEL";
export const SMALL_CALENDAR_TASK_DETAILS_EDIT_MODEL =
    "SMALL_CALENDAR_TASK_DETAILS_EDIT_MODEL";
export const BIG_CALENDAR_TASK_DETAILS_DELETE_MODEL =
    "BIG_CALENDAR_TASK_DETAILS_DELETE_MODEL";

export const BIG_CALENDAR_NEW_EVENT_MODEL = "BIG_CALENDAR_NEW_EVENT_MODEL";
export const APPOINTMENT_NEW_APPOINTMENT_MODEL = "APPOINTMENT_NEW_APPOINTMENT_MODEL";
export const LEAD_DETAIL_APPOINTMENT_VIEW_MODEL =
    "LEAD_DETAIL_APPOINTMENT_VIEW_MODEL";
export const LEAD_REASSIGN_MODEL = "LEAD_REASSIGN_MODEL";
export const ACCOUNT_SWITCHER_USER_MODEL = "ACCOUNT_SWITCHER_USER_MODEL";
export const LEAD_APPOINTMENT_DETAIL_MODEL = "LEAD_APPOINTMENT_DETAIL_MODEL";
export const LEAD_DETAIL_REASSIGN_MODEL = "LEAD_DETAIL_REASSIGN_MODEL";
export const LEAD_EDIT_DETAIL_MODEL = "LEAD_EDIT_DETAIL_MODEL";
export const CLIENT_REASSIGN_MODEL = "CLIENT_REASSIGN_MODEL";
export const LEAD_STATUS_UPDATE_MODEL = "LEAD_STATUS_UPDATE_MODEL";
export const LEAD_NEW_SCHEDULE_DRAWER = "LEAD_NEW_SCHEDULE_DRAWER";
export const CONTACT_NEW_SCHEDULE_DRAWER = "CONTACT_NEW_SCHEDULE_DRAWER";
export const LEAD_DETAIL_STATUS_UPDATE_MODEL =
    "LEAD_DETAIL_STATUS_UPDATE_MODEL";
export const LEAD_PAGE_NEW_LEAD_MODEL = "LEAD_PAGE_NEW_LEAD_MODEL";
export const LEAD_PAGE_NEW_NOTE_MODEL = "LEAD_PAGE_NEW_NOTE_MODEL";
export const LEAD_PAGE_BOOK_MODEL = "LEAD_PAGE_BOOK_MODEL";
export const WHATSAPP_BUTTON_TYPE_MODAL = "WHATSAPP_BUTTON_TYPE_MODAL";
export const LEAD_PAGE_DELETE_MODEL = "LEAD_PAGE_DELETE_MODEL";
export const WHATSAPP_ENQUIRY_PAGE_DELETE_MODEL = "WHATSAPP_ENQUIRY_PAGE_DELETE_MODEL";
export const PROFILE_PAGE_UNMAP_MODEL = "PROFILE_PAGE_UNMAP_MODEL";
export const PROFILE_PAGE_Account_DELETE_MODEL = "PROFILE_PAGE_Account_DELETE_MODEL";
export const PROFILE_PAGE_USER_DELETE_MODEL = "PROFILE_PAGE_USER_DELETE_MODEL";
export const ORG_PAGE_DELETE_MODEL = "ORG_PAGE_DELETE_MODEL";
export const ANNOUNCEMENT_PAGE_DELETE_MODEL = "ANNOUNCEMENT_PAGE_DELETE_MODEL";
export const MY_INVITES_PAGE_ACCEPT_MODEL = "MY_INVITES_PAGE_ACCEPT_MODEL";
export const MY_INVITES_PAGE_DECLINE_MODEL = "MY_INVITES_PAGE_DECLINE_MODEL";
export const CLIENT_PAGE_DELETE_MODEL = "CLIENT_PAGE_DELETE_MODEL";
export const TEMPLATE_PAGE_DELETE_MODEL = "TEMPLATE_PAGE_DELETE_MODEL";
export const LIST_TEMPLATE_PAGE_PREVIEW_MODEL = "LIST_TEMPLATE_PAGE_PREVIEW_MODEL";
export const NEW_TEMPLATE_PAGE_PREVIEW_MODEL = "NEW_TEMPLATE_PAGE_PREVIEW_MODEL";
export const TASK_PAGE_DELETE_MODEL = "TASK_PAGE_DELETE_MODEL";
export const LEAD_DETAIL_PAGE_NEW_NOTE_MODEL =
    "LEAD_DETAIL_PAGE_NEW_NOTE_MODEL";
export const PROFILE_PICTURE_PREVIEW_MODEL = "PROFILE_PICTURE_PREVIEW_MODEL";
export const LEAD_DETAIL_DRAWER = "LEAD_DETAIL_DRAWER";
export const TASK_DETAIL_DRAWER = "TASK_DETAIL_DRAWER";
export const ORGANIZATION_USER_DRAWER = "ORGANIZATION_USER_DRAWER";
export const GROUP_DETAILS_DRAWER = "GROUP_DETAILS_DRAWER";
export const RESPONSE_VIEW_DRAWER = "RESPONSE_VIEW_DRAWER";
export const SUBSCRIPTION_EXPIRE_ALERT = "SUBSCRIPTION_EXPIRE_ALERT";
export const SUBSCRIPTION_EXPIRE_ALERT_DELETE_ORG = "SUBSCRIPTION_EXPIRE_ALERT_DELETE_ORG";
export const SUBSCRIPTION_EXPIRE_ALERT_QUITE_ORG = "SUBSCRIPTION_EXPIRE_ALERT_QUITE_ORG";

export const LEAD_CUSTOM_PARAMETER = "custom";
export const LEAD_GROUP_PARAMETER = "group";
export const LEAD_BOOK_PARAMETER = "book";

export const ALERT_SUCCESS = 1;
export const ALERT_ERROR = 0;
export const ALERT_INFO = -1;

// API Limit
export const COMMUNICATION_EMAIL_LIMIT = 10;
export const TASK_LIST_LIMIT = 10;
export const WHATSAPP_MESSAGE_LIST_LIMIT = 10;

export const INTERNAL_ENC_CLIENT_ID_CONSTANT = "clientId";
export const INTERNAL_ENC_LEAD_ID_CONSTANT = "leadId";
export const INTERNAL_ENC_START_TIME_CONSTANT = "startTime";
export const INTERNAL_ENC_END_TIME_CONSTANT = "endTime";
export const INTERNAL_ENC_MIN_CONSTANT = "min";
export const INTERNAL_ENC_ORG_CONSTANT = "org";
export const INTERNAL_ENC_SALT = "w";

export const DEFAULT_FROM_EMAIL = "padmadev.e@workaxis.in";


//Account Switching
export const ACCOUNT_SWITCH_MY_VIEW = "my-view"
export const ACCOUNT_SWITCH_USER_VIEW = "user-view"
export const ACCOUNT_SWITCH_ORG_VIEW = "org-view"


//Modal titles
export const BLOCKED_APPOINTMENT_TITLE = "Marked Busy"
export const TASK_TITLE = "Task"
export const APPOINTMENT_TITLE = "Appointment"

// Filter cache keys
export const LEAD_LISTING_DATE_FILTER_KEY = "LEAD_LISTING_DATE_FILTER_KEY"
export const CONVERSION_RATIO_ANALYTICS_DATE_FILTER_KEY = "CONVERSION_RATIO_ANALYTICS_DATE_FILTER_KEY"
export const DEVICE_TRAFFIC_ANALYTICS_DATE_FILTER_KEY = "DEVICE_TRAFFIC_ANALYTICS_DATE_FILTER_KEY"
export const LEAD_SOURCE_ANALYTICS_DATE_FILTER_KEY = "LEAD_SOURCE_ANALYTICS_DATE_FILTER_KEY"
export const REFERRAL_ANALYTICS_DATE_FILTER_KEY = "REFERRAL_ANALYTICS_DATE_FILTER_KEY"
export const DOCUMENT_LIST_DATE_FILTER_KEY = "DOCUMENT_LIST_DATE_FILTER_KEY"
export const ALL_TASK_LIST_DATE_FILTER_KEY = "ALL_TASK_LIST_DATE_FILTER_KEY"

// Custom Lead status
export const MAX_CUSTOM_LEADS_COUNT = 8

export const MAX_FILE_SIZE = 20

export const SUBSCRIPTION_CHECK_STATUS = "active"

// Whatsapp Template Limits
export const WHATSAPP_VARIABLE_REGEX = /\{\{\s*\d+\s*\}\}/g
export const MAXIMUM_HEADER_VARIABLES = 1
export const MAXIMUM_BODY_VARIABLES = 10

export const buttonLimits = {
    QUICK_REPLY: 4,
    COPY_CODE: 1,
    PHONE_NUMBER: 1,
    VOICE_CALL: 1,
    URL: 2
}

export const WHATSAPP_LANGUAGES = [
    {
        code: 'af',
        displayName: 'Afrikaans',
        autoFillBtn: 'Outovul',
        copyBtn: 'Kopieer kode',
        content: '*{{1}}* is jou verifikasiekode.',
        security: 'Moenie hierdie kode deel nie, vir jou eie sekuriteit.',
        expiration: 'Hierdie kode verstryk oor 10 minutes.'
    },
    {
        code: 'sq',
        displayName: 'Albanian',
        autoFillBtn: 'Plotëso automatikisht',
        copyBtn: 'Kopjo kodin',
        content: '*{{1}}* është kodi yt i verifikimit.',
        security: 'Për sigurinë tënde, mos e ndaj këtë kod.',
        expiration: 'Ky kod skadon pas 10 minutash.'
    },
    {
        code: 'ar',
        displayName: 'Arabic',
        autoFillBtn: 'ملء تلقائي',
        copyBtn: 'نسخ الرمز',
        content: '‏*{{1}}*‏ هو رمز التحقق الخاص بك.',
        security: ' للحفاظ على أمانك، تجنب مشاركة هذا الرمز.',
        expiration: 'هذا القانون سوف تنتهي في 10 دقائق .'
    },
    {
        code: 'az',
        displayName: 'Azerbaijani',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'bn',
        displayName: 'Bengali',
        autoFillBtn: 'অটোফিল করুন',
        copyBtn: 'কোডটি কপি করুন',
        content: '*{{1}}* হলো আপনার ভেরিফিকেশন কোড।',
        security: 'আপনার নিরাপত্তার কারণেই এই কোডটা শেয়ার করবেন না।',
        expiration: 'এই কোডের মেয়াদ 10 মিনিটের মধ্যে শেষ হয়ে যাবে।'
    },
    {
        code: 'bg',
        displayName: 'Bulgarian',
        autoFillBtn: 'Автоматично попълване',
        copyBtn: 'Копиране на кода',
        content: '*{{1}}* е вашият код за потвърждение.',
        security: 'С оглед на сигурността ви не споделяйте този код.',
        expiration: 'Този код изтича след 10 минути'
    },
    {
        code: 'ca',
        displayName: 'Catalan',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'zh_CN',
        displayName: 'Chinese (CHN)',
        autoFillBtn: '自动填写',
        copyBtn: '复制验证码',
        content: '*{{1}}* 是你的验证码。',
        security: '为安全起见，请不要分享这组验证码。',
        expiration: '这组验证码将在 10 分钟后过期。'
    },
    {
        code: 'zh_HK',
        displayName: 'Chinese (HKG)',
        autoFillBtn: '自動填入',
        copyBtn: '複製驗證碼',
        content: '*{{1}}* 是你的驗證碼。',
        security: '為了安全起見，請勿分享此驗證碼。',
        expiration: '這組驗證碼將於 10 分鐘後失效。'
    },
    {
        code: 'zh_TW',
        displayName: 'Chinese (TAI)',
        autoFillBtn: '自動填入',
        copyBtn: '複製驗證碼',
        content: '*{{1}}* 是你的驗證碼。',
        security: '為了安全起見，請勿分享此驗證碼。',
        expiration: '這組驗證碼將於 10 分鐘後失效。'
    },
    {
        code: 'hr',
        displayName: 'Croatian',
        autoFillBtn: 'Automatski ispuni',
        copyBtn: 'Kopiraj kôd',
        content: '*{{1}}* je vaš kôd za provjeru valjanosti.',
        security: 'Nemojte dijeliti kôd radi svoje sigurnosti.',
        expiration: 'Ovaj kôd istječe za 10 min.'
    },
    {
        code: 'cs',
        displayName: 'Czech',
        autoFillBtn: 'Automatické vyplnění',
        copyBtn: 'Zkopírovat kód',
        content: 'Váš ověřovací kód je *{{1}}*.',
        security: 'Z bezpečnostních důvodů tenhle kód s nikým nesdílejte.',
        expiration: 'Platnost kódu skončí za 10 min.'
    },
    {
        code: 'da',
        displayName: 'Danish',
        autoFillBtn: 'Udfyld automatisk',
        copyBtn: 'Kopiér koden',
        content: '*{{1}}* er din verificeringskode.',
        security: 'Af hensyn til din sikkerhed må du ikke dele denne kode.',
        expiration: 'Denne kode udløber om 10 minutter.'
    },
    {
        code: 'nl',
        displayName: 'Dutch',
        autoFillBtn: 'Automatisch invullen',
        copyBtn: 'Code kopiëren',
        content: '*{{1}}* is je verificatiecode.',
        security: 'Deel deze code om veiligheidsredenen niet.',
        expiration: 'Deze code verloopt over 10 minuten.'
    },
    {
        code: 'en',
        displayName: 'English',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'en_GB',
        displayName: 'English (UK)',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'en_US',
        displayName: 'English (US)',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'et',
        displayName: 'Estonia',
        autoFillBtn: 'Automaatne täitmine',
        copyBtn: 'Kopeeri kood',
        content: '*{{1}}* on sinu kinnituskood.',
        security: 'Turvalisuse huvides ära jaga seda koodi.',
        expiration: 'See kood aegub 10 minuti pärast.'
    },
    {
        code: 'fil',
        displayName: 'Filipin',
        autoFillBtn: 'Autofill',
        copyBtn: 'Kopyahin ang code',
        content: '*{{1}}* ang iyong verification code.',
        security: 'Para sa iyong seguridad, huwag i-share ang code na ito.',
        expiration: 'Mag-e-expire ang code na ito sa loob ng 10 minuto.'
    },
    {
        code: 'fi',
        displayName: 'Finnish',
        autoFillBtn: 'Täytä automaattisesti',
        copyBtn: 'Kopioi koodi',
        content: '*{{1}}* on vahvistuskoodisi.',
        security: 'Pidä koodi omana tietonasi turvallisuussyistä.',
        expiration: 'Tämä koodi vanhenee 10 minuutin kuluttua.'
    },
    {
        code: 'fr',
        displayName: 'French',
        autoFillBtn: 'Saisie automatique',
        copyBtn: 'Copier le code',
        content: 'Votre code de vérification est *{{1}}*.',
        security: ' Pour votre sécurité, ne le partagez pas.',
        expiration: 'Ce code expire dans 10 minutes.'
    },
    {
        code: 'ka',
        displayName: 'Georgian',
        autoFillBtn: 'თვითშევსება',
        copyBtn: 'კოდის კოპირება',
        content: '*{{1}}* არის თქვენი დამადასტურებელი კოდი.',
        security: 'თქვენივე უსაფრთხოებისთვის, არავის გაუზიაროთ ეს კოდი.',
        expiration: 'ამ კოდის მოქმედების ვადა ამოიწურება 10 წუთში.'
    },
    {
        code: 'de',
        displayName: 'German',
        autoFillBtn: 'Automatisch ausfüllen',
        copyBtn: 'Code kopieren',
        content: 'Dein Verifizierungscode lautet *{{1}}*.',
        security: 'Aus Sicherheitsgründen solltest du den Code nicht teilen.',
        expiration: 'Dieser Code verfällt in 10 Minuten.'
    },
    {
        code: 'el',
        displayName: 'Greek',
        autoFillBtn: 'Αυτόματη συμπλήρωση',
        copyBtn: 'Αντιγραφή κωδικού',
        content: 'Το *{{1}}* είναι ο κωδικός επαλήθευσής σας.',
        security: 'Για τη δική σας ασφάλεια, μην τον κοινοποιήσετε σε τρίτους.',
        expiration: 'Ο κωδικός λήγει σε 10 λεπτά.'
    },
    {
        code: 'gu',
        displayName: 'Gujarati',
        autoFillBtn: 'આપમેળે ભરો',
        copyBtn: 'કોડ કોપિ કરો',
        content: '*{{1}}*એ તમારો ખાતરીનો કોડ છે.',
        security: 'તમારી સુરક્ષા માટે, આ કોડ કોઈની સાથે શેર કરશો નહીં.',
        expiration: 'આ કોડ 10 મિનિટમાં સમાપ્ત થશે.'
    },
    {
        code: 'ha',
        displayName: 'Hausa',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'he',
        displayName: 'Hebrew',
        autoFillBtn: 'מילוי אוטומטי',
        copyBtn: 'העתקת הקוד',
        content: 'קוד האימות הוא ‏*{{1}}*‏.',
        security: 'מטעמי אבטחה, אין לשתף את הקוד הזה.',
        expiration: 'תוקף הקוד הזה יפוג בעוד ‏10‏ דקות.'
    },
    {
        code: 'hi',
        displayName: 'Hindi',
        autoFillBtn: 'अपने आप भरें',
        copyBtn: 'कोड कॉपी करें',
        content: '*{{1}}* आपका वेरिफ़िकेशन कोड है.',
        security: 'अपनी सुरक्षा के लिए, इस कोड को किसी के साथ शेयर न करें.',
        expiration: 'इस कोड की समय-सीमा 10 मिनट में समाप्त हो जाएगी'
    },
    {
        code: 'hu',
        displayName: 'Hungarian',
        autoFillBtn: 'Automatikus kitöltés',
        copyBtn: 'Kód másolása',
        content: 'A(z) *{{1}}* az ellenőrző kódod.',
        security: 'A saját biztonságod érdekében mással ne oszd meg ezt a kódot.',
        expiration: 'Ez a kód 10 perc múlva lejár.'
    },
    {
        code: 'id',
        displayName: 'Indonesian',
        autoFillBtn: 'Isi otomatis',
        copyBtn: 'Salin kode',
        content: '*{{1}}* adalah kode verifikasi Anda.',
        security: 'Demi keamanan, jangan bagikan kode ini.',
        expiration: 'Kode ini kedaluwarsa dalam 10 menit.'
    },
    {
        code: 'ga',
        displayName: 'Irish',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'it',
        displayName: 'Italian',
        autoFillBtn: 'Inserimento automatico',
        copyBtn: 'Copia codice',
        content: '*{{1}}* è il tuo codice di verifica.',
        security: 'Per garantire la tua sicurezza, ti consigliamo di non condividere questo codice.',
        expiration: 'Questo codice scadrà tra 10 minuti.'
    },
    {
        code: 'ja',
        displayName: 'Japanese',
        autoFillBtn: '自動入力',
        copyBtn: 'コードをコピー',
        content: '*{{1}}*があなたの認証コードです。',
        security: 'セキュリティのため、このコードは他の人に共有しないでください。',
        expiration: 'このコードは10分後に期限切れとなります'
    },
    {
        code: 'kn',
        displayName: 'Kannada',
        autoFillBtn: 'ಸ್ವಯಂಭರ್ತಿ',
        copyBtn: 'ಕೋಡ್ ನಕಲಿಸಿ',
        content: '*{{1}}* ಇದು ನಿಮ್ಮ ಪರಿಶೀಲನೆ ಕೋಡ್ ಆಗಿದೆ.',
        security: 'ನಿಮ್ಮ ಭದ್ರತೆಗಾಗಿ, ಈ ಕೋಡ್ ಅನ್ನು ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.',
        expiration: 'ಈ ಕೋಡ್ 10 ನಿಮಿಷಗಳಲ್ಲಿ ಅವಧಿ ಮೀರುತ್ತದೆ'
    },
    {
        code: 'kk',
        displayName: 'Kazakh',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'rw_RW',
        displayName: 'Kinyarwanda',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'ko',
        displayName: 'Korean',
        autoFillBtn: '자동 입력',
        copyBtn: '코드 복사',
        content: '인증 코드는 *{{1}}*입니다.',
        security: '보안을 위해 이 코드는 공유하지 마세요.',
        expiration: '이 코드는 10분 후에 만료됩니다.'
    },
    {
        code: 'ky_KG',
        displayName: 'Kyrgyz (Kyrgyzstan)',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'lo',
        displayName: 'Lao',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'lv',
        displayName: 'Latvian',
        autoFillBtn: 'Automātiski aizpildīt',
        copyBtn: 'Kopēt kodu',
        content: '*{{1}}* ir jūsu verifikācijas kods.',
        security: 'Jūsu drošībai nekopīgojiet šo kodu.',
        expiration: 'Koda derīgums beidzas pēc 10 minūtēm'
    },
    {
        code: 'lt',
        displayName: 'Lithuanian',
        autoFillBtn: 'Automatinis pildymas',
        copyBtn: 'Kopijuoti kodą',
        content: '*{{1}}* yra jūsų patvirtinimo kodas.',
        security: 'Saugos sumetimais nebendrinkite šio kodo.',
        expiration: 'Šis kodas baigs galioti po 10 min.'
    },
    {
        code: 'mk',
        displayName: 'Macedonian',
        autoFillBtn: 'Пополни автоматски',
        copyBtn: 'Копирај го кодот',
        content: '*{{1}}* е твојот код за верификација.',
        security: 'За твоја безбедност, не го споделувај овој код.',
        expiration: 'Кодов истекува за 10 минути.'
    },
    {
        code: 'ms',
        displayName: 'Malay',
        autoFillBtn: 'Autoisi',
        copyBtn: 'Salin kod',
        content: '*{{1}}* adalah kod penentusahan anda.',
        security: 'Untuk keselamatan anda, jangan kongsikan kod ini.',
        expiration: 'Kod ini akan luput dalam masa 10 minit.'
    },
    {
        code: 'ml',
        displayName: 'Malayalam',
        autoFillBtn: 'ഓട്ടോ‌ഫിൽ ചെയ്യുക',
        copyBtn: 'കോഡ് പകർത്തുക',
        content: 'നിങ്ങളുടെ വെരിഫിക്കേഷൻ കോഡ് *{{1}}* ആണ്.',
        security: 'നിങ്ങളുടെ സുരക്ഷയ്‌ക്ക്, ഈ കോഡ് പങ്കിടരുത്.',
        expiration: 'ഈ കോഡ് 10 മിനിറ്റിനുള്ളിൽ കാലഹരണപ്പെടുന്നു'
    },
    {
        code: 'mr',
        displayName: 'Marathi',
        autoFillBtn: 'ऑटोफिल',
        copyBtn: 'कोड कॉपी करा',
        content: '*{{1}}* हा तुमचा व्हेरिफिकेशन कोड आहे.',
        security: ' तुमच्या सुरक्षेसाठी, हा कोड शेअर करू नका.',
        expiration: 'हा कोड १० मिनिटांमध्ये कालबाह्य होतो.'
    },
    {
        code: 'nb',
        displayName: 'Norwegian',
        autoFillBtn: 'Automatisk utfylling',
        copyBtn: 'Kopier kode',
        content: '*{{1}}* er bekreftelseskoden din.',
        security: 'Av hensyn til sikkerheten din må du ikke dele denne koden.',
        expiration: 'Denne koden utløper om 10 minutter.'
    },
    {
        code: 'fa',
        displayName: 'Persian',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'pl',
        displayName: 'Polish',
        autoFillBtn: 'Uzupełnij automatycznie',
        copyBtn: 'Skopiuj kod',
        content: '*{{1}}* to kod weryfikacyjny.',
        security: 'Ze względów bezpieczeństwa nie udostępniaj tego kodu.',
        expiration: 'Ten kod wygaśnie za 10 minut.'
    },
    {
        code: 'pt_BR',
        displayName: 'Portuguese (BR)',
        autoFillBtn: 'Preenchimento automático',
        copyBtn: 'Copiar código',
        content: 'Seu código de verificação é *{{1}}*.',
        security: 'Para sua segurança, não o compartilhe.',
        expiration: 'Este código expira em 10 minutos.'
    },
    {
        code: 'pt_PT',
        displayName: 'Portuguese (POR)',
        autoFillBtn: 'Preencher automaticamente',
        copyBtn: 'Copiar código',
        content: '*{{1}}* é o teu código de verificação.',
        security: 'Para tua segurança, não partilhes este código.',
        expiration: 'Este código expira dentro de 10 minutos.'
    },
    {
        code: 'pa',
        displayName: 'Punjabi',
        autoFillBtn: 'ਸਵੈਚਲ ਭਰੋ',
        copyBtn: 'ਕੋਡ ਕਾਪੀ ਕਰੋ',
        content: '*{{1}}* ਤੁਹਾਡਾ ਪੁਸ਼ਟੀਕਰਨ ਕੋਡ ਹੈ।',
        security: 'ਆਪਣੀ ਸੁਰੱਖਿਆ ਲਈ, ਇਹ ਕੋਡ ਸਾਂਝਾ ਨਾ ਕਰੋ।',
        expiration: 'ਇਸ ਕੋਡ ਦੀ ਮਿਆਦ 10 ਮਿੰਟਾਂ ਵਿੱਚ ਸਮਾਪਤ ਹੋ ਜਾਵੇਗੀ।'
    },
    {
        code: 'ro',
        displayName: 'Romanian',
        autoFillBtn: 'Completare automată',
        copyBtn: 'Copiază codul',
        content: '*{{1}}* este codul tău de verificare.',
        security: ' Pentru siguranţa ta, nu dezvălui acest cod.',
        expiration: 'Acest cod va expira peste 10 minutes.'
    },
    {
        code: 'ru',
        displayName: 'Russian',
        autoFillBtn: 'Заполнить автоматически',
        copyBtn: 'Копировать код',
        content: 'Ваш код подтверждения — *{{1}}*.',
        security: 'Из соображений безопасности не сообщайте никому этот код.',
        expiration: 'Срок действия этого кода истекает через 10 минут.'
    },
    {
        code: 'sr',
        displayName: 'Serbian',
        autoFillBtn: 'Аутоматско попуњавање',
        copyBtn: 'Копирај кôд',
        content: '*{{1}}* је ваш кôд за потврду.',
        security: 'Ради сопствене безбедности, немојте га делити ни са ким.',
        expiration: 'Овај кôд истиче за 10 минута.'
    },
    {
        code: 'sk',
        displayName: 'Slovak',
        autoFillBtn: 'Vyplniť automaticky',
        copyBtn: 'Kopírovať kód',
        content: '*{{1}}* je váš overovací kód.',
        security: 'V záujme bezpečnosti tento kód nezdieľajte.',
        expiration: 'Tento kód vyprší o 10 min.'
    },
    {
        code: 'sl',
        displayName: 'Slovenian',
        autoFillBtn: 'Samozapolnitev',
        copyBtn: 'Kopiraj kodo',
        content: 'Tvoja potrditvena koda je *{{1}}*',
        security: 'Zaradi varnosti ne deli te kode.',
        expiration: 'Koda bo potekla čez 10 minut.'
    },
    {
        code: 'es',
        displayName: 'Spanish',
        autoFillBtn: 'Autocompletar',
        copyBtn: 'Copiar código',
        content: 'Tu código de verificación es *{{1}}*.',
        security: 'Por tu seguridad, no lo compartas.',
        expiration: 'Este código caduca en 10 minutos.'
    },
    {
        code: 'es_AR',
        displayName: 'Spanish (ARG)',
        autoFillBtn: 'Autocompletar',
        copyBtn: 'Copiar código',
        content: 'Tu código de verificación es *{{1}}*.',
        security: 'Por tu seguridad, no lo compartas.',
        expiration: 'Este código caduca en 10 minutos.'
    },
    {
        code: 'es_MX',
        displayName: 'Spanish (MEX)',
        autoFillBtn: 'Autocompletar',
        copyBtn: 'Copiar código',
        content: 'Tu código de verificación es *{{1}}*.',
        security: 'Por tu seguridad, no lo compartas.',
        expiration: 'Este código caduca en 10 minutos.'
    },
    {
        code: 'es_ES',
        displayName: 'Spanish (SPA)',
        autoFillBtn: 'Autocompletar',
        copyBtn: 'Copiar código',
        content: 'Tu código de verificación es *{{1}}*.',
        security: 'Por tu seguridad, no lo compartas.',
        expiration: 'Este código caduca en 10 minutos.'
    },
    {
        code: 'sw',
        displayName: 'Swahili',
        autoFillBtn: 'Jaza kiotomatiki',
        copyBtn: 'Nakili msimbo',
        content: '*{{1}}* ndio msimbo wako wa kuthibitisha.',
        security: 'Kwa usalama wako, usimpe mwingine msimbo huu.',
        expiration: 'Msimbo huu utakwisha muda baada ya dakika 10.'
    },
    {
        code: 'sv',
        displayName: 'Swedish',
        autoFillBtn: 'Autokomplettera',
        copyBtn: 'Kopiera koden',
        content: '*{{1}}* är din verifieringskod.',
        security: 'Av säkerhetsskäl ska du inte dela koden med någon annan.',
        expiration: 'Koden går ut om 10 minuter.'
    },
    {
        code: 'ta',
        displayName: 'Tamil',
        autoFillBtn: 'தானாக நிரப்புக',
        copyBtn: 'குறியீட்டை நகலெடுத்திடுக',
        content: '*{{1}}* என்பது சரிபார்ப்பு குறியீடாகும்.',
        security: 'பாதுகாப்பிற்காக, இந்தக் குறியீட்டைப் பகிர வேண்டாம்.',
        expiration: 'இந்தக் குறியீடு 10 நிமிடங்களில் காலாவதியாகும்.'
    },
    {
        code: 'te',
        displayName: 'Telugu',
        autoFillBtn: 'ఆటోఫిల్ చేయి',
        copyBtn: 'కోడ్‌ను కాపీ చేయండి',
        content: '*{{1}}* మీ వెరిఫికేషన్ కోడ్.',
        security: 'మీ భద్రత కోసం ఈ కోడ్‌ను షేర్ చేయవద్దు.',
        expiration: 'ఈ కోడ్ గడువు 10 నిమిషాల్లో ముగుస్తుంది.'
    },
    {
        code: 'th',
        displayName: 'Thai',
        autoFillBtn: 'กรอกอัตโนมัติ',
        copyBtn: 'คัดลอกรหัส',
        content: 'รหัสยืนยันของคุณคือ *{{1}}*',
        security: 'โปรดอย่าบอกรหัสนี้แก่ผู้อื่นเพื่อความปลอดภัยของคุณ',
        expiration: 'รหัสนี้จะหมดอายุใน 10 นาที'
    },
    {
        code: 'tr',
        displayName: 'Turkish',
        autoFillBtn: 'Otomatik doldur',
        copyBtn: 'Kodu kopyala',
        content: '*{{1}}* doğrulama kodun.',
        security: 'Güvenliğin için bu kodu paylaşma.',
        expiration: 'Bu kodun süresi 10 dakika sonra doluyor.'
    },
    {
        code: 'uk',
        displayName: 'Ukrainian',
        autoFillBtn: 'Заповнити автоматично',
        copyBtn: 'Копіювати код',
        content: 'Ваш код підтвердження – *{{1}}*.',
        security: 'З міркувань безпеки не повідомляйте нікому цей код.',
        expiration: 'Термін дії цього коду закінчується через 10 хвилин.'
    },
    {
        code: 'ur',
        displayName: 'Urdu',
        autoFillBtn: 'آٹو میٹک طریقے سے بھریں',
        copyBtn: 'کوڈ کاپی کریں',
        content: '‏*{{1}}*‏ آپ کا توثیقی کوڈ ہے۔',
        security: 'اپنی حفاظت کی خاطر یہ کوڈ شیئر نہ کریں۔',
        expiration: 'یہ کوڈ ‏10‏ منٹ میں زائد المیعاد ہو جائے گا۔'
    },
    {
        code: 'uz',
        displayName: 'Uzbek',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    },
    {
        code: 'vi',
        displayName: 'Vietnamese',
        autoFillBtn: 'Tự động điền',
        copyBtn: 'Sao chép mã',
        content: '*{{1}}* là mã xác minh của bạn.',
        security: 'Để bảo mật, bạn đừng chia sẻ mã này.',
        expiration: 'Mã này sẽ hết hạn trong 10 phút nữa.'
    },
    {
        code: 'zu',
        displayName: 'Zulu',
        autoFillBtn: 'Autofill',
        copyBtn: 'Copy code',
        content: '*{{1}}* is your verification code.',
        security: 'For your security, do not share this code.',
        expiration: 'This code expires in 10 minutes.'
    }
];