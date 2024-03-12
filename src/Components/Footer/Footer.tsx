import './Footer.css'

interface FooterProps {
  array: number[];
}

export const Footer = (props: FooterProps) => {
  const { array } = props;
  return (
     <div className='footer'>{array}</div>
  )
}