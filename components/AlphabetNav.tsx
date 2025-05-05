"use client"

interface AlphabetNavProps {
	activeLetters: string[];
	onLetterClick: (letter: string) => void;
}

export const AlphabetNav = ({ activeLetters, onLetterClick }: AlphabetNavProps) => {
	const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

	return (
		<div className="sticky top-20 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-wrap justify-center gap-1 p-4 border-b">
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