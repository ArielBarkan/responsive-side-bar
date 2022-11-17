import styled from "styled-components";


const SideBarWrapper = styled.p<any>`
position: fixed;

color: #fff;
margin:0;
left: ${({ isOpen }) => isOpen ? "0" : "-250px"};
transition: left 0.3s ease-in-out;
//;
width:250px;
height:  calc( 100vh - 50px );
box-sizing: border-box;

display: flex;
flex-direction: column;
justify-content: space-between;

`;

const SideBarHeader = styled.p`
background-color: grey;
margin-block: 0;
`;

const SideBarContent = styled.p`
background-color: rgb(74 32 32 / 72%);
margin-block: 0;
flex:1;
overflow-y: auto;


&::-webkit-scrollbar {
        width: 10px;
        
    }

&::-webkit-scrollbar-thumb {
  background-color: darkBlue;
    border-radius: 15px;
    height: 2px;
  
}
`;

const UlLink = styled.ul`
padding-left: 0;
  
`

const LiLink = styled.li`
border-color: #bbb9b9;
border-style: solid;
border-width: 1px 0;
list-style: none;
transition: all 0.2s ease;

    padding: 5px 10px;
    cursor: pointer;
    &:hover{
     padding: 5px 20px;
    }
`

const SideBarFooter = styled.p`
background-color: blue;  

margin-block: 0;
`;

export { SideBarWrapper, SideBarHeader, SideBarContent, UlLink, LiLink, SideBarFooter }