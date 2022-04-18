import {CustomLink} from "../features/CustomLink";

export const Navigation = () => {
    return (
        <>
            <CustomLink to='/'>
                Input
            </CustomLink>
            <CustomLink to='/lists'>
                Lists
            </CustomLink>
            <CustomLink to='/dom'>
                Dom
            </CustomLink>
        </>
    )
}
