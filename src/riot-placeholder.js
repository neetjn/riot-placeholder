import Generator from 'foobar-ipsum'
import Component from './riot-placeholder.tag'

const generator = new Generator()

/**
 * Placeholder tag and text generator mixin.
 * @param {riot.install} install - Riot plugin installer.
 * @param {riot.component} component - Riot component reference.
 */
export default function Placeholder(install, component) {
  installer(component => (component.placeholder = generator))
  component('ph', false, false, false, Tag)
}
