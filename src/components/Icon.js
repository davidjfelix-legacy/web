import React from 'react'

const styles = {
  svg: {
    display: 'inline-block',
    verticalAlign: 'middle',
  }
}

export const IconTypes = {
  PAUSE: "M128 128h320v768h-320zM576 128h320v768h-320z",
  PLAY: "M192 128l640 384-640 384z",
  STOP: "M128 128h768v768h-768z",
}

export const Icon = ({size, icon, color}) => (
  <svg
    style={styles.svg}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 1024 1024">
    <path style={{fill: color}} d={icon}></path>
  </svg>
)

Icon.defaultProps = {
  color: '#222',
  size: 16,
}

export default Icon
