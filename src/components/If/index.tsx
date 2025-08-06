import type { IfProps } from './types'

function If(props: IfProps) {

	if (!props.condition) {
		return null
	}

	return props.children
}

export default If

