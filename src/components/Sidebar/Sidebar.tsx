import { HistoryIcon, MessageSquareIcon, PlusIcon, SettingsIcon, ShieldQuestion } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import logo from "@/assets/gemini_icon.png";
const Sidebar:
    React.FC<{
        className?: string;
    }>
    = ({ className }) => {
        return (
            <div className={cn("", className)}>
                <div className="flex flex-col justify-between py-4 min-h-screen">
                    {/* top section  */}
                    <div className="px-4 py-2">
                        <img src={logo} alt="" />

                        {/* New Chat  */}
                        <div className="mt-3">
                            <Button
                                variant="default"
                                size="lg"
                                className="w-full justify-start bg-slate-300 bg-opacity-100 text-black hover:text-white"
                            >
                                <PlusIcon className="mr-2 h-4 w-4" />
                                New Chat
                            </Button>
                        </div>

                        {/* Recent Chats  */}
                        <div className="space-y-1 mt-10">
                            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                                Recent Chat's
                            </h2>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <MessageSquareIcon className="mr-2 h-4 w-4" />
                                Browse
                            </Button>
                        </div>
                    </div>

                    {/* bottom section  */}
                    
                    <div className="px-4 py-2">
                        {/* Recent Chats  */}
                        <div className="space-y-1 ">
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <ShieldQuestion className="mr-2 h-4 w-4" />
                                Help
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <HistoryIcon className="mr-2 h-4 w-4" />
                                Activity
                            </Button>
                            
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <SettingsIcon className="mr-2 h-4 w-4" />
                                Setting
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default Sidebar;