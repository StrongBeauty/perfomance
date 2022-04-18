import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";
import s from './CustomLink.module.css';

export const CustomLink = ({children, to, ...props}: LinkProps) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({path: resolved.pathname, end: true});

    return (
        <div className={s.item}>
            <Link
                style={{color: match ? 'black' : 'blue'}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
