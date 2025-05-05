"use client"

interface AlphabetNavProps {
	activeLetters: string[];
	onLetterClick: (letter: string) => void;
}

export const AlphabetNav = ({ activeLetters, onLetterClick }: AlphabetNavProps) => {
	const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

	return (
		<div className="flex flex-wrap gap-x-4 gap-y-1 max-h-[360px] content-start w-[96px]">
			{alphabet.map((letter) => (
				<button
					key={letter}
					onClick={() => onLetterClick(letter)}
					className={`w-8 h-8 flex items-center justify-center rounded-full 
            ${activeLetters.includes(letter)
							? 'bg-primary text-primary-foreground hover:bg-primary/90'
							: 'text-muted-foreground bg-muted cursor-not-allowed'
						}`}
					disabled={!activeLetters.includes(letter)}
				>
					{letter}
				</button>
			))}
		</div>
	);
}