import React, {useRef, useState} from "react";
import { Button } from "@mui/material";

import {useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL} from '../../context/ThemeProvider';

import { Wrapper } from "./style";
import '../../index.css';



export const SettingsPage = () =>{
    const isTheme = useTheme();


    return(
        <>

        <Wrapper>
        <Button onClick={()=>isTheme.change(THEME_LIGHT)} variant='contained'>1</Button>
        <Button onClick={()=>isTheme.change(THEME_DARK)}variant='contained'>2</Button>
        <Button onClick={()=>isTheme.change(THEME_NEUTRAL)}variant='contained'>3</Button>
        </Wrapper>
        </>
    )
}