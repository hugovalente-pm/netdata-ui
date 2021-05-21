export const rawColors = {
  transparent: {
    full: "rgba(255, 255, 255, 0.0)",
    semi: "rgba(255, 255, 255, 0.5)",
    popover: "rgba(18, 36, 50, 0.9)",
  },
  green: {
    chateau: "#42b861",
    netdata: "#00AB44",
    deyork: "#68C47D",
    vista: "#96D4A2",
    fringyFlower: "#BFE5C6",
    frostee: "#E5F5E8",
  },
  red: {
    pomegranate: "#FF4136",
    carnation: "#F95251",
    apricot: "#ED7374",
    wewak: "#F59B9B",
    pastelpink: "#FFCED3",
    lavender: "#FFEBEF",
  },
  yellow: {
    amber: "#FFC300",
    sunglow: "#F1BB28",
    seaBuckthorn: "#F9A825",
    mustard: "#F8D36D",
    salomie: "#FFE182",
    buttermilk: "#F8D36D",
    ginfizz: "#FDF1CE",
  },
  neutral: {
    white: "#FFF",
    black: "#000",
    limedSpruce: "#35414A",
    regentgrey: "#8F9EAA",
    blackhaze: "#F7F8F8",
    iron: "#CFD5DA",
    porcelain: "#ECEEEF",
    bluebayoux: "#536775",
    shark: "#1C1E22",
    tuna: "#383B40",
    outerSpace: "#2B3136",
  },
  purple: {
    mauve: "#DB94F4",
    daisy: "#563D7C",
  },
}

const appColors = {
  primary: rawColors.green.netdata,
  accent: rawColors.green.chateau,
  main: rawColors.neutral.limedSpruce,
  border: rawColors.neutral.regentgrey,
  borderSecondary: rawColors.neutral.porcelain,
  tabsBorder: rawColors.neutral.iron,
  disabled: rawColors.neutral.porcelain,
  dropdown: rawColors.neutral.white,
  elementBackground: rawColors.neutral.blackhaze,
  elementBackgroundHover: rawColors.neutral.white,
  mainBackground: rawColors.neutral.white,
  mainBackgroundDisabled: rawColors.neutral.blackhaze,
  success: rawColors.green.netdata,
  successLite: rawColors.green.deyork,
  warning: rawColors.yellow.amber,
  warningLite: rawColors.yellow.mustard,
  warningBackground: rawColors.yellow.ginfizz,
  warningText: rawColors.yellow.seaBuckthorn,
  error: rawColors.red.pomegranate,
  errorLite: rawColors.red.apricot,
  errorBackground: rawColors.red.lavender,
  errorText: rawColors.red.pomegranate,
  attention: rawColors.purple.mauve,
  attentionSecondary: rawColors.purple.daisy,
  separator: rawColors.neutral.bluebayoux,
  controlFocused: rawColors.neutral.limedSpruce,
  selected: rawColors.neutral.iron,
  tooltip: rawColors.neutral.shark,
  bright: rawColors.neutral.white,
  text: rawColors.neutral.limedSpruce,
  textFocus: rawColors.neutral.regentgrey,
  textDescription: rawColors.neutral.bluebayoux,
  sectionHeaderBackground: rawColors.neutral.limedSpruce,
  placeholder: rawColors.neutral.iron,
  key: rawColors.neutral.regentgrey,
  panel: rawColors.neutral.limedSpruce,
}

export default {
  ...appColors,
  ...rawColors,
}
