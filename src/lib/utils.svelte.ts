export class Timer {
	count = $state(0)
	interval: NodeJS.Timeout | number  = 0

	constructor() {
		$effect(() => {
			return () => clearInterval(this.interval)
		})
	}
	increment(interval: number = 1) {
		this.interval = setInterval(() => this.count++, interval * 1000)
	}

	decrement(interval: number = 1) {
		this.interval = setInterval(() => this.count--, interval * 1000)
	}
}
