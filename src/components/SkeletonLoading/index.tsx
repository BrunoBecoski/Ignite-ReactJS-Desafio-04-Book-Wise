import { Container } from './styles'

interface SkeletonLoadingProps {
  component: 'bookReview'
}

export function SkeletonLoading({ component }: SkeletonLoadingProps) {
  return <Container component={component} />
}
