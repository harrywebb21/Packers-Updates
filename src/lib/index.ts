// place files you want to import through the `$lib` alias in this folder.
export function convertDate(date: any) {
	const completeDate = new Date(date);
	return completeDate.toDateString();
}

export function convertTime(date: any) {
	const completeDate = new Date(date);
	if (completeDate.getHours() < 12)
		return completeDate.getHours() + ':' + completeDate.getMinutes() + ' AM';
	else return completeDate.getHours() + ':' + completeDate.getMinutes() + ' PM';
}
