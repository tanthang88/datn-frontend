function ContainerFullWidth(props) {
  return (
    <>
      <section className={`w-full max-w-full ${props.className}`}>
        {props.children}
      </section>
    </>
  )
}
function Container(props) {
  return (
    <>
      <section className={`container ${props.className}`}>
        {props.children}
      </section>
    </>
  )
}
ContainerFullWidth.defaultProps = {
  className: '',
}
Container.defaultProps = {
  className: '',
}
export { ContainerFullWidth, Container }
