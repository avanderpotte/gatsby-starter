const easing = 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'

const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
    },
    entered: {
      transition: `opacity ${timeout}ms ${easing}`,
      opacity: 1
    },
    exiting: {
      transition: `opacity ${timeout}ms ${easing}`,
      opacity: 0
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle
