import React from 'react'

import * as Styles from '../styles'

function Home({color}){
    return (
        <Styles.Page color={color}>
        <Styles.Container>
        <Styles.Title>
            Luis Fernando <strong>Betancourt Utrera </strong>
        </Styles.Title>

        <Styles.Description>
            
            Full-Stack Developer{' '}
            <a
            href="https://www.linkedin.com/in/unfernandito/"
            target="_blank"
            rel="nofollow">
            CTO de WeHaus
            </a>
        </Styles.Description>

        <Styles.Github>
            Visita mi perfil de {' '}
            <a
            href="https://github.com/unfernandito/"
            target="_blank"
            rel="nofollow">
            Github 🐈 
            </a>
        </Styles.Github>

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

export default Home