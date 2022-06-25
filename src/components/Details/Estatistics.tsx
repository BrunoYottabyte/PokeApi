import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import styles from './styles.module.scss';

interface EstatisticsProps{
    caracteristics?: [];
}

export function Estatistics({caracteristics}:EstatisticsProps){
    return(
        <>
            <h1>Estatistícas</h1>
                            <div className={styles.features}>
                                {caracteristics?.possible_values?.length > 0 && caracteristics !== undefined ? caracteristics?.possible_values?.map((resp, i) => {
                                    const list = ['HP', 'ATK','DEF','S.ATK','S.DEF', 'SPD']
                                    return(
                                        <div className={styles.group_features} key={i}>
                                            <span className={styles.attr}>{list[i]}</span>
                                            <div className={styles.bar}>
                                                <div className={styles.progress}
                                                    style={{width: `${resp}%`}}
                                                ></div>
                                            </div>
                                            <span className={styles.score}>{resp}</span>
                                        </div>
                                    )
                                }) :  (
                                    <div className={styles.not_found}>
                                            <p>Ainda não temos as estatísticas desse pokemón, mas estamos trabalhando nisso! <BsEmojiSmileUpsideDown /> </p>
                                    </div>
                                )}
            </div>
        </>
    )
}