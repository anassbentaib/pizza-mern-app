import { FaUser } from "react-icons/fa6";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/_components/CardHeader";
import { capitalizeFirstLetter } from "../constants";
import { LuHistory } from "react-icons/lu";
import UserInfoCard from "../components/Card/_components/userInfoCard";
import StatusCard from "../components/Card/_components/StatusCard";
import AdresseCard from "../components/Card/_components/AdresseCard";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  const userInfoRoutes = [
    {
      title: "Profile",
      icon: FaUser,
      activeBg: "bg-[#eb5c5e]",
      hover: "text-[#eb5c5e]",
    },
    {
      title: "Orders history",
      icon: LuHistory,
      activeBg: "bg-[#478f00]",
      hover: "text-[#478f00]",
    },
  ];
  const cardHeader = (
    <div>
      <CardHeader title="Personal Account" />
    </div>
  );
  const cardBody = (
    <div className="px-5">
      <div className="space-x-1 flex">
        {userInfoRoutes.map((item) => (
          <div
            key={item.title}
            className={`group p-2 justify-start cursor-pointer  `}
          >
            <div
              className={`flex items-center flex-1  ${item.activeBg} text-white   p-2 px-3 rounded-    `}
            >
              <div className={`p-2  ${item.activeBg}  rounded-full `}>
                <item.icon className="h-5 w-5 text-white" />
              </div>

              <div className={`ml-1 text-md hover:${item.hover} mr-2`}>
                {capitalizeFirstLetter(item.title)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-3">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          <UserInfoCard currentUser={currentUser} />
          <StatusCard />
          <AdresseCard />
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Card cardHeader={cardHeader} cardBody={cardBody} />
    </div>
  );
};

export default Profile;
