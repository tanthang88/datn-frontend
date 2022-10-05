function ContainerFullWidth(props) {
  return (
    <>
      <section className={`w-screen w-full ${props.className}`}>
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
