import styled from "styled-components"
import tw from "twin.macro"

export const StyledBotton = styled.div`
 ${props => props.prop ==="first" ? tw`flex flex-row-reverse md:flex-row gap-4 mb-5` : tw ``}
 ${props => props.prop ==="second" ? tw`pb-5` : tw ``}
`
export const StyledImg = styled.img`
${props => props.prop ==="first" ? tw`w-2/5 sm:h-56 sm:w-1/2 lg:w-52 md:h-auto md:text-9xl ` : "" };
${props => props.prop ==="second" ? tw`w-full max-h-48 sm:h-56`  : "" };
`   
export const StyledGrid = styled.div`
${props => props.prop==="second"? tw`grid grid-cols-2 gap-3 lg:grid-cols-4 mx-3 lg:gap-6`: tw``}
h1 {
    ${props => props.prop ==="second" ? tw`text-gray-700 font-bold` : tw ``}
}
p {
    ${props => props.prop ==="second" ? tw`text-gray-500 font-semibold ` : tw ``}
}
`
export const ResponsiveNavbar = styled.div `
 ${props => props.prop ? tw`w-full h-96 mx-auto block flex justify-center` : tw`flex flex-col block gap-4 `}
 .nav-items {
  ${props => props.prop ? tw`my-auto` : tw`flex justify-between`}/
 } 
 .nav-menu {
    ${props => props.prop ? tw`flex justify-center` : tw`my-auto hidden sm:block`}
  }
 ul {
    ${props => props.prop ? tw`flex flex-col gap-8 text-center text-3xl` : tw`flex gap-12 text-xl`}
  }
  img{
    ${props => props.prop ? tw`hidden` : tw`block`}
  }

  button {
    ${props => props.prop ? tw`absolute top-3 right-2` : tw`sm:hidden`}
  }
  .hidden-menu {
    ${props => props.prop ? tw`block` : tw`hidden`}
  }
`