import React from 'react'
import * as Styles from '../styles'

function Tech({color}){
    return (
        <Styles.Page color={color}>
        <Styles.Container>
        <Styles.Title>
            En <strong>Construcción</strong>
        </Styles.Title>

        <Styles.Description>
            {/* A React component that makes it easy to use the page transitions from
            the{' '}
            <a
            href="https://tympanus.net/Development/PageTransitions/"
            target="_blank"
            rel="nofollow">
            Codedrops Page Transitions Demo
            </a> */}

            Proximamente
        </Styles.Description>

        {/* <Styles.Github>
            View the usage instructions and source code on{' '}
            <a
            href="https://github.com/Steveeeie/react-page-transition"
            target="_blank"
            rel="nofollow">
            Github
            </a>
        </Styles.Github> */}

        {/* <Styles.Settings>
            <Styles.Field fullWidth>
            <Styles.Label>Preset: </Styles.Label>
            <Styles.Select value={preset} onChange={handlePresetChange}>
                {Object.keys(presets).map(key => (
                <option key={key} value={key}>
                    {key}
                </option>
                ))}
            </Styles.Select>
            </Styles.Field>

            <Styles.Field>
            <Styles.Label>Enter Override: </Styles.Label>
            <Styles.Select
                value={enterAnimation}
                onChange={handleEnterAnimationChange}>
                <option value="">None</option>
                {Object.keys(animations).map(key => (
                <option key={key} value={key}>
                    {key}
                </option>
                ))}
            </Styles.Select>
            </Styles.Field>

            <Styles.Field>
            <Styles.Label>Exit Override: </Styles.Label>
            <Styles.Select
                value={exitAnimation}
                onChange={handleExitAnimationChange}>
                <option value="">None</option>
                {Object.keys(animations).map(key => (
                <option key={key} value={key}>
                    {key}
                </option>
                ))}
            </Styles.Select>
            </Styles.Field>
        </Styles.Settings> */}
        </Styles.Container>
    </Styles.Page>
    )
}

export default Tech