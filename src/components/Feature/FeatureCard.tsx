import type {FC} from 'react';
interface FeatureCardProps {
    icon: any;
    title: string;
    description: string;
}
const FeatureCard: FC<FeatureCardProps> = ({icon, title, description}) => {
    return(
        <div>
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default FeatureCard;