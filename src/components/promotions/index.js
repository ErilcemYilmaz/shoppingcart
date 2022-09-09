import { Slide } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useRef, useState } from "react"
import { MessageText, SliderContainer } from "../../styles/promotions"


const messages = [
    "Test1",
    "Test2",
    "Test3",
];

export default function Slider() {
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0)
    const[show, setShow] = useState(true);

    //Slideanimation
    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        },3000);

        const intervalId = setInterval(() =>{
            // get next message
            setMessageIndex((i) => (i + 1) % messages.length)

            // slide the message in
            setShow(true);

            
            setTimeout(() => {
                setShow(false)
            },3000);
        },4000);

        return () => {
            clearInterval(intervalId);
        }

    },[]);

    return (
        <SliderContainer ref={containerRef.current}>
            <Slide direction={show ? "left" : "right"} in={show} timeout={{enter: 500, exit: 100}} container={containerRef.current}>
                <Box diplay={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </SliderContainer>

    )
}