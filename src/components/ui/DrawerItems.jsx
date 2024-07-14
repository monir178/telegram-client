import { Users } from "lucide-react";
import { CircleUser } from "lucide-react";
import { Bookmark } from "lucide-react";

import { Settings } from "lucide-react";
import { Phone } from "lucide-react";
import { Megaphone } from "lucide-react";
import { Plus } from "lucide-react";
import { ChevronUp } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

const DrawerItems = () => {

    return (
        <div className="font-[646] ">
            <div>
                <img src="https://www.meshcc.com/wp-content/uploads/2022/02/Alex-Foord-e1644436249973.jpg" alt="" className="rounded-full h-12 w-12" />
            </div>
            <div className=" flex justify-between items-center mt-4">
                <div>
                    <h1 className=" text-base">
                        Owner Name
                    </h1>
                    <p className="text-primary font-normal "> Set Emoji Status</p>
                </div>
                <div>
                    <ChevronUp className="text-gray-400" />
                </div>
            </div>
            <hr className=" border-gray-300 my-3 w-full" />
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <img src="https://www.meshcc.com/wp-content/uploads/2022/02/Alex-Foord-e1644436249973.jpg" alt="" className="rounded-full h-9 border-2 border-sky-500 p-[2px] w-9" />
                    <h1 style={{ fontWeight: 600 }}>
                        Owner Name
                    </h1>
                </div>
                <div className="flex items-center gap-4 ml-1">
                    <Plus className="rounded-full p-[5px] bg-primary text-white" strokeWidth={3.4} />
                    <h1 >
                        Add Account
                    </h1>
                </div>
            </div>
            <hr className=" border-gray-300 my-3 w-full" />
            <div className="ml-1 flex flex-col space-y-5">
                <div className="flex items-center gap-4">
                    <Users strokeWidth={1.3} />
                    <h1 >
                        New Group
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <Megaphone strokeWidth={1.3} />
                    <h1 >
                        New Channel
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <CircleUser strokeWidth={1.3} />
                    <h1 >
                        Contacts
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <Phone strokeWidth={1.3} />
                    <h1 >
                        Calls
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <Bookmark strokeWidth={1.3} />
                    <h1 >
                        Saved Messages
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <Settings strokeWidth={1.3} />
                    <h1 >
                        Settings
                    </h1>
                </div>
                {/* <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Moon strokeWidth={1.3} />
                        <h1 >
                            Night Mode
                        </h1>
                    </div>
                    <input type="checkbox" className="toggle toggle-sm toggle-primary" />
                </div> */}
                <ThemeToggler />
            </div>

        </div>
    );
};

export default DrawerItems;
