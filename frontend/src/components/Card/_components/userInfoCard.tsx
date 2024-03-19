import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import useProfileModal from "../../../hooks/useProfileModal";
import { format } from "date-fns";

interface UserInfoCardProps {
  currentUser: any;
}
const UserInfoCard = ({ currentUser }: UserInfoCardProps) => {
  const profileModal = useProfileModal();
  const userDataRoutes = [
    {
      title: "Full name:",
      result: currentUser?.name,
    },
    {
      title: "E-mail:",
      result: currentUser?.email,
    },
    {
      title: "Birthday:",
      result: format(new Date(currentUser?.birthdate), "yyyy-MM-dd"),
    },
    {
      title: "phone number:",
      result: currentUser?.phone,
    },
  ];
  return (
    <div className="relative ">
      <Heading subTitle="Personal information:" />
      <div className="relative w-full h-full flex-col	">
        {userDataRoutes.map((data) => (
          <div
            className="flex justify-between mt-10 items-center"
            key={data.title}
          >
            <div className="font-600 mr-1 text-black text-sm">{data.title}</div>
            <div className="border-b border-dotted border-black flex-1 mt-3"></div>
            <div className="font-600 mr-1 text-black text-sm">
              {data.result}
            </div>
          </div>
        ))}
        <div className="py-5 px-10">
          <Button label="Edit" onClick={() => profileModal.onOpen()} />
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
