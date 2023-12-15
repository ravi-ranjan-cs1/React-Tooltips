// importing styling using module
import styles from '../styles/CustomTooltips.module.css'

const CustomTooltip = () => {
    return (

        // tooltip container
        <div className={styles.container}>
            {/* container heading */}
            <h1>Custom ToolTip</h1>

            {/* left tooltip */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltip */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.leftPosition}`}>
                        Viewing Custom <strong> Left</strong> tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='leftColor'>
                            left
                        </span>  &nbsp; Tooltip....
                </button>
            </div>

            {/* top tooltips */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltip */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.topPosition}`}>
                        Viewing Custom <strong> Top </strong> tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='topColor'>
                            top
                        </span>  &nbsp; Tooltip....
                </button>
            </div>

            {/* bottom tooltip */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltips */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.bottomPosition}`}>
                    Viewing Custom <strong> Bottom </strong> tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='bottomColor'>
                           botton
                        </span>  &nbsp; Tooltip....
                </button>
            </div>

            {/* right tooltip */}
            <div className={`${styles.directions} ${styles.show}`}>
                {/* tooltips */}
                <div className={styles.tooltip}>
                    {/* tooltip text */}
                    <span className={`${styles.tooltipText} ${styles.rightPosition}`}>
                        Viewing Custom  <strong> Right </strong> tooltip.!!!
                    </span>
                </div>
                {/* button to show tooltip */}
                <button className={styles.tipsBtn}>
                    Custom &nbsp;
                        <span id='rightColor'>
                            right
                        </span>  &nbsp; Tooltip....
                </button>
            </div>
      </div>
    );
}


export default CustomTooltip;