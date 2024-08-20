import { Partners } from "@/components/Partners";

const colors = [
  { name: '--border', value: 'hsl(var(--border))' },
  { name: '--input', value: 'hsl(var(--input))' },
  { name: '--ring', value: 'hsl(var(--ring))' },
  { name: '--background', value: 'hsl(var(--background))' },
  { name: '--foreground', value: 'hsl(var(--foreground))' },
  { name: '--primary', value: 'hsl(var(--primary))' },
  { name: '--primary-foreground', value: 'hsl(var(--primary-foreground))' },
  { name: '--secondary', value: 'hsl(var(--secondary))' },
  { name: '--secondary-foreground', value: 'hsl(var(--secondary-foreground))' },
  { name: '--destructive', value: 'hsl(var(--destructive))' },
  { name: '--destructive-foreground', value: 'hsl(var(--destructive-foreground))' },
  { name: '--muted', value: 'hsl(var(--muted))' },
  { name: '--muted-foreground', value: 'hsl(var(--muted-foreground))' },
  { name: '--accent', value: 'hsl(var(--accent))' },
  { name: '--accent-foreground', value: 'hsl(var(--accent-foreground))' },
  { name: '--popover', value: 'hsl(var(--popover))' },
  { name: '--popover-foreground', value: 'hsl(var(--popover-foreground))' },
  { name: '--card', value: 'hsl(var(--card))' },
  { name: '--card-foreground', value: 'hsl(var(--card-foreground))' },
];

export default function Home() {
  return (
    <>
      <section style={{ backgroundColor: '#FFFFF0', padding: '20px' }}>
        <h2>Color Palette</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colors.map(color => (
            <div key={color.name} style={{ margin: '10px', textAlign: 'center' }}>
              <div style={{
                backgroundColor: color.value,
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                border: '1px solid #000'
              }}></div>
              <p className="black">{color.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Partners />
      <a className='flex justify-center text-xl' href='https://sacramentohistory.info/'>Sacramento History Info</a>
    </>
  );
}