import { InputProps } from '../../types'
import styles from "./index.module.css";

const Input = ({ label, placeholder, type, checkboxMessage, select, selectOptions, icon, style }: InputProps) => {
  return (
    <section className={styles.container}>
        <div className={styles.label}>{label}</div>

        <div>
            {select ? 
                <div className={styles.select}>
                    <select style={style}>{selectOptions}</select>
                </div>
                :
                <div className={styles.input_container}>
                    <input 
                        style={style}
                        className={`
                            ${type === "text" && styles.text}
                            ${type === "checkbox" && styles.checkbox}
                        `} 
                        type={type} 
                        placeholder={type==="text" ? placeholder : ""} 
                    />
                    {type === "checkbox" &&
                        <div className={styles.message}>{checkboxMessage}</div>
                    }
                    {icon && <img src={icon} alt="" />}
                </div>
            }
        </div>
    </section>
  )
}

export default Input
