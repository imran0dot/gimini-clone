import React, { FormEvent, useRef, useState } from 'react';
import TopBar from '../Shared/TopBar/Topbar';
import Banner from '../Shared/Banner/Banner';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { LoaderIcon, SendIcon } from 'lucide-react';
import { runAi } from '../../lib/utils';

const Main: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const promptInput = useRef<HTMLInputElement>(null);
    const generatedBox = useRef<HTMLDivElement>(null);
    const scrollArea = useRef<HTMLDivElement>(null);


    const handleFunction = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        scrollArea.current?.scrollIntoView(false);
        setIsLoading(true);

        const generatedText = document.createElement('p');
        try {
            const promptInputValue = promptInput.current?.value ?? '';
            const resultText = await runAi(promptInputValue);
            generatedText.textContent = resultText;
            generatedBox.current?.appendChild(generatedText);
            promptInput.current!.value = '';
        } catch (err) {
            generatedText.textContent = 'Something went wrong!' + err;
            generatedBox.current?.appendChild(generatedText);
        } finally {
            scrollArea.current?.scrollIntoView(false);
            setIsLoading(false);
        }
    };


    return (
        <div className="relative border min-h-screen flex flex-col justify-between">
            <TopBar />

            <ScrollArea className="h-[80vh] ">
                <div
                    ref={scrollArea}
                    className=" w-10/12 mx-auto flex flex-col justify-center min-h-screen">
                    <Banner />

                    {/* generated text */}
                    <div className="mt-10 flex flex-col gap-10" ref={generatedBox}>

                    </div> <LoaderIcon className={`animate-spin ${isLoading ? 'visible' : 'invisible'}`} />
                </div>
            </ScrollArea>

            <div className="w-10/12 mx-auto pb-5">
                {/* Input form */}
                <form
                    onSubmit={handleFunction}
                    className="flex justify-between items-center px-5 bg-slate-300 rounded-full "
                >
                    <input
                        className="bg-transparent w-10/12 py-5  focus:outline-none"
                        placeholder="Enter a prompt here"
                        type="text"
                        name="prompt_input"
                        ref={promptInput}
                    />
                    <Button variant="ghost" className="2/12">
                        <SendIcon />
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Main;
