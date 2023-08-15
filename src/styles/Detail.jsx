import styled from "styled-components";
import { motion } from "framer-motion";

const Detail = styled(motion.div)`
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;
  min-width: 100%;

  .pic {
    margin-right: 20px;
  }
  .active {
    background-color: rgb(var(--accent-color2));
    color: rgb(var(--primary-color1));
  }

  h2 {
    text-align: center;
  }

  h3 {
    margin-bottom: 2rem;
    font-weight: normal;
    font-size: 21px;
  }
  .ingre {
    font-size: 1.2rem;
    line-height: 2.5rem;
    list-style-type: none;
  }

  a:hover {
    color: rgb(var(--accent-color1));
  }
`;

export default Detail;