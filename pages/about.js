import { PageLayout } from "@/components/layouts/PageLayout";
import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <PageLayout
      fTitle="About"
      sTitle="About me"
      subTitle={
        "Explore my journey, skills, and goals as an aspiring web developer"
      }
    ></PageLayout>
  );
}
