import React from 'react'
import styles from '../styles/AdvancedSettings.module.css'

const AdvancedSettings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <h5 className={styles.head}>Input options</h5>
        <div className={styles.check}>
          <div className={styles.checktype}>
            <input type="checkbox" name="" id="" />
            <div className={styles.typing}>
              <span>When typing code with "", should send the message </span>
              <div className={styles.typingticket}>
                With this ticket, use
                <button className={styles.btn}>Shift</button> to send
              </div>
            </div>
          </div>
          <div className={styles.checkformat}>
            <input type="checkbox" name="" id="" />
            <div className={styles.format}>
              <span> Format messages with markup</span>
              The text formatting toolbar won't show in the composer
            </div>
          </div>
        </div>
        <p className={styles.headpress}>When writing a message, press </p>
        <div className={styles.radio}>
          <div className={styles.radiosend}>
            <input type="radio" name="" id="" />
            <div className={styles.send}>Send the message</div>
          </div>
          <div className={styles.radiostart}>
            <input type="radio" name="" id="" />
            <div className={styles.start}>
              Start a new line (use
              <button className={styles.btn}>Ctrl</button>
              <button className={styles.btn}>Enter</button> to send )
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.search}>
        <h5 className={styles.head}>Search Options</h5>
        <div className="check">
          <div className={styles.checktype}>
            <input type="checkbox" name="" id="" />
            <div className={styles.behaviour}>
              <span>
                <button className={styles.btn}>Ctrl</button>
                <button className={styles.btn}>F</button>
                Starts a Zurichat chat
              </span>
              Overrides normal behaviour in search behaviour
            </div>
          </div>
          <div className={styles.checkformat}>
            <input type="checkbox" name="" id="" />
            <div className={styles.browser}>
              <span>
                <button className={styles.btn}>Ctrl</button>
                <button className={styles.btn}>K</button>
                Starts the quick switcher
              </span>
              Overrides normal behaviour in some browsers
            </div>
          </div>
        </div>
        <h5 className={styles.head}>
          {' '}
          Exclude these channels from search results:
        </h5>
        <div className={styles.barcontainer}>
          <div className={styles.bar}>
            <input
              type="text"
              className={styles.bartype}
              placeholder="Type a channel name..."
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.options}>
        <h5 className={styles.head}>Other Options</h5>
        <div className={styles.check}>
          <div className={styles.checkkeys}>
            <input type="checkbox" name="" id="" />
            <div className={styles.keys}>
              <button className={styles.btn}>Page up</button>,
              <button className={styles.btn}>Page Down</button>,
              <button className={styles.btn}>Home</button> and
              <button className={styles.btn}>End</button>
              keys always scroll messages
            </div>
          </div>
          <div className={styles.ask}>
            <input type="checkbox" name="" id="" />
            <p>
              Ask if I want to toggle my away status when I log in after having
              set myself away
            </p>
          </div>
          <div className={styles.survey}>
            <input type="checkbox" name="" id="" />
            <p>
              <span>Send me occasional survey via Zurichat bot</span> We're
              working to make Zurichat better. We'd always love to hear your
              thoughts
            </p>
          </div>
          <div className={styles.warn}>
            <input type="checkbox" name="" id="" />
            <p>Warn me about potential malicious links</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSettings
