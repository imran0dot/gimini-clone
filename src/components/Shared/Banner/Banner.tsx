import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { CompassIcon, LightbulbIcon, PenIcon } from 'lucide-react';

const Banner: React.FC = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-slate-500 leading-[50px]'>
                <span className='bg-gradient-to-tl from-blue-700 to-red-400 text-transparent bg-clip-text text-5xl animate-spin'>Hello, Dev</span> <br />
                <span className='mt-5'>How can I help you today?</span>
            </h1>

            <div className='grid grid-cols-4 gap-5 mt-10'>
                <Card>
                    <CardHeader />
                    <CardContent>
                        Ideas to surprise a friend on their birthday
                    </CardContent>
                    <CardFooter className='flex flex-col items-end'>
                        <CompassIcon />
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader />
                    <CardContent>
                        Ideas to surprise a friend on their birthday
                    </CardContent>
                    <CardFooter className='flex flex-col items-end'>
                        <LightbulbIcon />
                    </CardFooter>
                </Card>


                <Card>
                    <CardHeader />
                    <CardContent>
                        Ideas to surprise a friend on their birthday
                    </CardContent>
                    <CardFooter className='flex flex-col items-end'>
                        <PenIcon />
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader />
                    <CardContent>
                        Ideas to surprise a friend on their birthday
                    </CardContent>
                    <CardFooter className='flex flex-col items-end'>
                        <CompassIcon />
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Banner;