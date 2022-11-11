export const changeVariables = (theme:any) =>{
    const root = document.querySelector(':root') as HTMLElement;
    root.style.setProperty('--theme-bg-default',`var(--theme-bg-${theme})`)
}

