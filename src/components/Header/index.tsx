
import { useRouter } from 'next/router';
import { ActiveLink } from './ActiveLink';
import styles from './styles.module.scss';

interface HeaderProps{
    total:number;
}

export function Header({total}: HeaderProps){
    const router = useRouter();
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="/images/logo_small.svg" alt="logo" onClick={() => router.push('/')}/>
                <nav>
                        <ActiveLink activeClassName={styles.active} href='/'>
                            <a>Favoritos {total > 0 && <span className={styles.total_favorite}>{total}</span>}</a>
                        </ActiveLink>
                        <ActiveLink activeClassName={styles.active} href='/search'>
                            <a>Procurar</a>
                        </ActiveLink>
                        <ActiveLink activeClassName={styles.active} href="/all">
                            <a>Ver todos</a>
                        </ActiveLink>
                     
                </nav>
            </div>
        </div>
    )
}