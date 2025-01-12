import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { handleReleaseTime } from "@/reducer/reservationFormReducer";
import { useReservationContext } from "@/context/ReservationFomProvider";
const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    scroll: true,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    variableHeight: false,
    rows: 1,
};

const AddTimeModal = () => {
    const { dispatch, reservationFormState: initialState } = useReservationContext();
    const time = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const hours = ['00', '15', '30', '45']
    const format = ['AM', 'PM']


    const [selectedTimes, setSelectedTimes] = useState({
        fromTime: '01',
        fromHour: '00',
        fromFormat: 'AM',
        toTime: '01',
        toHour: '00',
        toFormat: 'AM',
    });

    const handleSliderChange = (category: string, index: number) => {
        let value: String;

        if (category === 'fromHour' || category === 'toHour') {
            switch (index) {
                case 0:
                    value = '00';
                    break;
                case 1:
                    value = '15';
                    break;
                case 2:
                    value = '30';
                    break;
                case 3:
                    value = '45';
                    break;
                default:
                    value = '00';
            }
        }
        else if (category === 'fromFormat' || category === 'toFormat') {
            value = index === 0 ? 'AM' : 'PM';
        } else {
            value = time[index];
        }

        setSelectedTimes((prevTimes) => ({ ...prevTimes, [category]: value }));
    };


    const handleConfirm = () => {
        const formatTime = (minute: String, hour: String, format: String) => {
            return `${minute}:${hour} ${format}`;
        };

        const fromTimeFormatted = formatTime(selectedTimes.fromTime, selectedTimes.fromHour, selectedTimes.fromFormat);
        const toTimeFormatted = formatTime(selectedTimes.toTime, selectedTimes.toHour, selectedTimes.toFormat);
        const reservationTime = `${fromTimeFormatted} - ${toTimeFormatted}`;
        // console.log('From Time:', fromTimeFormatted);
        // console.log('To Time:', toTimeFormatted);
        if (initialState.reservationType === 'cancel') {
            handleReleaseTime(dispatch, reservationTime);
            document.getElementById("reservationTimeCustomButtonNew")?.click()
        } else {
            const newTime = reservationTime.split("-");
            handleReleaseTime(dispatch, newTime[0]);
            document.getElementById("reservationTimeCustomButtonNew")?.click()
        }
    };
    return (
        <>
            <div className="flex gap-5 p-4">
                <div className="">
                    <p className="text-sm font-semibold">To</p>
                    <div className="flex gap-5 mt-5">
                        <div className="h-[120px] w-[50px]  overflow-hidden flex relative gap-5">
                            <div className="w-[120px] h-[120px] overflow-hidden absolute pt-[50px]">
                                <Slider {...settings} afterChange={(index: number) => handleSliderChange('fromTime', index)} >
                                    {time.map((ele, key) => (
                                        <div key={key}>
                                            <h3>{ele}</h3>
                                        </div>
                                    ))}

                                </Slider>
                            </div>

                        </div>
                        <div className="h-[120px] w-[50px] overflow-hidden flex relative gap-5">
                            <div className="w-[120px] h-[120px] overflow-hidden absolute pt-[50px]">
                                <Slider {...settings} afterChange={(index: number) => handleSliderChange('fromHour', index)}>
                                    {hours.map((ele, key) => (
                                        <div key={key}>
                                            <h3>{ele}</h3>
                                        </div>
                                    ))}

                                </Slider>
                            </div>

                        </div>
                        <div className="h-[120px] w-[50px] overflow-hidden flex relative gap-5">
                            <div className="w-[120px] h-[120px] overflow-hidden absolute pt-[50px]">
                                <Slider {...settings} afterChange={(index: number) => handleSliderChange('fromFormat', index)}>
                                    {format.map((ele, key) => (
                                        <div key={key}>
                                            <h3>{ele}</h3>
                                        </div>
                                    ))}

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center items-center h-[150px] mt-5">
                    <p className="font-bold">-</p>
                </div>
                <div className="">
                    <p className="text-sm font-semibold">To</p>
                    <div className="flex gap-5 mt-5">
                        <div className="h-[120px] w-[50px]  overflow-hidden flex relative gap-5">
                            <div className="w-[120px] h-[120px] overflow-hidden absolute pt-[50px]">
                                <Slider {...settings} afterChange={(index: number) => handleSliderChange('toTime', index)}>
                                    {time.map((ele, key) => (
                                        <div key={key}>
                                            <h3>{ele}</h3>
                                        </div>
                                    ))}

                                </Slider>
                            </div>

                        </div>
                        <div className="h-[120px] w-[50px] overflow-hidden flex relative gap-5">
                            <div className="w-[120px] h-[120px] overflow-hidden absolute pt-[50px]">
                                <Slider {...settings} afterChange={(index: number) => handleSliderChange('toHour', index)}>
                                    {hours.map((ele, key) => (
                                        <div key={key}>
                                            <h3>{ele}</h3>
                                        </div>
                                    ))}

                                </Slider>
                            </div>

                        </div>
                        <div className="h-[120px] w-[50px] overflow-hidden flex relative gap-5">
                            <div className="w-[120px] h-[120px] overflow-hidden absolute pt-[50px]">
                                <Slider {...settings} afterChange={(index: number) => handleSliderChange('toFormat', index)} >
                                    {format.map((ele, key) => (
                                        <div key={key}>
                                            <h3>{ele}</h3>
                                        </div>
                                    ))}

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="border-t border-[gray] p-2 flex justify-end gap-3">
                <button className="bg-[white] border-2 rounded-md py-2 px-4 text-black" onClick={() => document.getElementById("reservationTimeCustomButtonNew")?.click()}>Cancel</button>
                <button className="bg-[black] border-2 rounded-md py-2 px-4 text-white" onClick={handleConfirm}>Submit</button>
            </div>
        </>
    )
}

export default AddTimeModal