export function Tag({ name }: {name: string}) {
	return (
		<div className="px-2 py-px border-[1px] border-dark-jungle-green rounded-sm text-black bg-white text-center text-xs">
			<p>{name}</p>
		</div>
	);
}