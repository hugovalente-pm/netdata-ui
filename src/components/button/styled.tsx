import React from "react"
import styled, { css } from "styled-components"
import { Button } from "@rmwc/button"
import { CircularProgress } from "@rmwc/circular-progress"
// import "@rmwc/circular-progress/circular-progress.css"
import { getColor } from "../../theme/utils"
import { ButtonType } from "./button"

export const StyledButton = styled(({ ...otherProps }) => <Button {...otherProps} />)`
  ${props => {
    if (props.disabled) {
      return css`
        opacity: 0.6;
        cursor: not-allowed;
        background: ${getColor(["green", "greenHaze"])};
        border-radius: 3px;
        border-color: ${getColor(["green", "greenHaze"])};
        width: ${props.label ? "128px" : "40px"};
        height: 40px;
        // font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        color: ${getColor(["white", "pure"])};
        &:active {
          border-width: 0px;
        }
        &:focus {
          outline: none;
        }
      `
    }
    switch (props.type) {
      case ButtonType.noFill:
        return css`
          background: ${getColor(["white", "pure"])};
          border-radius: 3px;
          border-color: ${getColor(["green", "greenHaze"])};
          width: ${props.label ? "128px" : "40px"};
          height: 40px;
          // font-family: IBM Plex Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          color: ${getColor(["green", "greenHaze"])};
          &:hover {
            border-color: ${getColor(["green", "hover"])};
            border-width: 3px;
            width: ${props.label ? "132px" : "44px"};
            height: 44px;
          }
          &:active {
            background: ${getColor(["green", "malachite"])};
            border-color: ${getColor(["green", "greenHaze"])};
            border-width: 0px;
            width: ${props.label ? "132px" : "44px"};
            height: 44px;
            color: ${getColor(["white", "pure"])};
          }
          &:focus {
            outline: none;
          }
        `
      default:
        return css`
          background: ${getColor(["green", "greenHaze"])};
          border-radius: 3px;
          border-width: 0px;
          width: ${props.label ? "128px" : "40px"};
          height: 40px;
          // font-family: IBM Plex Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          color: ${getColor(["white", "pure"])};
          &:hover {
            border-color: ${getColor(["green", "hover"])};
            border-width: 3px;
            width: ${props.label ? "132px" : "44px"};
            height: 44px;
          }
          &:active {
            background: ${getColor(["green", "malachite"])};
            border-color: ${getColor(["green", "greenHaze"])};
            border-width: 0px;
            width: ${props.label ? "132px" : "44px"};
            height: 44px;
          }
          &:focus {
            outline: none;
          }
        `
    }
  }};
`

export const StyledCircularProgress = styled(({ ...otherProps }) => (
  <CircularProgress {...otherProps} />
))`
  ${() => `

  `};
`
