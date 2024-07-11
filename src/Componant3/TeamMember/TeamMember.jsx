import teamThumb from "/images/team1.jpg";
import teamThumb2 from "/images/team2.jpg";
import teamThumb3 from "/images/team3.jpg";
import teamThumb4 from "/images/team4.jpg";
import TeamCard from "./TeamCard";
import {
  FaLinkedinIn,
  FaPinterestP,
  FaStarOfLife,
  FaXTwitter,
} from "react-icons/fa6";

const TeamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Anjelina Watson",
    teamDesc: "Web Developer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "Jhon D. Alexon",
    teamDesc: "IT Specialist",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: "Al-Amin Islam",
    teamDesc: "Graphic Designer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: "Ricerd Powel",
    teamDesc: "Marketing",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
];

const TeamMember = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Nunito font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
            <FaStarOfLife />
            PROFESSIONALS TEAM <FaStarOfLife />
          </h5>
          <h1 className="font-Nunito font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
            Our Creative Members
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {TeamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              teamDesc,
              socialIcon,
              socialIcon2,
              socialIcon3,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamDesc={teamDesc}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
