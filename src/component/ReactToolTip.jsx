// importing Reat tooltip library
import { Tooltip } from 'react-tooltip'

// importing styling using module
import styles from '../styles/App.module.css'

const ReactTooltip = () => {
    // Directional Array
    const directions = ['left', 'top', 'bottom', 'right'];
    return (

        // tooltip container
        <div className={styles.gridContainer}>
            {/* cotainer heading */}
            <h1 style={{ margin: 0 }}>React ToolTip</h1>
            {/* mapping over array */}
            {directions.map(direction =>
                // Individual button
                <button
                    id={direction}
                    className={styles.gridItems}
                    key={direction}>
                     Hover over this button to see &nbsp;
                        <span
                            id={`${direction}Color`}
                            className={styles.directions}>
                            {direction}
                        </span>  &nbsp; tooltip....
                    {/* tooltip associated with this direction */}
                    
                    <Tooltip
                        className= {direction}
                        anchorSelect= {`#${direction}`}
                        content={
                            `You are now viewing ${direction} tooltip.!!`
                        }
                        place={`${direction}`}
                    />
                </button>
            )}
      </div>
    );
}

// exporting ReactTooltip component
export default ReactTooltip;