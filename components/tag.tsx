export function Tag({ name }: {name: string}) {
	return (
		<div className="px-4 py-1 border-[1px] border-black rounded-md text-black bg-white text-center text-sm">
			<p>{name}</p>
		</div>
	);
}