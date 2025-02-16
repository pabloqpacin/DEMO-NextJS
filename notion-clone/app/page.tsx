import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    // <p className="text-red-500 font-bold">Hello Notion Clone</p>
    <div>
      <Button>
        Click me!
      </Button>
      <Button variant="destructive">
        Leave me!
      </Button>
      <Button variant="outline">
        It's me!
      </Button>
      <Button variant="secondary">
        It's not!
      </Button>
      <Button variant="purple">
        Aye!
      </Button>
      <Button className="text-white bg-emerald-500">
        Aye!
      </Button>
    </div>
  );
}
