type HeroProps = {
    title: React.ReactNode;
    description: string;
}

const Hero = ({ title, description }: HeroProps) => (
    <div>
        <h1 className="text-6xl font-bold tracking-tight mb-6">
            {title}
        </h1>

        <p className="text-2xl">
            {description}
        </p>
    </div>
)

export default Hero;