import SkillPart from "./SkillPart";
export default function Skill() {
    const languages =[
        "https://img.shields.io/badge/c%20-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white",
        "https://img.shields.io/badge/c++%20-%2300599C.svg?&style=for-the-badge&logo=c%2B%2B&logoColor=white",
        "https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white",
        "https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white",
        "https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white",
        "https://img.shields.io/badge/dart-%230175C2.svg?&style=for-the-badge&logo=dart&logoColor=white",
        "https://img.shields.io/badge/shell_script%20-%23121011.svg?&style=for-the-badge&logo=gnu-bash&logoColor=white",


    ]
    const frontend = [
        "https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white",
        "https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white",
        "https://img.shields.io/badge/Flutter%20-%2302569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white",

    ]
    const backend = [
        "https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge",
        "https://img.shields.io/badge/laravel%20-%23FF2D20.svg?&style=for-the-badge&logo=laravel&logoColor=white",
        "https://img.shields.io/badge/spring%20-%236DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white",
        "https://img.shields.io/badge/flask%20-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white",

    ]
    const versionControl = [
        "https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white",
        "https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white",
    ]
    const Database = [
        "https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white",
        "https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white",
        "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
        "https://img.shields.io/badge/firebase%20-%23039BE5.svg?&style=for-the-badge&logo=firebase",
        "https://img.shields.io/badge/sqlite-%2307405e.svg?&style=for-the-badge&logo=sqlite&logoColor=white",


    ]
    const tools = [
        "https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white",
        "https://img.shields.io/badge/kubernetes%20-%23326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white",
    ]
  return (
    <>
      <article className="about">
        <header>
          <h2 className="article-title">Skill</h2>
        </header>
        <section className="timeline">
            <SkillPart name="Languages" urls={languages} />
            <SkillPart name="Frontend" urls={frontend} />
            <SkillPart name="Backend" urls={backend} />
            <SkillPart name="Version Control" urls={versionControl} />
            <SkillPart name="Database" urls={Database} />
            <SkillPart name="Tools" urls={tools} />
            
   
            
            
            

        </section>
      </article>
    </>
  );
}
