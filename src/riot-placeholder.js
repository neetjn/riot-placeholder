import Generator from 'foobar-ipsum'
import Tag from './riot-placeholder.tag'

/**
 * Placeholder tag and text generator mixin.
 * @param {riot} instance - Riot instance to transform.
 */
export default function Placeholder(instance) {
  instance.mixin({ placeholder: new Generator() })
  instance.tag('ph', false, false, false, Tag)
}
