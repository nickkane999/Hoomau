import styled from "styled-components";
import Link from "next/link";
import { Navbar } from "react-bootstrap";

export const NavList = styled(Navbar)`
  background-color: #3d84db;
  color: #f0ead6 !important;
`;

export const BrandImage = styled.div`
  margin-left: 10px;
`;

export const LinkStyled = styled(Link)`
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: orange;
  a {
    &.active {
      color: blue;
      &:after {
        content: "";
        position: absolute;
        display: block;
        height: 2px;
        left: 0%;
        bottom: 0;
        background-color: blue;
        animation: slide-in 0.3s ease-in forwards;
        @keyframes slide-in {
          from {
            left: 50%;
            width: 0;
          }
          to {
            left: 0%;
            width: 100%;
          }
        }
      }
    }
  }
`;
