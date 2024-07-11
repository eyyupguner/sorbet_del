export default {

	Belek () {
		// Assuming `Query1.data` contains your dataset
		const today = moment().startOf('day'); // Start of today
		const yesterday = moment(today).subtract(1, 'day').startOf('day'); // Start of yesterday

		console.log('Today:', today.format());
		console.log('Yesterday:', yesterday.format());

		const todayData = dataHourBelek.data
			.filter(obj => {
				const objDate = moment(obj.Zaman);
				return obj.TutarPPax !== null && objDate.isSame(today, 'day');
			})
			.map(obj => ({ 'x': obj.Zaman, 'y': obj.TutarPPax.toFixed(2) }));

		const yesterdayData = dataHourBelek.data
			.filter(obj => {
				const objDate = moment(obj.Zaman);
				return obj.TutarPPax !== null && objDate.isSame(yesterday, 'day');
			})
			.map(obj => ({ 'x': obj.Zaman, 'y': obj.TutarPPax.toFixed(2) }));

		// Prepare data for ECharts
		const chartData = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'line'
				}
			},
			legend: {
				data: ['Dün', 'Bugün']
			},
			xAxis: {
				type: 'category',
				data: todayData.map(item => item.x) // Assuming both days have similar x-axis data
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'Bugün',
					type: 'line',
					data: todayData.map(item => item.y),
					smooth: true
				},
				{
					name: 'Dün',
					type: 'line',
					data: yesterdayData.map(item => item.y),
					smooth: true
				}
			]
		};

		// Log the final chart data to see the output
		console.log('Chart Data:', chartData);

		// Return the chart data to be used in your ECharts configuration
		return chartData;
	},
Tunek () {
		// Assuming `Query1.data` contains your dataset
		const today = moment().startOf('day'); // Start of today
		const yesterday = moment(today).subtract(1, 'day').startOf('day'); // Start of yesterday

		console.log('Today:', today.format());
		console.log('Yesterday:', yesterday.format());

		const todayData = dataHourTunek.data
			.filter(obj => {
				const objDate = moment(obj.Zaman);
				return obj.TutarPPax !== null && objDate.isSame(today, 'day');
			})
			.map(obj => ({ 'x': obj.Zaman, 'y': obj.TutarPPax.toFixed(2) }));

		const yesterdayData = dataHourTunek.data
			.filter(obj => {
				const objDate = moment(obj.Zaman);
				return obj.TutarPPax !== null && objDate.isSame(yesterday, 'day');
			})
			.map(obj => ({ 'x': obj.Zaman, 'y': obj.TutarPPax.toFixed(2) }));

		// Prepare data for ECharts
		const chartData = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'line'
				}
			},
			legend: {
				data: ['Dün', 'Bugün']
			},
			xAxis: {
				type: 'category',
				data: todayData.map(item => item.x) // Assuming both days have similar x-axis data
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'Bugün',
					type: 'line',
					data: todayData.map(item => item.y),
					smooth: true
				},
				{
					name: 'Dün',
					type: 'line',
					data: yesterdayData.map(item => item.y),
					smooth: true
				}
			]
		};

		// Log the final chart data to see the output
		console.log('Chart Data:', chartData);

		// Return the chart data to be used in your ECharts configuration
		return chartData;
	}
}

