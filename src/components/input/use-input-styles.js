import { useMemo, useCallback } from "react"

const makeColor = ({
  defaultColor = "inputBorder",
  success = "success",
  error = "error",
  disabled = "inputBorder",
}) => ({
  success: success,
  error: error,
  disabled: disabled,
  default: defaultColor,
})
const useInputStyles = ({ size = "large", disabled, success, error, focused }) => {
  const status = success ? "success" : error ? "error" : disabled ? "disabled" : "default"

  const sizeStyles = useMemo(() => {
    switch (size) {
      case "tiny":
        return {
          height: "28px",
          padding: [0.5, 1],
        }
      case "small":
        return {
          height: "34px",
          padding: [1, 2],
        }
      default: {
        return {
          height: "42px",
          padding: [2, 3],
        }
      }
    }
  }, [size])

  const inputContainer = useMemo(() => {
    return {
      ...sizeStyles,
      background: disabled ? "mainBackgroundDisabled" : "mainBackground",
      border: {
        size: "1px",
        type: "solid",
        color: focused
          ? makeColor({ defaultColor: "inputBorderFocus" })[status]
          : makeColor({})[status],
        side: "all",
      },
      round: "2px",
      _hover: {
        border: {
          size: "1px",
          type: "solid",
          color: makeColor({ defaultColor: "inputBorderHover" })[status],
          side: "all",
        },
      },
    }
  }, [status, sizeStyles, focused])

  const iconContainer = useCallback(
    ({ iconRight = false, iconLeft = false }) => {
      return {
        height: "100%",
        alignItems: "center",
        round: true,
        margin: [0, iconRight ? 0 : -1, 0, iconLeft ? 0 : -1],
      }
    },
    [disabled]
  )

  return { styles: { inputContainer, iconContainer } }
}

export default useInputStyles
