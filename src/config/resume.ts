//About 페이지에 들어갈 내 이력서 정보 정리

import { Project } from "./types";

type Resume = {
    name: string; //이름
    position: string; //직책
    description: string; //한줄소개
    career?: Career[]; //경력
    education?: Education[];
};

type Career = {
    title: string;
    description: string;
    duration: string;
};

type Education = {
    title: string;
    description: string;
    duration: string;
};

export const resume: Resume = {
    name: "Jinho Park",
    position: "BE Developer",
    description: "개인 공부 기록용 블로그",
    career: [
        {
            title: "IGAWorks",
            description: "Backend Engineering (Kotlin, Python, Spring Framework, AWS)",
            duration: "2021 - Now",
        },
        {
            title: "Kakao corp",
            description: "Backend Engineering - Intern (Java, Spring Framework)",
            duration: "2021 - 2021",
        },
    ],
    education: [
        {
            title: "건국대학교",
            description: "대한민국 서울",
            duration: "2014 - 2021",
        },
        {
            title: "삼성 청년 SW 아카데미",
            description: "Java, Spring Framework",
            duration: "2021 - 2021",
        },
    ],
};
