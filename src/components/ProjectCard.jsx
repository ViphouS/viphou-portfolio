import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function ProjectCard({ title, description, status, projectUrl }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{title}</CardTitle>
          <Badge variant={status === 'Live' ? 'default' : 'secondary'}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            View project
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
